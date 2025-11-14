// components/forms/create-event-form.tsx
"use client";

import { useState } from "react";

type CreateEventFormProps = {
  onCreate: (event: any) => void;
};

export function CreateEventForm({ onCreate }: CreateEventFormProps) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(""); // YYYY-MM-DD
  const [time, setTime] = useState(""); // HH:MM
  const [location, setLocation] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!title.trim() || !date || !time) {
      setError("Title, date, and time are required.");
      return;
    }

    const start = new Date(`${date}T${time}`);
    if (isNaN(start.getTime())) {
      setError("Invalid date / time.");
      return;
    }

    // simple default: 2-hour event/shift
    const end = new Date(start.getTime() + 2 * 60 * 60 * 1000);

    try {
      setSubmitting(true);

      const res = await fetch("/api/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: title.trim(),
          description: null,
          location: location.trim() || null,
          startTime: start.toISOString(),
          endTime: end.toISOString(),
          shifts: [
            {
              name: "Default shift",
              startTime: start.toISOString(),
              endTime: end.toISOString(),
              maxVolunteers: 10,
            },
          ],
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to create event");
      }

      onCreate(data);

      // reset form
      setTitle("");
      setDate("");
      setTime("");
      setLocation("");
    } catch (err: any) {
      console.error(err);
      setError(err.message ?? "Failed to create event");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      {error && <p className="text-sm text-red-600">{error}</p>}

      <input
        className="w-full rounded-xl border border-foreground/10 px-3 py-2 text-sm bg-white"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <div className="grid grid-cols-2 gap-2">
        <input
          type="date"
          className="w-full rounded-xl border border-foreground/10 px-3 py-2 text-sm bg-white"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="time"
          className="w-full rounded-xl border border-foreground/10 px-3 py-2 text-sm bg-white"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>

      <input
        className="w-full rounded-xl border border-foreground/10 px-3 py-2 text-sm bg-white"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />

      <button
        type="submit"
        className="w-full rounded-xl bg-green-700 text-white py-2 text-sm font-medium disabled:opacity-60"
        disabled={submitting}
      >
        {submitting ? "Creating..." : "Create"}
      </button>
    </form>
  );
}
