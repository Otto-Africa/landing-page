/**
 * API base URL without trailing /api (public collect routes live at /api/public/...).
 */
import { getApiBaseUrl } from "../config/env";

/**
 * Get Api Root.
 * UI helpers stay in lib/ and hooks/ so pages remain declarative and API shapes stay centralized in lib/api.ts.
 */
export function getApiRoot() {
  return getApiBaseUrl().replace(/\/api\/?$/, "");
}

/**
 * New Idempotency Key.
 * UI helpers stay in lib/ and hooks/ so pages remain declarative and API shapes stay centralized in lib/api.ts.
 */
export function newIdempotencyKey() {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return `web_ddr_${crypto.randomUUID()}`;
  }
  return `web_ddr_${Date.now()}_${Math.random().toString(36).slice(2)}`;
}

const GH_NETWORKS = [
  { code: "MTN", label: "MTN" },
  { code: "AT", label: "AirtelTigo" },
  { code: "VOD", label: "Telecel" },
];

/**
 * Detect Ghana Network.
 * UI helpers stay in lib/ and hooks/ so pages remain declarative and API shapes stay centralized in lib/api.ts.
 */
export function detectGhanaNetwork(phone) {
  let digits = String(phone || "").replace(/\D/g, "");
  if (digits.startsWith("233")) digits = `0${digits.slice(3)}`;
  if (digits.length === 9 && !digits.startsWith("0")) digits = `0${digits}`;
  const prefix = digits.slice(0, 3);
  const mtn = new Set(["024", "054", "055", "059", "053", "025"]);
  const vod = new Set(["020", "050"]);
  const at = new Set(["026", "027", "056", "057"]);
  if (mtn.has(prefix)) return "MTN";
  if (vod.has(prefix)) return "VOD";
  if (at.has(prefix)) return "AT";
  return "";
}

/**
 * Mask Phone.
 * UI helpers stay in lib/ and hooks/ so pages remain declarative and API shapes stay centralized in lib/api.ts.
 */
export function maskPhone(phone) {
  const digits = String(phone || "").replace(/\D/g, "");
  if (digits.length < 4) return phone;
  return `••• ••• ${digits.slice(-4)}`;
}

export { GH_NETWORKS };

/**
 * Fetch Collect Summary.
 * UI helpers stay in lib/ and hooks/ so pages remain declarative and API shapes stay centralized in lib/api.ts.
 */
export async function fetchCollectSummary(collectId) {
  const res = await fetch(
    `${getApiRoot()}/api/public/collect/${encodeURIComponent(collectId)}/summary`,
  );
  if (!res.ok) throw new Error("Collect payment not found");
  const json = await res.json();
  return json.data ?? json;
}

/**
 * Initiate Direct Debit.
 * UI helpers stay in lib/ and hooks/ so pages remain declarative and API shapes stay centralized in lib/api.ts.
 */
export async function initiateDirectDebit(
  collectId,
  phone,
  network,
  idempotencyKey,
) {
  const res = await fetch(
    `${getApiRoot()}/api/public/collect/${encodeURIComponent(collectId)}/direct-debit/initiate`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Idempotency-Key": idempotencyKey,
      },
      body: JSON.stringify({ phone, network }),
    },
  );
  const json = await res.json();
  if (!res.ok) {
    throw new Error(json.message || "Could not start payment");
  }
  return json.data ?? json;
}

/**
 * Fetch Direct Debit Status.
 * UI helpers stay in lib/ and hooks/ so pages remain declarative and API shapes stay centralized in lib/api.ts.
 */
export async function fetchDirectDebitStatus(collectId, debitRequestId) {
  const url = `${getApiRoot()}/api/public/collect/${encodeURIComponent(collectId)}/direct-debit/status?debitRequestId=${encodeURIComponent(debitRequestId)}`;
  const res = await fetch(url);
  const json = await res.json();
  if (!res.ok) {
    throw new Error(json.message || "Could not check payment status");
  }
  return json.data ?? json;
}

/**
 * Cancel Direct Debit.
 * UI helpers stay in lib/ and hooks/ so pages remain declarative and API shapes stay centralized in lib/api.ts.
 */
export async function cancelDirectDebit(collectId, debitRequestId) {
  await fetch(
    `${getApiRoot()}/api/public/collect/${encodeURIComponent(collectId)}/direct-debit/cancel`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ debitRequestId }),
    },
  );
}
