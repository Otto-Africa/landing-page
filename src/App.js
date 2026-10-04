import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import InvestmentTermsAndConditions from "./pages/InvestmentTermsAndConditions";
import CookiePolicy from "./pages/CookiePolicy";
import Security from "./pages/Security";
import AccountDeletion from "./pages/AccountDeletion";
import Page404 from "./pages/404";

// About sub-pages
import QRPayments from "./pages/about/qr-payments";
import GiftCards from "./pages/about/gift-cards";
import Loyalty from "./pages/about/loyalty";

// Documentation pages
import DocsIndex from "./pages/docs/index";
import GettingStarted from "./pages/docs/getting-started";
import Authentication from "./pages/docs/authentication";
import DocsGiftCards from "./pages/docs/gift-cards";
import InvestmentCertificates from "./pages/docs/investment-certificates";
import Transactions from "./pages/docs/transactions";
import DocsLoyalty from "./pages/docs/loyalty";
import QRCodes from "./pages/docs/qr-codes";
import Settlements from "./pages/docs/settlements";
import UserManagement from "./pages/docs/user-management";
import Webhooks from "./pages/docs/webhooks";
import ErrorHandling from "./pages/docs/error-handling";
import RateLimits from "./pages/docs/rate-limits";
import SDKs from "./pages/docs/sdks";
import AndroidSdkDocs from "./pages/docs/android-sdk";
import IosSdkDocs from "./pages/docs/ios-sdk";
import FlutterSdkDocs from "./pages/docs/flutter-sdk";
import JavascriptSdkDocs from "./pages/docs/javascript-sdk";
import Testing from "./pages/docs/testing";
import Support from "./pages/docs/support";
import Payments from "./pages/docs/payments";
import TransfersDocs from "./pages/docs/transfers";
import FundingFlows from "./pages/docs/funding-flows";
import PinDocs from "./pages/docs/pin";
import IdentityDocs from "./pages/docs/identity";
import LlmConversations from "./pages/docs/llm";
import AccountingDocs from "./pages/docs/accounting";
import InternalDocsGate from "./components/InternalDocsGate";
import DocsFclRedirect from "./components/DocsFclRedirect";
import FclOverview from "./pages/docs/fcl/index";
import FclArchitecture from "./pages/docs/fcl/architecture";
import FclGateway from "./pages/docs/fcl/gateway";
import GatewayQuickstart from "./pages/docs/fcl/gateway-quickstart";
import GatewayAuthentication from "./pages/docs/fcl/gateway-authentication";
import GatewayWebhooks from "./pages/docs/fcl/gateway-webhooks";
import GatewayErrors from "./pages/docs/fcl/gateway-errors";
import GatewayReference from "./pages/docs/fcl/gateway-reference";
import GatewayEndpoint from "./pages/docs/fcl/gateway-endpoint";
import UnifiedOverview from "./pages/docs/fcl/unified";
import UnifiedReference from "./pages/docs/fcl/unified-reference";
import PinManagement from "./pages/docs/fcl/pin-management";
import CoreBanking from "./pages/docs/fcl/core-banking";

// Gift Card Share
import InviteReferralPage from "./pages/InviteReferralPage";
import GiftCardShare from "./pages/GiftCardShare";
import GiftCardReceive from "./pages/GiftCardReceive";
import InvestmentGiftReceive from "./pages/InvestmentGiftReceive";
import PayPage from "./pages/PayPage";
import Pricing from "./pages/Pricing";
import Checkout from "./pages/Checkout";
import DemoBank from "./pages/DemoBank";

// Import routes
import { paths } from "./utils/routes";
import ReferralQueryHandler from "./components/ReferralQueryHandler";

/**
 * App.
 * UI helpers stay in lib/ and hooks/ so pages remain declarative and API shapes stay centralized in lib/api.ts.
 */
function App() {
  return (
    <Router>
      <ScrollToTop />
      <ReferralQueryHandler />
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
        <Route
          path="/investment-terms-and-conditions"
          element={<InvestmentTermsAndConditions />}
        />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/security" element={<Security />} />
        <Route path="/account-deletion" element={<AccountDeletion />} />

        {/* About sub-pages */}
        <Route path="/about/qr-payments" element={<QRPayments />} />
        <Route path="/about/gift-cards" element={<GiftCards />} />
        <Route path="/about/loyalty" element={<Loyalty />} />

        {/* Documentation pages */}
        <Route path={paths.DOCS} element={<DocsIndex />} />
        <Route path={paths.DOCS_GETTING_STARTED} element={<GettingStarted />} />
        <Route path={paths.DOCS_AUTHENTICATION} element={<Authentication />} />
        <Route path={paths.DOCS_GIFT_CARDS} element={<DocsGiftCards />} />
        <Route
          path={paths.DOCS_INVESTMENT_CERTIFICATES}
          element={<InvestmentCertificates />}
        />
        <Route path={paths.DOCS_TRANSACTIONS} element={<Transactions />} />
        <Route path={paths.DOCS_LOYALTY} element={<DocsLoyalty />} />
        <Route path={paths.DOCS_QR_CODES} element={<QRCodes />} />
        <Route path={paths.DOCS_SETTLEMENTS} element={<Settlements />} />
        <Route path={paths.DOCS_USER_MANAGEMENT} element={<UserManagement />} />
        <Route path={paths.DOCS_WEBHOOKS} element={<Webhooks />} />
        <Route path={paths.DOCS_ERROR_HANDLING} element={<ErrorHandling />} />
        <Route path={paths.DOCS_RATE_LIMITS} element={<RateLimits />} />
        <Route path={paths.DOCS_SDKS} element={<SDKs />} />
        <Route path={paths.DOCS_ANDROID_SDK} element={<AndroidSdkDocs />} />
        <Route path={paths.DOCS_IOS_SDK} element={<IosSdkDocs />} />
        <Route path={paths.DOCS_FLUTTER_SDK} element={<FlutterSdkDocs />} />
        <Route
          path={paths.DOCS_JAVASCRIPT_SDK}
          element={<JavascriptSdkDocs />}
        />
        <Route path={paths.DOCS_TESTING} element={<Testing />} />
        <Route path={paths.DOCS_SUPPORT} element={<Support />} />
        <Route path={paths.DOCS_PAYMENTS} element={<Payments />} />
        <Route path={paths.DOCS_TRANSFERS} element={<TransfersDocs />} />
        <Route path={paths.DOCS_FUNDING_FLOWS} element={<FundingFlows />} />
        <Route path={paths.DOCS_PIN} element={<PinDocs />} />
        <Route path={paths.DOCS_IDENTITY} element={<IdentityDocs />} />
        <Route path={paths.DOCS_LLM} element={<LlmConversations />} />
        <Route path={paths.DOCS_ACCOUNTING} element={<AccountingDocs />} />

        {/* Internal provider docs at /fcl — not published on production */}
        <Route element={<InternalDocsGate />}>
          <Route path={paths.FCL} element={<FclOverview />} />
          <Route
            path={paths.FCL_ARCHITECTURE}
            element={<FclArchitecture />}
          />
          <Route path={paths.FCL_GATEWAY} element={<FclGateway />} />
          <Route
            path={paths.FCL_GATEWAY_QUICKSTART}
            element={<GatewayQuickstart />}
          />
          <Route
            path={paths.FCL_GATEWAY_AUTHENTICATION}
            element={<GatewayAuthentication />}
          />
          <Route
            path={paths.FCL_GATEWAY_WEBHOOKS}
            element={<GatewayWebhooks />}
          />
          <Route path={paths.FCL_GATEWAY_ERRORS} element={<GatewayErrors />} />
          <Route
            path={paths.FCL_GATEWAY_REFERENCE}
            element={<GatewayReference />}
          />
          <Route
            path={paths.FCL_GATEWAY_ENDPOINT}
            element={<GatewayEndpoint />}
          />
          <Route path={paths.FCL_UNIFIED} element={<UnifiedOverview />} />
          <Route
            path={paths.FCL_UNIFIED_REFERENCE}
            element={<UnifiedReference />}
          />
          <Route path={paths.FCL_PIN} element={<PinManagement />} />
          <Route
            path={paths.FCL_CORE_BANKING_ENDPOINT}
            element={<CoreBanking />}
          />
          <Route path={paths.FCL_CORE_BANKING} element={<CoreBanking />} />
        </Route>

        {/* Legacy /docs/fcl → /fcl */}
        <Route path="/docs/fcl/*" element={<DocsFclRedirect />} />
        <Route path="/docs/fcl" element={<DocsFclRedirect />} />

        {/* Referral invite — deep link try + OS-specific store CTAs */}
        <Route path={paths.INVITE_REFERRAL} element={<InviteReferralPage />} />

        {/* Gift Card Share (legacy /gift-cards/:id) */}
        <Route path="/gift-cards/:id" element={<GiftCardShare />} />
        {/* Gift Card Receive – link from email/SMS: ?token= */}
        <Route path="/gift-cards/receive" element={<GiftCardReceive />} />
        {/* Investment Gift Receive – link from email/SMS: ?token= */}
        <Route
          path="/investment-gift/receive"
          element={<InvestmentGiftReceive />}
        />

        {/* Pay – scan merchant QR: /pay/:qrId?amount= (deeplink to app or download) */}
        <Route path="/pay/:qrId" element={<PayPage />} />

        {/* Pricing */}
        <Route path="/pricing" element={<Pricing />} />

        {/* Checkout */}
        <Route path="/checkout" element={<Checkout />} />

        {/* Demo bank — simulate NUBAN / MoMo transfers (non-production) */}
        <Route path={paths.DEMO_BANK} element={<DemoBank />} />
        <Route path="/test-bank" element={<DemoBank />} />

        {/* 404 Fallback */}
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  );
}

export default App;
