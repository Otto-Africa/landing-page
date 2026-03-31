import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./DocsLayout.css";
import { getMerchantPortalUrl } from "../utils/getMerchantPortalUrl";

const DEFAULT_SIDEBAR_ITEMS = [
  {
    title: "Get started",
    items: [
      { path: "/docs", label: "Overview" },
      { path: "/docs/getting-started", label: "Quickstart" },
      { path: "/docs/authentication", label: "Authentication" },
      { path: "/docs/testing", label: "Testing" },
    ],
  },
  {
    title: "Core concepts",
    items: [
      { path: "/docs/gift-cards", label: "Gift Cards" },
      { path: "/docs/investment-certificates", label: "Investment Certificates" },
      { path: "/docs/transactions", label: "Transactions" },
      { path: "/docs/loyalty", label: "Loyalty Programs" },
      { path: "/docs/qr-codes", label: "QR Codes" },
      { path: "/docs/settlements", label: "Settlements" },
      { path: "/docs/user-management", label: "User Management" },
    ],
  },
  {
    title: "Guides",
    items: [
      { path: "/docs/webhooks", label: "Webhooks" },
      { path: "/docs/error-handling", label: "Error Handling" },
      { path: "/docs/rate-limits", label: "Rate Limits" },
    ],
  },
  {
    title: "Tools",
    items: [
      { path: "/docs/sdks", label: "SDKs & Libraries" },
      { path: "/docs/support", label: "Support" },
    ],
  },
];

const DocsLayout = ({
  children,
  currentPage,
  onThisPageItems = [],
  nutshell = "",
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const merchantPortalUrl = getMerchantPortalUrl();

  return (
    <div className="docs-layout">
      {/* Top Header */}
      <header className="docs-header">
        <div className="docs-header-container">
          <div className="docs-header-left">
            <button
              className="docs-menu-toggle"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <Link to="/docs" className="docs-logo">
              <span className="docs-logo-icon">📚</span>
              <span className="docs-logo-text">docs</span>
            </Link>
            <div className="docs-search">
              <svg
                className="docs-search-icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search Documentation"
                className="docs-search-input"
              />
            </div>
          </div>
          <div className="docs-header-right">
            <Link to="/docs" className="docs-nav-link active">
              Docs
            </Link>
            <a
              href="https://api.ottoafrica.com/api/health"
              target="_blank"
              rel="noopener noreferrer"
              className="docs-nav-link"
            >
              Health
            </a>
            <a href={merchantPortalUrl} className="docs-signup-btn">
              Sign In
            </a>
          </div>
        </div>
      </header>

      <div className="docs-body">
        {/* Left Sidebar */}
        <aside className={`docs-sidebar ${isSidebarOpen ? "open" : ""}`}>
          <nav className="docs-sidebar-nav">
            {DEFAULT_SIDEBAR_ITEMS.map((section, index) => (
                <div key={index} className="docs-nav-section">
                  <div className="docs-nav-section-header">
                    <span className="docs-nav-section-title">
                      {section.title}
                    </span>
                  </div>
                  <div className="docs-nav-section-items">
                    {section.items.map((item, itemIndex) => (
                      <Link
                        key={itemIndex}
                        to={item.path}
                        className={`docs-nav-item ${
                          currentPage === item.path ? "active" : ""
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main
          className={`docs-main ${
            onThisPageItems.length > 0 ? "has-right-sidebar" : ""
          }`}
        >
          <div className="docs-content-wrapper">{children}</div>
        </main>

        {/* Right Sidebar - On This Page */}
        {onThisPageItems.length > 0 && (
          <aside className="docs-right-sidebar">
            <div className="docs-on-this-page">
              <h3 className="docs-on-this-page-title">On This Page</h3>
              <nav className="docs-on-this-page-nav">
                {onThisPageItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="docs-on-this-page-link"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
            {nutshell && (
              <div className="docs-right-summary">
                <strong>In a nutshell:</strong> {nutshell}
              </div>
            )}
          </aside>
        )}
      </div>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div className="docs-overlay" onClick={() => setIsSidebarOpen(false)} />
      )}
    </div>
  );
};

export default DocsLayout;
