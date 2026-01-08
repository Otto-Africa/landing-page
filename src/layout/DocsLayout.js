import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./DocsLayout.css";
import { getMerchantPortalUrl } from "../utils/getMerchantPortalUrl";

const DocsLayout = ({
  children,
  currentPage,
  sidebarItems,
  onThisPageItems = [],
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
            <Link to="/docs" className="docs-nav-item">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <span>Home</span>
            </Link>

            {sidebarItems &&
              sidebarItems.map((section, index) => (
                <div key={index} className="docs-nav-section">
                  <div className="docs-nav-section-header">
                    {section.icon && (
                      <span className="docs-nav-icon">{section.icon}</span>
                    )}
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
