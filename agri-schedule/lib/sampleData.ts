import type { EventItem } from "@/components/event-list";
import type { InventoryItem } from "@/components/inventory-table";


export const myEvents: EventItem[] = [
{ id: "m1", title: "Weeding Crew", date: "2025-10-22", time: "09:00", location: "South Plot", hours: 3, completed: false },
{ id: "m2", title: "Compost Turn", date: "2025-10-10", time: "08:00", location: "Compost Area", hours: 2, completed: true },
];


export const upcomingEvents: EventItem[] = [
{ id: "u1", title: "Harvest Day", date: "2025-10-24", time: "09:00", location: "Main Field" },
{ id: "u2", title: "Seed Starting", date: "2025-10-26", time: "14:00", location: "Greenhouse" },
{ id: "u3", title: "Irrigation Fix", date: "2025-10-28", time: "10:00", location: "North Beds" },
];


export const inventory: InventoryItem[] = [
{ id: "i1", name: "Shovel", qty: 12, condition: "Good" },
{ id: "i2", name: "Hoe", qty: 8, condition: "Fair" },
{ id: "i3", name: "Tomato Seeds", qty: 5, condition: "New" },
];