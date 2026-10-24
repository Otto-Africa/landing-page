import React from "react";
import { Link } from "react-router-dom";
import DocsLayout from "../../layout/DocsLayout";
import SEO from "../../components/SEO";
import CodeBlock from "../../components/CodeBlock";
import DocsOpener from "../../components/DocsOpener";
import "./docs.css";

/**
 * Otto funding-flow API.
 */
const FundingFlows = () => {
  const onThisPageItems = [
    { href: "#overview", label: "Overview" },
    { href: "#when-why-how", label: "When, why, and how" },
    { href: "#start", label: "Start a flow" },
    { href: "#paths", label: "Paths" },
  ];

  const startExample = `{
  "product": "WALLET",
  "mode": "MOMO",
  "amountMinor": 1000,
  "transaction_pin": "147258"
}`;

  return (
    <>
      <SEO
        title="Funding Flows API - Otto Africa Documentation"
        description="Start wallet, savings, investment, and pay funding flows on the Otto API."
        keywords="Otto funding flows, wallet top-up, payout, savings"
        url="https://ottoafrica.com/docs/funding-flows"
      />
      <DocsLayout
        currentPage="/docs/funding-flows"
        onThisPageItems={onThisPageItems}
        nutshell="Start a funding flow on Otto. Read the snapshot. Refresh only when you resume a pending step."
      >
        <div className="docs-content">
          <h1 id="overview">Funding flows</h1>

          <DocsOpener
            lead="A funding flow is one Otto operation that deposits, transfers, or pays out money for a product. Otto tracks the steps until the flow completes or needs review."
            when="Use a funding flow when a customer or merchant funds a wallet, savings plan, or investment, or when Otto must pay out from that product. Do not use it for a simple collect invoice. Use Payments collect for that."
            why="Otto must keep one record for a multi-step money movement. The flow ID lets you read status, resume a pending step, and reconcile later. Without a flow, you cannot tell if a MoMo debit landed in the product."
            how="Call POST /api/merchant/funding-flows or the customer path with product, mode, amountMinor, and a six-digit transaction PIN. Then GET the flow ID for a snapshot. POST /refresh only when you resume an authorized pending step."
          />

          <p>
            Products: <code>WALLET</code>, <code>SAVINGS</code>,{" "}
            <code>INVESTMENT</code>, <code>PAY</code>.
          </p>
          <p>
            Modes: <code>INTERNAL</code>, <code>MOMO</code>, <code>CARD</code>,{" "}
            <code>PAYOUT</code>.
          </p>
          <p>
            Amounts use pesewas in <code>amountMinor</code>. Most products need
            a six-digit <code>transaction_pin</code>. See{" "}
            <Link to="/docs/pin">transaction PIN</Link>.
          </p>

          <h2 id="start">Start a flow</h2>
          <p>
            <code>POST /api/merchant/funding-flows</code>
          </p>
          <CodeBlock language="json" code={startExample} />
          <p>
            GET on a flow ID returns a snapshot. GET does not advance provider
            state. POST <code>/refresh</code> resumes an authorized pending
            step.
          </p>

          <h2 id="paths">Paths</h2>
          <table className="docs-table mb-6">
            <thead>
              <tr>
                <th>Method</th>
                <th>Path</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>GET</code>
                </td>
                <td>
                  <code>/api/merchant/funding-flows/readiness</code>
                </td>
                <td>Read supported rails</td>
              </tr>
              <tr>
                <td>
                  <code>POST</code>
                </td>
                <td>
                  <code>/api/merchant/funding-flows</code>
                </td>
                <td>Start a flow</td>
              </tr>
              <tr>
                <td>
                  <code>GET</code>
                </td>
                <td>
                  <code>/api/merchant/funding-flows/:id</code>
                </td>
                <td>Read a snapshot</td>
              </tr>
              <tr>
                <td>
                  <code>POST</code>
                </td>
                <td>
                  <code>/api/merchant/funding-flows/:id/refresh</code>
                </td>
                <td>Resume a pending step</td>
              </tr>
            </tbody>
          </table>
          <p>
            Customer paths use <code>/api/customer/funding-flows</code>. Wallet
            card and MoMo top-up also accept{" "}
            <code>POST /api/customer/topup</code>.
          </p>
        </div>
      </DocsLayout>
    </>
  );
};

export default FundingFlows;
