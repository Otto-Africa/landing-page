import React from "react";
import { Link } from "react-router-dom";
import DocsLayout from "../../../layout/DocsLayout";
import SEO from "../../../components/SEO";
import DocsOpener from "../../../components/DocsOpener";
import "../docs.css";

/**
 * FCL architecture (STE).
 */
const FclArchitecture = () => {
  const onThisPageItems = [
    { href: "#overview", label: "Overview" },
    { href: "#when-why-how", label: "When, why, and how" },
    { href: "#roles", label: "API roles" },
    { href: "#money-flow", label: "Money movement" },
    { href: "#completion", label: "Completion signals" },
  ];

  return (
    <>
      <SEO
        noindex
        title="FCL Architecture - Otto Africa Documentation"
        description="How FCL Payment Gateway, Unified External Channels, and Core Banking work together."
        keywords="FCL architecture, Payment Gateway, Core Banking, Unified API"
        url="https://ottoafrica.com/fcl/architecture"
      />
      <DocsLayout
        currentPage="/fcl/architecture"
        onThisPageItems={onThisPageItems}
        nutshell="Payment Gateway moves external money. Core Banking records ledger posts. Unified manages customers, products, and PIN."
      >
        <div className="docs-content">
          <h1 id="overview">Architecture and API ownership</h1>

          <DocsOpener
            lead="FCL supplies three APIs. Each API owns a different part of the banking flow."
            when="Read this page before you map an Otto money movement to FCL calls. Use it when you debug a flow that succeeded on one API and failed on another."
            why="A Gateway success does not prove a Core Banking post. Otto must treat each API as a separate owner."
            how="Identify which API owns the step. Call that host with its own key. Wait for that API's completion signal. Do not skip Unified PIN or customer steps."
          />

          <h2 id="roles">API roles</h2>
          <table className="docs-table mb-6">
            <thead>
              <tr>
                <th>API</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Link to="/fcl/gateway">Payment Gateway</Link>
                </td>
                <td>
                  Collects money from wallets or cards. Pays out to wallets or
                  bank accounts.
                </td>
              </tr>
              <tr>
                <td>
                  <Link to="/fcl/core-banking">Core Banking</Link>
                </td>
                <td>
                  Returns account data. Posts Field Deposit and Field Withdrawal
                  on the ledger.
                </td>
              </tr>
              <tr>
                <td>
                  <Link to="/fcl/unified">Unified External Channels</Link>
                </td>
                <td>
                  Supplies products, customer operations, OTP, and PIN
                  Management.
                </td>
              </tr>
            </tbody>
          </table>

          <h2 id="money-flow">Money movement</h2>
          <p>
            A deposit usually starts with a Payment Gateway collection. A
            successful collection can then lead to a Core Banking Field Deposit.
          </p>
          <p>
            A refund payout uses Payment Gateway disbursement. A Field posting
            alone does not move external money.
          </p>
          <p>
            Unified PIN checks are conditional on channel policy. Unified FX
            transfer is a separate path from a Gateway payout.
          </p>

          <h2 id="completion">Completion signals</h2>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>
              Payment Gateway: treat the webhook status as the primary success
              signal.
            </li>
            <li>
              Core Banking: a Field posting success is a ledger result only.
            </li>
            <li>
              Unified: a create or verify response confirms that request only.
            </li>
          </ul>

          <div className="docs-alert info">
            Keep the reference for collection, posting, and refund. Unknown Core
            Banking outcomes need reconciliation before a refund payout.
          </div>
        </div>
      </DocsLayout>
    </>
  );
};

export default FclArchitecture;
