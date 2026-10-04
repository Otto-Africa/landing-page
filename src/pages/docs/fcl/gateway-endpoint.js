import React from "react";
import { Link, useParams } from "react-router-dom";
import DocsLayout from "../../../layout/DocsLayout";
import SEO from "../../../components/SEO";
import CodeBlock from "../../../components/CodeBlock";
import { PUBLIC_BASE_URL } from "../../../data/fcl/constants";
import { endpoints } from "../../../data/fcl/endpoints";
import "../docs.css";

/**
 * Single Payment Gateway endpoint page.
 */
const GatewayEndpoint = () => {
  const { id } = useParams();
  const endpoint = endpoints.find((item) => item.id === id);

  if (!endpoint) {
    return (
      <DocsLayout currentPage="/fcl/gateway-reference">
        <div className="docs-content">
          <h1>Endpoint not found</h1>
          <p>
            Return to the{" "}
            <Link to="/fcl/gateway-reference">endpoint reference</Link>.
          </p>
        </div>
      </DocsLayout>
    );
  }

  const onThisPageItems = [
    { href: "#summary", label: "Summary" },
    { href: "#request", label: "Request" },
    { href: "#response", label: "Response" },
  ];

  return (
    <>
      <SEO
        noindex
        title={`${endpoint.title} - Payment Gateway - Otto Africa Documentation`}
        description={endpoint.summary}
        keywords={`FCL ${endpoint.method} ${endpoint.path}`}
        url={`https://ottoafrica.com/fcl/gateway/api/${endpoint.id}`}
      />
      <DocsLayout
        currentPage={`/fcl/gateway/api/${endpoint.id}`}
        onThisPageItems={onThisPageItems}
        nutshell={endpoint.summary}
      >
        <div className="docs-content">
          <p className="text-sm text-gray-500 mb-2">
            <Link to="/fcl/gateway-reference">Endpoint reference</Link>
            {" / "}
            {endpoint.group}
          </p>
          <h1 id="summary">{endpoint.title}</h1>
          <p>
            <code>
              {endpoint.method} {endpoint.path}
            </code>
          </p>
          <p>{endpoint.summary}</p>
          {endpoint.when ? <p>{endpoint.when}</p> : null}

          <h2 id="request">Request</h2>
          <p>
            Base URL example:{" "}
            <code>
              {PUBLIC_BASE_URL}
              {endpoint.path}
            </code>
          </p>

          {endpoint.pathParams?.length ? (
            <>
              <h3>Path parameters</h3>
              <table className="docs-table mb-6">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Required</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  {endpoint.pathParams.map((param) => (
                    <tr key={param.name}>
                      <td>
                        <code>{param.name}</code>
                      </td>
                      <td>{param.required ? "Yes" : "No"}</td>
                      <td>{param.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          ) : null}

          {endpoint.headers?.length ? (
            <>
              <h3>Headers</h3>
              <table className="docs-table mb-6">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Required</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  {endpoint.headers.map((header) => (
                    <tr key={header.name}>
                      <td>
                        <code>{header.name}</code>
                      </td>
                      <td>{header.required ? "Yes" : "No"}</td>
                      <td>{header.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          ) : null}

          {endpoint.bodyParams?.length ? (
            <>
              <h3>Body fields</h3>
              <table className="docs-table mb-6">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Required</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  {endpoint.bodyParams.map((param) => (
                    <tr key={param.name}>
                      <td>
                        <code>{param.name}</code>
                      </td>
                      <td>{param.required ? "Yes" : "No"}</td>
                      <td>{param.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          ) : null}

          {endpoint.requestBody ? (
            <>
              <h3>Request body example</h3>
              <CodeBlock language="json" code={endpoint.requestBody} />
            </>
          ) : null}

          {endpoint.requestBodyAlt ? (
            <>
              <h3>Alternate body</h3>
              <CodeBlock language="json" code={endpoint.requestBodyAlt} />
            </>
          ) : null}

          <h2 id="response">Response</h2>
          {endpoint.responseExample ? (
            <CodeBlock language="json" code={endpoint.responseExample} />
          ) : (
            <p>No response example is recorded for this endpoint.</p>
          )}

          {endpoint.notes?.length ? (
            <>
              <h3>Notes</h3>
              <ul className="list-disc list-inside space-y-2 mb-6">
                {endpoint.notes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </>
          ) : null}

          {endpoint.errors?.length ? (
            <>
              <h3>Errors</h3>
              <table className="docs-table mb-6">
                <thead>
                  <tr>
                    <th>Status</th>
                    <th>Meaning</th>
                  </tr>
                </thead>
                <tbody>
                  {endpoint.errors.map((error) => (
                    <tr key={`${error.status}-${error.meaning}`}>
                      <td>
                        <code>{error.status}</code>
                      </td>
                      <td>{error.meaning}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          ) : null}
        </div>
      </DocsLayout>
    </>
  );
};

export default GatewayEndpoint;
