import React from "react";
import { Link } from "react-router-dom";
import DocsLayout from "../../../layout/DocsLayout";
import SEO from "../../../components/SEO";
import DocsOpener from "../../../components/DocsOpener";
import { endpoints } from "../../../data/fcl/endpoints";
import "../docs.css";

/**
 * Payment Gateway endpoint index.
 */
const GatewayReference = () => {
  const groups = [...new Set(endpoints.map((e) => e.group))];

  return (
    <>
      <SEO
        noindex
        title="Payment Gateway Endpoint Reference - Otto Africa Documentation"
        description="Endpoint catalog for the FCL Payment Gateway Client API."
        keywords="FCL Payment Gateway endpoints, collections, disbursements"
        url="https://ottoafrica.com/fcl/gateway-reference"
      />
      <DocsLayout
        currentPage="/fcl/gateway-reference"
        nutshell="Browse Payment Gateway endpoints by group. Open one endpoint for path, body, and response examples."
      >
        <div className="docs-content">
          <h1>Payment Gateway endpoint reference</h1>
          <DocsOpener
            lead="This catalog lists Payment Gateway Client API paths relative to the Gateway base URL."
            when="Use this page to look up a method and path. Use the quickstart for the first collect."
            why="The catalog is the list of rails Otto can call. It is not the Otto merchant API."
            how="Find the group. Copy the method and path. Send X-Api-Key. Confirm completion with webhook, not create HTTP 200."
          />

          {groups.map((group) => (
            <section key={group} className="mb-8">
              <h2>{group}</h2>
              <table className="docs-table mb-4">
                <thead>
                  <tr>
                    <th>Method</th>
                    <th>Endpoint</th>
                    <th>Title</th>
                  </tr>
                </thead>
                <tbody>
                  {endpoints
                    .filter((e) => e.group === group)
                    .map((endpoint) => (
                      <tr key={endpoint.id}>
                        <td>
                          <code>{endpoint.method}</code>
                        </td>
                        <td>
                          <Link
                            to={`/fcl/gateway/api/${endpoint.id}`}
                            className="text-[#00B4D8] hover:underline"
                          >
                            <code>{endpoint.path}</code>
                          </Link>
                        </td>
                        <td>{endpoint.title}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </section>
          ))}
        </div>
      </DocsLayout>
    </>
  );
};

export default GatewayReference;
