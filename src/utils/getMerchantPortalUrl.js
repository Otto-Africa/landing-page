import { getMerchantPortalBaseUrl } from "../config/env";

/**
 * Merchant portal URL for the APP_ENV selected in .env.
 *
 * @param {string} path - Optional path to append (e.g., '/login')
 * @returns {string} The full merchant portal URL
 */
export const getMerchantPortalUrl = (path = "/login") => {
  const base = getMerchantPortalBaseUrl();
  if (!path) return base;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
};
