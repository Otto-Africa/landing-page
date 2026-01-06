import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CheckIcon, ClipboardIcon } from '@heroicons/react/24/outline';

const CodeBlock = ({ code, language = 'bash', showLineNumbers = true }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="relative group rounded-lg overflow-hidden my-4 border border-gray-200 bg-white shadow-sm">
            {/* Header/Actions */}
            <div className="flex justify-between items-center px-4 py-2 bg-gray-50 border-b border-gray-200">
                <span className="text-xs text-gray-500 uppercase font-mono font-medium">{language}</span>
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
            <div className="relative">
                <SyntaxHighlighter
                    language={language}
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
                    {code.trim()}
                </SyntaxHighlighter>
            </div>
        </div>
    );
};

export default CodeBlock;
