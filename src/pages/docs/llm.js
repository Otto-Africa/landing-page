import React from "react";
import { Link } from "react-router-dom";
import DocsLayout from "../../layout/DocsLayout";
import SEO from "../../components/SEO";
import CodeBlock from "../../components/CodeBlock";
import DocsOpener from "../../components/DocsOpener";
import "./docs.css";

/**
 * CosmoLLM conversations module.
 */
const LlmConversations = () => {
  const onThisPageItems = [
    { href: "#purpose", label: "Overview" },
    { href: "#when-why-how", label: "When, why, and how" },
    { href: "#chat", label: "Chat" },
    { href: "#cases", label: "Cases" },
    { href: "#documents", label: "Documents" },
    { href: "#actions", label: "Actions" },
  ];

  const chatExample = `{
  "message": "Summarize unpaid invoices for this week",
  "stream": false
}`;

  const caseExample = `{
  "title": "Review overdue collect invoices",
  "message": "List invoices that are past due"
}`;

  return (
    <>
      <SEO
        title="LLM Conversations API - Otto Africa Documentation"
        description="CosmoLLM chat, cases, documents, briefing, and actions on the Otto merchant API."
        keywords="Otto CosmoLLM, LLM conversations, merchant chat API"
        url="https://ottoafrica.com/docs/llm"
      />
      <DocsLayout
        currentPage="/docs/llm"
        onThisPageItems={onThisPageItems}
        nutshell="CosmoLLM is the merchant conversation API. Chat, open cases, attach documents, and preview actions."
      >
        <div className="docs-content">
          <h1 id="purpose">LLM Conversations</h1>

          <DocsOpener
            lead="CosmoLLM is the merchant conversation API. Chat about business data, open cases, attach documents, and preview actions before Otto runs them."
            when="Use CosmoLLM when a merchant asks a question, tracks a work item (a case), or needs Otto to propose an action. Do not use it as a public chatbot for customers."
            why="Merchants need a guided path over invoices, collect status, and documents. Preview lets a person confirm before execute changes data."
            how="Authenticate with a merchant session or API key. POST /api/merchant/cosmollm/chat with a message. Create cases and documents as needed. POST actions/preview, then actions/execute only after you accept the payload."
          />

          <p>
            See <Link to="/docs/identity">Identity</Link> for authentication.
          </p>

          <h2 id="chat">Chat</h2>
          <p>
            Send a message to CosmoLLM. Otto returns a reply and can keep a
            session ID for later turns.
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
                  <code>/api/merchant/cosmollm/chat</code>
                </td>
                <td>Send a message</td>
              </tr>
              <tr>
                <td>
                  <code>GET</code>
                </td>
                <td>
                  <code>/api/merchant/cosmollm/chats</code>
                </td>
                <td>List chat sessions</td>
              </tr>
              <tr>
                <td>
                  <code>POST</code>
                </td>
                <td>
                  <code>/api/merchant/cosmollm/chats</code>
                </td>
                <td>Create an empty chat session</td>
              </tr>
              <tr>
                <td>
                  <code>GET</code>
                </td>
                <td>
                  <code>/api/merchant/cosmollm/chats/:id</code>
                </td>
                <td>Read messages in a session</td>
              </tr>
              <tr>
                <td>
                  <code>DELETE</code>
                </td>
                <td>
                  <code>/api/merchant/cosmollm/chats/:id</code>
                </td>
                <td>Delete a session</td>
              </tr>
            </tbody>
          </table>
          <CodeBlock language="json" code={chatExample} />

          <h2 id="cases">Cases</h2>
          <p>
            A case is a work item that CosmoLLM tracks. Attach people and
            documents to the case.
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
                  <code>/api/merchant/cosmollm/cases</code>
                </td>
                <td>List cases</td>
              </tr>
              <tr>
                <td>
                  <code>POST</code>
                </td>
                <td>
                  <code>/api/merchant/cosmollm/cases</code>
                </td>
                <td>Open a case</td>
              </tr>
              <tr>
                <td>
                  <code>GET</code>
                </td>
                <td>
                  <code>/api/merchant/cosmollm/cases/:id</code>
                </td>
                <td>Read one case</td>
              </tr>
              <tr>
                <td>
                  <code>POST</code>
                </td>
                <td>
                  <code>/api/merchant/cosmollm/cases/:id/participants</code>
                </td>
                <td>Add a participant</td>
              </tr>
            </tbody>
          </table>
          <CodeBlock language="json" code={caseExample} />

          <h2 id="documents">Documents and briefing</h2>
          <p>
            Upload text or a file for CosmoLLM to read. The daily briefing
            returns a short status summary.
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
                  <code>/api/merchant/cosmollm/documents</code>
                </td>
                <td>Submit document text or a multipart file</td>
              </tr>
              <tr>
                <td>
                  <code>GET</code>
                </td>
                <td>
                  <code>/api/merchant/cosmollm/cases/:id/documents</code>
                </td>
                <td>List documents on a case</td>
              </tr>
              <tr>
                <td>
                  <code>GET</code>
                </td>
                <td>
                  <code>/api/merchant/cosmollm/briefing</code>
                </td>
                <td>Read the current briefing</td>
              </tr>
              <tr>
                <td>
                  <code>POST</code>
                </td>
                <td>
                  <code>/api/merchant/cosmollm/briefing/seen</code>
                </td>
                <td>Mark the briefing as seen</td>
              </tr>
            </tbody>
          </table>

          <h2 id="actions">Actions</h2>
          <p>
            Preview an action before Otto runs it. Then execute the approved
            action.
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
                  <code>/api/merchant/cosmollm/actions/preview</code>
                </td>
                <td>Preview a proposed action</td>
              </tr>
              <tr>
                <td>
                  <code>POST</code>
                </td>
                <td>
                  <code>/api/merchant/cosmollm/actions/execute</code>
                </td>
                <td>Execute an approved action</td>
              </tr>
            </tbody>
          </table>
          <div className="docs-alert warning">
            <strong>CAUTION:</strong> An execute call can change merchant data.
            Preview first. Confirm the payload before you execute.
          </div>
        </div>
      </DocsLayout>
    </>
  );
};

export default LlmConversations;
