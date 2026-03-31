/**
 * Environment detection from the current URL/domain.
 * No .env required: local, test, staging, or production is inferred from where the app is served.
 *
 * - local:     localhost / 127.0.0.1  → API at http://localhost:8000/api
 * - test:      hostname contains "test"  → API at https://api-test.ottoafrica.com/api
 * - staging:   hostname contains "staging" → API at https://api-staging.ottoafrica.com/api
 * - production: else (e.g. ottoafrica.com) → API at https://api.ottoafrica.com/api
 */

const ENV = {
  LOCAL: "local",
  TEST: "test",
  STAGING: "staging",
  PRODUCTION: "production",
};

const API_BASE_URLS = {
  [ENV.LOCAL]: "http://localhost:8000/api",
  [ENV.TEST]: "https://api-test.ottoafrica.com/api",
  [ENV.STAGING]: "https://api-staging.ottoafrica.com/api",
  [ENV.PRODUCTION]: "https://api.ottoafrica.com/api",
};

/**
 * Get current environment from window.location.hostname.
 * Safe to call in browser; returns production when hostname is not available (e.g. SSR).
 */
export function getEnvironment() {
  if (typeof window === "undefined" || !window.location?.hostname) {
    return ENV.PRODUCTION;
  }
  const host = window.location.hostname.toLowerCase();
  if (host === "localhost" || host === "127.0.0.1") return ENV.LOCAL;
  if (host.includes("test")) return ENV.TEST;
  if (host.includes("staging")) return ENV.STAGING;
  return ENV.PRODUCTION;
}

/**
 * Get the API base URL for the current environment (no trailing slash).
 */
export function getApiBaseUrl() {
  const env = getEnvironment();
  return API_BASE_URLS[env] ?? API_BASE_URLS[ENV.PRODUCTION];
}

/**
 * Build full API URL for an endpoint.
 * @param {string} endpoint - e.g. "gift/verification/TOKEN" or "contact/landing-page"
 */
export function getApiUrl(endpoint) {
  const base = getApiBaseUrl().replace(/\/$/, "");
  const path = (endpoint || "").replace(/^\//, "");
  return `${base}/${path}`;
}

export { ENV };
