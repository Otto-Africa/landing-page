import React from "react";

/**
 * Opening block for a docs page: when to use, why, and how.
 */
const DocsOpener = ({ lead, when, why, how }) => (
  <div className="docs-opener" id="when-why-how">
    {lead ? <p className="docs-opener-lead">{lead}</p> : null}
    <dl className="docs-opener-grid">
      <div>
        <dt>When to use</dt>
        <dd>{when}</dd>
      </div>
      <div>
        <dt>Why</dt>
        <dd>{why}</dd>
      </div>
      <div>
        <dt>How</dt>
        <dd>{how}</dd>
      </div>
    </dl>
  </div>
);

export default DocsOpener;
