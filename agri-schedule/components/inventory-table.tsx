// components/inventory-table.tsx
"use client";

import { useState } from "react";

export type InventoryItem = {
  id: string;
  name: string;
  qty: number;
  condition?: string;
};

const CONDITIONS = ["New", "Good", "Fair", "Poor", "Broken"] as const;

export function InventoryTable({
  items,
  onSave,
  onDelete,
}: {
  items: InventoryItem[];
  onSave?: (item: InventoryItem) => void;
  onDelete?: (id: string) => void;
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left border-b border-foreground/10">
            <th className="py-2 pr-3">Item</th>
            <th className="py-2 pr-3">Qty</th>
            <th className="py-2 pr-3">Condition</th>
            <th className="py-2 pr-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((it) => (
            <EditableRow
              key={it.id}
              initial={it}
              onSave={onSave}
              onDelete={onDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

function EditableRow({
  initial,
  onSave,
  onDelete,
}: {
  initial: InventoryItem;
  onSave?: (item: InventoryItem) => void;
  onDelete?: (id: string) => void;
}) {
  const [draft, setDraft] = useState<InventoryItem>({ ...initial });
  const [editing, setEditing] = useState(false);

  return (
    <tr className="border-b border-foreground/10">
      <td className="py-2 pr-3">
        {editing ? (
          <input
            className="rounded-lg border border-foreground/20 px-2 py-1 w-full"
            value={draft.name}
            onChange={(e) => setDraft({ ...draft, name: e.target.value })}
          />
        ) : (
          <span className="font-medium">{draft.name}</span>
        )}
      </td>

      <td className="py-2 pr-3">
        {editing ? (
          <input
            type="number"
            className="rounded-lg border border-foreground/20 px-2 py-1 w-24"
            value={draft.qty}
            onChange={(e) =>
              setDraft({ ...draft, qty: Number(e.target.value) })
            }
          />
        ) : (
          draft.qty
        )}
      </td>

      <td className="py-2 pr-3">
        {editing ? (
          <select
            className="rounded-lg border border-foreground/20 px-2 py-1"
            value={draft.condition || "Good"}
            onChange={(e) => setDraft({ ...draft, condition: e.target.value })}
          >
            {CONDITIONS.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        ) : (
          draft.condition || "—"
        )}
      </td>

      <td className="py-2 pr-3">
        <div className="flex gap-2">
          {!editing && (
            <button
              className="rounded-lg border px-2 py-1"
              onClick={() => setEditing(true)}
            >
              Edit
            </button>
          )}
          {editing && (
            <>
              <button
                className="rounded-lg border px-2 py-1 bg-[#2E7D32] text-white"
                onClick={() => {
                  onSave?.(draft);
                  setEditing(false);
                }}
              >
                Save
              </button>
              <button
                className="rounded-lg border px-2 py-1"
                onClick={() => {
                  setDraft({ ...initial });
                  setEditing(false);
                }}
              >
                Cancel
              </button>
            </>
          )}
          <button
            className="rounded-lg border px-2 py-1"
            onClick={() => onDelete?.(draft.id)}
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
}
