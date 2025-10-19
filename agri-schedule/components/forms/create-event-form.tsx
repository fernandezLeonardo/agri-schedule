"use client";
import { useState } from "react";
import type { EventItem } from "@/components/event-list";


export function CreateEventForm({ onCreate }: { onCreate: (evt: EventItem) => void }) {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [location, setLocation] = useState("");


    return (
        <form
            className="grid grid-cols-1 gap-3"
            onSubmit={(e) => {
                e.preventDefault();
                const evt: EventItem = {
                    id: `evt_${Date.now()}`,
                    title: title || "Untitled",
                    date: date || new Date().toISOString().slice(0, 10),
                    time: time || "09:00",
                    location: location || "Main Field",
                };
                onCreate(evt);
                setTitle(""); setDate(""); setTime(""); setLocation("");
            }}
        >
            <input className="rounded-xl border border-foreground/20 px-3 py-2" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <div className="grid grid-cols-2 gap-3">
                <input className="rounded-xl border border-foreground/20 px-3 py-2" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                <input className="rounded-xl border border-foreground/20 px-3 py-2" type="time" value={time} onChange={(e) => setTime(e.target.value)} />
            </div>
            <input className="rounded-xl border border-foreground/20 px-3 py-2" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} />
            <button type="submit" className="rounded-xl bg-[#2E7D32] text-white px-4 py-2 font-medium">Create</button>
        </form>
    );
}