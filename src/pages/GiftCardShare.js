import React, { useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import { HiOutlineEye, HiOutlineShoppingBag, HiOutlineShieldCheck } from "react-icons/hi";
import SEO from "../components/SEO";
import "./GiftCardShare.css";

const IOS_APP_URL = "https://apps.apple.com/app/otto/id123456789";
const ANDROID_APP_URL = "https://play.google.com/store/apps/details?id=com.otto.customer";

function getApiUrl(endpoint) {
  if (process.env.NODE_ENV === "production") {
    return `https://api.ottoafrica.com/api/${endpoint}`;
  }
  if (process.env.REACT_APP_API_URL) {
    return `${process.env.REACT_APP_API_URL}/${endpoint}`;
  }
  return `https://api.ottoafrica.com/api/${endpoint}`;
}

const getDeviceOS = () => {
  const ua = navigator.userAgent;
  if (/iPhone|iPad|iPod/i.test(ua)) return "ios";
  if (/Android/i.test(ua)) return "android";
  return "desktop";
};

const GiftCardShare = () => {
  const { id } = useParams();
  const [isChecking, setIsChecking] = useState(true);
  const [showDownload, setShowDownload] = useState(false);
  const [giftData, setGiftData] = useState(null);
  const [fetchError, setFetchError] = useState(null);

  const deviceOS = useMemo(getDeviceOS, []);
  const isMobile = deviceOS === "ios" || deviceOS === "android";

  useEffect(() => {
    const fetchGift = async () => {
      try {
        const res = await fetch(getApiUrl(`gift-cards/share/${id}`));
        const json = await res.json();
        if (json.success && json.data) {
          setGiftData(json.data);
        }
      } catch (e) {
        setFetchError("Could not load gift card details.");
      }
    };
    fetchGift();
  }, [id]);

  useEffect(() => {
    if (isMobile) {
      const deepLink = `ottoafrica://gift-cards/${id}`;
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
  }, [id, isMobile]);

  const tryOpenApp = () => {
    const deepLink = `ottoafrica://gift-cards/${id}`;
    window.location.href = deepLink;
    setTimeout(() => setShowDownload(true), 2000);
  };

  const merchantName = giftData?.merchant_name ?? null;
  const merchantLogo = giftData?.merchant_logo ?? null;
  const giftTitle = giftData?.giftcard_title ?? "Gift Card";
  const colorCode = giftData?.color_code ?? "#1B3359";
  const normalizedColor = colorCode.startsWith("#") ? colorCode : `#${colorCode}`;

  if (isChecking) {
    return (
      <div className="gift-card-share-container">
        <div className="gift-card-share-content">
          <div className="gift-card-celebrate">🎁</div>
          <div className="loading-spinner"></div>
          <h2>Opening your gift...</h2>
          <p>Taking you to the Otto app</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={merchantName ? `${giftTitle} from ${merchantName} – Otto Africa` : "Gift Card – Otto Africa"}
        description={merchantName ? `View your ${giftTitle} from ${merchantName}. Download the Otto app to access your digital gift card.` : "View your Otto Africa gift card. Download the Otto app to access and use your digital gift card."}
        keywords="gift card, digital gift card, Otto gift card"
        url={`https://ottoafrica.com/gift-cards/${id}`}
      />
      <div className="gift-card-share-container">
        <div className="gift-card-share-content">
          {/* Gift card visual – mimics mobile app card style with merchant branding */}
          <div
            className="gift-card-visual"
            style={{ background: `linear-gradient(145deg, ${normalizedColor} 0%, ${normalizedColor}dd 100%)` }}
          >
            <div className="gift-card-visual-inner">
              {merchantLogo ? (
                <img src={merchantLogo} alt={merchantName ?? "Merchant"} className="gift-card-visual-merchant-logo" />
              ) : (
                <span className="gift-card-visual-badge">{giftTitle}</span>
              )}
              <span className="gift-card-visual-value">Open in app to see balance</span>
            </div>
          </div>

          {/* Merchant details – builds trust, shows who the gift is from */}
          {merchantName && (
            <div className="gift-card-merchant-info">
              {merchantLogo && (
                <img src={merchantLogo} alt={merchantName} className="gift-card-merchant-logo" />
              )}
              <div className="gift-card-merchant-text">
                <p className="gift-card-merchant-label">Gift card from</p>
                <p className="gift-card-merchant-name">{merchantName}</p>
              </div>
            </div>
          )}

          <img
            src="/img/logos/Favicon - Black@4x-8.png"
            alt="Otto"
            className="gift-card-share-logo"
          />
          <h1>Good news! Someone sent you a treat</h1>
          <p className="gift-card-sender">
            {merchantName ? `${merchantName} wants you to have this` : "A friend wants you to have this"}
          </p>
          {fetchError && <p className="gift-card-fetch-error">{fetchError}</p>}
          <p className="subhead">
            Open it in the Otto app to view your balance, pay at checkout, or pass it on.
          </p>

          <div className="benefits benefits-with-icons">
            <div className="benefit-item">
              <span className="benefit-icon" aria-hidden>
                <HiOutlineEye size={20} />
              </span>
              <span><strong>View your balance</strong> – See how much you have to spend</span>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon" aria-hidden>
                <HiOutlineShoppingBag size={20} />
              </span>
              <span><strong>Use at checkout</strong> – Pay at thousands of merchants</span>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon" aria-hidden>
                <HiOutlineShieldCheck size={20} />
              </span>
              <span><strong>Safe & instant</strong> – No plastic, no expiry hassle</span>
            </div>
          </div>

          {showDownload && (
            <div className="download-section">
              {/* Deep link first for mobile – users who already have the app */}
              {isMobile && (
                <button
                  type="button"
                  className="gift-card-try-app-btn"
                  onClick={tryOpenApp}
                >
                  Already have Otto? Open your gift
                </button>
              )}

              {/* Single primary CTA with OS detection */}
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
                    Download Otto to see your balance
                  </a>
                ) : deviceOS === "android" ? (
                  <a
                    href={ANDROID_APP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="download-btn-primary download-btn-android"
                  >
                    <svg className="download-btn-icon" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.523 15.3414C17.5097 15.6825 17.4373 16.0226 17.3069 16.3516C17.1319 16.8066 16.8724 17.2216 16.547 17.5656C16.2216 17.9096 15.8395 18.1726 15.4209 18.3406C14.8839 18.5586 14.3059 18.6736 13.7159 18.6786C13.2269 18.6786 12.6819 18.5476 12.0999 18.2916C11.5119 18.0326 10.9609 17.7206 10.4649 17.3556C9.96887 16.9906 9.55887 16.5926 9.24687 16.1646C8.93287 15.7366 8.73187 15.2806 8.65087 14.8106C8.65087 14.6736 8.65087 14.5486 8.65087 14.4336L8.65087 9.56659C8.65087 9.45159 8.65087 9.32659 8.65087 9.18959C8.73187 8.71959 8.93287 8.26359 9.24687 7.83559C9.55887 7.40759 9.96887 7.00959 10.4649 6.64459C10.9609 6.27959 11.5119 5.96759 12.0999 5.70859C12.6819 5.45259 13.2269 5.32159 13.7159 5.32159C14.3059 5.32659 14.8839 5.44159 15.4209 5.65959C15.8395 5.82759 16.2216 6.09059 16.547 6.43459C16.8724 6.77859 17.1319 7.19359 17.3069 7.64859C17.4373 7.97759 17.5097 8.31759 17.523 8.65859L17.341 8.65859C16.971 8.65859 16.616 8.73159 16.289 8.87559C15.962 9.01959 15.67 9.22959 15.427 9.48959C15.184 9.74959 14.995 10.0506 14.871 10.3706C14.747 10.6906 14.69 11.0206 14.693 11.3526V13.6476C14.69 13.9796 14.747 14.3096 14.871 14.6296C14.995 14.9496 15.184 15.2506 15.427 15.5106C15.67 15.7706 15.962 15.9806 16.289 16.1246C16.616 16.2686 16.971 16.3416 17.341 16.3416L17.523 16.3416V15.3414Z" />
                    </svg>
                    Download Otto to see your balance
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

              {/* Fallback for other OS – small link */}
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

export default GiftCardShare;
