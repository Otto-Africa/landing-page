import { useEffect } from "react";
import {
  useSearchParams,
  useNavigate,
  useLocation,
} from "react-router-dom";

const STORAGE_KEY = "otto_referral_code";
const CHANNEL_KEY = "otto_referral_channel";

/**
 * Persists ?ref= / ?channel= to sessionStorage.
 * On the home path only, redirects to `/invite/:ref` (dedicated flow like gift-cards).
 */
export default function ReferralQueryHandler() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const ref = searchParams.get("ref")?.trim();
    if (!ref) return;

    const channel = (searchParams.get("channel") || "").trim();
    try {
      sessionStorage.setItem(STORAGE_KEY, ref);
      if (channel) {
        sessionStorage.setItem(CHANNEL_KEY, channel);
      } else {
        sessionStorage.removeItem(CHANNEL_KEY);
      }
    } catch (_) {
      /* ignore quota / private mode */
    }

    const isHome = location.pathname === "/" || location.pathname === "";
    if (isHome) {
      const qs = channel
        ? `?channel=${encodeURIComponent(channel)}`
        : "";
      navigate(`/invite/${encodeURIComponent(ref)}${qs}`, { replace: true });
    }
  }, [searchParams, location.pathname, navigate]);

  return null;
}

export { STORAGE_KEY as OTTO_REFERRAL_STORAGE_KEY };
