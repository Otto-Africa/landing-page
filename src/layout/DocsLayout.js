import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "./DocsLayout.css";
import { getMerchantPortalUrl } from "../utils/getMerchantPortalUrl";
import { showInternalDocs } from "../config/env";

const DOCS_SIDEBAR_ITEMS = [
  {
    title: "Get started",
    items: [
      { path: "/docs", label: "Overview" },
      { path: "/docs/getting-started", label: "Quickstart" },
      { path: "/docs/testing", label: "Testing" },
    ],
  },
  {
    title: "Payments",
    items: [
      { path: "/docs/payments", label: "Collect and payout" },
      { path: "/docs/transfers", label: "Transfers" },
      { path: "/docs/funding-flows", label: "Funding flows" },
      { path: "/docs/webhooks", label: "Webhooks" },
      { path: "/docs/transactions", label: "Transactions" },
      { path: "/docs/qr-codes", label: "QR Codes" },
      { path: "/docs/settlements", label: "Settlements" },
    ],
  },
  {
    title: "Identity",
    items: [
      { path: "/docs/identity", label: "Identity overview" },
      { path: "/docs/authentication", label: "Authentication" },
      { path: "/docs/pin", label: "Transaction PIN" },
      { path: "/docs/user-management", label: "User Management" },
    ],
  },
  {
    title: "Loyalty Management",
    items: [
      { path: "/docs/loyalty", label: "Loyalty programs" },
      { path: "/docs/gift-cards", label: "Gift Cards" },
    ],
  },
  {
    title: "LLM Conversations",
    items: [{ path: "/docs/llm", label: "CosmoLLM" }],
  },
  {
    title: "Accounting",
    items: [{ path: "/docs/accounting", label: "Merchant accounting" }],
  },
  {
    title: "More products",
    items: [
      {
        path: "/docs/investment-certificates",
        label: "Investment Certificates",
      },
    ],
  },
  {
    title: "Guides",
    items: [
      { path: "/docs/error-handling", label: "Error Handling" },
      { path: "/docs/rate-limits", label: "Rate Limits" },
    ],
  },
  {
    title: "Tools",
    items: [
      { path: "/demo-bank", label: "Demo Bank" },
      { path: "/docs/sdks", label: "SDKs & Libraries" },
      { path: "/docs/support", label: "Support" },
    ],
  },
];

const FCL_SIDEBAR_ITEMS = [
  {
    title: "Get started",
    items: [
      { path: "/fcl", label: "Overview" },
      { path: "/fcl/architecture", label: "Architecture" },
    ],
  },
  {
    title: "Payment Gateway",
    items: [
      { path: "/fcl/gateway", label: "Gateway overview" },
      { path: "/fcl/gateway-quickstart", label: "Quickstart" },
      { path: "/fcl/gateway-authentication", label: "Authentication" },
      { path: "/fcl/gateway-webhooks", label: "Webhooks" },
      { path: "/fcl/gateway-errors", label: "Errors" },
      { path: "/fcl/gateway-reference", label: "Endpoints" },
    ],
  },
  {
    title: "Unified Channels",
    items: [
      { path: "/fcl/unified", label: "Overview" },
      { path: "/fcl/pin-management", label: "PIN Management" },
      { path: "/fcl/unified-reference", label: "Endpoints" },
    ],
  },
  {
    title: "Core Banking",
    items: [{ path: "/fcl/core-banking", label: "Core Banking" }],
  },
];

function sectionContainsPage(section, currentPage) {
  return section.items.some(
    (item) =>
      currentPage === item.path ||
      (item.path !== "/docs" &&
        item.path !== "/fcl" &&
        currentPage.startsWith(`${item.path}/`)) ||
      (item.path === "/fcl/gateway-reference" &&
        currentPage.startsWith("/fcl/gateway/api/")) ||
      (item.path === "/fcl/core-banking" &&
        currentPage.startsWith("/fcl/core-banking/")),
  );
}

function isNavItemActive(itemPath, currentPage) {
  if (currentPage === itemPath) return true;
  if (itemPath === "/docs" || itemPath === "/fcl") return false;
  if (itemPath === "/fcl/gateway-reference") {
    return currentPage.startsWith("/fcl/gateway/api/");
  }
  if (itemPath === "/fcl/core-banking") {
    return currentPage.startsWith("/fcl/core-banking/");
  }
  return currentPage.startsWith(`${itemPath}/`);
}

/**
 * Docs Layout.
 * Public docs use /docs. Internal provider docs use /fcl.
 */
const DocsLayout = ({
  children,
  currentPage,
  onThisPageItems = [],
  nutshell = "",
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const isFclSite = currentPage === "/fcl" || currentPage.startsWith("/fcl/");
  const sidebarItems = isFclSite ? FCL_SIDEBAR_ITEMS : DOCS_SIDEBAR_ITEMS;
  const showFclNav = showInternalDocs();

  const initialOpen = useMemo(() => {
    const open = {};
    sidebarItems.forEach((section) => {
      open[section.title] = sectionContainsPage(section, currentPage);
    });
    return open;
  }, [sidebarItems, currentPage]);

  const [openSections, setOpenSections] = useState(initialOpen);

  useEffect(() => {
    setOpenSections((prev) => {
      const next = { ...prev };
      sidebarItems.forEach((section) => {
        if (sectionContainsPage(section, currentPage)) {
          next[section.title] = true;
        }
      });
      return next;
    });
  }, [currentPage, sidebarItems]);

  const toggleSection = (title) => {
    setOpenSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const merchantPortalUrl = getMerchantPortalUrl();
  const homePath = isFclSite ? "/fcl" : "/docs";
  const homeLabel = isFclSite ? "fcl" : "docs";

  return (
    <div className="docs-layout">
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
            <Link to={homePath} className="docs-logo">
              <span className="docs-logo-icon">📚</span>
              <span className="docs-logo-text">{homeLabel}</span>
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
            <Link
              to="/docs"
              className={`docs-nav-link ${!isFclSite ? "active" : ""}`}
            >
              Docs
            </Link>
            {showFclNav ? (
              <Link
                to="/fcl"
                className={`docs-nav-link ${isFclSite ? "active" : ""}`}
              >
                FCL
              </Link>
            ) : null}
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
        <aside className={`docs-sidebar ${isSidebarOpen ? "open" : ""}`}>
          <nav className="docs-sidebar-nav">
            {sidebarItems.map((section) => {
              const isOpen = Boolean(openSections[section.title]);
              return (
                <div key={section.title} className="docs-nav-section">
                  <button
                    type="button"
                    className="docs-nav-section-header"
                    onClick={() => toggleSection(section.title)}
                    aria-expanded={isOpen}
                  >
                    <span className="docs-nav-section-title">
                      {section.title}
                    </span>
                    <span
                      className={`docs-nav-section-chevron ${
                        isOpen ? "open" : ""
                      }`}
                      aria-hidden="true"
                    >
                      ▾
                    </span>
                  </button>
                  {isOpen ? (
                    <div className="docs-nav-section-items">
                      {section.items.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className={`docs-nav-item ${
                            isNavItemActive(item.path, currentPage)
                              ? "active"
                              : ""
                          }`}
                          onClick={() => setIsSidebarOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </nav>
        </aside>

        <main
          className={`docs-main ${
            onThisPageItems.length > 0 ? "has-right-sidebar" : ""
          }`}
        >
          <div className="docs-content-wrapper">{children}</div>
        </main>

        {onThisPageItems.length > 0 && (
          <aside className="docs-right-sidebar">
            <div className="docs-on-this-page">
              <h3 className="docs-on-this-page-title">On This Page</h3>
              <nav className="docs-on-this-page-nav">
                {onThisPageItems.map((item) => (
                  <a
                    key={item.href}
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

      {isSidebarOpen && (
        <div className="docs-overlay" onClick={() => setIsSidebarOpen(false)} />
      )}
    </div>
  );
};

export default DocsLayout;
