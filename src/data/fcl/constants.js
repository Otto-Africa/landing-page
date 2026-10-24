/** Public / production gateway (Postman collection `baseUrl`). */
export const PUBLIC_BASE_URL = "https://fclvas.formscapital.net:3847";

/** On-prem / local gateway. Use from the internal network. */

/**
 * Path parameter for POST /api/v1/merchants/{clientId}/api-keys.
 * Live public host (28 Aug 2026) issues keys only when this value is the merchant
 * code BM-PRIJ3ANYI3WW. FCL-BRIDGE is not used on that path.
 */
export const CLIENT_ID = "BM-PRIJ3ANYI3WW";

/** Same merchant code. Also returned as merchantId UUID on callback-url responses. */
export const MERCHANT_ID = "BM-PRIJ3ANYI3WW";

/** Integration label from the original brief: not the api-keys path clientId. */
export const INTEGRATION_CODE = "FCL-BRIDGE";

/** Mobile-money networks. Name enquiry and (live) collection create accepted TELECEL, not only MTN. */
export const NETWORKS = ["MTN", "TELECEL", "AIRTELTIGO"];

/**
 * Operational floors from FCL contact (JayTheBest), 28 Aug 2026.
 * Amounts below these may accept (HTTP 200) but fail / never SUCCESS.
 */
export const COLLECTION_MIN_GHS = "0.1";
export const DISBURSEMENT_MIN_GHS = "2";

export const DEFAULT_CALLBACK_URL =
  "https://example.com/webhooks/payment-status";
