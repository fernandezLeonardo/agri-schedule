"use client";
import { useState } from "react";
import { CreateEventForm } from "@/components/forms/create-event-form";
import { InventoryTable, type InventoryItem } from "@/components/inventory-table";
import { AddInventoryForm } from "@/components/forms/add-inventory-form";
import { inventory as initialInventory, upcomingEvents } from "@/lib/sampleData";


export default function AdminHome() {
    const [events, setEvents] = useState(upcomingEvents);
    const [inventory, setInventory] = useState<InventoryItem[]>(initialInventory);


    const saveItem = (item: InventoryItem) => {
        setInventory((prev) => prev.map((it) => (it.id === item.id ? item : it)));
    };


    const deleteItem = (id: string) => {
        setInventory((prev) => prev.filter((it) => it.id !== id));
    };


    const addItem = (item: InventoryItem) => {
        setInventory((prev) => [item, ...prev]);
    };


    return (
        <main className="max-w-6xl mx-auto p-6 space-y-6">
            <header className="flex items-center justify-between">
                <h1 className="text-2xl font-semibold">Admin Home</h1>
                <span className="text-sm text-foreground/60">Lightweight mock dashboard</span>
            </header>


            <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="rounded-2xl border border-foreground/10 p-4">
                    <h2 className="text-lg font-medium mb-3">Create Upcoming Event</h2>
                    <CreateEventForm onCreate={(evt) => setEvents((prev) => [evt, ...prev])} />
                </div>
                <div className="rounded-2xl border border-foreground/10 p-4">
                    <h2 className="text-lg font-medium mb-3">Upcoming Events</h2>
                    <ul className="space-y-3">
                        {events.map((e) => (
                            <li key={e.id} className="rounded-xl border border-foreground/10 p-3 flex items-center justify-between">
                                <div>
                                    <div className="font-medium">{e.title}</div>
                                    <div className="text-xs text-foreground/60">{e.date} · {e.time} · {e.location}</div>
                                </div>
                                <button onClick={() => alert(`Edit ${e.title}`)} className="text-sm underline">Edit</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>


            <section className="rounded-2xl border border-foreground/10 p-4 space-y-4">
                <h2 className="text-lg font-medium">Inventory</h2>
                <AddInventoryForm onAdd={addItem} />
                <InventoryTable items={inventory} onSave={saveItem} onDelete={deleteItem} />
            </section>
        </main>
    );
}