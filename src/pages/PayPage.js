import React, { useEffect, useState, useMemo } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { HiOutlineCreditCard, HiOutlineDeviceMobile, HiOutlineShieldCheck } from "react-icons/hi";
import SEO from "../components/SEO";
import "./GiftCardShare.css";

const IOS_APP_URL = "https://apps.apple.com/app/otto-customer/id123456789";
const ANDROID_APP_URL = "https://play.google.com/store/apps/details?id=com.otto.customer";

const getDeviceOS = () => {
  const ua = navigator.userAgent;
  if (/iPhone|iPad|iPod/i.test(ua)) return "ios";
  if (/Android/i.test(ua)) return "android";
  return "desktop";
};

const PayPage = () => {
  const { qrId } = useParams();
  const [searchParams] = useSearchParams();
  const amount = searchParams.get("amount") || "";

  const [isChecking, setIsChecking] = useState(true);
  const [showDownload, setShowDownload] = useState(false);

  const deviceOS = useMemo(getDeviceOS, []);
  const isMobile = deviceOS === "ios" || deviceOS === "android";

  const deepLink = useMemo(() => {
    const base = `ottocustomer://pay/${qrId || ""}`;
    return amount ? `${base}?amount=${encodeURIComponent(amount)}` : base;
  }, [qrId, amount]);

  useEffect(() => {
    if (isMobile && qrId) {
      window.location.href = deepLink;
      const timer = setTimeout(() => {
        setShowDownload(true);
        setIsChecking(false);
      }, 2000);
      return () => clearTimeout(timer);
    } else {
      setIsChecking(false);
      setShowDownload(true);
    }
  }, [deepLink, isMobile, qrId]);

  const tryOpenApp = () => {
    if (qrId) window.location.href = deepLink;
    setTimeout(() => setShowDownload(true), 2000);
  };

  const amountDisplay = amount ? `GHS ${Number(amount).toLocaleString("en-US", { minimumFractionDigits: 2 })}` : null;

  if (isChecking) {
    return (
      <div className="gift-card-share-container">
        <div className="gift-card-share-content">
          <div className="gift-card-celebrate">💳</div>
          <div className="loading-spinner"></div>
          <h2>Opening Otto...</h2>
          <p>Taking you to the app to complete your payment</p>
        </div>
      </div>
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
            Open the Otto app to choose your payment method and complete the payment.
          </p>

          <div className="benefits benefits-with-icons">
            <div className="benefit-item">
              <span className="benefit-icon" aria-hidden>
                <HiOutlineCreditCard size={20} />
              </span>
              <span><strong>Gift cards, mobile money & more</strong> – Choose how you pay</span>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon" aria-hidden>
                <HiOutlineDeviceMobile size={20} />
              </span>
              <span><strong>Quick & secure</strong> – Pay in a few taps</span>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon" aria-hidden>
                <HiOutlineShieldCheck size={20} />
              </span>
              <span><strong>Safe</strong> – Your details stay protected</span>
            </div>
          </div>

          {showDownload && (
            <div className="download-section">
              {isMobile && qrId && (
                <button
                  type="button"
                  className="gift-card-try-app-btn"
                  onClick={tryOpenApp}
                >
                  Already have Otto? Open app to pay
                </button>
              )}

              <div className="download-primary">
                {deviceOS === "ios" ? (
                  <a
                    href={IOS_APP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="download-btn-primary download-btn-ios"
                  >
                    <svg className="download-btn-icon" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    </svg>
                    Download Otto to pay
                  </a>
                ) : deviceOS === "android" ? (
                  <a
                    href={ANDROID_APP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="download-btn-primary download-btn-android"
                  >
                    <svg className="download-btn-icon" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.523 15.3414C17.5097 15.6825 17.4373 16.0226 17.3069 16.3516C17.1319 16.8066 16.8724 17.2216 16.547 17.5656C16.2216 17.9096 15.8395 18.1726 15.4209 18.3406C14.8839 18.5586 14.3059 18.6736 13.7159 18.6786C13.2269 18.6786 12.6819 18.5476 12.0999 18.2916C11.5119 18.0326 10.9609 17.7206 10.4649 17.3556C9.96887 16.9906 9.55887 16.5926 9.24687 16.1646C8.93287 15.7366 8.73187 15.2806 8.65087 14.8106C8.65087 14.6736 8.65087 14.5486 8.65087 14.4336L8.65087 9.56659C8.65087 9.45159 8.65087 9.32659 8.65087 9.18959C8.73187 8.71959 8.93287 8.26359 8.24687 7.83559C8.55887 7.40759 8.96887 7.00959 9.4649 6.64459C9.9609 6.27959 10.5119 5.96759 11.0999 5.70859C11.6819 5.45259 12.2269 5.32159 12.7159 5.32159C13.3059 5.32659 13.8839 5.44159 14.4209 5.65959C14.8395 5.82759 15.2216 6.09059 15.547 6.43459C15.8724 6.77859 16.1319 7.19359 16.3069 7.64859C16.4373 7.97759 16.5097 8.31759 16.523 8.65859L17.341 8.65859C16.971 8.65859 16.616 8.73159 16.289 8.87559C15.962 9.01959 15.67 9.22959 15.427 9.48959C15.184 9.74959 14.995 10.0506 14.871 10.3706C14.747 10.6906 14.69 11.0206 14.693 11.3526V13.6476C14.69 13.9796 14.747 14.3096 14.871 14.6296C14.995 14.9496 15.184 15.2506 15.427 15.5106C15.67 15.7706 15.962 15.9806 16.289 16.1246C16.616 16.2686 16.971 16.3416 17.341 16.3416L17.523 16.3416V15.3414Z" />
                    </svg>
                    Download Otto to pay
                  </a>
                ) : (
                  <>
                    <a
                      href={IOS_APP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="download-btn-secondary"
                    >
                      Download for iOS
                    </a>
                    <a
                      href={ANDROID_APP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="download-btn-secondary"
                    >
                      Download for Android
                    </a>
                  </>
                )}
              </div>

              {deviceOS === "ios" && (
                <a href={ANDROID_APP_URL} target="_blank" rel="noopener noreferrer" className="download-other-os">
                  Get it on Android
                </a>
              )}
              {deviceOS === "android" && (
                <a href={IOS_APP_URL} target="_blank" rel="noopener noreferrer" className="download-other-os">
                  Get it on iOS
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default PayPage;
