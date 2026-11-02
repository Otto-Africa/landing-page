import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SEO from "../components/SEO";
import { getApiUrl } from "../config/env";
import "./GiftCardShare.css";

/**
 * Investment certificate link: a fixed deposit someone booked at FCL in the
 * recipient's name. The preview shows who sent it and its term only; claiming
 * happens in the Scan app, with the account opened on the phone it was sent to.
 */
const STATE_COPY = {
  PAID: "Being booked with FCL",
  BOOKING: "Being booked with FCL",
  NEEDS_INFO: "Being booked with FCL",
  ACTIVE: "Active",
  MATURED: "Matured",
};

function friendlyDate(value) {
  if (!value) return null;
  const date = new Date(`${value}T00:00:00Z`);
  return Number.isNaN(date.getTime())
    ? null
    : date.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });
}

const InvestmentGiftReceive = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  const [isChecking, setIsChecking] = useState(!!token);
  const [showDownload, setShowDownload] = useState(false);
  const [gift, setGift] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!token) {
      setError("Invalid or missing link. Please use the link from your email or SMS.");
      setIsChecking(false);
      return;
    }

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      const deepLink = `scanafrica://investment-gift/receive?token=${encodeURIComponent(token)}`;
      window.location.href = deepLink;
      const t = setTimeout(() => {
        setShowDownload(true);
        setIsChecking(false);
      }, 2000);
      return () => clearTimeout(t);
    }

    setIsChecking(false);
  }, [token]);

  useEffect(() => {
    if (!token || isChecking) return;

    const fetchGift = async () => {
      try {
        const res = await fetch(getApiUrl(`investment-certificates/receive?token=${encodeURIComponent(token)}`));
        const json = await res.json();
        // Backend now returns { status, message, data, errors?, code? }.
        // Use HTTP status as the success signal and tolerate the legacy
        // `success` flag if a proxy/CDN ever rewraps the body.
        if (res.ok && json?.error !== true && json?.data) {
          setGift(json.data);
        } else {
          setError(json?.message || "Could not load this gift. Check the link from your SMS or email.");
        }
      } catch (e) {
        setError("Could not load this gift. Please check your connection and try again.");
      }
    };

    fetchGift();
  }, [token, isChecking]);

  const handlePlayStore = () => {
    window.open("https://play.google.com/store/apps/details?id=com.scan.customer", "_blank");
  };

  const handleAppStore = () => {
    window.open("https://apps.apple.com/app/scan/id123456789", "_blank");
  };

  const tryOpenApp = () => {
    if (!token) return;
    const deepLink = `scanafrica://investment-gift/receive?token=${encodeURIComponent(token)}`;
    window.location.href = deepLink;
    setTimeout(() => setShowDownload(true), 2000);
  };

  if (isChecking) {
    return (
      <div className="gift-card-share-container">
        <div className="gift-card-share-content">
          <div className="loading-spinner" />
          <h2>Opening investment gift...</h2>
          <p>Redirecting you to the app</p>
        </div>
      </div>
    );
  }

  if (error && !gift) {
    return (
      <>
        <SEO title="Investment Gift – Scan Africa" description="View your Scan Africa investment gift." url="https://scanafrica.com/investment-gift/receive" />
        <div className="gift-card-share-container">
          <div className="gift-card-share-content">
            <div className="gift-card-icon">📈</div>
            <h1>We couldn't load this gift</h1>
            <p>{error}</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <SEO
        title="You received an investment gift – Scan Africa"
        description={gift ? `${gift.senderName} sent you a fixed deposit (${gift.productName}).` : "View your Scan Africa investment gift."}
        url={`https://scanafrica.com/investment-gift/receive?token=${token || ""}`}
      />
      <div className="gift-card-share-container">
        <div className="gift-card-share-content">
          <div className="gift-card-icon">📈</div>
          <h1>{gift?.senderName || "Someone"} sent you an investment certificate</h1>
          <p>It's a fixed deposit with FCL in your name. It stays yours until it matures.</p>

          {gift && (
            <>
              <div className="gift-card-preview" style={{ background: "#1b3359" }}>
                <span className="gift-card-preview-title">Investment Certificate</span>
                <span className="gift-card-preview-merchant">{gift.productName}</span>
                <span className="gift-card-preview-value">
                  {friendlyDate(gift.maturesOn) ? `Matures ${friendlyDate(gift.maturesOn)}` : STATE_COPY[gift.depositState] || "Being booked with FCL"}
                </span>
              </div>

              {gift.message && <p className="gift-card-cta-text">“{gift.message}”</p>}
              {gift.claimed && <p className="gift-card-cta-text">This certificate has been claimed. Open the Scan app to view it.</p>}
              {!gift.claimed && <p className="gift-card-cta-text">Download the Scan app and sign up or sign in with the phone number this gift was sent to. Once your account is open, open this link in the app to claim it. There's no deadline.</p>}

              {(showDownload || !/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) && (
                <div className="download-buttons">
                  <button type="button" className="download-btn app-store" onClick={handleAppStore}>
                    <span className="btn-icon">📱</span>
                    <span>Download for iOS</span>
                  </button>
                  <button type="button" className="download-btn play-store" onClick={handlePlayStore}>
                    <span className="btn-icon">🤖</span>
                    <span>Download for Android</span>
                  </button>
                </div>
              )}

              {/iPhone|iPad|iPod|Android/i.test(navigator.userAgent) && (
                <button type="button" className="retry-btn" onClick={tryOpenApp}>
                  Try opening in app
                </button>
              )}
            </>
          )}

          {!gift && !error && (
            <div className="loading-spinner" />
          )}
        </div>
      </div>
    </>
  );
};

export default InvestmentGiftReceive;
