import React from "react";
import { Navigate, useLocation } from "react-router-dom";

/**
 * Sends legacy /docs/fcl paths to /fcl.
 */
const DocsFclRedirect = () => {
  const location = useLocation();
  const rest = location.pathname.replace(/^\/docs\/fcl/, "") || "";
  return <Navigate to={`/fcl${rest}${location.search}`} replace />;
};

export default DocsFclRedirect;
