import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SEO from "../components/SEO";
import "./GiftCardShare.css";

function getApiUrl(endpoint) {
  if (process.env.NODE_ENV === "production") {
    return `https://api.ottoafrica.com/api/${endpoint}`;
  }
  if (process.env.REACT_APP_API_URL) {
    return `${process.env.REACT_APP_API_URL}/${endpoint}`;
  }
  return `https://api.ottoafrica.com/api/${endpoint}`;
}

const GiftCardReceive = () => {
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
      const deepLink = `ottoafrica://gift/receive?token=${encodeURIComponent(token)}`;
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
        const res = await fetch(getApiUrl(`gift/verification/${encodeURIComponent(token)}`));
        const json = await res.json();
        if (json.success && json.data) {
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
    window.open(gift?.playstore_link || "https://play.google.com/store/apps/details?id=com.otto.customer", "_blank");
  };

  const handleAppStore = () => {
    window.open(gift?.iosstore_link || "https://apps.apple.com/app/otto/id123456789", "_blank");
  };

  const tryOpenApp = () => {
    if (!token) return;
    const deepLink = `ottoafrica://gift/receive?token=${encodeURIComponent(token)}`;
    window.location.href = deepLink;
    setTimeout(() => setShowDownload(true), 2000);
  };

  if (isChecking) {
    return (
      <div className="gift-card-share-container">
        <div className="gift-card-share-content">
          <div className="loading-spinner" />
          <h2>Opening gift card...</h2>
          <p>Redirecting you to the app</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <>
        <SEO title="Gift Card – Otto Africa" description="View your Otto Africa gift card." url="https://ottoafrica.com/gift-cards/receive" />
        <div className="gift-card-share-container">
          <div className="gift-card-share-content">
            <div className="gift-card-icon">🎁</div>
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
        title="You received a gift – Otto Africa"
        description={gift ? `View your GHS ${gift.giftcard_value} ${gift.giftcard_title} gift from ${gift.sender_name}.` : "View your Otto Africa gift card."}
        url={`https://ottoafrica.com/gift-cards/receive?token=${token || ""}`}
      />
      <div className="gift-card-share-container">
        <div className="gift-card-share-content">
          <div className="gift-card-icon">🎁</div>
          <h1>You've received a gift from {gift?.sender_name || "a friend"}</h1>
          <p>Here are your gift details.</p>

          {gift && (
            <>
              {/* Card preview */}
              <div
                className="gift-card-preview"
                style={{
                  background: `#${(gift.color_code || "1B3359").replace(/^#/, "")}`,
                  backgroundImage: gift.style_url ? `url(${gift.style_url})` : undefined,
                  backgroundSize: "cover",
                }}
              >
                <span className="gift-card-preview-title">{gift.giftcard_title}</span>
                <span className="gift-card-preview-value">GHS {Number(gift.giftcard_value).toFixed(2)}</span>
                <span className="gift-card-preview-merchant">{gift.merchant_name}</span>
              </div>

              {/* Cashier code */}
              {gift.code && (
                <div className="gift-card-code-box">
                  <p className="gift-card-code-label">Present this code to the cashier at checkout</p>
                  <p className="gift-card-code">{gift.code}</p>
                </div>
              )}

              <p className="gift-card-cta-text">Download the Otto app and sign in to view your balance and use your gift card in the app.</p>

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

              <p className="gift-card-alt">Alternatively, you can present the code above to the cashier at checkout to use your gift card.</p>

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

export default GiftCardReceive;
