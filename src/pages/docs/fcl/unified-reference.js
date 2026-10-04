import React, { useState } from "react";
import DocsLayout from "../../../layout/DocsLayout";
import SEO from "../../../components/SEO";
import DocsOpener from "../../../components/DocsOpener";
import inventory from "../../../data/fcl/unifiedApi.json";
import "../docs.css";

/**
 * Unified endpoint reference with filter.
 */
const UnifiedReference = () => {
  const [query, setQuery] = useState("");
  const rows = inventory.endpoints.filter((row) =>
    `${row.name} ${row.group} ${row.method} ${row.path} ${row.scope}`
      .toLowerCase()
      .includes(query.toLowerCase()),
  );

  return (
    <>
      <SEO
        noindex
        title="Unified Endpoint Reference - Otto Africa Documentation"
        description="Endpoint register for FCL Unified External Channels."
        keywords="FCL Unified endpoints, PIN, OTP, investments, auto-debits"
        url="https://ottoafrica.com/fcl/unified-reference"
      />
      <DocsLayout
        currentPage="/fcl/unified-reference"
        nutshell="Filter Unified endpoints by path, group, or capability. Saved examples are not live evidence."
      >
        <div className="docs-content">
          <h1>Unified endpoint reference</h1>
          <DocsOpener
            lead="This register lists Unified External Channels endpoints. Saved example statuses are examples only, not live results."
            when="Use this page to find a Unified method and path. Use PIN Management for the PIN flow."
            why="The catalog is large. Filter by path so you do not mix Gateway and Unified hosts."
            how="Filter the table. Copy method and path. Call the Unified base URL with that API's key."
          />
          <div className="docs-alert warning">
            Saved example statuses are examples only. They are not observed live
            results.
          </div>

          <label className="block mb-4">
            <span className="block text-sm font-medium text-gray-700 mb-1">
              Filter endpoints
            </span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Path, group, or capability"
              className="w-full max-w-xl border border-gray-300 rounded-lg px-3 py-2"
            />
          </label>
          <p className="mb-6">{rows.length} matching requests</p>

          {rows.map((row) => (
            <details className="docs-alert mb-3" key={row.id}>
              <summary>
                <strong>
                  {row.method} <code>{row.path}</code>
                </strong>
                : {row.name}
              </summary>
              <p>
                {row.group} · {row.liveStatus}
              </p>
              <p>{row.purpose}</p>
              <p>
                Scope: <code>{row.scope}</code>. Expected HTTP:{" "}
                {row.expectedStatus ?? "not stated"}. Saved example statuses:{" "}
                {row.savedExampleStatuses.join(", ") || "none"}.
              </p>
              <div className="table-scroll">
                <table className="docs-table">
                  <thead>
                    <tr>
                      <th>Field</th>
                      <th>Location</th>
                      <th>Required</th>
                      <th>Type / constraint</th>
                    </tr>
                  </thead>
                  <tbody>
                    {row.parameters.map((param, index) => (
                      <tr key={`${row.id}-${index}`}>
                        <td>
                          <code>{param.field}</code>
                        </td>
                        <td>{param.location}</td>
                        <td>{param.required}</td>
                        <td>
                          {param.type} · {param.constraints}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </details>
          ))}
        </div>
      </DocsLayout>
    </>
  );
};

export default UnifiedReference;
