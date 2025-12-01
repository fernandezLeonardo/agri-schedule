"use client";

import { useState, useEffect } from "react";
import { CreateEventForm } from "@/components/forms/create-event-form";
import {
  InventoryTable,
  type InventoryItem,
} from "@/components/inventory-table";
import { AddInventoryForm } from "@/components/forms/add-inventory-form";

// Types for events/shifts coming from /api/events
type Shift = {
  id: string;
  name: string | null;
  startTime: string;
  endTime: string;
  maxVolunteers: number;
  signups: { id: string }[];
};

type AdminEvent = {
  id: string;
  name: string;
  description: string | null;
  location: string | null;
  startTime: string;
  endTime: string | null;
  shifts?: Shift[]; // shifts may be missing on older/legacy data
};

export default function AdminHome() {
  const [userId, setUserId] = useState<string | null>(null);
  const [events, setEvents] = useState<AdminEvent[]>([]);
  const [inventory, setInventory] = useState<InventoryItem[]>([]);
  const [loadingInventory, setLoadingInventory] = useState(true);
  const [loadingEvents, setLoadingEvents] = useState(true);
  const [eventsError, setEventsError] = useState<string | null>(null);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const res = await fetch("/api/auth/me", { credentials: "include" });
        const data = await res.json();
        if (data?.id) setUserId(data.id);
        if (data?.role !== "ADMIN") {
          window.location.href = "/volunteer"
        }
      } catch (err) {
        console.error("Failed to load user:", err);
      }
    };

    loadUser();
  }, []);

  // -----------------------------
  // Load inventory from DB
  // -----------------------------
  useEffect(() => {
    const loadInventory = async () => {
      try {
        const res = await fetch("/api/inventory");
        const data = await res.json();
        setInventory(data);
      } catch (e) {
        console.error("Failed to fetch inventory", e);
      } finally {
        setLoadingInventory(false);
      }
    };

    loadInventory();
  }, []);

  // -----------------------------
  // Load events from DB
  // -----------------------------
  useEffect(() => {
    const loadEvents = async () => {
      try {
        setEventsError(null);
        const res = await fetch("/api/events");
        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.error || "Failed to fetch events");
        }
        setEvents(data);
      } catch (e: any) {
        console.error("Failed to fetch events", e);
        setEventsError(e.message ?? "Failed to fetch events");
      } finally {
        setLoadingEvents(false);
      }
    };

    loadEvents();
  }, []);

  // -----------------------------
  // Add inventory item
  // -----------------------------
  const addItem = async (item: {
    name: string;
    quantity: number;
    condition: string;
  }) => {
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
  // Delete inventory item
  // -----------------------------
  const deleteItem = async (id: string) => {
    await fetch(`/api/inventory/${id}`, {
      method: "DELETE",
    });

    setInventory((prev) => prev.filter((it) => it.id !== id));
  };

  return (
    <main className="max-w-6xl mx-auto p-6 space-y-6">
      <div className="w-full bg-gradient-to-r from-[#2E7D32]/10 via-[#8BC34A]/10 to-[#F4A261]/10 
  border border-[#2E7D32]/20 rounded-xl p-4 text-center mb-6 shadow-sm">
  <h1 className="text-xl font-semibold text-[#2E7D32]">Admin Dashboard</h1>
  <p className="text-sm text-foreground/60">Manage events, shifts, and inventory</p>
</div>


      {/* Events Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Create Event */}
        <div className="rounded-2xl border border-foreground/10 p-4">
          <h2 className="text-lg font-medium mb-3">Create Upcoming Event</h2>
          <CreateEventForm
            onCreate={(evt: AdminEvent) =>
              setEvents((prev) => [
                { ...evt, shifts: evt.shifts ?? [] },
                ...prev,
              ])
            }
          />
        </div>

        {/* Upcoming Events + Shifts */}
        <div className="rounded-2xl border border-foreground/10 p-4">
          <h2 className="text-lg font-medium mb-3">Upcoming Events</h2>

          {eventsError && (
            <p className="text-sm text-red-600 mb-2">{eventsError}</p>
          )}

          {loadingEvents ? (
            <p className="text-sm text-foreground/60">Loading events…</p>
          ) : events.length === 0 ? (
            <p className="text-sm text-foreground/60">No events yet.</p>
          ) : (
            <ul className="space-y-3">
              {events.map((e) => {
                const shifts = e.shifts ?? []; // guard against undefined

                return (
                  <li
                    key={e.id}
                    className="rounded-xl border border-foreground/10 p-3 space-y-2"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <div className="font-medium">{e.name}</div>
                        {e.location && (
                          <div className="text-xs text-foreground/60">
                            {e.location}
                          </div>
                        )}
                      </div>
                      <div className="text-xs text-foreground/60 text-right">
                        {new Date(e.startTime).toLocaleString()}
                        {e.endTime && (
                          <>
                            {" "}
                            – {new Date(e.endTime).toLocaleString()}
                          </>
                        )}
                      </div>
                    </div>

                    {e.description && (
                      <p className="text-xs text-foreground/70">
                        {e.description}
                      </p>
                    )}

                    {shifts.length === 0 ? (
                      <p className="text-xs text-foreground/60">
                        No shifts for this event yet.
                      </p>
                    ) : (
                      <div className="overflow-x-auto">
                        <table className="w-full text-xs">
                          <thead>
                            <tr className="border-b border-foreground/10 bg-foreground/5">
                              <th className="text-left py-1 px-2">Shift</th>
                              <th className="text-left py-1 px-2">Time</th>
                              <th className="text-left py-1 px-2">
                                Volunteers
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {shifts.map((shift) => (
                              <tr
                                key={shift.id}
                                className="border-b border-foreground/5"
                              >
                                <td className="py-1 px-2">
                                  {shift.name || "Unnamed shift"}
                                </td>
                                <td className="py-1 px-2">
                                  {new Date(
                                    shift.startTime
                                  ).toLocaleTimeString([], {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                  })}
                                  {" – "}
                                  {new Date(
                                    shift.endTime
                                  ).toLocaleTimeString([], {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                  })}
                                </td>
                                <td className="py-1 px-2">
                                  {shift.signups.length} /{" "}
                                  {shift.maxVolunteers}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </section>

      {/* Inventory Section */}
      <section className="rounded-2xl border border-foreground/10 p-4 space-y-4">
        <h2 className="text-lg font-medium">Inventory</h2>

        {loadingInventory ? (
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
