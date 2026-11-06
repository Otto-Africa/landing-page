import React, { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SEO from "../components/SEO";
import { getApiUrl } from "../config/env";
import {
  CUSTOMER_ANDROID_APP_URL,
  CUSTOMER_IOS_APP_URL,
} from "../utils/customerAppStoreUrls";
import "./GiftCardShare.css";

const SEO_URL = "https://ottoafrica.com/gift-cards/receive";

const formatAmount = (value) =>
  `GHS ${Number(value || 0).toLocaleString("en-GH", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;

const cardColor = (code) => {
  const raw = String(code || "1B3359").trim().replace(/^#/, "");
  return `#${raw.slice(0, 6)}`;
};

/**
 * Where an SMS or email gift link lands. It has to work on a phone without
 * Scan, so it shows the gift first and never forces a jump to the app: Safari
 * reports an invalid address when the scanafrica:// scheme has no app behind it.
 */
const GiftCardReceive = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  const [gift, setGift] = useState(null);
  const [error, setError] = useState(
    token ? null : "This link is incomplete. Please open the full link from your SMS or email.",
  );

  const deviceOS = useMemo(() => {
    const ua = navigator.userAgent;
    if (/iPhone|iPad|iPod/i.test(ua)) return "ios";
    if (/Android/i.test(ua)) return "android";
    return "desktop";
  }, []);

  useEffect(() => {
    if (!token) return undefined;
    let active = true;
    (async () => {
      try {
        const res = await fetch(getApiUrl(`gift/verification/${encodeURIComponent(token)}`));
        const json = await res.json();
        if (!active) return;
        if (res.ok && json?.error !== true && json?.data) {
          setGift(json.data);
        } else {
          setError(json?.message || "This gift link has expired or is not valid.");
        }
      } catch (e) {
        if (active) setError("We couldn't load your gift. Check your connection and try again.");
      }
    })();
    return () => {
      active = false;
    };
  }, [token]);

  if (error) {
    return (
      <>
        <SEO title="Gift Card – Scan Africa" description="View your Scan Africa gift card." url={SEO_URL} />
        <div className="gift-card-share-container">
          <div className="gift-card-share-content">
            <div className="gift-card-celebrate">🎁</div>
            <h1>We couldn't load this gift</h1>
            <p className="subhead">{error}</p>
            <p className="gift-card-alt">
              If someone sent you a gift, get the Scan app and sign up with the phone number or email they used. It will be waiting in Gifts.
            </p>
          </div>
        </div>
      </>
    );
  }

  if (!gift) {
    return (
      <div className="gift-card-share-container">
        <div className="gift-card-share-content">
          <div className="gift-card-celebrate">🎁</div>
          <div className="loading-spinner" />
          <h2>Loading your gift...</h2>
        </div>
      </div>
    );
  }

  const sender = gift.sender_name || "A friend";
  const shop = gift.merchant_name || gift.giftcard_title || "the shop";
  const amount = formatAmount(gift.giftcard_value);
  const iosUrl = gift.iosstore_link || CUSTOMER_IOS_APP_URL;
  const androidUrl = gift.playstore_link || CUSTOMER_ANDROID_APP_URL;
  const openInApp = `scanafrica://gift/receive?token=${encodeURIComponent(token)}`;

  return (
    <>
      <SEO
        title="You received a gift – Scan Africa"
        description={`${sender} sent you a ${amount} gift card to spend at ${shop}.`}
        url={SEO_URL}
      />
      <div className="gift-card-share-container gift-card-receive">
        <div className="gift-card-share-content">
          <h1 className="gift-receive-heading">{sender} sent you a gift</h1>
          <p className="gift-receive-subhead">
            {amount} to spend at <strong>{shop}</strong>
          </p>

          <div className="gift-receive-face" style={{ background: cardColor(gift.color_code) }}>
            <span className="gift-receive-face-shop">{shop}</span>
            <span className="gift-receive-face-amount">{amount}</span>
            <span className="gift-receive-face-from">From {sender}</span>
          </div>

          {gift.message && <blockquote className="gift-receive-message">“{gift.message}”</blockquote>}

          <div className="gift-receive-actions">
            {deviceOS === "ios" && (
              <a href={iosUrl} className="gift-receive-cta">Get the Scan app</a>
            )}
            {deviceOS === "android" && (
              <a href={androidUrl} className="gift-receive-cta">Get the Scan app</a>
            )}
            {deviceOS === "desktop" && (
              <>
                <a href={iosUrl} className="gift-receive-cta">Download for iPhone</a>
                <a href={androidUrl} className="gift-receive-cta">Download for Android</a>
              </>
            )}
            {deviceOS !== "desktop" && (
              <a href={openInApp} className="gift-receive-cta-secondary">I already have Scan</a>
            )}
          </div>

          <h2 className="gift-receive-steps-title">How to use your gift</h2>
          <ol className="gift-receive-steps">
            <li>
              <strong>Get the free Scan app.</strong> No payment needed.
            </li>
            <li>
              <strong>Sign up{gift.sent_to ? ` with ${gift.sent_to}` : ""}.</strong> Your gift will be waiting in Gifts.
            </li>
            <li>
              <strong>Pay at {shop}.</strong> Open your gift, tap Pay at {shop} and scan the shop's QR code.
            </li>
          </ol>
          <p className="gift-card-alt">
            Your gift is safe in the meantime. It can only be used from the account with {gift.sent_to || "the contact it was sent to"}.
          </p>
        </div>
      </div>
    </>
  );
};

export default GiftCardReceive;
