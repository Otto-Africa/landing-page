import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SEO from "../components/SEO";
import OttoIcon from "../components/OttoIcon";
import { getApiUrl } from "../config/env";
import "./DemoBank.css";

const MOMO_NETWORKS = [
  { id: "mtn", label: "MTN MoMo", placeholder: "23324XXXXXXXX" },
  { id: "vodafone", label: "Vodafone Cash", placeholder: "23320XXXXXXXX" },
  { id: "airteltigo", label: "AirtelTigo Money", placeholder: "23327XXXXXXXX" },
];

/**
 * Demo Bank.
 * Route-level components compose shared UI primitives so merchant workflows stay consistent across the portal.
 */
const DemoBank = () => {
  const [searchParams] = useSearchParams();
  const [rail, setRail] = useState(() => {
    const initialRail = searchParams.get("rail");
    if (initialRail === "momo") return "momo";
    if (initialRail === "ussd") return "ussd";
    return "nuban";
  });
  const [momoNetwork, setMomoNetwork] = useState(
    searchParams.get("network") || "mtn",
  );
  const [accountNumber, setAccountNumber] = useState(
    searchParams.get("account") || "",
  );
  const [amountGhs, setAmountGhs] = useState(searchParams.get("amount") || "");
  const [narration, setNarration] = useState(
    searchParams.get("narration") || "",
  );
  const [lookup, setLookup] = useState(null);
  const [lookupError, setLookupError] = useState("");
  const [transferError, setTransferError] = useState("");
  const [transferResult, setTransferResult] = useState(null);
  const [isLookingUp, setIsLookingUp] = useState(false);
  const [isTransferring, setIsTransferring] = useState(false);
  const [debitRequestId, setDebitRequestId] = useState(
    searchParams.get("debitRequestId") || "",
  );
  const [approvalPin, setApprovalPin] = useState("1234");
  const [isApprovingDebit, setIsApprovingDebit] = useState(false);
  const [approvalError, setApprovalError] = useState("");
  const [approvalResult, setApprovalResult] = useState(null);

  const momoMeta = useMemo(
    () => MOMO_NETWORKS.find((n) => n.id === momoNetwork) ?? MOMO_NETWORKS[0],
    [momoNetwork],
  );

  const bankLabel = useMemo(
    () => (rail === "momo" ? momoMeta.label : "Otto Wallet Bank"),
    [rail, momoMeta.label],
  );

  const lookupAccount = useCallback(async () => {
    if (rail === "ussd") return;

    const normalized = accountNumber.replace(/\D/g, "");
    if (!normalized) {
      setLookup(null);
      setLookupError("");
      return;
    }

    setIsLookingUp(true);
    setLookupError("");
    try {
      const query = new URLSearchParams({
        account: normalized,
        rail,
      });
      if (rail === "momo") query.set("network", momoNetwork);

      const response = await fetch(
        `${getApiUrl("public/demo-bank/lookup")}?${query.toString()}`,
      );
      const payload = await response.json();
      if (!response.ok) {
        throw new Error(
          payload?.message ||
            "We couldn't find that account. Check the number and try again.",
        );
      }
      setLookup(payload.data);
      if (!amountGhs && payload.data?.amount_ghs) {
        setAmountGhs(payload.data.amount_ghs);
      }
    } catch (error) {
      setLookup(null);
      setLookupError(
        error.message ||
          "We couldn't find that account. Check the number and try again.",
      );
    } finally {
      setIsLookingUp(false);
    }
  }, [accountNumber, amountGhs, rail, momoNetwork]);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      lookupAccount();
    }, 400);
    return () => window.clearTimeout(timer);
  }, [lookupAccount]);

  const handleTransfer = async (event) => {
    event.preventDefault();
    setTransferError("");
    setTransferResult(null);
    setIsTransferring(true);

    try {
      const amountMinor = Math.round(Number(amountGhs) * 100);
      if (!amountMinor || amountMinor <= 0) {
        throw new Error("Enter an amount greater than zero.");
      }

      const response = await fetch(getApiUrl("public/demo-bank/transfer"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          account_number: accountNumber.replace(/\D/g, ""),
          amount_minor: amountMinor,
          narration: narration.trim() || undefined,
          rail,
          ...(rail === "momo" ? { momo_network: momoNetwork } : {}),
        }),
      });
      const payload = await response.json();
      if (!response.ok) {
        throw new Error(
          payload?.message || "Transfer didn't go through. Try again.",
        );
      }
      setTransferResult(payload.data);
      setAccountNumber("");
      setAmountGhs("");
      setNarration("");
      setLookup(null);
      setLookupError("");
    } catch (error) {
      setTransferError(
        error.message || "Transfer didn't go through. Try again.",
      );
    } finally {
      setIsTransferring(false);
    }
  };

  const handleDirectDebitApprove = async (event) => {
    event.preventDefault();
    setApprovalError("");
    setApprovalResult(null);

    if (!debitRequestId.trim()) {
      setApprovalError("Enter a debit request ID.");
      return;
    }

    setIsApprovingDebit(true);
    try {
      const response = await fetch(
        getApiUrl("public/demo-bank/direct-debit/approve"),
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            debit_request_id: debitRequestId.trim(),
            pin: approvalPin.trim(),
          }),
        },
      );
      const payload = await response.json();
      if (!response.ok) {
        throw new Error(
          payload?.message || "PIN push approval failed. Please try again.",
        );
      }
      setApprovalResult(payload.data);
      setDebitRequestId("");
    } catch (error) {
      setApprovalError(
        error.message || "PIN push approval failed. Please try again.",
      );
    } finally {
      setIsApprovingDebit(false);
    }
  };

  const clearTransferCompletion = useCallback(() => {
    setTransferResult(null);
    setTransferError("");
  }, []);

  const startNewPayment = useCallback(() => {
    clearTransferCompletion();
  }, [clearTransferCompletion]);

  const paymentStatus =
    lookup?.is_wallet_topup
      ? null
      : lookup?.status === "awaiting_payment"
        ? "Awaiting payment"
        : lookup?.status === "paid"
        ? "Paid"
        : lookup?.status;

  const canTransfer =
    lookup?.is_wallet_topup || lookup?.status === "awaiting_payment";

  const isPaymentClosed =
    Boolean(lookup) && !canTransfer && lookup?.status === "paid";

  const submitLabel = isTransferring
    ? "Sending"
    : isPaymentClosed
      ? "Payment closed"
      : "Send payment";

  return (
    <div className="demo-bank-page">
      <SEO
        title="Demo bank – Test payments (Ghana)"
        description="Test GHS credits into Otto Cash wallets in local, test, and staging."
        url="https://ottoafrica.com/demo-bank"
      />

      <div className="demo-bank-shell">
        <header className="demo-bank-header">
          <div className="demo-bank-brand">
            <OttoIcon
              name="home-outline"
              className="demo-bank-logo"
              size={24}
            />
            <div>
              <p className="demo-bank-kicker">Test environment · Ghana (GHS)</p>
              <h1>Demo bank</h1>
            </div>
          </div>
          <p className="demo-bank-subtitle">
            Send test credits into Otto Cash wallets (888… merchant, 999…
            customer). Settlements post to the Otto Cash ledger in real time.
          </p>
        </header>

        <main className="demo-bank-card">
          <div className="demo-bank-rail-toggle">
            <button
              type="button"
              className={rail === "nuban" ? "active" : ""}
              onClick={() => {
                setRail("nuban");
                startNewPayment();
              }}
            >
              Bank transfer
            </button>
            <button
              type="button"
              className={rail === "momo" ? "active" : ""}
              onClick={() => {
                setRail("momo");
                startNewPayment();
              }}
            >
              Mobile money
            </button>
            <button
              type="button"
              className={rail === "ussd" ? "active" : ""}
              onClick={() => {
                setRail("ussd");
                startNewPayment();
              }}
            >
              USSD / PIN push
            </button>
          </div>

          {rail === "ussd" ? (
            <section className="demo-bank-beneficiary">
              <p className="demo-bank-section-label">
                USSD / PIN push simulator
              </p>
              <h2>Approve direct debit (local only)</h2>
              <p className="demo-bank-meta">
                Use the debit request ID from <code>/pay/:qrId?c=...</code>{" "}
                and approve with PIN <code>1234</code>.
              </p>
              <form
                className="demo-bank-form"
                onSubmit={handleDirectDebitApprove}
              >
                <label>
                  Debit request ID
                  <input
                    type="text"
                    placeholder="ddr_..."
                    value={debitRequestId}
                    onChange={(event) =>
                      setDebitRequestId(event.target.value)
                    }
                    required
                  />
                </label>

                <label>
                  PIN
                  <input
                    type="password"
                    inputMode="numeric"
                    placeholder="1234"
                    value={approvalPin}
                    onChange={(event) => setApprovalPin(event.target.value)}
                    required
                  />
                </label>

                {approvalError && (
                  <p className="demo-bank-error">{approvalError}</p>
                )}
                {approvalResult && (
                  <div className="demo-bank-success">
                    Direct debit {approvalResult.debitRequestId} is{" "}
                    {approvalResult.status}.
                  </div>
                )}

                <button
                  type="submit"
                  className="demo-bank-submit"
                  disabled={isApprovingDebit}
                >
                  {isApprovingDebit ? "Approving" : "Approve PIN push"}
                </button>
              </form>
            </section>
          ) : (
            <>
              {lookup && (
                <section className="demo-bank-beneficiary">
                  <p className="demo-bank-section-label">
                    {lookup.is_wallet_topup ? "Top up" : "Pay to"}
                  </p>
                  <h2>{lookup.recipient_name || "Invoice recipient"}</h2>
                  {lookup.amount_ghs && (
                    <p className="demo-bank-amount">GHS {lookup.amount_ghs}</p>
                  )}
                  {lookup.is_wallet_topup && (
                    <p className="demo-bank-meta">
                      Otto wallet top-up · any amount
                    </p>
                  )}
                  {paymentStatus && (
                    <p className="demo-bank-meta">{paymentStatus}</p>
                  )}
                </section>
              )}

              {lookup?.status === "paid" && (
                <div className="demo-bank-success">
                  This invoice is already paid. Payment details are no
                  longer available.
                </div>
              )}

              {transferResult && (
                <div className="demo-bank-success demo-bank-success-banner">
                  {transferResult.deduplicated
                    ? `Already processed (same idempotency key) — no new credit. Reference ${transferResult.reference}.`
                    : `Payment sent. Reference ${transferResult.reference}`}
                  <button
                    type="button"
                    className="demo-bank-success-dismiss"
                    onClick={clearTransferCompletion}
                  >
                    Dismiss
                  </button>
                </div>
              )}

              <form
                className="demo-bank-form"
                onSubmit={handleTransfer}
                onChange={startNewPayment}
                onInvalid={startNewPayment}
              >
                {rail === "momo" ? (
                  <label>
                    Network
                    <select
                      value={momoNetwork}
                      onChange={(event) =>
                        setMomoNetwork(event.target.value)
                      }
                    >
                      {MOMO_NETWORKS.map((network) => (
                        <option key={network.id} value={network.id}>
                          {network.label}
                        </option>
                      ))}
                    </select>
                  </label>
                ) : (
                  <label>
                    Bank
                    <input type="text" value={bankLabel} readOnly />
                  </label>
                )}

                <label>
                  {rail === "momo" ? "MoMo number" : "Account number"}
                  <input
                    type="text"
                    inputMode="numeric"
                    placeholder={
                      rail === "momo"
                        ? momoMeta.placeholder
                        : "888XXXXXXX (merchant) or 999XXXXXXX (customer)"
                    }
                    value={accountNumber}
                    onChange={(event) => setAccountNumber(event.target.value)}
                    required
                  />
                </label>

                {isLookingUp && (
                  <p className="demo-bank-hint">Looking up account</p>
                )}
                {lookupError && (
                  <p className="demo-bank-error">{lookupError}</p>
                )}

                <label>
                  Amount
                  <input
                    type="number"
                    min="0.01"
                    step="0.01"
                    placeholder="0.00"
                    value={amountGhs}
                    onChange={(event) => setAmountGhs(event.target.value)}
                    required
                  />
                </label>

                <label>
                  Reference
                  <input
                    type="text"
                    placeholder="Payment for invoice"
                    value={narration}
                    onChange={(event) => setNarration(event.target.value)}
                  />
                </label>

                {transferError && (
                  <p className="demo-bank-error">{transferError}</p>
                )}

                <button
                  type="submit"
                  className="demo-bank-submit"
                  disabled={isTransferring || !canTransfer}
                >
                  {submitLabel}
                </button>
              </form>
            </>
          )}

          <p className="demo-bank-footnote">
            Available in local, test, and staging.{" "}
            <a href="/docs/testing#demo-bank">Read the testing guide</a> or{" "}
            <a href="/docs/webhooks">webhook docs</a>. Collect-in virtual
            accounts (<code>777</code>) are removed. Merchant Otto Cash uses{" "}
            <code>888</code>; customer Otto Cash uses <code>999</code>.
            MoMo test numbers use Ghana prefixes: MTN <code>23324…</code>,
            Vodafone <code>23320…</code>, AirtelTigo <code>23327…</code>,
            followed by the entity digit (<code>8</code> merchant wallet,{" "}
            <code>9</code> customer wallet).
          </p>
        </main>
      </div>
    </div>
  );
};

export default DemoBank;
