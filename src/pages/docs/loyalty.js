import React from "react";
import { Link } from "react-router-dom";
import DocsLayout from "../../layout/DocsLayout";
import SEO from "../../components/SEO";
import CodeBlock from "../../components/CodeBlock";
import DocsOpener from "../../components/DocsOpener";
import "./docs.css";

/**
 * Loyalty Management module.
 */
const Loyalty = () => {
  const onThisPageItems = [
    { href: "#purpose", label: "Overview" },
    { href: "#when-why-how", label: "When, why, and how" },
    { href: "#programs", label: "Programs" },
    { href: "#members", label: "Members" },
    { href: "#rewards", label: "Rewards" },
    { href: "#customer", label: "Customer paths" },
  ];

  const createProgram = `{
  "name": "Store Rewards",
  "description": "Earn points on every purchase"
}`;

  return (
    <>
      <SEO
        title="Loyalty Management API - Otto Africa Documentation"
        description="Create loyalty programs, enroll members, manage rewards, and redeem points on the Otto API."
        keywords="Otto loyalty, loyalty programs, rewards, member code, points"
        url="https://ottoafrica.com/docs/loyalty"
      />
      <DocsLayout
        currentPage="/docs/loyalty"
        onThisPageItems={onThisPageItems}
        nutshell="Loyalty Management creates programs, enrolls members, issues rewards, and redeems points."
      >
        <div className="docs-content">
          <h1 id="purpose">Loyalty Management</h1>

          <DocsOpener
            lead="Loyalty Management lets a merchant run a points program. Members earn rewards. Customers redeem those rewards."
            when="Use this module when you create a program, list members, define rewards, or let a customer redeem. Use Gift Cards when the product is a stored-value card, not points."
            why="A program is the rule set for one business. Otto keeps members and rewards on that program so checkout and the app share the same balance."
            how="Authenticate as a merchant. POST /api/merchant/loyalty/programs, then create rewards under the program ID. Customers GET memberships and POST /api/customer/loyalty/rewards/redeem."
          />

          <p>
            See <Link to="/docs/identity">Identity</Link>. Gift card products
            are on <Link to="/docs/gift-cards">gift cards</Link>.
          </p>

          <h2 id="programs">Programs</h2>
          <p>
            A program is the loyalty rule set for one business. You can archive,
            restore, and set a default program.
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
                  <code>/api/merchant/loyalty/programs</code>
                </td>
                <td>List active programs</td>
              </tr>
              <tr>
                <td>
                  <code>POST</code>
                </td>
                <td>
                  <code>/api/merchant/loyalty/programs</code>
                </td>
                <td>Create a program</td>
              </tr>
              <tr>
                <td>
                  <code>GET</code>
                </td>
                <td>
                  <code>/api/merchant/loyalty/programs/:id</code>
                </td>
                <td>Read one program</td>
              </tr>
              <tr>
                <td>
                  <code>PUT</code>
                </td>
                <td>
                  <code>/api/merchant/loyalty/programs/:id</code>
                </td>
                <td>Update a program</td>
              </tr>
              <tr>
                <td>
                  <code>POST</code>
                </td>
                <td>
                  <code>/api/merchant/loyalty/programs/:id/archive</code>
                </td>
                <td>Archive a program</td>
              </tr>
              <tr>
                <td>
                  <code>POST</code>
                </td>
                <td>
                  <code>/api/merchant/loyalty/programs/:id/restore</code>
                </td>
                <td>Restore an archived program</td>
              </tr>
              <tr>
                <td>
                  <code>POST</code>
                </td>
                <td>
                  <code>/api/merchant/loyalty/programs/:id/set-default</code>
                </td>
                <td>Set the default program</td>
              </tr>
              <tr>
                <td>
                  <code>GET</code>
                </td>
                <td>
                  <code>/api/merchant/loyalty/programs/:id/analytics</code>
                </td>
                <td>Read program analytics</td>
              </tr>
            </tbody>
          </table>
          <CodeBlock language="json" code={createProgram} />

          <h2 id="members">Members</h2>
          <p>
            Members belong to a program. List members for one program ID.
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
                  <code>/api/merchant/loyalty/programs/:id/members</code>
                </td>
                <td>List members</td>
              </tr>
            </tbody>
          </table>

          <h2 id="rewards">Rewards</h2>
          <p>
            Rewards are items a member can claim with points. Create rewards
            under a program.
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
                  <code>/api/merchant/loyalty/rewards/program/:programId</code>
                </td>
                <td>List rewards for a program</td>
              </tr>
              <tr>
                <td>
                  <code>POST</code>
                </td>
                <td>
                  <code>/api/merchant/loyalty/rewards/program/:programId</code>
                </td>
                <td>Create a reward</td>
              </tr>
              <tr>
                <td>
                  <code>GET</code>
                </td>
                <td>
                  <code>/api/merchant/loyalty/rewards/:id</code>
                </td>
                <td>Read one reward</td>
              </tr>
              <tr>
                <td>
                  <code>PUT</code>
                </td>
                <td>
                  <code>/api/merchant/loyalty/rewards/:id</code>
                </td>
                <td>Update a reward</td>
              </tr>
              <tr>
                <td>
                  <code>DELETE</code>
                </td>
                <td>
                  <code>/api/merchant/loyalty/rewards/:id</code>
                </td>
                <td>Delete a reward</td>
              </tr>
            </tbody>
          </table>

          <h2 id="customer">Customer paths</h2>
          <p>
            Customers read memberships and redeem rewards with a customer
            session.
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
                  <code>/api/customer/loyalty/memberships</code>
                </td>
                <td>List memberships</td>
              </tr>
              <tr>
                <td>
                  <code>GET</code>
                </td>
                <td>
                  <code>/api/customer/loyalty/memberships/:id/rewards</code>
                </td>
                <td>List rewards for a membership</td>
              </tr>
              <tr>
                <td>
                  <code>POST</code>
                </td>
                <td>
                  <code>/api/customer/loyalty/rewards/redeem</code>
                </td>
                <td>Redeem a reward</td>
              </tr>
              <tr>
                <td>
                  <code>GET</code>
                </td>
                <td>
                  <code>/api/customer/profile/loyalty/points</code>
                </td>
                <td>Read loyalty points on the profile</td>
              </tr>
            </tbody>
          </table>
          <p>
            Client SDKs for checkout widgets are on{" "}
            <Link to="/docs/sdks">SDKs</Link>.
          </p>
        </div>
      </DocsLayout>
    </>
  );
};

export default Loyalty;
