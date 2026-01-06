import React, { useState, useRef, useEffect } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CheckIcon, ClipboardIcon } from '@heroicons/react/24/outline';

const MultiLanguageCodeBlock = ({ examples, defaultLanguage = 'curl', showLineNumbers = true }) => {
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
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-1.5 text-xs text-gray-500 uppercase font-mono font-medium hover:text-gray-700 transition-colors"
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
            <div className="absolute left-0 top-full mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-xl z-[9999]">
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
          className="flex items-center gap-1.5 px-2 py-1 rounded hover:bg-gray-200 transition-colors text-gray-500 hover:text-gray-900"
          aria-label="Copy code"
        >
          {copied ? (
            <>
              <CheckIcon className="w-4 h-4 text-green-600" />
              <span className="text-xs text-green-600 font-medium">Copied!</span>
            </>
          ) : (
            <>
              <ClipboardIcon className="w-4 h-4" />
              <span className="text-xs font-medium">Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code Content */}
      <div className="relative overflow-hidden rounded-b-lg">
        <SyntaxHighlighter
          language={getSyntaxLanguage(selectedLanguage)}
          style={oneLight}
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
            color: '#9ca3af',
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

