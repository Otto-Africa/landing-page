import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { showInternalDocs } from "../config/env";

/**
 * Hides provider documentation on the production site.
 */
const InternalDocsGate = ({ children }) => {
  if (!showInternalDocs()) {
    return <Navigate to="/docs" replace />;
  }
  return children ?? <Outlet />;
};

export default InternalDocsGate;
