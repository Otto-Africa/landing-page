// Structured Data (JSON-LD) for SEO

export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Otto Africa",
  url: "https://ottoafrica.com",
  logo: {
    "@type": "ImageObject",
    url: "https://ottoafrica.com/img/logos/Favicon%20-%20Black@4x-8.png",
    width: 512,
    height: 512,
    caption: "Otto Africa Logo",
  },
  image: {
    "@type": "ImageObject",
    url: "https://ottoafrica.com/img/logos/Favicon%20-%20Black@4x-8.png",
    width: 512,
    height: 512,
  },
  description:
    "The all-in-one payment infrastructure built for Africa's most ambitious businesses. Accept payments, manage gift cards, and launch loyalty programs with ease.",
  foundingDate: "2023",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Service",
    email: "contact@ottoafrica.com",
    availableLanguage: ["English"],
  },
  sameAs: [
    "https://twitter.com/ottoafrica",
    "https://linkedin.com/company/ottoafrica",
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
    "Otto, Otto Africa, Ghana fintech, payment API, gift cards, loyalty programs, fintech Ghana, payment infrastructure, QR payments, digital payments, payment solutions, API payments, gift card API, loyalty API, fintech API, payment gateway",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Otto Africa Services",
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

export const getWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Otto Africa",
  url: "https://ottoafrica.com",
  description: "Payment infrastructure for Africa's most ambitious businesses",
  publisher: {
    "@type": "Organization",
    name: "Otto Africa",
  },
  potentialAction: [
    {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://ottoafrica.com/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  ],
  mainEntity: {
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Get Started",
        url: "https://business.ottoafrica.com/merchant-onboard",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "API Documentation",
        url: "https://ottoafrica.com/docs",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "About Us",
        url: "https://ottoafrica.com/about",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Contact",
        url: "https://ottoafrica.com/contact",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Documentation",
        url: "https://ottoafrica.com/docs/getting-started",
      },
    ],
  },
});

export const getSoftwareApplicationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Otto Payment Platform",
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

export const getLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: "Otto Africa",
  description:
    "Leading fintech platform in Ghana offering payment API, gift cards, and loyalty programs",
  url: "https://ottoafrica.com",
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
    "Otto, Ghana fintech, payment API Ghana, gift cards Ghana, loyalty programs Ghana",
});

export const getFAQSchemaForLanding = () => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Otto Africa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Otto Africa is a leading fintech platform in Ghana that provides payment API, digital gift cards, and loyalty programs for businesses. We offer payment infrastructure solutions for businesses across Ghana and Africa.",
      },
    },
    {
      "@type": "Question",
      name: "Does Otto Africa offer payment API in Ghana?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Otto Africa provides a comprehensive payment API for businesses in Ghana. Our API enables businesses to accept payments, manage gift cards, and implement loyalty programs seamlessly.",
      },
    },
    {
      "@type": "Question",
      name: "How do gift cards work with Otto Africa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Otto Africa offers digital gift card solutions for businesses in Ghana. You can create, sell, and manage gift cards with custom designs and instant delivery through our gift card API.",
      },
    },
    {
      "@type": "Question",
      name: "Can I create loyalty programs with Otto Africa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Otto Africa provides a loyalty API that allows businesses in Ghana to create points-based rewards, tiered membership levels, and personalized offers to drive customer engagement and repeat business.",
      },
    },
    {
      "@type": "Question",
      name: "Is Otto Africa a fintech company in Ghana?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Otto Africa is a fintech company based in Ghana, providing payment infrastructure, gift cards, and loyalty program solutions for businesses across Ghana and Africa.",
      },
    },
    {
      "@type": "Question",
      name: "What payment methods does Otto Africa support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Otto Africa supports QR code payments, digital gift cards, and various payment methods through our payment API. We enable businesses in Ghana to accept payments seamlessly.",
      },
    },
  ],
});
