import React, { useState } from 'react';
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

const CodeBlock = ({
    code,
    language = 'bash',
    showLineNumbers = true,
    requestMethod,
    requestUrl,
}) => {
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
                <div className="flex items-center gap-2 min-w-0">
                    {requestMethod && requestUrl ? (
                        <>
                            <span className="text-[11px] font-semibold tracking-wide uppercase text-white bg-black px-2 py-0.5 rounded">
                                {requestMethod}
                            </span>
                            <span className="text-xs text-black font-mono truncate">{requestUrl}</span>
                        </>
                    ) : (
                        <span className="text-xs text-black uppercase font-mono font-medium">{language}</span>
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

            {/* Code Content */}
            <div className="relative">
                <SyntaxHighlighter
                    language={language}
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
                    {code.trim()}
                </SyntaxHighlighter>
            </div>
        </div>
    );
};

export default CodeBlock;
