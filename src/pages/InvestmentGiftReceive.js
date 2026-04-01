import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SEO from "../components/SEO";
import { getApiUrl } from "../config/env";
import "./GiftCardShare.css";

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
      const deepLink = `ottoafrica://investment-gift/receive?token=${encodeURIComponent(token)}`;
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
        if (json.success === false && json.data) {
          setGift(json.data);
        } else {
          setError(json.message || "Could not load this gift. The link may have expired.");
        }
      } catch (e) {
        setError("Could not load this gift. Please check your connection and try again.");
      }
    };

    fetchGift();
  }, [token, isChecking]);

  const handlePlayStore = () => {
    window.open("https://play.google.com/store/apps/details?id=com.otto.customer", "_blank");
  };

  const handleAppStore = () => {
    window.open("https://apps.apple.com/app/otto/id123456789", "_blank");
  };

  const tryOpenApp = () => {
    if (!token) return;
    const deepLink = `ottoafrica://investment-gift/receive?token=${encodeURIComponent(token)}`;
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
        <SEO title="Investment Gift – Otto Africa" description="View your Otto Africa investment gift." url="https://ottoafrica.com/investment-gift/receive" />
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
        title="You received an investment gift – Otto Africa"
        description={gift ? `Investment gift from ${gift.sender_name}. ${gift.available_at ? `Available ${gift.available_at}.` : "Available now."}` : "View your Otto Africa investment gift."}
        url={`https://ottoafrica.com/investment-gift/receive?token=${token || ""}`}
      />
      <div className="gift-card-share-container">
        <div className="gift-card-share-content">
          <div className="gift-card-icon">📈</div>
          <h1>You've received an investment gift from {gift?.sender_name || "a friend"}</h1>
          <p>Here are your gift details.</p>

          {gift && (
            <>
              <div className="gift-card-preview" style={{ background: "#1b3359" }}>
                <span className="gift-card-preview-title">Investment Certificate</span>
                <span className="gift-card-preview-merchant">{gift.provider_name}</span>
                {gift.available_now ? (
                  <span className="gift-card-preview-value">Available now</span>
                ) : (
                  <span className="gift-card-preview-value">Available {gift.available_at || "after unlock date"}</span>
                )}
              </div>

              {gift.claimed && <p className="gift-card-cta-text">You have already claimed this gift. Open the app to view it.</p>}
              {!gift.claimed && <p className="gift-card-cta-text">Download the Otto app and sign in with the phone or email this gift was sent to, then open this link in the app to claim your investment certificate.</p>}

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
