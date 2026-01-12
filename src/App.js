import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import CookieConsent from "./components/CookieConsent";

// Main pages
import Landing from "./pages/Landing";

// Solution pages
import BusinessSolutions from "./pages/BusinessSolutions";
import PersonalSolutions from "./pages/PersonalSolutions";

// Company pages
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";
import Security from "./pages/Security";

// About sub-pages
import QRPayments from "./pages/about/qr-payments";
import GiftCards from "./pages/about/gift-cards";
import Loyalty from "./pages/about/loyalty";

// Documentation pages
import DocsIndex from "./pages/docs/index";
import GettingStarted from "./pages/docs/getting-started";
import Authentication from "./pages/docs/authentication";
import DocsGiftCards from "./pages/docs/gift-cards";
import Transactions from "./pages/docs/transactions";
import DocsLoyalty from "./pages/docs/loyalty";
import QRCodes from "./pages/docs/qr-codes";
import Settlements from "./pages/docs/settlements";
import UserManagement from "./pages/docs/user-management";
import Webhooks from "./pages/docs/webhooks";
import ErrorHandling from "./pages/docs/error-handling";
import RateLimits from "./pages/docs/rate-limits";
import SDKs from "./pages/docs/sdks";
import Testing from "./pages/docs/testing";
import Support from "./pages/docs/support";

// Gift Card Share
import GiftCardShare from "./pages/GiftCardShare";
import Pricing from "./pages/Pricing";
import Checkout from "./pages/Checkout";

// Import routes
import { paths } from "./utils/routes";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <CookieConsent />
      <Routes>
        {/* Main landing page */}
        <Route path={paths.LANDING_PAGE} element={<Landing />} />

        {/* Solution pages */}
        <Route
          path={paths.SOLUTIONS_BUSINESS}
          element={<BusinessSolutions />}
        />
        <Route
          path={paths.SOLUTIONS_PERSONAL}
          element={<PersonalSolutions />}
        />

        {/* Company pages */}
        <Route path={paths.ABOUT} element={<About />} />
        <Route path={paths.CONTACT} element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/security" element={<Security />} />
        
        {/* About sub-pages */}
        <Route path="/about/qr-payments" element={<QRPayments />} />
        <Route path="/about/gift-cards" element={<GiftCards />} />
        <Route path="/about/loyalty" element={<Loyalty />} />

        {/* Documentation pages */}
        <Route path={paths.DOCS} element={<DocsIndex />} />
        <Route path={paths.DOCS_GETTING_STARTED} element={<GettingStarted />} />
        <Route path={paths.DOCS_AUTHENTICATION} element={<Authentication />} />
        <Route path={paths.DOCS_GIFT_CARDS} element={<DocsGiftCards />} />
        <Route path={paths.DOCS_TRANSACTIONS} element={<Transactions />} />
        <Route path={paths.DOCS_LOYALTY} element={<DocsLoyalty />} />
        <Route path={paths.DOCS_QR_CODES} element={<QRCodes />} />
        <Route path={paths.DOCS_SETTLEMENTS} element={<Settlements />} />
        <Route path={paths.DOCS_USER_MANAGEMENT} element={<UserManagement />} />
        <Route path={paths.DOCS_WEBHOOKS} element={<Webhooks />} />
        <Route path={paths.DOCS_ERROR_HANDLING} element={<ErrorHandling />} />
        <Route path={paths.DOCS_RATE_LIMITS} element={<RateLimits />} />
        <Route path={paths.DOCS_SDKS} element={<SDKs />} />
        <Route path={paths.DOCS_TESTING} element={<Testing />} />
        <Route path={paths.DOCS_SUPPORT} element={<Support />} />

        {/* Gift Card Share */}
        <Route path="/gift-cards/:id" element={<GiftCardShare />} />

        {/* Pricing */}
        <Route path="/pricing" element={<Pricing />} />

        {/* Checkout */}
        <Route path="/checkout" element={<Checkout />} />

        {/* 404 Fallback - redirect to docs */}
        <Route path="*" element={<Navigate to="/docs" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
