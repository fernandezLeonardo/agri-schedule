"use client";
import { useState } from "react";
import type { InventoryItem } from "@/components/inventory-table";


const CONDITIONS2 = ["New", "Good", "Fair", "Poor", "Broken"] as const;


export function AddInventoryForm({ onAdd }: { onAdd: (item: InventoryItem) => void }) {
    const [name, setName] = useState("");
    const [qty, setQty] = useState<number>(1);
    const [condition, setCondition] = useState<string>("Good");


    return (
        <form
            className="grid grid-cols-1 md:grid-cols-4 gap-3"
            onSubmit={(e) => {
                e.preventDefault();
                const item: InventoryItem = {
                    id: `inv_${Date.now()}`,
                    name: name || "Untitled",
                    qty: isNaN(qty) ? 0 : qty,
                    condition,
                };
                onAdd(item);
                setName("");
                setQty(1);
                setCondition("Good");
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
                value={qty}
                onChange={(e) => setQty(Number(e.target.value))}
            />
            <select
                className="rounded-xl border border-foreground/20 px-3 py-2"
                value={condition}
                onChange={(e) => setCondition(e.target.value)}
            >
                {CONDITIONS2.map((c) => (
                    <option key={c} value={c}>
                        {c}
                    </option>
                ))}
            </select>
            <button type="submit" className="rounded-xl bg-[#2E7D32] text-white px-4 py-2 font-medium">
                Add Item
            </button>
        </form>
    );
}