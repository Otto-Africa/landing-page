// Structured Data (JSON-LD) for SEO

/**
 * Get Organization Schema.
 * UI helpers stay in lib/ and hooks/ so pages remain declarative and API shapes stay centralized in lib/api.ts.
 */
export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Scan Africa",
  url: "https://scanafrica.com",
  logo: {
    "@type": "ImageObject",
    url: "https://scanafrica.com/img/logos/Favicon%20-%20Black@4x-8.png",
    width: 512,
    height: 512,
    caption: "Scan Africa Logo",
  },
  image: {
    "@type": "ImageObject",
    url: "https://scanafrica.com/img/logos/Favicon%20-%20Black@4x-8.png",
    width: 512,
    height: 512,
  },
  description:
    "The all-in-one payment infrastructure built for Africa's most ambitious businesses. Accept payments, manage gift cards, and launch loyalty programs with ease.",
  foundingDate: "2023",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Service",
    email: "contact@scanafrica.com",
    availableLanguage: ["English"],
  },
  sameAs: [
    "https://twitter.com/scanafrica",
    "https://linkedin.com/company/scanafrica",
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "GH",
    addressRegion: "Greater Accra",
    addressLocality: "Accra",
  },
  areaServed: {
    "@type": "Country",
    name: "Ghana",
  },
  keywords:
    "Scan, Scan Africa, Ghana fintech, payment API, gift cards, loyalty programs, fintech Ghana, payment infrastructure, QR payments, digital payments, payment solutions, API payments, gift card API, loyalty API, fintech API, payment gateway",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Scan Africa Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "QR Code Payments",
          description: "Accept payments via QR codes",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Gift Cards",
          description: "Digital gift card management",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Loyalty Programs",
          description: "Customer loyalty and rewards programs",
        },
      },
    ],
  },
});

/**
 * Get Website Schema.
 * UI helpers stay in lib/ and hooks/ so pages remain declarative and API shapes stay centralized in lib/api.ts.
 */
export const getWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Scan Africa",
  url: "https://scanafrica.com",
  description: "Payment infrastructure for Africa's most ambitious businesses",
  publisher: {
    "@type": "Organization",
    name: "Scan Africa",
  },
  potentialAction: [
    {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://scanafrica.com/docs",
      },
      "query-input": "optional name=search_term_string",
    },
  ],
  mainEntity: {
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Get Started",
        url: "https://business.scanafrica.com/merchant-onboard",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "API Documentation",
        url: "https://scanafrica.com/docs",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "About Us",
        url: "https://scanafrica.com/about",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Contact",
        url: "https://scanafrica.com/contact",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Documentation",
        url: "https://scanafrica.com/docs/getting-started",
      },
    ],
  },
});

/**
 * Get Software Application Schema.
 * UI helpers stay in lib/ and hooks/ so pages remain declarative and API shapes stay centralized in lib/api.ts.
 */
export const getSoftwareApplicationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Scan Payment Platform",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web, iOS, Android",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "GHS",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "1000",
  },
  description:
    "Accept payments, manage gift cards, and launch loyalty programs with ease.",
});

/**
 * Get Breadcrumb Schema.
 * UI helpers stay in lib/ and hooks/ so pages remain declarative and API shapes stay centralized in lib/api.ts.
 */
export const getBreadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

/**
 * Get F A Q Schema.
 * UI helpers stay in lib/ and hooks/ so pages remain declarative and API shapes stay centralized in lib/api.ts.
 */
export const getFAQSchema = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});

/**
 * Get Product Schema.
 * UI helpers stay in lib/ and hooks/ so pages remain declarative and API shapes stay centralized in lib/api.ts.
 */
export const getProductSchema = (product) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  name: product.name,
  description: product.description,
  image: product.image,
  offers: {
    "@type": "Offer",
    price: product.price || "0",
    priceCurrency: "GHS",
    availability: "https://schema.org/InStock",
  },
});

/**
 * Get Local Business Schema.
 * UI helpers stay in lib/ and hooks/ so pages remain declarative and API shapes stay centralized in lib/api.ts.
 */
export const getLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: "Scan Africa",
  description:
    "Leading fintech platform in Ghana offering payment API, gift cards, and loyalty programs",
  url: "https://scanafrica.com",
  address: {
    "@type": "PostalAddress",
    addressCountry: "GH",
    addressRegion: "Greater Accra",
    addressLocality: "Accra",
  },
  areaServed: {
    "@type": "Country",
    name: "Ghana",
  },
  serviceType: [
    "Payment Processing",
    "Gift Cards",
    "Loyalty Programs",
    "Payment API",
  ],
  keywords:
    "Scan, Ghana fintech, payment API Ghana, gift cards Ghana, loyalty programs Ghana",
});

/**
 * Get F A Q Schema For Landing.
 * UI helpers stay in lib/ and hooks/ so pages remain declarative and API shapes stay centralized in lib/api.ts.
 */
export const getFAQSchemaForLanding = () => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Scan Africa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Scan Africa is a leading fintech platform in Ghana that provides payment API, digital gift cards, and loyalty programs for businesses. We offer payment infrastructure solutions for businesses across Ghana and Africa.",
      },
    },
    {
      "@type": "Question",
      name: "Does Scan Africa offer payment API in Ghana?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Scan Africa provides a comprehensive payment API for businesses in Ghana. Our API enables businesses to accept payments, manage gift cards, and implement loyalty programs seamlessly.",
      },
    },
    {
      "@type": "Question",
      name: "How do gift cards work with Scan Africa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Scan Africa offers digital gift card solutions for businesses in Ghana. You can create, sell, and manage gift cards with custom designs and instant delivery through our gift card API.",
      },
    },
    {
      "@type": "Question",
      name: "Can I create loyalty programs with Scan Africa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Scan Africa provides a loyalty API that allows businesses in Ghana to create points-based rewards, tiered membership levels, and personalized offers to drive customer engagement and repeat business.",
      },
    },
    {
      "@type": "Question",
      name: "Is Scan Africa a fintech company in Ghana?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Scan Africa is a fintech company based in Ghana, providing payment infrastructure, gift cards, and loyalty program solutions for businesses across Ghana and Africa.",
      },
    },
    {
      "@type": "Question",
      name: "What payment methods does Scan Africa support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Scan Africa supports QR code payments, digital gift cards, and various payment methods through our payment API. We enable businesses in Ghana to accept payments seamlessly.",
      },
    },
  ],
});
