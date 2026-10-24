import {
  CLIENT_ID,
  COLLECTION_MIN_GHS,
  DEFAULT_CALLBACK_URL,
  DISBURSEMENT_MIN_GHS,
  PUBLIC_BASE_URL,
} from "./constants";

export const WEBHOOK_PAYLOAD_EXAMPLE = `{
  "providerRef": "COL-8F3A91B2C4D5",
  "merchantReference": "FCL-1724840123",
  "type": "COLLECTION",
  "network": "MTN",
  "msisdn": "233241234567",
  "status": "SUCCESS",
  "amount": "10.00",
  "currency": "GHS",
  "reason": null,
  "updatedAt": "2026-08-21T19:00:00Z"
}`;

export const WEBHOOK_FAILED_EXAMPLE = `{
  "providerRef": "COL-8F3A91B2C4D5",
  "merchantReference": "FCL-1724840123",
  "type": "COLLECTION",
  "network": "MTN",
  "msisdn": "233241234567",
  "status": "FAILED",
  "amount": "10.00",
  "currency": "GHS",
  "reason": "No healthy provider available for COLLECTION on network MTN",
  "updatedAt": "2026-08-21T19:00:00Z"
}`;

/**
 * Endpoint catalog sourced from payment-gateway-client.postman_collection.json.
 * Response JSON is inferred from request descriptions and labeled as examples.
 */
export const endpoints = [
  {
    id: "create-api-key",
    group: "Merchant Settings",
    title: "Create / regenerate API key",
    method: "POST",
    path: `/api/v1/merchants/{clientId}/api-keys`,
    auth: "clientId",
    summary:
      "Issues a new merchant API key (and replaces the previous one). Authenticated by clientId in the path only: no X-Api-Key header. On the public host the working clientId is the merchant code BM-PRIJ3ANYI3WW, not FCL-BRIDGE.",
    when:
      "Call this to obtain or rotate a key. Default TTL observed live is 30 minutes. Store apiKey immediately; it is shown once.",
    notes: [
      "Live: POST /api/v1/merchants/BM-PRIJ3ANYI3WW/api-keys with body {} and no X-Api-Key returned HTTP 200.",
      "apiKey shape is fpk_ plus a secret suffix. Keep live keys in secure backend storage.",
      "expiresInMinutes was 30 with empty body (server default). Optional `{ \"ttl\": \"PT30M\" }` is still documented by the collection.",
      "Treat clientId like a password: anyone who has it can rotate your live key.",
    ],
    pathParams: [
      {
        name: "clientId",
        type: "string",
        required: true,
        description: `Use \`${CLIENT_ID}\` on the public host. This is the merchant code, not FCL-BRIDGE.`,
      },
    ],
    headers: [
      { name: "Content-Type", required: true, description: "application/json" },
    ],
    bodyParams: [
      {
        name: "ttl",
        type: "string",
        required: false,
        description:
          'ISO-8601 duration for key lifetime, e.g. `"PT30M"`. Omit to use the server default.',
      },
    ],
    requestBody: "{}",
    requestBodyAlt: `{
  "ttl": "PT30M"
}`,
    responseExample: `{
  "apiKey": "fpk_<shown once: store immediately>",
  "expiresAt": "2026-08-28T14:05:17.209565200Z",
  "expiresInMinutes": 30
}`,
    errors: [
      { status: "4xx", meaning: "Invalid or unknown clientId, or malformed ttl." },
    ],
  },
  {
    id: "set-callback-url",
    group: "Merchant Settings",
    title: "Set merchant callback URL",
    method: "PUT",
    path: "/api/v1/merchants/callback-url",
    auth: "apiKey",
    summary:
      "Registers the default webhook URL used by Collection, Disbursement, and Checkout creates that omit their own callbackUrl.",
    when:
      "Register once so you do not have to pass callbackUrl on every create. Per-request callbackUrl still wins when you send it.",
    notes: [
      "Must match ^https?://.+ . Empty string is rejected (HTTP 500 INTERNAL_ERROR with a Spring validation message).",
      "To clear, send JSON null: { \"callbackUrl\": null }. That returned 200 and callbackUrl: null live.",
      "Response includes merchantId (UUID) as well as callbackUrl.",
    ],
    headers: [
      { name: "X-Api-Key", required: true, description: "Your merchant API key." },
      { name: "Content-Type", required: true, description: "application/json" },
    ],
    bodyParams: [
      {
        name: "callbackUrl",
        type: "string",
        required: false,
        description: `HTTPS URL FCL will POST status notifications to. Example: \`${DEFAULT_CALLBACK_URL}\`. Send JSON null to clear. Empty string is not accepted.`,
      },
    ],
    requestBody: `{
  "callbackUrl": "${DEFAULT_CALLBACK_URL}"
}`,
    requestBodyAlt: `{
  "callbackUrl": null
}`,
    responseExample: `{
  "merchantId": "35e2de51-b2e4-4ded-b512-0eb811d09328",
  "callbackUrl": "${DEFAULT_CALLBACK_URL}"
}`,
    errors: [
      {
        status: "401",
        meaning:
          'Missing or invalid X-Api-Key. Observed body: { timestamp, code: "UNAUTHORIZED", message: "Missing or invalid API key" }.',
      },
      {
        status: "500",
        meaning:
          "Observed when callbackUrl is \"\". Spring Pattern ^https?://.+ fails and is wrapped as INTERNAL_ERROR.",
      },
    ],
  },
  {
    id: "get-callback-url",
    group: "Merchant Settings",
    title: "Get merchant callback URL",
    method: "GET",
    path: "/api/v1/merchants/callback-url",
    auth: "apiKey",
    summary:
      "Returns the merchant UUID and the currently registered default callbackUrl (null if none is set).",
    when: "Confirm what default webhook target is registered before creating transactions.",
    headers: [
      { name: "X-Api-Key", required: true, description: "Your merchant API key." },
    ],
    responseExample: `{
  "merchantId": "35e2de51-b2e4-4ded-b512-0eb811d09328",
  "callbackUrl": "${DEFAULT_CALLBACK_URL}"
}`,
    responseExampleEmpty: `{
  "merchantId": "35e2de51-b2e4-4ded-b512-0eb811d09328",
  "callbackUrl": null
}`,
    errors: [
      {
        status: "401",
        meaning:
          'Observed: { timestamp, code: "UNAUTHORIZED", message: "Missing or invalid API key" }. FCL-BRIDGE and BM-PRIJ3ANYI3WW as X-Api-Key also 401. Bearer tokens are not accepted.',
      },
    ],
  },
  {
    id: "create-momo-collection",
    group: "Collections",
    title: "Create MOMO collection",
    method: "POST",
    path: "/api/v1/collections",
    auth: "apiKey",
    summary:
      "Starts a mobile-money request-to-pay. The customer is prompted on their wallet. HTTP 200 means accepted (usually PENDING), not paid.",
    when:
      "Collect GHS from a customer wallet. After 200, keep providerRef, poll status, and rely on the callbackUrl webhook for the definitive SUCCESS/FAILED outcome. Do not treat 200 as settlement.",
    notes: [
      `Recommended minimum amount: ${COLLECTION_MIN_GHS} GHS (or more). FCL ops (JayTheBest): amounts like 0.01 are below floor (“less than 1 pesewa….maybe 0.1 upwards”).`,
      "Earlier real 0.01 tests (below floor): MTN 233241234567 via MOJOPAY then FAILED; TELECEL 233201234567 PENDING; AIRTELTIGO 233261234567 via MOJOPAY PENDING. Those FAILED/no-SUCCESS outcomes may be floor-related, not product failure.",
      "Floor retest without callback: MTN CL_39D06F763A status FAILED; TELECEL/ATG PENDING. Later with ngrok + user MSISDN 233249223888 MTN 0.10 CL_E75821A31F → status SUCCESS + callback SUCCESS.",
      "Success signal: callback POST to the merchant/request callbackUrl. Status polling alone can stay PENDING/FAILED while the real outcome is on the webhook.",
      "Live providerRef was a UUID or CL_… prefix. Status JSON uses accepted, status, provider, providerRef, responseCode, message.",
      "Invalid MSISDN 000 on MTN returned 502 ALL_PROVIDERS_FAILED: not a 4xx validation error.",
      "Currency is always GHS. Idempotency is derived server-side from type + reference.",
    ],
    headers: [
      { name: "X-Api-Key", required: true, description: "Your merchant API key." },
      { name: "Content-Type", required: true, description: "application/json" },
    ],
    bodyParams: [
      {
        name: "customerMsisdn",
        type: "string",
        required: true,
        description: "Customer wallet number in international format, e.g. `233241234567`.",
      },
      {
        name: "network",
        type: "string",
        required: true,
        description:
          "`MTN` per the collection. Live also accepted `TELECEL`.",
      },
      {
        name: "amount",
        type: "string",
        required: true,
        description: `Amount in GHS as a decimal string. Recommended minimum \`${COLLECTION_MIN_GHS}\` GHS (e.g. \`"0.10"\` or \`"10.00"\`). Do not use 0.01.`,
      },
      {
        name: "reference",
        type: "string",
        required: true,
        description:
          "Your unique merchant reference. Reuse to idempotently retry. Collection example: `FCL-{{$timestamp}}`.",
      },
      {
        name: "description",
        type: "string",
        required: false,
        description: "Shown as the payment description, e.g. `Order payment`.",
      },
      {
        name: "callbackUrl",
        type: "string",
        required: false,
        description:
          "Per-request webhook URL. Overrides the registered merchant default. FCL POSTs SUCCESS/FAILED here: configure this (or the merchant default) before money-moving tests.",
      },
    ],
    requestBody: `{
  "customerMsisdn": "233241234567",
  "network": "MTN",
  "amount": "0.10",
  "reference": "FCL-1724840123",
  "description": "Order payment",
  "callbackUrl": "${DEFAULT_CALLBACK_URL}"
}`,
    responseExample: `{
  "accepted": true,
  "status": "PENDING",
  "provider": "TELECEL",
  "providerRef": "60e6ef62-2292-4a1b-95c9-a22a63325571",
  "responseCode": "PENDING",
  "message": "Awaiting confirmation",
  "externalReference": null,
  "financialTransactionId": null
}`,
    errors: [
      { status: "401", meaning: "Missing or invalid X-Api-Key." },
      {
        status: "502",
        meaning:
          'Observed for MSISDN 000 / MTN: { code: "ALL_PROVIDERS_FAILED", message: "All providers failed for COLLECTION on network MTN" }.',
      },
    ],
  },
  {
    id: "get-collection-status",
    group: "Collections",
    title: "Get collection status",
    method: "GET",
    path: "/api/v1/collections/{providerRef}/status",
    auth: "apiKey",
    summary:
      "Independent status lookup for a MOMO collection. If the transaction is still PENDING, the gateway refreshes from the provider before responding.",
    when:
      "Poll after Create MOMO Collection for progress. Per FCL ops, the definitive SUCCESS signal is the callback POST to your callbackUrl: status alone can remain PENDING/FAILED while the webhook carries the real outcome. Still poll (webhooks are one attempt, no retry).",
    notes: [
      "Unknown providerRef returns 404 with an empty body (observed for COL-UNKNOWN).",
      "Live collection providerRef was a UUID or CL_…, not a COL- prefix.",
      "Status JSON matches create: accepted, status, provider, providerRef, responseCode, message, externalReference, financialTransactionId.",
      "Do not conclude failure solely from a PENDING/FAILED poll if no callback was received and amount was below the 0.1 GHS floor.",
    ],
    pathParams: [
      {
        name: "providerRef",
        type: "string",
        required: true,
        description: "Gateway reference from Create MOMO Collection (live: UUID).",
      },
    ],
    headers: [
      { name: "X-Api-Key", required: true, description: "Your merchant API key." },
    ],
    responseExample: `{
  "accepted": true,
  "status": "PENDING",
  "provider": "TELECEL",
  "providerRef": "60e6ef62-2292-4a1b-95c9-a22a63325571",
  "responseCode": "PENDING",
  "message": "PENDING",
  "externalReference": null,
  "financialTransactionId": null
}`,
    errors: [
      { status: "401", meaning: "Missing or invalid X-Api-Key." },
      { status: "404", meaning: "Unknown providerRef (empty body observed)." },
    ],
  },
  {
    id: "create-checkout-session",
    group: "Collections",
    title: "Create card collection (checkout)",
    method: "POST",
    path: "/api/v1/checkout/sessions",
    auth: "apiKey",
    summary:
      "Creates a MojoPay-hosted checkout session for card payment and returns a checkoutUrl to send the customer to.",
    when:
      "Collect GHS by card. Redirect the customer to checkoutUrl. Do not mark the order paid from the hosted success page alone: wait for the callbackUrl webhook and/or poll Get Card Collection Status.",
    notes: [
      `Recommended minimum amount: ${COLLECTION_MIN_GHS} GHS (same collection floor as MOMO).`,
      "Earlier live 0.01 GHS create (below floor) returned providerRef like CS_… and checkoutUrl https://omni.mojo-pay.com/pay/{providerRef}; unpaid session later FAILED. No card was charged.",
      "Create JSON is { providerRef, merchantReference, status, checkoutUrl }. Status GET uses a different shape (accepted, provider MOJOPAY, …).",
      "callbackUrl is the server-to-server SUCCESS/FAILED push (definitive per FCL ops), not the browser redirect.",
    ],
    headers: [
      { name: "X-Api-Key", required: true, description: "Your merchant API key." },
      { name: "Content-Type", required: true, description: "application/json" },
    ],
    bodyParams: [
      {
        name: "amount",
        type: "string",
        required: true,
        description: `Amount in GHS as a decimal string. Recommended minimum \`${COLLECTION_MIN_GHS}\` GHS (e.g. \`"0.10"\` or \`"10.00"\`).`,
      },
      {
        name: "reference",
        type: "string",
        required: true,
        description: "Your unique merchant reference. Reuse to idempotently retry.",
      },
      {
        name: "description",
        type: "string",
        required: false,
        description: "Checkout description, e.g. `Order payment`.",
      },
      {
        name: "callbackUrl",
        type: "string",
        required: false,
        description:
          "Per-request webhook URL. Overrides the registered merchant default. Configure before money-moving tests.",
      },
    ],
    requestBody: `{
  "amount": "0.10",
  "reference": "FCL-1724840123",
  "description": "Order payment",
  "callbackUrl": "${DEFAULT_CALLBACK_URL}"
}`,
    responseExample: `{
  "providerRef": "CS_F5A242825E",
  "merchantReference": "OTTO-DOC-1787924325",
  "status": "PENDING",
  "checkoutUrl": "https://omni.mojo-pay.com/pay/CS_F5A242825E"
}`,
    errors: [
      { status: "401", meaning: "Missing or invalid X-Api-Key." },
      { status: "4xx", meaning: "Invalid amount, reference, or callbackUrl." },
    ],
  },
  {
    id: "get-checkout-status",
    group: "Collections",
    title: "Get card collection status",
    method: "GET",
    path: "/api/v1/checkout/sessions/{providerRef}/status",
    auth: "apiKey",
    summary:
      "Independent status lookup for a card checkout session, refreshed from MojoPay if still PENDING.",
    when:
      "After redirecting the customer to checkoutUrl. Do not mark an order paid on the hosted success URL alone.",
    notes: [
      "Unknown CHK-UNKNOWN → 404 empty body.",
      "Status JSON differs from create: accepted, provider MOJOPAY, responseCode, message, externalReference, financialTransactionId.",
      "Earlier unpaid 0.01 (below floor) session later returned accepted false, status FAILED.",
      "Prefer the callbackUrl webhook as the SUCCESS signal; status can lag or disagree.",
    ],
    pathParams: [
      {
        name: "providerRef",
        type: "string",
        required: true,
        description: "Gateway reference from create, e.g. CS_F5A242825E.",
      },
    ],
    headers: [
      { name: "X-Api-Key", required: true, description: "Your merchant API key." },
    ],
    responseExample: `{
  "accepted": true,
  "status": "PENDING",
  "provider": "MOJOPAY",
  "providerRef": "CS_F5A242825E",
  "responseCode": "PENDING",
  "message": "PENDING",
  "externalReference": null,
  "financialTransactionId": null
}`,
    errors: [
      { status: "401", meaning: "Missing or invalid X-Api-Key." },
      { status: "404", meaning: "Unknown providerRef (empty body observed)." },
    ],
  },
  {
    id: "create-momo-disbursement",
    group: "Disbursements",
    title: "Create mobile money payout",
    method: "POST",
    path: "/api/v1/disbursements/mobile-money",
    auth: "apiKey",
    summary: "Pay out GHS to an MTN mobile-money wallet.",
    when:
      "Send funds to a recipient wallet. After 200, poll Get Disbursement Status and rely on the callbackUrl webhook for definitive SUCCESS/FAILED.",
    notes: [
      `Required minimum amount: ${DISBURSEMENT_MIN_GHS} GHS or more (FCL ops / JayTheBest).`,
      "Earlier real payout 0.01 GHS to MTN 233241234567 (below floor) returned 200 PENDING via HUBTEL; later polls still PENDING: under-floor amount likely explains missing SUCCESS. Dummy 000 previously 502.",
      "Floor retest without callback: 2.00 MTN PO_3A9FD015 status FAILED. Later with ngrok + user MSISDN 233249223888 MTN 2.00 PO_06C8EBD7 → status SUCCESS + callback SUCCESS.",
      "Success signal is the callback POST to callbackUrl; status alone is insufficient.",
      "Collection still documents network MTN for this path.",
      "Currency is always GHS. Idempotency is derived server-side from type + reference.",
    ],
    headers: [
      { name: "X-Api-Key", required: true, description: "Your merchant API key." },
      { name: "Content-Type", required: true, description: "application/json" },
    ],
    bodyParams: [
      {
        name: "recipientMsisdn",
        type: "string",
        required: true,
        description: "Recipient wallet number, e.g. `233241234567`.",
      },
      {
        name: "network",
        type: "string",
        required: true,
        description: "Must be `MTN`.",
      },
      {
        name: "amount",
        type: "string",
        required: true,
        description: `Amount in GHS as a decimal string. Minimum \`${DISBURSEMENT_MIN_GHS}\` GHS (e.g. \`"2.00"\` or \`"10.00"\`). Do not use 0.01.`,
      },
      {
        name: "reference",
        type: "string",
        required: true,
        description: "Your unique merchant reference. Reuse to idempotently retry.",
      },
      {
        name: "description",
        type: "string",
        required: false,
        description: "Payout description, e.g. `Payout`.",
      },
      {
        name: "callbackUrl",
        type: "string",
        required: false,
        description:
          "Per-request webhook URL override. Configure merchant default or this field before money-moving tests.",
      },
    ],
    requestBody: `{
  "recipientMsisdn": "233241234567",
  "network": "MTN",
  "amount": "2.00",
  "reference": "FCL-1724840123",
  "description": "Payout",
  "callbackUrl": "${DEFAULT_CALLBACK_URL}"
}`,
    responseExample: `{
  "providerRef": "DIS-9E8D7C6B5A40",
  "merchantReference": "FCL-1724840123",
  "status": "PENDING",
  "amount": "2.00",
  "currency": "GHS",
  "network": "MTN",
  "msisdn": "233241234567"
}`,
    errors: [
      { status: "401", meaning: "Missing or invalid X-Api-Key." },
      {
        status: "502",
        meaning:
          'ALL_PROVIDERS_FAILED: observed for invalid MSISDN: "All providers failed for DISBURSEMENT on network MTN".',
      },
    ],
  },
  {
    id: "create-bank-disbursement",
    group: "Disbursements",
    title: "Create bank transfer",
    method: "POST",
    path: "/api/v1/disbursements/bank",
    auth: "apiKey",
    summary:
      "Bank-to-bank instant transfer. MojoPay is tried first; GhIPSS is the fallback while GhIPSS is not yet ready.",
    when:
      "Pay a Ghanaian bank account. Resolve bankCode via List Bank Codes and optionally Name Enquiry Credit first.",
    notes: [
      "There is no senderBankCode or senderAccount field. Originating account is FCL server-side config.",
      `Minimum amount: ${DISBURSEMENT_MIN_GHS} GHS or more (same disbursement floor as MOMO).`,
      "Dummy account 0000000000 / GCB 300304 / 0.01 GHS (also below floor) returned 502 ALL_PROVIDERS_FAILED for INSTANT_PAY on network BANK. No successful payout.",
      "recipientBankCode comes from GET /api/v1/banks (GCB is 300304 live; 300303 is ABSA).",
      "Configure callbackUrl; definitive SUCCESS is the callback POST.",
    ],
    headers: [
      { name: "X-Api-Key", required: true, description: "Your merchant API key." },
      { name: "Content-Type", required: true, description: "application/json" },
    ],
    bodyParams: [
      {
        name: "recipientAccount",
        type: "string",
        required: true,
        description: "Destination account number, e.g. `0987654321`.",
      },
      {
        name: "recipientBankCode",
        type: "string",
        required: true,
        description: "Destination bank code from List Bank Codes, e.g. `300303`.",
      },
      {
        name: "amount",
        type: "string",
        required: true,
        description: `Amount in GHS as a decimal string. Minimum \`${DISBURSEMENT_MIN_GHS}\` GHS (e.g. \`"2.00"\` or \`"50.00"\`).`,
      },
      {
        name: "reference",
        type: "string",
        required: true,
        description: "Your unique merchant reference. Reuse to idempotently retry.",
      },
      {
        name: "narration",
        type: "string",
        required: false,
        description: "Transfer narration, e.g. `Interbank transfer`.",
      },
      {
        name: "callbackUrl",
        type: "string",
        required: false,
        description: "Per-request webhook URL override.",
      },
    ],
    requestBody: `{
  "recipientAccount": "0987654321",
  "recipientBankCode": "300303",
  "amount": "50.00",
  "reference": "FCL-1724840123",
  "narration": "Interbank transfer",
  "callbackUrl": "${DEFAULT_CALLBACK_URL}"
}`,
    responseExample: `{
  "providerRef": "DIS-BANK-4F5E6D7C",
  "merchantReference": "FCL-1724840123",
  "status": "PENDING",
  "amount": "50.00",
  "currency": "GHS",
  "msisdn": "0987654321"
}`,
    errors: [
      { status: "401", meaning: "Missing or invalid X-Api-Key." },
      {
        status: "502",
        meaning:
          'ALL_PROVIDERS_FAILED: observed: "All providers failed for INSTANT_PAY on network BANK".',
      },
    ],
  },
  {
    id: "get-disbursement-status",
    group: "Disbursements",
    title: "Get disbursement status",
    method: "GET",
    path: "/api/v1/disbursements/{providerRef}/status",
    auth: "apiKey",
    summary:
      "Shared status lookup for both mobile-money payouts and bank transfers. providerRef alone identifies the transaction regardless of rail.",
    when:
      "Poll after either disbursement create for progress. Prefer the callbackUrl webhook for definitive SUCCESS/FAILED (status can lag). Minimum payout amount is 2 GHS.",
    notes: [
      "Unknown DIS-UNKNOWN → 404 empty body.",
      "Earlier 0.01 MOMO payout (below 2 GHS floor) stayed PENDING on poll: under-floor, not proof that Hubtel never settles.",
      "Configure merchant callback before money-moving tests; Otto must implement/trust FCL callbacks.",
    ],
    pathParams: [
      {
        name: "providerRef",
        type: "string",
        required: true,
        description:
          "Gateway reference from Create Mobile Money Payout or Create Bank Transfer.",
      },
    ],
    headers: [
      { name: "X-Api-Key", required: true, description: "Your merchant API key." },
    ],
    responseExample: `{
  "providerRef": "DIS-9E8D7C6B5A40",
  "merchantReference": "FCL-1724840123",
  "type": "DISBURSEMENT",
  "network": "MTN",
  "msisdn": "233241234567",
  "status": "SUCCESS",
  "amount": "10.00",
  "currency": "GHS",
  "reason": null,
  "updatedAt": "2026-08-21T19:00:00Z"
}`,
    errors: [
      { status: "401", meaning: "Missing or invalid X-Api-Key." },
      { status: "404", meaning: "Unknown providerRef." },
    ],
  },
  {
    id: "list-banks",
    group: "Banks & GhIPSS",
    title: "List bank codes",
    method: "GET",
    path: "/api/v1/banks",
    auth: "apiKey",
    summary:
      "Reference list of Ghanaian bank names and codes, proxied from MojoPay GET /v1/metadata/banks.",
    when:
      "Populate a bank picker before Create Bank Transfer or Name Enquiry Credit/Debit.",
    notes: [
      "Live: 24 banks, ~3s. Shape `{ bankName, bankCode }`.",
      "ABSA is 300303. GCB BANK is 300304. STANDARD CHARTERED is 300302.",
    ],
    headers: [
      { name: "X-Api-Key", required: true, description: "Your merchant API key." },
    ],
    responseExample: `[
  { "bankName": "STANDARD CHARTERED BANK (GH) LTD", "bankCode": "300302" },
  { "bankName": "ABSA BANK (GH) LTD.", "bankCode": "300303" },
  { "bankName": "GCB BANK", "bankCode": "300304" }
]`,
    errors: [{ status: "401", meaning: "Missing or invalid X-Api-Key." }],
  },
  {
    id: "name-enquiry-credit",
    group: "Banks & GhIPSS",
    title: "Name enquiry credit (NEC)",
    method: "GET",
    path: "/api/v1/ghipss/name-enquiry/credit/{bankCode}/{accountNumber}",
    auth: "apiKey",
    summary:
      "Resolves the account-holder name for an account you intend to credit at another bank (pre-check before a bank-transfer disbursement).",
    when: "Verify the recipient name before Create Bank Transfer.",
    notes: [
      "MojoPay is tried first (POST /v1/verifications/bank_accounts); GhIPSS NEC SOAP is the fallback.",
      "Kept under /api/v1/ghipss for backwards compatibility.",
      "Returns 404 with empty body if neither provider can resolve a name (observed for dummy accounts).",
      "Collection example path: `/credit/300303/0987654321` (300303 is ABSA live). No success body recorded.",
    ],
    pathParams: [
      {
        name: "bankCode",
        type: "string",
        required: true,
        description: "Destination bank code from List Bank Codes, e.g. `300303`.",
      },
      {
        name: "accountNumber",
        type: "string",
        required: true,
        description: "Account number to look up, e.g. `0987654321`.",
      },
    ],
    headers: [
      { name: "X-Api-Key", required: true, description: "Your merchant API key." },
    ],
    responseExample: `{
  "bankCode": "300303",
  "accountNumber": "0987654321",
  "accountName": "JANE DOE",
  "source": "MOJOPAY"
}`,
    errors: [
      { status: "401", meaning: "Missing or invalid X-Api-Key." },
      { status: "404", meaning: "Neither MojoPay nor GhIPSS could resolve a name." },
    ],
  },
  {
    id: "name-enquiry-debit",
    group: "Banks & GhIPSS",
    title: "Name enquiry debit (NED)",
    method: "GET",
    path: "/api/v1/ghipss/name-enquiry/debit/{bankCode}/{accountNumber}",
    auth: "apiKey",
    summary:
      "Resolves the account-holder name for an account you intend to debit at another bank.",
    when: "Confirm the name on an account you plan to debit.",
    notes: [
      "MojoPay is tried first; GhIPSS NED SOAP is the fallback. MojoPay’s verify call does not distinguish credit/debit intent the way GhIPSS NEC/NED do, so the same MojoPay result can serve both.",
      "Collection example path: `/debit/300302/1234567890`. Live dummy → 404 empty body.",
      "Returns 404 if neither provider can resolve a name.",
    ],
    pathParams: [
      {
        name: "bankCode",
        type: "string",
        required: true,
        description: "Bank code, e.g. `300302`.",
      },
      {
        name: "accountNumber",
        type: "string",
        required: true,
        description: "Account number to look up, e.g. `1234567890`.",
      },
    ],
    headers: [
      { name: "X-Api-Key", required: true, description: "Your merchant API key." },
    ],
    responseExample: `{
  "bankCode": "300302",
  "accountNumber": "1234567890",
  "accountName": "JOHN DOE",
  "source": "MOJOPAY"
}`,
    errors: [
      { status: "401", meaning: "Missing or invalid X-Api-Key." },
      { status: "404", meaning: "Neither MojoPay nor GhIPSS could resolve a name." },
    ],
  },
  {
    id: "momo-name-enquiry",
    group: "Name Enquiry",
    title: "Mobile money name enquiry",
    method: "GET",
    path: "/api/v1/name-enquiry/{network}/{msisdn}",
    auth: "apiKey",
    summary:
      "Looks up the registered name on a mobile-money wallet, independent of any collection or disbursement.",
    when:
      "Show the customer/recipient name before charging or paying out, or to confirm the number belongs to the expected person.",
    notes: [
      "network is one of MTN, TELECEL, or AIRTELTIGO. All three returned 200 on the public host with the Postman example numbers.",
      "Live body is { msisdn, accountName, message }: no network field.",
      "Collection said lookups go via Hubtel. That could not be verified beyond the 200 JSON.",
    ],
    pathParams: [
      {
        name: "network",
        type: "string",
        required: true,
        description: "`MTN`, `TELECEL`, or `AIRTELTIGO`.",
      },
      {
        name: "msisdn",
        type: "string",
        required: true,
        description: "Wallet number in international format.",
      },
    ],
    headers: [
      { name: "X-Api-Key", required: true, description: "Your merchant API key." },
    ],
    extraExamples: [
      {
        label: "TELECEL",
        path: "/api/v1/name-enquiry/TELECEL/233201234567",
      },
      {
        label: "AIRTELTIGO",
        path: "/api/v1/name-enquiry/AIRTELTIGO/233261234567",
      },
    ],
    examplePath: "/api/v1/name-enquiry/MTN/233249223888",
    responseExample: `{
  "msisdn": "233249223888",
  "accountName": "JONAS KORANKYE",
  "message": "Account name found."
}`,
    errors: [
      { status: "401", meaning: "Missing or invalid X-Api-Key." },
      { status: "404", meaning: "No match found for that network + MSISDN." },
    ],
  },
];

export function getEndpoint(id) {
  return endpoints.find((e) => e.id === id);
}

export function curlFor(endpoint, { apiKey = "YOUR_API_KEY", baseUrl = PUBLIC_BASE_URL } = {}) {
  const path = endpoint.examplePath || concretePath(endpoint);
  const url = `${baseUrl}${path}`;
  const lines = [`curl -X ${endpoint.method} "${url}"`];
  if (endpoint.auth === "apiKey") {
    lines.push(`  -H "X-Api-Key: ${apiKey}"`);
  }
  if (endpoint.requestBody) {
    const compact = JSON.stringify(JSON.parse(endpoint.requestBody));
    lines.push(`  -H "Content-Type: application/json"`);
    lines.push(`  -d '${compact}'`);
  }
  return lines.join(" \\\n");
}

export function jsFor(endpoint, { apiKey = "YOUR_API_KEY", baseUrl = PUBLIC_BASE_URL } = {}) {
  const path = endpoint.examplePath || concretePath(endpoint);
  const headers = {};
  if (endpoint.auth === "apiKey") headers["X-Api-Key"] = apiKey;
  if (endpoint.requestBody) headers["Content-Type"] = "application/json";
  const headerLines = Object.entries(headers)
    .map(([k, v]) => `    "${k}": "${v}"`)
    .join(",\n");
  const body = endpoint.requestBody
    ? `,\n  body: JSON.stringify(${endpoint.requestBody})`
    : "";
  return `const res = await fetch("${baseUrl}${path}", {
  method: "${endpoint.method}",
  headers: {
${headerLines || "    // no extra headers"}
  }${body}
});
const data = await res.json();`;
}

function concretePath(endpoint) {
  let path = endpoint.path;
  path = path.replace("{clientId}", CLIENT_ID);
  if (endpoint.id.includes("checkout")) {
    path = path.replace("{providerRef}", "CS_F5A242825E");
  } else if (endpoint.id.includes("disbursement")) {
    path = path.replace("{providerRef}", "DIS-9E8D7C6B5A40");
  } else {
    path = path.replace("{providerRef}", "60e6ef62-2292-4a1b-95c9-a22a63325571");
  }
  if (endpoint.id === "name-enquiry-debit") {
    path = path.replace("{bankCode}", "300302");
    path = path.replace("{accountNumber}", "1234567890");
  } else {
    path = path.replace("{bankCode}", "300303");
    path = path.replace("{accountNumber}", "0987654321");
  }
  path = path.replace("{network}", "MTN");
  path = path.replace("{msisdn}", "233241234567");
  return path;
}

export { concretePath };
