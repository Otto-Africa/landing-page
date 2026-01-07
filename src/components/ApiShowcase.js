import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ApiShowcase = () => {
  const [activeTab, setActiveTab] = useState('create-gift-card');
  const [selectedLanguage, setSelectedLanguage] = useState('curl');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const showcaseRef = useScrollAnimation({ threshold: 0.1 });

  const codeExamples = {
    'create-gift-card': {
      title: 'Create Gift Card',
      description: 'Create a new gift card template with custom denominations',
      curl: `curl -X POST "https://api.otto.com/merchant/giftcard-templates" \\
  -H "Authorization: Bearer your_api_key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "Birthday Special",
    "denominations": [25, 50, 100],
    "currency": "GHS"
  }'`,
      javascript: `const response = await fetch('https://api.otto.com/merchant/giftcard-templates', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer your_api_key',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'Birthday Special',
    denominations: [25, 50, 100],
    currency: 'GHS'
  })
});

const data = await response.json();`,
      python: `import requests

response = requests.post(
    'https://api.otto.com/merchant/giftcard-templates',
    headers={
        'Authorization': 'Bearer your_api_key',
        'Content-Type': 'application/json'
    },
    json={
        'name': 'Birthday Special',
        'denominations': [25, 50, 100],
        'currency': 'GHS'
    }
)

data = response.json()`
    },
    'list-transactions': {
      title: 'List Transactions',
      description: 'Retrieve transaction history with filtering',
      curl: `curl -X GET "https://api.otto.com/merchant/transactions?page=1&per_page=20" \\
  -H "Authorization: Bearer your_api_key"`,
      javascript: `const response = await fetch('https://api.otto.com/merchant/transactions?page=1&per_page=20', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer your_api_key'
  }
});

const transactions = await response.json();`,
      python: `import requests

response = requests.get(
    'https://api.otto.com/merchant/transactions',
    headers={
        'Authorization': 'Bearer your_api_key'
    },
    params={
        'page': 1,
        'per_page': 20
    }
)

transactions = response.json()`
    },
    'redeem-gift-card': {
      title: 'Redeem Gift Card',
      description: 'Process a gift card redemption',
      curl: `curl -X POST "https://api.otto.com/merchant/giftcards/ABC123/redeem" \\
  -H "Authorization: Bearer your_api_key" \\
  -H "Content-Type: application/json" \\
  -d '{"amount": 25.00}'`,
      javascript: `const response = await fetch('https://api.otto.com/merchant/giftcards/ABC123/redeem', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer your_api_key',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    amount: 25.00
  })
});

const result = await response.json();`,
      python: `import requests

response = requests.post(
    'https://api.otto.com/merchant/giftcards/ABC123/redeem',
    headers={
        'Authorization': 'Bearer your_api_key',
        'Content-Type': 'application/json'
    },
    json={
        'amount': 25.00
    }
)

result = response.json()`
    }
  };

  const currentExample = codeExamples[activeTab];

  const languages = [
    { key: 'curl', label: 'BASH' },
    { key: 'javascript', label: 'JavaScript' },
    { key: 'python', label: 'Python' }
  ];

  const selectedLanguageData = languages.find(lang => lang.key === selectedLanguage) || languages[0];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const getCodeForLanguage = (language) => {
    return currentExample[language] || currentExample.curl;
  };

  return (
    <section ref={showcaseRef} className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4 scroll-animate">
            Simple, Powerful API
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto scroll-animate delay-100">
            Get started quickly with our comprehensive API. Here are some common operations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Code Example Selector */}
          <div className="scroll-animate delay-200">
            <div className="space-y-4 mb-6">
              {Object.entries(codeExamples).map(([key, example], index) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`w-full text-left p-4 rounded-lg border transition-all duration-300 transform hover:scale-[1.02] scroll-animate ${
                    activeTab === key
                      ? 'border-otto-blue bg-gray-50 shadow-md'
                      : 'border-gray-200 bg-white hover:border-otto-blue'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h3 className={`font-medium ${activeTab === key ? 'text-otto-blue' : 'text-gray-900'}`}>
                    {example.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {example.description}
                  </p>
                </button>
              ))}
            </div>

            <div className="text-center">
              <Link
                to="/docs/getting-started"
                className="inline-flex items-center text-otto-blue hover:text-black font-medium transition-colors duration-200"
              >
                View complete documentation
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Code Display */}
          <div className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-lg scroll-animate delay-300">
            <div className="border-b border-gray-200 px-6 py-4">
              <div className="flex justify-between items-center">
                {/* Language Dropdown */}
                <div className="relative" ref={dropdownRef}>
                <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
                    aria-label="Select language"
                  >
                    <span className="text-xs text-gray-500 uppercase font-mono font-medium">
                      {selectedLanguageData.label}
                    </span>
                    <svg
                      className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                </button>

                  {/* Dropdown Menu */}
                  {isDropdownOpen && (
                    <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                      <div className="py-1">
                        {languages.map((lang) => (
                <button
                            key={lang.key}
                            onClick={() => {
                              setSelectedLanguage(lang.key);
                              setIsDropdownOpen(false);
                            }}
                            className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                              selectedLanguage === lang.key
                                ? 'bg-gray-50 text-otto-blue font-medium'
                                : 'text-gray-700 hover:bg-gray-50'
                            }`}
                >
                            {lang.label}
                </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Copy Button */}
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(getCodeForLanguage(selectedLanguage));
                  }}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded hover:bg-gray-100 transition-colors text-gray-500 hover:text-gray-900 text-sm"
                  aria-label="Copy code"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-xs font-medium">Copy</span>
                </button>
              </div>
            </div>
            <div className="p-6">
              <pre className="text-sm text-gray-800 overflow-x-auto">
                <code>{getCodeForLanguage(selectedLanguage)}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* API Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-2xl font-light text-otto-blue mb-1">RESTful</div>
            <div className="text-sm text-gray-600">API Design</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-light text-green-600 mb-1">JSON</div>
            <div className="text-sm text-gray-600">Response Format</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-light text-purple-600 mb-1">OAuth 2.0</div>
            <div className="text-sm text-gray-600">Authentication</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-light text-orange-600 mb-1">Webhooks</div>
            <div className="text-sm text-gray-600">Real-time Events</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApiShowcase;
