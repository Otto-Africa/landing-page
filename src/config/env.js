/**
 * API and merchant-portal hosts from APP_ENV, matching admin/src/lib/constants.ts.
 *
 * Switch APP_ENV in .env (local | test | staging | prod) and restart npm start.
 * Production `npm run build` defaults to prod if APP_ENV / REACT_APP_ENV is unset.
 */

const ENV = {
  LOCAL: "local",
  TEST: "test",
  STAGING: "staging",
  PRODUCTION: "prod",
};

const ENV_ALIASES = {
  local: ENV.LOCAL,
  development: ENV.LOCAL,
  dev: ENV.LOCAL,
  test: ENV.TEST,
  staging: ENV.STAGING,
  prod: ENV.PRODUCTION,
  production: ENV.PRODUCTION,
};

const DEFAULT_API_HOSTS = {
  [ENV.LOCAL]: "http://localhost:3000",
  [ENV.TEST]: "https://api-test.ottoafrica.com",
  [ENV.STAGING]: "https://staging-api.ottoafrica.com",
  [ENV.PRODUCTION]: "https://api.ottoafrica.com",
};

const DEFAULT_MERCHANT_PORTAL_HOSTS = {
  [ENV.LOCAL]: "http://localhost:3001",
  [ENV.TEST]: "https://business-test.ottoafrica.com",
  [ENV.STAGING]: "https://business-staging.ottoafrica.com",
  [ENV.PRODUCTION]: "https://business.ottoafrica.com",
};

function envUrl(name) {
  const value = process.env[name];
  return value && value.trim() ? value.trim() : undefined;
}

function normalizeAppEnv(raw) {
  const key = (raw || "").trim().toLowerCase();
  if (key && ENV_ALIASES[key]) return ENV_ALIASES[key];
  return process.env.NODE_ENV === "production" ? ENV.PRODUCTION : ENV.LOCAL;
}

function withApiPrefix(url) {
  const trimmed = url.trim().replace(/\/+$/, "");
  if (!trimmed) return trimmed;
  return /\/api$/i.test(trimmed) ? trimmed : `${trimmed}/api`;
}

function stripTrailingSlash(url) {
  return (url || "").trim().replace(/\/+$/, "");
}

function resolveApiBaseUrl(appEnv) {
  const byEnv = {
    [ENV.LOCAL]: envUrl("REACT_APP_LOCAL_BASE_URL"),
    [ENV.TEST]: envUrl("REACT_APP_TEST_BASE_URL"),
    [ENV.STAGING]: envUrl("REACT_APP_STAGING_BASE_URL"),
    [ENV.PRODUCTION]: envUrl("REACT_APP_PROD_BASE_URL"),
  };

  const selected =
    byEnv[appEnv] ||
    envUrl("REACT_APP_API_URL") ||
    envUrl("REACT_APP_API_BASE_URL") ||
    DEFAULT_API_HOSTS[appEnv];

  return withApiPrefix(selected);
}

function resolveMerchantPortalUrl(appEnv) {
  const byEnv = {
    [ENV.LOCAL]: envUrl("REACT_APP_LOCAL_MERCHANT_PORTAL_URL"),
    [ENV.TEST]: envUrl("REACT_APP_TEST_MERCHANT_PORTAL_URL"),
    [ENV.STAGING]: envUrl("REACT_APP_STAGING_MERCHANT_PORTAL_URL"),
    [ENV.PRODUCTION]: envUrl("REACT_APP_PROD_MERCHANT_PORTAL_URL"),
  };

  const selected =
    byEnv[appEnv] ||
    envUrl("REACT_APP_MERCHANT_PORTAL_URL") ||
    DEFAULT_MERCHANT_PORTAL_HOSTS[appEnv];

  return stripTrailingSlash(selected);
}

/** `local` | `test` | `staging` | `prod` — from APP_ENV / REACT_APP_ENV. */
export const APP_ENV = normalizeAppEnv(process.env.REACT_APP_ENV);

export function getEnvironment() {
  return APP_ENV;
}

export function getApiBaseUrl() {
  return resolveApiBaseUrl(APP_ENV);
}

export function getMerchantPortalBaseUrl() {
  return resolveMerchantPortalUrl(APP_ENV);
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
