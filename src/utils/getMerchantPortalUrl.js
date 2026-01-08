/**
 * Get the merchant portal URL based on environment
 *
 * Priority:
 * 1. REACT_APP_MERCHANT_PORTAL_URL (for test environment)
 * 2. Production: https://business.ottoafrica.com
 * 3. Local development: http://localhost:3001
 *
 * @param {string} path - Optional path to append (e.g., '/login')
 * @returns {string} The full merchant portal URL
 */
export const getMerchantPortalUrl = (path = "/login") => {
  // Check for test environment variable first
  if (process.env.REACT_APP_MERCHANT_PORTAL_URL) {
    return `${process.env.REACT_APP_MERCHANT_PORTAL_URL}${path}`;
  }

  // Production environment
  if (process.env.NODE_ENV === "production") {
    return `https://business.ottoafrica.com${path}`;
  }

  // Local development fallback
  return `http://localhost:3001${path}`;
};
