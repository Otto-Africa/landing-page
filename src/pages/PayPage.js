import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useParams, useSearchParams } from "react-router-dom";
import SEO from "../components/SEO";
import OttoIcon from "../components/OttoIcon";
import {
  attemptOpenCustomerApp,
  buildPayDeepLink,
  getDeviceOS,
  getStoreUrlForOS,
  isMobileDevice,
  redirectToStoreForDevice,
} from "../utils/openCustomerApp";
import {
  CUSTOMER_ANDROID_APP_URL,
  CUSTOMER_IOS_APP_URL,
} from "../utils/customerAppStoreUrls";
import {
  cancelDirectDebit,
  detectGhanaNetwork,
  fetchCollectSummary,
  fetchDirectDebitStatus,
  GH_NETWORKS,
  initiateDirectDebit,
  maskPhone,
  newIdempotencyKey,
} from "../utils/collectDirectDebitApi";
import "./GiftCardShare.css";

const POLL_MS = 4000;
const POLL_MAX = 30;

/**
 * Pay Page.
 * Route-level components compose shared UI primitives so merchant workflows stay consistent across the portal.
 */
const PayPage = () => {
  const { qrId } = useParams();
  const [searchParams] = useSearchParams();
  const amount = searchParams.get("amount") || "";
  const collectId = searchParams.get("c") || "";

  const [phase, setPhase] = useState(collectId ? "web-pay" : "opening");
  const cleanupRef = useRef(null);
  const pollRef = useRef(null);

  const [summary, setSummary] = useState(null);
  const [summaryError, setSummaryError] = useState("");
  const [phone, setPhone] = useState("");
  const [network, setNetwork] = useState("");
  const [payPhase, setPayPhase] = useState("entry");
  const [debitRequestId, setDebitRequestId] = useState("");
  const [phoneMasked, setPhoneMasked] = useState("");
  const [payError, setPayError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const idempotencyRef = useRef("");

  const deviceOS = useMemo(() => getDeviceOS(), []);
  const isMobile = isMobileDevice();

  const deepLink = useMemo(
    () => (qrId ? buildPayDeepLink(qrId, amount, collectId) : ""),
    [qrId, amount, collectId],
  );

  const storeUrl = getStoreUrlForOS(deviceOS);

  const amountMinor =
    summary?.post_discount_amount_minor ?? summary?.amount_minor;
  const amountDisplay = amountMinor
    ? `GHS ${(Number(amountMinor) / 100).toLocaleString("en-US", {
        minimumFractionDigits: 2,
      })}`
    : amount
      ? `GHS ${Number(amount).toLocaleString("en-US", { minimumFractionDigits: 2 })}`
      : null;

  useEffect(() => {
    if (!collectId) return undefined;
    let cancelled = false;
    (async () => {
      try {
        const data = await fetchCollectSummary(collectId);
        if (!cancelled) {
          setSummary(data);
          if (data.status && data.status !== "awaiting_payment") {
            setSummaryError(
              "This payment has already been completed or closed.",
            );
          }
        }
      } catch (err) {
        if (!cancelled) {
          setSummaryError(
            err instanceof Error
              ? err.message
              : "Could not load payment details",
          );
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [collectId]);

  useEffect(() => {
    if (collectId) return undefined;
    if (!isMobile || !qrId || !deepLink) {
      setPhase("desktop");
      return undefined;
    }

    cleanupRef.current = attemptOpenCustomerApp({
      deepLink,
      onAppOpened: () => setPhase("opening"),
      onFallback: () => {
        setPhase("store");
        window.setTimeout(() => redirectToStoreForDevice(), 1200);
      },
    });

    return () => cleanupRef.current?.();
  }, [collectId, deepLink, isMobile, qrId]);

  useEffect(() => {
    return () => {
      if (pollRef.current) clearInterval(pollRef.current);
    };
  }, []);

  const stopPolling = useCallback(() => {
    if (pollRef.current) {
      clearInterval(pollRef.current);
      pollRef.current = null;
    }
  }, []);

  const startPolling = useCallback(
    (requestId) => {
      stopPolling();
      let attempts = 0;
      pollRef.current = setInterval(async () => {
        attempts += 1;
        if (attempts > POLL_MAX) {
          stopPolling();
          setPayPhase("failed");
          setPayError(
            "We did not receive approval in time. You can try again when ready.",
          );
          return;
        }
        try {
          const status = await fetchDirectDebitStatus(collectId, requestId);
          if (status.status === "approved") {
            stopPolling();
            setPayPhase("success");
          } else if (
            status.status === "declined" ||
            status.status === "failed"
          ) {
            stopPolling();
            setPayPhase("failed");
            setPayError(
              status.reason || "Payment was not approved. Please try again.",
            );
          } else if (status.status === "expired") {
            stopPolling();
            setPayPhase("failed");
            setPayError("This payment request expired. Please try again.");
          }
        } catch (_) {
          // keep polling
        }
      }, POLL_MS);
    },
    [collectId, stopPolling],
  );

  const onPhoneChange = (value) => {
    setPhone(value);
    const detected = detectGhanaNetwork(value);
    if (detected) setNetwork(detected);
  };

  const networkLabel =
    GH_NETWORKS.find((n) => n.code === network)?.label || network;

  const handleEntryContinue = (e) => {
    e.preventDefault();
    if (!phone.trim() || !network) return;
    setPayError("");
    setPayPhase("confirm");
  };

  const handleConfirmPay = async () => {
    if (!phone.trim() || !network) return;
    setSubmitting(true);
    setPayError("");
    if (!idempotencyRef.current) {
      idempotencyRef.current = newIdempotencyKey();
    }
    try {
      const result = await initiateDirectDebit(
        collectId,
        phone.trim(),
        network,
        idempotencyRef.current,
      );
      setDebitRequestId(result.debitRequestId);
      setPhoneMasked(result.phoneMasked || maskPhone(phone));
      setPayPhase("waiting");
      startPolling(result.debitRequestId);
    } catch (err) {
      setPayError(
        err instanceof Error
          ? err.message
          : "We could not start the payment. Check your number and try again.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  const handleCancelWaiting = async () => {
    stopPolling();
    if (debitRequestId) {
      try {
        await cancelDirectDebit(collectId, debitRequestId);
      } catch (_) {}
    }
    setPayPhase("entry");
    idempotencyRef.current = newIdempotencyKey();
  };

  const retryOpenApp = () => {
    if (!deepLink) return;
    cleanupRef.current?.();
    setPhase("opening");
    cleanupRef.current = attemptOpenCustomerApp({
      deepLink,
      onAppOpened: () => setPhase("opening"),
      onFallback: () => {
        setPhase("store");
        window.setTimeout(() => redirectToStoreForDevice(), 1200);
      },
    });
  };

  const merchantName = summary?.merchant_name || "Merchant";

  if (collectId && phase === "web-pay") {
    return (
      <>
        <SEO
          title={`Pay ${merchantName} – Otto Africa`}
          description="Pay with mobile money on Otto."
          keywords="pay, Otto, mobile money, Ghana"
          url={`https://ottoafrica.com/pay/${qrId || ""}?c=${collectId}`}
        />
        <div className="gift-card-share-container">
          <div className="gift-card-share-content pay-web-form">
            <img
              src="/img/logos/Favicon - Black@4x-8.png"
              alt="Otto"
              className="gift-card-share-logo"
            />
            <h1>Pay {merchantName}</h1>
            {amountDisplay && (
              <p className="gift-card-sender">Amount: {amountDisplay}</p>
            )}
            {summaryError && (
              <p className="subhead pay-error">{summaryError}</p>
            )}

            {!summaryError && payPhase === "entry" && (
              <form className="pay-momo-form" onSubmit={handleEntryContinue}>
                <p className="subhead">
                  Pay with mobile money — approve the charge when your network
                  sends the prompt to your phone.
                </p>
                <label className="pay-field-label" htmlFor="pay-phone">
                  Mobile money number
                </label>
                <input
                  id="pay-phone"
                  className="pay-field-input"
                  type="tel"
                  inputMode="tel"
                  placeholder="e.g. 024 000 0000"
                  value={phone}
                  onChange={(ev) => onPhoneChange(ev.target.value)}
                  required
                />
                <p className="pay-field-label">Network</p>
                <div className="pay-network-row">
                  {GH_NETWORKS.map((n) => (
                    <button
                      key={n.code}
                      type="button"
                      className={`pay-network-chip${network === n.code ? " selected" : ""}`}
                      onClick={() => setNetwork(n.code)}
                    >
                      {n.label}
                    </button>
                  ))}
                </div>
                {payError && <p className="pay-error">{payError}</p>}
                <button
                  type="submit"
                  className="download-btn-primary pay-submit-btn"
                  disabled={!phone.trim() || !network}
                >
                  Continue
                </button>
              </form>
            )}

            {!summaryError && payPhase === "confirm" && (
              <div className="pay-confirm">
                <p className="subhead">
                  Check the details before we send the prompt to your phone.
                </p>
                <div className="pay-confirm-rows">
                  <div className="pay-confirm-row">
                    <span>Merchant</span>
                    <span>{merchantName}</span>
                  </div>
                  {amountDisplay && (
                    <div className="pay-confirm-row">
                      <span>Amount</span>
                      <span>{amountDisplay}</span>
                    </div>
                  )}
                  <div className="pay-confirm-row">
                    <span>Network</span>
                    <span>{networkLabel}</span>
                  </div>
                  <div className="pay-confirm-row">
                    <span>Phone</span>
                    <span>{maskPhone(phone)}</span>
                  </div>
                </div>
                <p className="pay-confirm-hint">
                  A payment prompt will be sent to this number. Approve it on
                  your phone to complete the payment.
                </p>
                {payError && <p className="pay-error">{payError}</p>}
                <button
                  type="button"
                  className="download-btn-primary pay-submit-btn"
                  disabled={submitting}
                  onClick={handleConfirmPay}
                >
                  {submitting ? "Starting…" : "Send payment prompt"}
                </button>
                <button
                  type="button"
                  className="gift-card-try-app-btn pay-confirm-back"
                  disabled={submitting}
                  onClick={() => {
                    setPayPhase("entry");
                    setPayError("");
                  }}
                >
                  Back
                </button>
              </div>
            )}

            {payPhase === "waiting" && (
              <div className="pay-waiting">
                <div className="loading-spinner" />
                <h2>Check your phone</h2>
                <p className="subhead">
                  Approve {amountDisplay} to {merchantName} on your phone.
                </p>
                {phoneMasked && (
                  <p className="gift-card-sender">{phoneMasked}</p>
                )}
                {debitRequestId && (
                  <p className="gift-card-sender">
                    Request ID: <code>{debitRequestId}</code>
                  </p>
                )}
                {debitRequestId && (
                  <p className="subhead">
                    Local QA: open{" "}
                    <a
                      href={`/test-bank?debitRequestId=${encodeURIComponent(debitRequestId)}`}
                    >
                      /test-bank
                    </a>{" "}
                    and approve with PIN 1234.
                  </p>
                )}
                <button
                  type="button"
                  className="gift-card-try-app-btn"
                  onClick={handleCancelWaiting}
                >
                  Cancel payment
                </button>
              </div>
            )}

            {payPhase === "success" && (
              <div className="pay-result success">
                <div className="gift-card-celebrate">✓</div>
                <h2>Payment complete</h2>
                <p className="subhead">You paid {merchantName} successfully.</p>
              </div>
            )}

            {payPhase === "failed" && (
              <div className="pay-result failed">
                <h2>Payment not completed</h2>
                <p className="subhead pay-error">{payError}</p>
                <button
                  type="button"
                  className="download-btn-primary pay-submit-btn"
                  onClick={() => {
                    setPayPhase("entry");
                    setPayError("");
                    idempotencyRef.current = newIdempotencyKey();
                  }}
                >
                  Try again
                </button>
              </div>
            )}

            {deepLink && (
              <div className="download-section pay-secondary-cta">
                <button
                  type="button"
                  className="gift-card-try-app-btn"
                  onClick={retryOpenApp}
                >
                  Open in Otto app
                </button>
              </div>
            )}
          </div>
        </div>
      </>
    );
  }

  if (phase === "opening" && isMobile && qrId) {
    return (
      <div className="gift-card-share-container">
        <div className="gift-card-share-content">
          <div className="gift-card-celebrate">💳</div>
          <div className="loading-spinner" />
          <h2>Opening Otto…</h2>
          <p>
            {amountDisplay
              ? `Taking you to pay ${amountDisplay}`
              : "Taking you to the app to complete your payment"}
          </p>
        </div>
      </div>
    );
  }

  if (phase === "store" && isMobile) {
    return (
      <>
        <SEO
          title="Pay with Otto – Otto Africa"
          description="Download Otto to complete your payment."
          keywords="pay, Otto, payment, Ghana"
          url={`https://ottoafrica.com/pay/${qrId || ""}${amount ? `?amount=${amount}` : ""}`}
        />
        <div className="gift-card-share-container">
          <div className="gift-card-share-content">
            <img
              src="/img/logos/Favicon - Black@4x-8.png"
              alt="Otto"
              className="gift-card-share-logo"
            />
            <h1>Get Otto to pay</h1>
            {amountDisplay && (
              <p className="gift-card-sender">Amount: {amountDisplay}</p>
            )}
            <p className="subhead">
              Otto isn&apos;t installed on this device. We&apos;re sending you
              to the {deviceOS === "ios" ? "App Store" : "Google Play"} to
              download it — then open this link again to pay.
            </p>
            <div className="download-section">
              <div className="download-primary">
                <a
                  href={storeUrl || CUSTOMER_IOS_APP_URL}
                  className="download-btn-primary"
                >
                  {deviceOS === "ios"
                    ? "Continue to App Store"
                    : "Continue to Google Play"}
                </a>
              </div>
              <button
                type="button"
                className="gift-card-try-app-btn"
                onClick={retryOpenApp}
              >
                Already installed? Open Otto
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <SEO
        title="Pay with Otto – Otto Africa"
        description="Complete your payment in the Otto app. Download Otto to pay with gift cards, mobile money, and more."
        keywords="pay, Otto, payment, scan to pay"
        url={`https://ottoafrica.com/pay/${qrId || ""}${amount ? `?amount=${amount}` : ""}`}
      />
      <div className="gift-card-share-container">
        <div className="gift-card-share-content">
          <img
            src="/img/logos/Favicon - Black@4x-8.png"
            alt="Otto"
            className="gift-card-share-logo"
          />
          <h1>Pay with Otto</h1>
          <p className="gift-card-sender">
            {amountDisplay
              ? `Amount: ${amountDisplay}`
              : "Scan to pay this merchant"}
          </p>
          <p className="subhead">
            Open the Otto app on your phone to choose your payment method and
            complete the payment.
          </p>

          <div className="benefits benefits-with-icons">
            <div className="benefit-item">
              <span className="benefit-icon" aria-hidden>
                <OttoIcon name="credit-card-outline" size={20} />
              </span>
              <span>
                <strong>Gift cards, mobile money & more</strong> – Choose how
                you pay
              </span>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon" aria-hidden>
                <OttoIcon name="smartphone-outline" size={20} />
              </span>
              <span>
                <strong>Quick & secure</strong> – Pay in a few taps
              </span>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon" aria-hidden>
                <OttoIcon name="shield-outline" size={20} />
              </span>
              <span>
                <strong>Safe</strong> – Your details stay protected
              </span>
            </div>
          </div>

          <div className="download-section">
            <div className="download-primary">
              <a
                href={CUSTOMER_IOS_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="download-btn-secondary"
              >
                Download for iOS
              </a>
              <a
                href={CUSTOMER_ANDROID_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="download-btn-secondary"
              >
                Download for Android
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PayPage;
