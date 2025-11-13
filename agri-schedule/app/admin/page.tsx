"use client";

import { useState, useEffect } from "react";
import { CreateEventForm } from "@/components/forms/create-event-form";
import { InventoryTable, type InventoryItem } from "@/components/inventory-table";
import { AddInventoryForm } from "@/components/forms/add-inventory-form";

export default function AdminHome() {
    const [events, setEvents] = useState<any[]>([]);
    const [inventory, setInventory] = useState<InventoryItem[]>([]);
    const [loading, setLoading] = useState(true);

    // -----------------------------
    // Load inventory from DB
    // -----------------------------
    useEffect(() => {
        const load = async () => {
            try {
                const res = await fetch("/api/inventory");
                const data = await res.json();
                setInventory(data);
            } catch (e) {
                console.error("Failed to fetch inventory", e);
            } finally {
                setLoading(false);
            }
        };

        load();
    }, []);

    // -----------------------------
    // Add inventory item
    // -----------------------------
    const addItem = async (item: { name: string; quantity: number; condition: string }) => {
        const res = await fetch("/api/inventory", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(item),
        });

        const newItem = await res.json();

        setInventory((prev) => [newItem, ...prev]);
    };

    // -----------------------------
    // Save (update) inventory item
    // -----------------------------
    const saveItem = async (item: InventoryItem) => {
        const res = await fetch(`/api/inventory/${item.id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(item),
        });

        const updated = await res.json();

        setInventory((prev) =>
            prev.map((it) => (it.id === updated.id ? updated : it))
        );
    };

    // -----------------------------
    // Delete item
    // -----------------------------
    const deleteItem = async (id: string) => {
        await fetch(`/api/inventory/${id}`, {
            method: "DELETE",
        });

        setInventory((prev) => prev.filter((it) => it.id !== id));
    };

    return (
        <main className="max-w-6xl mx-auto p-6 space-y-6">
            <header className="flex items-center justify-between">
                <h1 className="text-2xl font-semibold">Admin Home</h1>
                <span className="text-sm text-foreground/60">
                    Inventory & event management
                </span>
            </header>

            {/* Events Section */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="rounded-2xl border border-foreground/10 p-4">
                    <h2 className="text-lg font-medium mb-3">Create Upcoming Event</h2>
                    <CreateEventForm
                        onCreate={(evt) => setEvents((prev) => [evt, ...prev])}
                    />
                </div>

                <div className="rounded-2xl border border-foreground/10 p-4">
                    <h2 className="text-lg font-medium mb-3">Upcoming Events</h2>
                    {events.length === 0 ? (
                        <p className="text-sm text-foreground/60">No events yet.</p>
                    ) : (
                        <ul className="space-y-3">
                            {events.map((e) => (
                                <li
                                    key={e.id}
                                    className="rounded-xl border border-foreground/10 p-3 flex items-center justify-between"
                                >
                                    <div>
                                        <div className="font-medium">{e.title}</div>
                                        <div className="text-xs text-foreground/60">
                                            {e.date} · {e.time} · {e.location}
                                        </div>
                                    </div>
                                    <button className="text-sm underline">
                                        Edit
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </section>

            {/* Inventory Section */}
            <section className="rounded-2xl border border-foreground/10 p-4 space-y-4">
                <h2 className="text-lg font-medium">Inventory</h2>

                {loading ? (
                    <p className="text-sm text-foreground/60">Loading inventory…</p>
                ) : (
                    <>
                        <AddInventoryForm onAdd={addItem} />
                        <InventoryTable
                            items={inventory}
                            onSave={saveItem}
                            onDelete={deleteItem}
                        />
                    </>
                )}
            </section>
        </main>
    );
}
