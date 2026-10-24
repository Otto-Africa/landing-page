import {
  CUSTOMER_ANDROID_APP_URL,
  CUSTOMER_IOS_APP_URL,
} from "./customerAppStoreUrls";

/** @returns {"ios" | "android" | "desktop"} */
export function getDeviceOS() {
  if (typeof navigator === "undefined") return "desktop";
  const ua = navigator.userAgent;
  if (/iPhone|iPad|iPod/i.test(ua)) return "ios";
  if (/Android/i.test(ua)) return "android";
  return "desktop";
}

/**
 * Is Mobile Device.
 * UI helpers stay in lib/ and hooks/ so pages remain declarative and API shapes stay centralized in lib/api.ts.
 */
export function isMobileDevice() {
  const os = getDeviceOS();
  return os === "ios" || os === "android";
}

/** @param {"ios" | "android" | "desktop"} os */
export function getStoreUrlForOS(os) {
  if (os === "ios") return CUSTOMER_IOS_APP_URL;
  if (os === "android") return CUSTOMER_ANDROID_APP_URL;
  return null;
}

/**
 * Customer app pay deep link — must match Android/iOS intent filters
 * (`ottoafrica://pay/{qrId}?amount=&c=`).
 */
export function buildPayDeepLink(qrId, amount, collectId) {
  const id = encodeURIComponent(String(qrId || "").trim());
  const base = `ottoafrica://pay/${id}`;
  const params = new URLSearchParams();
  if (amount != null && String(amount).trim() !== "") {
    params.set("amount", String(amount).trim());
  }
  if (collectId != null && String(collectId).trim() !== "") {
    params.set("c", String(collectId).trim());
  }
  const qs = params.toString();
  return qs ? `${base}?${qs}` : base;
}

/**
 * Try to open the native Otto customer app. Calls `onAppOpened` when the page
 * loses focus (likely handoff to the app). Calls `onFallback` after timeout if
 * the app did not open.
 *
 * @returns {() => void} cleanup
 */
export function attemptOpenCustomerApp({
  deepLink,
  onAppOpened,
  onFallback,
  timeoutMs = 2500,
}) {
  if (!deepLink || typeof window === "undefined") {
    onFallback?.();
    return () => {};
  }

  let settled = false;
  let iframe = null;

  const finish = (opened) => {
    if (settled) return;
    settled = true;
    window.clearTimeout(timer);
    document.removeEventListener("visibilitychange", onVisibility);
    window.removeEventListener("pagehide", onPageHide);
    window.removeEventListener("blur", onBlur);
    if (iframe?.parentNode) iframe.parentNode.removeChild(iframe);
    if (opened) onAppOpened?.();
    else onFallback?.();
  };

  const onVisibility = () => {
    if (document.hidden) finish(true);
  };
  const onPageHide = () => finish(true);
  const onBlur = () => finish(true);

  document.addEventListener("visibilitychange", onVisibility);
  window.addEventListener("pagehide", onPageHide);
  window.addEventListener("blur", onBlur);

  const os = getDeviceOS();

  if (os === "ios") {
    iframe = document.createElement("iframe");
    iframe.style.display = "none";
    iframe.src = deepLink;
    document.body.appendChild(iframe);
    window.setTimeout(() => {
      window.location.href = deepLink;
    }, 25);
  } else if (os === "android") {
    window.location.href = deepLink;
  } else {
    finish(false);
    return () => {};
  }

  const timer = window.setTimeout(() => finish(false), timeoutMs);

  return () => finish(false);
}

/**
 * After a failed app open on mobile, send the user to the correct store listing.
 * UI helpers stay in lib/ and hooks/ so pages remain declarative and API shapes stay centralized in lib/api.ts.
 */
export function redirectToStoreForDevice() {
  const url = getStoreUrlForOS(getDeviceOS());
  if (url) window.location.replace(url);
}
