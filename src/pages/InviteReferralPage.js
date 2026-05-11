import React, { useEffect, useMemo, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import SEO from "../components/SEO";
import "./GiftCardShare.css";
import {
  CUSTOMER_ANDROID_APP_URL,
  CUSTOMER_IOS_APP_URL,
} from "../utils/customerAppStoreUrls";

const IOS_APP_URL = CUSTOMER_IOS_APP_URL;
const ANDROID_APP_URL = CUSTOMER_ANDROID_APP_URL;

const STORAGE_REF = "otto_referral_code";
const STORAGE_CHANNEL = "otto_referral_channel";

const getDeviceOS = () => {
  if (typeof navigator === "undefined") return "desktop";
  const ua = navigator.userAgent;
  if (/iPhone|iPad|iPod/i.test(ua)) return "ios";
  if (/Android/i.test(ua)) return "android";
  return "desktop";
};

/**
 * Dedicated invite flow (like /gift-cards/:id): tries app deep link on mobile,
 * falls back to OS-appropriate store buttons.
 *
 * Path: /invite/:ref?channel=copy|whatsapp|system
 */
const InviteReferralPage = () => {
  const { ref: refParam } = useParams();
  const [searchParams] = useSearchParams();

  const ref = useMemo(() => {
    try {
      return decodeURIComponent(refParam || "").trim();
    } catch {
      return (refParam || "").trim();
    }
  }, [refParam]);

  const channel = (searchParams.get("channel") || "").trim();

  const [isChecking, setIsChecking] = useState(true);
  const [showActions, setShowActions] = useState(false);

  const deviceOS = useMemo(getDeviceOS, []);
  const isMobile = deviceOS === "ios" || deviceOS === "android";

  const deepLink = useMemo(() => {
    if (!ref) return "";
    const q = new URLSearchParams({ ref });
    if (channel) q.set("channel", channel);
    return `ottoafrica://referral?${q.toString()}`;
  }, [ref, channel]);

  useEffect(() => {
    if (!ref) {
      setIsChecking(false);
      setShowActions(true);
      return;
    }
    try {
      sessionStorage.setItem(STORAGE_REF, ref);
      if (channel) sessionStorage.setItem(STORAGE_CHANNEL, channel);
      else sessionStorage.removeItem(STORAGE_CHANNEL);
    } catch (_) {}

    if (isMobile && deepLink) {
      window.location.href = deepLink;
      const t = window.setTimeout(() => {
        setShowActions(true);
        setIsChecking(false);
      }, 2000);
      return () => window.clearTimeout(t);
    }
    setIsChecking(false);
    setShowActions(true);
  }, [ref, channel, isMobile, deepLink]);

  const tryOpenApp = () => {
    if (!deepLink) return;
    window.location.href = deepLink;
    window.setTimeout(() => setShowActions(true), 2000);
  };

  const pageUrl =
    typeof window !== "undefined"
      ? window.location.href
      : `https://ottoafrica.com/invite/${encodeURIComponent(ref || "")}`;

  if (!ref) {
    return (
      <div className="gift-card-share-container">
        <div className="gift-card-share-content">
          <img
            src="/img/logos/Favicon - Black@4x-8.png"
            alt="Otto"
            className="gift-card-share-logo"
          />
          <h1>Invalid invite link</h1>
          <p className="subhead">This referral link is missing a code.</p>
          <a href="/" className="gift-card-try-app-btn" style={{ display: "inline-block", marginTop: 16 }}>
            Go to Otto home
          </a>
        </div>
      </div>
    );
  }

  if (isChecking) {
    return (
      <div className="gift-card-share-container">
        <div className="gift-card-share-content">
          <div className="gift-card-celebrate">🎉</div>
          <div className="loading-spinner"></div>
          <h2>Opening Otto…</h2>
          <p>Taking you to the app with your referral</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={`Join Otto — referral ${ref} | Otto Africa`}
        description="Download the Otto app and use this referral code when you sign up."
        keywords="Otto, referral, invite, Ghana fintech"
        url={pageUrl}
      />
      <div className="gift-card-share-container">
        <div className="gift-card-share-content">
          <div
            className="gift-card-visual"
            style={{
              background:
                "linear-gradient(145deg, #1B3359 0%, #2d4a7c 100%)",
            }}
          >
            <div className="gift-card-visual-inner">
              <span className="gift-card-visual-badge">Referral invite</span>
              <span className="gift-card-visual-value" style={{ fontSize: 22, fontWeight: 700 }}>
                {ref}
              </span>
            </div>
          </div>

          <img
            src="/img/logos/Favicon - Black@4x-8.png"
            alt="Otto"
            className="gift-card-share-logo"
          />
          <h1>You&apos;re invited to Otto</h1>
          <p className="gift-card-sender">
            A friend shared their referral code with you.
          </p>
          <p className="subhead">
            Open the app to sign up — your referral code is applied automatically when you arrive from this link. If you don&apos;t have the app yet, download it below.
          </p>

          {showActions && (
            <div className="download-section">
              {isMobile && (
                <button
                  type="button"
                  className="gift-card-try-app-btn"
                  onClick={tryOpenApp}
                >
                  Already have Otto? Open with referral
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
                    Download Otto for iOS
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
                    Download Otto for Android
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

export default InviteReferralPage;
