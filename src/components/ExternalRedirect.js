import { useEffect } from "react";

/**
 * Sends the browser to a page outside this site. In production Vercel already
 * redirects these paths; this covers local runs and in-app navigation.
 */
const ExternalRedirect = ({ to }) => {
  useEffect(() => {
    window.location.replace(to);
  }, [to]);
  return null;
};

export default ExternalRedirect;
