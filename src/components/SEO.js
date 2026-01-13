import { useEffect } from 'react';

const SEO = ({
  title = "Otto Africa - Scale without limits. Payment Infrastructure for Africa",
  description = "The all-in-one payment infrastructure built for Africa's most ambitious businesses. Accept payments, manage gift cards, and launch loyalty programs with ease.",
  keywords = "payment infrastructure, QR payments, digital gift cards, loyalty programs, Africa payments, Ghana payments, fintech, payment solutions, business payments",
  image = "https://ottoafrica.com/img/logos/Favicon%20-%20Black@4x-8.png",
  url = "https://ottoafrica.com",
  type = "website",
  author = "Otto Africa",
  noindex = false,
  structuredData = null,
}) => {
  const fullTitle = title.includes('Otto') ? title : `${title} | Otto Africa`;
  
  // Normalize URL: ensure it's https://ottoafrica.com (no www, no trailing slash except root)
  let fullUrl = url.startsWith('http') ? url : `https://ottoafrica.com${url}`;
  // Remove www if present and ensure https
  fullUrl = fullUrl.replace(/^https?:\/\/(www\.)?/, 'https://');
  // Remove trailing slash except for root domain
  if (fullUrl !== 'https://ottoafrica.com' && fullUrl.endsWith('/')) {
    fullUrl = fullUrl.slice(0, -1);
  }
  // Ensure it starts with https://ottoafrica.com (canonical domain)
  if (!fullUrl.startsWith('https://ottoafrica.com')) {
    fullUrl = fullUrl.replace(/^https?:\/\/[^/]+/, 'https://ottoafrica.com');
  }
  
  const fullImage = image.startsWith('http') ? image : `https://ottoafrica.com${image}`;

  useEffect(() => {
    // Update document title
    document.title = fullTitle;

    // Update or create meta tags
    const updateMetaTag = (name, content, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Primary Meta Tags
    updateMetaTag('title', fullTitle);
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', author);
    updateMetaTag('robots', noindex ? "noindex, nofollow" : "index, follow");
    updateMetaTag('language', 'English');
    updateMetaTag('revisit-after', '7 days');
    updateMetaTag('distribution', 'global');
    updateMetaTag('rating', 'general');

    // Open Graph / Facebook
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:url', fullUrl, true);
    updateMetaTag('og:title', fullTitle, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', fullImage, true);
    updateMetaTag('og:image:width', '1200', true);
    updateMetaTag('og:image:height', '630', true);
    updateMetaTag('og:site_name', 'Otto Africa', true);
    updateMetaTag('og:locale', 'en_US', true);

    // Twitter
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:url', fullUrl);
    updateMetaTag('twitter:title', fullTitle);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', fullImage);
    updateMetaTag('twitter:site', '@ottoafrica');
    updateMetaTag('twitter:creator', '@ottoafrica');

    // Additional Meta Tags
    updateMetaTag('theme-color', '#1B3359');
    updateMetaTag('msapplication-TileColor', '#1B3359');
    updateMetaTag('apple-mobile-web-app-capable', 'yes');
    updateMetaTag('apple-mobile-web-app-status-bar-style', 'black-translucent');
    updateMetaTag('apple-mobile-web-app-title', 'Otto Africa');

    // Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', fullUrl);

    // Add structured data
    if (structuredData) {
      // Remove existing structured data scripts
      const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
      existingScripts.forEach(script => script.remove());
      
      // Add new structured data
      if (Array.isArray(structuredData)) {
        structuredData.forEach((data, index) => {
          const scriptTag = document.createElement('script');
          scriptTag.setAttribute('type', 'application/ld+json');
          scriptTag.textContent = JSON.stringify(data);
          scriptTag.id = `structured-data-${index}`;
          document.head.appendChild(scriptTag);
        });
      } else {
        const scriptTag = document.createElement('script');
        scriptTag.setAttribute('type', 'application/ld+json');
        scriptTag.textContent = JSON.stringify(structuredData);
        document.head.appendChild(scriptTag);
      }
    }
  }, [fullTitle, description, keywords, author, noindex, fullUrl, fullImage, type, structuredData]);

  return null;
};

export default SEO;

