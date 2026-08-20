const path = require("path");

/**
 * CRA only inlines REACT_APP_* into the bundle. Mirror admin/mobile: switch
 * APP_ENV and keep LOCAL_/TEST_/STAGING_/PROD_* listed; copy them for webpack.
 *
 * Do not dotenv-load `.env` during production webpack, so a local
 * APP_ENV=test cannot bake the test API into `npm run build`. env-cmd
 * (`build:test`, etc.) still works because those vars are already in
 * process.env before this file runs.
 */
function applyMobileStyleEnvAliases() {
  if (process.env.NODE_ENV !== "production") {
    try {
      require("dotenv").config({ path: path.join(__dirname, ".env") });
    } catch (_) {
      // dotenv ships with react-scripts
    }
  }

  if (process.env.APP_ENV && !process.env.REACT_APP_ENV) {
    process.env.REACT_APP_ENV = process.env.APP_ENV;
  }

  const urlKeys = [
    "LOCAL_BASE_URL",
    "TEST_BASE_URL",
    "STAGING_BASE_URL",
    "PROD_BASE_URL",
    "LOCAL_MERCHANT_PORTAL_URL",
    "TEST_MERCHANT_PORTAL_URL",
    "STAGING_MERCHANT_PORTAL_URL",
    "PROD_MERCHANT_PORTAL_URL",
  ];
  for (const key of urlKeys) {
    const prefixed = `REACT_APP_${key}`;
    if (process.env[key] && !process.env[prefixed]) {
      process.env[prefixed] = process.env[key];
    }
  }
}

applyMobileStyleEnvAliases();

module.exports = {};
