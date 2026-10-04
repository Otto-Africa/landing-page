import React from "react";
import { Link } from "react-router-dom";
import DocsLayout from "../../layout/DocsLayout";
import SEO from "../../components/SEO";
import CodeBlock from "../../components/CodeBlock";
import DocsOpener from "../../components/DocsOpener";
import "./docs.css";

/**
 * Otto transfer APIs for wallet, MoMo, and bank.
 */
const Transfers = () => {
  const onThisPageItems = [
    { href: "#overview", label: "Overview" },
    { href: "#when-why-how", label: "When, why, and how" },
    { href: "#wallet", label: "Wallet transfers" },
    { href: "#external", label: "External transfers" },
  ];

  const walletConfirm = `{
  "recipient": "233241234567"
}`;

  const momoValidate = `{
  "network": "MTN",
  "account_number": "233241234567"
}`;

  return (
    <>
      <SEO
        title="Transfers API - Otto Africa Documentation"
        description="Send money between Otto wallets or to mobile money and bank accounts through the Otto API."
        keywords="Otto transfers, wallet transfer, mobile money, bank payout"
        url="https://ottoafrica.com/docs/transfers"
      />
      <DocsLayout
        currentPage="/docs/transfers"
        onThisPageItems={onThisPageItems}
        nutshell="Confirm the recipient on Otto, then submit. Use Otto paths. Do not call a provider host from your app."
      >
        <div className="docs-content">
          <h1 id="overview">Transfers</h1>

          <DocsOpener
            lead="Transfers move money between Otto wallets or to an external mobile-money or bank account. All calls go to Otto, not to a provider host."
            when="Use Transfers when you already know the recipient and want to send funds now. Use wallet transfers for Otto users. Use external transfers for MoMo or bank. Use Payments collect when you want to receive money."
            why="Name check and send must happen in order. Otto confirms the beneficiary first, then submits an idempotent send. That reduces payouts to the wrong account."
            how="Authenticate. GET readiness if you need available rails. POST confirm or validate, then POST submit or send. Keep an idempotency key. Poll the resource ID and listen for webhooks."
          />

          <p>
            Merchant paths start with <code>/api/merchant</code>. Customer
            paths start with <code>/api/customer</code>. The path after that is
            the same.
          </p>
          <p>
            Related: <Link to="/docs/payments">payments</Link> and{" "}
            <Link to="/docs/pin">transaction PIN</Link>.
          </p>

          <h2 id="wallet">Wallet transfers</h2>
          <p>
            Send money to another Otto wallet. Confirm the recipient first.
            Then submit.
          </p>
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
                  <code>/api/merchant/wallet-transfers/readiness</code>
                </td>
                <td>Read if wallet transfer is ready</td>
              </tr>
              <tr>
                <td>
                  <code>POST</code>
                </td>
                <td>
                  <code>/api/merchant/wallet-transfers/confirm</code>
                </td>
                <td>Resolve the recipient</td>
              </tr>
              <tr>
                <td>
                  <code>POST</code>
                </td>
                <td>
                  <code>/api/merchant/wallet-transfers/submit</code>
                </td>
                <td>Submit the transfer</td>
              </tr>
            </tbody>
          </table>
          <CodeBlock language="json" code={walletConfirm} />

          <h2 id="external">External transfers</h2>
          <p>
            Send money to a mobile-money wallet or a bank account. Validate the
            beneficiary. Then send.
          </p>
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
                  <code>/api/merchant/external-transfers/readiness</code>
                </td>
                <td>Read available rails</td>
              </tr>
              <tr>
                <td>
                  <code>POST</code>
                </td>
                <td>
                  <code>/api/merchant/external-transfers/momo/validate</code>
                </td>
                <td>Confirm a MoMo name</td>
              </tr>
              <tr>
                <td>
                  <code>POST</code>
                </td>
                <td>
                  <code>/api/merchant/external-transfers/momo/send</code>
                </td>
                <td>Send to a MoMo wallet</td>
              </tr>
              <tr>
                <td>
                  <code>POST</code>
                </td>
                <td>
                  <code>/api/merchant/external-transfers/bank/send</code>
                </td>
                <td>Send to a bank account</td>
              </tr>
              <tr>
                <td>
                  <code>POST</code>
                </td>
                <td>
                  <code>/api/merchant/external-transfers/fx/requests</code>
                </td>
                <td>Submit an FX request</td>
              </tr>
            </tbody>
          </table>
          <CodeBlock language="json" code={momoValidate} />
          <p>
            Use a unique idempotency key on send. Poll the resource ID. Also
            listen for webhooks.
          </p>
        </div>
      </DocsLayout>
    </>
  );
};

export default Transfers;
