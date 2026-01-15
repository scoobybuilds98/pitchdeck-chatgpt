"use client";

import { useState } from "react";
import type { AssumptionItem } from "../../lib/types";

interface EditableAssumption extends AssumptionItem {
  draftValue: string;
}

export default function AssumptionEditor({
  items,
}: {
  items: AssumptionItem[];
}) {
  const [drafts, setDrafts] = useState<EditableAssumption[]>(
    items.map((item) => ({
      ...item,
      draftValue: item.value.toString(),
    }))
  );

  function updateValue(id: string, value: string) {
    setDrafts((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, draftValue: value } : item
      )
    );
  }

  return (
    <section className="card" style={{ padding: "24px", marginTop: "24px" }}>
      <h3 className="section-title">Editable Assumptions</h3>
      <p className="section-subtitle">
        Update assumption inputs locally to preview how values may change. Persistence
        and recalculation will be wired in the next milestone.
      </p>
      <div style={{ marginTop: "16px" }}>
        {drafts.map((item) => (
          <div key={item.id} className="assumption-editor-row">
            <div>
              <span className="assumption-editor-label">{item.label}</span>
              <span className="assumption-editor-meta">
                {item.category} · {item.unit}
              </span>
            </div>
            <input
              className="assumption-editor-input"
              type="text"
              value={item.draftValue}
              onChange={(event) => updateValue(item.id, event.target.value)}
              aria-label={`Update ${item.label}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
