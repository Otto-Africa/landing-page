import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Main pages
import Landing from "./pages/Landing";

// Product pages
import QRPayments from "./pages/QRPayments";
import GiftCards from "./pages/GiftCards";
import Loyalty from "./pages/Loyalty";

// Solution pages
import BusinessSolutions from "./pages/BusinessSolutions";
import PersonalSolutions from "./pages/PersonalSolutions";

// Company pages
import About from "./pages/About";
import Contact from "./pages/Contact";

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

// Import routes
import { paths } from "./utils/routes";

function App() {
  return (
    <Router>
      <Routes>
        {/* Main landing page */}
        <Route path={paths.LANDING_PAGE} element={<Landing />} />

        {/* Product pages */}
        <Route path={paths.PRODUCTS_QR_PAYMENTS} element={<QRPayments />} />
        <Route path={paths.PRODUCTS_GIFT_CARDS} element={<GiftCards />} />
        <Route path={paths.PRODUCTS_LOYALTY} element={<Loyalty />} />

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

        {/* 404 Fallback - redirect to home */}
        <Route path="*" element={<Landing />} />
      </Routes>
    </Router>
  );
}

export default App;
