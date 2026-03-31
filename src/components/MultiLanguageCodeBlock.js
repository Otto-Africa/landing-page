import React, { useState, useRef, useEffect } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CheckIcon, ClipboardIcon } from '@heroicons/react/24/outline';

const highContrastOneLight = {
  ...oneLight,
  'code[class*="language-"]': {
    ...(oneLight['code[class*="language-"]'] || {}),
    color: '#111827',
  },
  'pre[class*="language-"]': {
    ...(oneLight['pre[class*="language-"]'] || {}),
    color: '#111827',
  },
  comment: { ...(oneLight.comment || {}), color: '#4b5563' },
  prolog: { ...(oneLight.prolog || {}), color: '#374151' },
  doctype: { ...(oneLight.doctype || {}), color: '#374151' },
  cdata: { ...(oneLight.cdata || {}), color: '#374151' },
  punctuation: { ...(oneLight.punctuation || {}), color: '#111827' },
  property: { ...(oneLight.property || {}), color: '#0f766e' },
  tag: { ...(oneLight.tag || {}), color: '#0f766e' },
  boolean: { ...(oneLight.boolean || {}), color: '#b45309' },
  number: { ...(oneLight.number || {}), color: '#b45309' },
  selector: { ...(oneLight.selector || {}), color: '#1d4ed8' },
  string: { ...(oneLight.string || {}), color: '#166534' },
  char: { ...(oneLight.char || {}), color: '#166534' },
  builtin: { ...(oneLight.builtin || {}), color: '#1f2937' },
  operator: { ...(oneLight.operator || {}), color: '#111827' },
  variable: { ...(oneLight.variable || {}), color: '#111827' },
  atrule: { ...(oneLight.atrule || {}), color: '#1d4ed8' },
  function: { ...(oneLight.function || {}), color: '#7c3aed' },
  'class-name': { ...(oneLight['class-name'] || {}), color: '#7c3aed' },
  keyword: { ...(oneLight.keyword || {}), color: '#c2410c' },
};

const MultiLanguageCodeBlock = ({
  examples,
  defaultLanguage = 'curl',
  showLineNumbers = true,
  requestMethod,
  requestUrl,
}) => {
  const [selectedLanguage, setSelectedLanguage] = useState(defaultLanguage);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const dropdownRef = useRef(null);

  const languages = [
    { key: 'curl', label: 'BASH' },
    { key: 'javascript', label: 'JavaScript' },
    { key: 'python', label: 'Python' }
  ];

  const selectedLanguageData = languages.find(lang => lang.key === selectedLanguage) || languages[0];
  const currentCode = examples[selectedLanguage] || examples.curl || '';

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

  // Determine language for syntax highlighting
  const getSyntaxLanguage = (lang) => {
    if (lang === 'curl') return 'bash';
    return lang;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(currentCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group rounded-lg my-4 border border-gray-200 bg-white shadow-sm">
      {/* Header/Actions */}
      <div className="flex justify-between items-center px-4 py-2 bg-gray-50 border-b border-gray-200 relative z-50 rounded-t-lg">
        <div className="flex items-center gap-2 min-w-0">
          {requestMethod && requestUrl ? (
            <div className="flex items-center gap-2 min-w-0">
              <span className="text-[11px] font-semibold tracking-wide uppercase text-white bg-black px-2 py-0.5 rounded">
                {requestMethod}
              </span>
              <span className="text-xs text-black font-mono truncate">{requestUrl}</span>
            </div>
          ) : (
            <span className="text-xs text-black uppercase font-mono font-medium">
              Code Example
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-1.5 text-xs text-black uppercase font-mono font-medium transition-colors"
            aria-label="Select language"
          >
            <span>{selectedLanguageData.label}</span>
            <svg
              className={`w-3 h-3 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
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

          {isDropdownOpen && (
            <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-xl z-[9999]">
              <div className="py-1">
                {languages.map((lang) => {
                  // Only show languages that have examples
                  if (!examples[lang.key]) return null;
                  return (
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
                  );
                })}
              </div>
            </div>
          )}
          </div>
          <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2 py-1 rounded hover:bg-gray-200 transition-colors text-black"
          aria-label="Copy code"
        >
          {copied ? (
            <>
              <CheckIcon className="w-4 h-4 text-green-600" />
              <span className="text-xs text-green-600 font-medium">Copied!</span>
            </>
          ) : (
            <>
              <ClipboardIcon className="w-4 h-4 text-black" />
              <span className="text-xs font-medium">Copy</span>
            </>
          )}
          </button>
        </div>
      </div>

      {/* Code Content */}
      <div className="relative overflow-hidden rounded-b-lg">
        <SyntaxHighlighter
          language={getSyntaxLanguage(selectedLanguage)}
          style={highContrastOneLight}
          customStyle={{
            margin: 0,
            padding: '1.5rem',
            background: 'transparent',
            fontSize: '0.875rem',
            lineHeight: '1.5',
          }}
          showLineNumbers={showLineNumbers}
          lineNumberStyle={{
            minWidth: '2.5em',
            paddingRight: '1em',
            color: '#6b7280',
            textAlign: 'right',
            userSelect: 'none',
          }}
        >
          {currentCode.trim()}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default MultiLanguageCodeBlock;

