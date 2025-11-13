"use client";

import { useState } from "react";

const CONDITIONS = ["NEW", "GOOD", "FAIR", "POOR", "BROKEN"] as const;

export function AddInventoryForm({
  onAdd,
}: {
  onAdd: (item: { name: string; quantity: number; condition: string }) => void;
}) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState<number>(1);
  const [condition, setCondition] = useState<string>("GOOD");

  return (
    <form
      className="grid grid-cols-1 md:grid-cols-4 gap-3"
      onSubmit={(e) => {
        e.preventDefault();

        onAdd({
          name: name.trim() || "Untitled",
          quantity: isNaN(quantity) ? 0 : quantity,
          condition,
        });

        setName("");
        setQuantity(1);
        setCondition("GOOD");
      }}
    >
      <input
        className="rounded-xl border border-foreground/20 px-3 py-2"
        placeholder="Item name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        className="rounded-xl border border-foreground/20 px-3 py-2"
        placeholder="Qty"
        min={0}
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      />

      <select
        className="rounded-xl border border-foreground/20 px-3 py-2"
        value={condition}
        onChange={(e) => setCondition(e.target.value)}
      >
        {CONDITIONS.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>

      <button
        type="submit"
        className="rounded-xl bg-[#2E7D32] text-white px-4 py-2 font-medium"
      >
        Add Item
      </button>
    </form>
  );
}
