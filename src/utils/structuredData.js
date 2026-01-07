// Structured Data (JSON-LD) for SEO

export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Otto Africa",
  "url": "https://ottoafrica.com",
  "logo": "https://ottoafrica.com/img/logos/Logo Black.png",
  "description": "The all-in-one payment infrastructure built for Africa's most ambitious businesses. Accept payments, manage gift cards, and launch loyalty programs with ease.",
  "foundingDate": "2020",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+233-50-333-6277",
    "contactType": "Customer Service",
    "email": "contact@ottoafrica.com",
    "availableLanguage": ["English"]
  },
  "sameAs": [
    "https://twitter.com/ottoafrica",
    "https://linkedin.com/company/ottoafrica",
    "https://discord.gg/ottoafrica"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "GH",
    "addressRegion": "Greater Accra"
  }
});

export const getWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Otto Africa",
  "url": "https://ottoafrica.com",
  "description": "Payment infrastructure for Africa's most ambitious businesses",
  "publisher": {
    "@type": "Organization",
    "name": "Otto Africa"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://ottoafrica.com/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
});

export const getSoftwareApplicationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Otto Payment Platform",
  "applicationCategory": "FinanceApplication",
  "operatingSystem": "Web, iOS, Android",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "GHS"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "1000"
  },
  "description": "Accept payments, manage gift cards, and launch loyalty programs with ease."
});

export const getBreadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const getFAQSchema = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

export const getProductSchema = (product) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": product.name,
  "description": product.description,
  "image": product.image,
  "offers": {
    "@type": "Offer",
    "price": product.price || "0",
    "priceCurrency": "GHS",
    "availability": "https://schema.org/InStock"
  }
});

