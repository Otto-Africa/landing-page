import React from "react";
import { Link } from "react-router-dom";
import DocsLayout from "../../layout/DocsLayout";
import SEO from "../../components/SEO";
import CodeBlock from "../../components/CodeBlock";
import DocsOpener from "../../components/DocsOpener";
import "./docs.css";

/**
 * Merchant accounting module.
 */
const Accounting = () => {
  const onThisPageItems = [
    { href: "#purpose", label: "Overview" },
    { href: "#when-why-how", label: "When, why, and how" },
    { href: "#sales", label: "Sales and bills" },
    { href: "#settle", label: "Mark paid and settle" },
    { href: "#books", label: "Books and tax" },
    { href: "#reconcile", label: "Reconcile" },
  ];

  const saleExample = `{
  "amount_minor": 25000,
  "currency": "GHS",
  "description": "Walk-in sale",
  "recipient_name": "Cash customer"
}`;

  const markPaidExample = `{
  "manual_source": "CASH",
  "transaction_pin": "147258"
}`;

  return (
    <>
      <SEO
        title="Accounting API - Otto Africa Documentation"
        description="Record sales and bills, settle invoices, remit tax, and reconcile books on the Otto API."
        keywords="Otto accounting, record sale, record bill, reconcile, period close"
        url="https://ottoafrica.com/docs/accounting"
      />
      <DocsLayout
        currentPage="/docs/accounting"
        onThisPageItems={onThisPageItems}
        nutshell="Accounting records sales and bills off the payment rails. It also settles invoices, remits tax, and closes periods."
      >
        <div className="docs-content">
          <h1 id="purpose">Accounting</h1>

          <DocsOpener
            lead="Accounting records money events that belong in the books even when Otto did not collect or pay out on a rail."
            when="Use Accounting when cash already arrived, a supplier bill must be booked, an invoice was paid off-platform, tax must be remitted, or you close a period. Use Payments when Otto must collect or pay out online."
            why="Books must match cash, bank, and tax even for walk-in sales. Otto keeps one ledger for those events so reports stay complete."
            how="Authenticate as a merchant. POST record-sale or record-bill. Mark collect invoices paid with a PIN. Settle bills, remit tax, then reconcile petty cash or import a bank statement. Amounts use pesewas."
          />

          <p>
            Money-out and settle paths need a six-digit{" "}
            <Link to="/docs/pin">transaction PIN</Link>.
          </p>

          <h2 id="sales">Sales and bills</h2>
          <p>
            Record a sale when cash or an off-platform payment already arrived.
            Record a bill when you owe a supplier.
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
                  <code>POST</code>
                </td>
                <td>
                  <code>/api/merchant/accounting/record-sale</code>
                </td>
                <td>Record a manual sale</td>
              </tr>
              <tr>
                <td>
                  <code>POST</code>
                </td>
                <td>
                  <code>/api/merchant/accounting/record-bill</code>
                </td>
                <td>Record a manual bill</td>
              </tr>
              <tr>
                <td>
                  <code>GET</code>
                </td>
                <td>
                  <code>/api/merchant/accounting/expense-categories</code>
                </td>
                <td>List expense categories</td>
              </tr>
            </tbody>
          </table>
          <CodeBlock language="json" code={saleExample} />

          <h2 id="settle">Mark paid and settle</h2>
          <p>
            Mark a collect invoice paid when the customer paid outside Otto.
            Settle a pay bill when you paid the supplier.
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
                  <code>POST</code>
                </td>
                <td>
                  <code>/api/merchant/accounting/collect/:id/mark-paid</code>
                </td>
                <td>Mark a collect invoice paid</td>
              </tr>
              <tr>
                <td>
                  <code>POST</code>
                </td>
                <td>
                  <code>/api/merchant/accounting/pay/:id/settle</code>
                </td>
                <td>Settle a pay bill</td>
              </tr>
              <tr>
                <td>
                  <code>POST</code>
                </td>
                <td>
                  <code>/api/merchant/accounting/pay/:id/expense-proof</code>
                </td>
                <td>Attach expense proof</td>
              </tr>
            </tbody>
          </table>
          <CodeBlock language="json" code={markPaidExample} />
          <p>
            Online collect and payout stay on{" "}
            <Link to="/docs/payments">Payments</Link>.
          </p>

          <h2 id="books">Books and tax</h2>
          <p>
            Move balances between books, remit tax, set opening balances, and
            close a period.
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
                  <code>POST</code>
                </td>
                <td>
                  <code>/api/merchant/accounting/transfer</code>
                </td>
                <td>Book transfer between accounts</td>
              </tr>
              <tr>
                <td>
                  <code>POST</code>
                </td>
                <td>
                  <code>/api/merchant/accounting/remit-tax</code>
                </td>
                <td>Remit tax</td>
              </tr>
              <tr>
                <td>
                  <code>POST</code>
                </td>
                <td>
                  <code>/api/merchant/accounting/opening-balances</code>
                </td>
                <td>Set opening balances</td>
              </tr>
              <tr>
                <td>
                  <code>POST</code>
                </td>
                <td>
                  <code>/api/merchant/accounting/period-close</code>
                </td>
                <td>Close an accounting period</td>
              </tr>
            </tbody>
          </table>

          <h2 id="reconcile">Reconcile</h2>
          <p>
            Reconcile petty cash or import a bank statement for match work.
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
                  <code>POST</code>
                </td>
                <td>
                  <code>/api/merchant/accounting/reconcile/petty-cash</code>
                </td>
                <td>Reconcile petty cash</td>
              </tr>
              <tr>
                <td>
                  <code>POST</code>
                </td>
                <td>
                  <code>/api/merchant/accounting/reconcile/bank/import</code>
                </td>
                <td>Import a bank statement</td>
              </tr>
            </tbody>
          </table>
        </div>
      </DocsLayout>
    </>
  );
};

export default Accounting;
