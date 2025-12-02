"use client";

import Link from "next/link";
import { useEffect, useState, useMemo } from "react";
import { StatCard } from "@/components/stat-card";
import { EventList } from "@/components/event-list";
import { Button } from "@/components/ui/button";

export type DBEvent = {
  id: string;
  name: string;
  description?: string | null;
  location?: string | null;
  startTime: string;
  endTime?: string | null;
};

export default function VolunteerHome() {
  const [userId, setUserId] = useState<string | null>(null);
  const [events, setEvents] = useState<DBEvent[]>([]);
  const [signedUp, setSignedUp] = useState<DBEvent[]>([]);
  const [totalHours, setTotalHours] = useState<number>();
  const [loading, setLoading] = useState(true);

  // -------------------------------------------------
  // 1️⃣ Load user from cookie-based auth
  // -------------------------------------------------
  useEffect(() => {
    const loadUser = async () => {
      try {
        const res = await fetch("/api/auth/me", { credentials: "include" });
        const data = await res.json();
        if (data?.id) setUserId(data.id);
      } catch (err) {
        console.error("Failed to load user:", err);
      }
    };

    loadUser();
  }, []);

  // -------------------------------------------------
  // 2️⃣ Load ALL events (visible to everyone)
  // -------------------------------------------------
  useEffect(() => {
    const loadEvents = async () => {
      try {
        const res = await fetch("/api/volunteer-events");
        const data = await res.json();
        setEvents(data);
      } catch (err) {
        console.error("Failed to load events:", err);
      }
    };

    loadEvents();
  }, []);

  // -------------------------------------------------
  // 3️⃣ Load user-specific signups AFTER we know userId
  // -------------------------------------------------
  useEffect(() => {
    if (!userId) return;

    const loadSignups = async () => {
      try {
        const res = await fetch(`/api/signups?user=${userId}`);
        const signupData = await res.json();

        const signedEventList = signupData.map((s: any) => s.shift.event);
        setSignedUp(signedEventList);
      } catch (err) {
        console.error("Failed to load signups:", err);
      }

      setLoading(false);
    };

    loadSignups();
  }, [userId]);

  // -------------------------------------------------
  // COMPUTED: Available events = ALL events - signed-up ones
  // -------------------------------------------------
  const availableEvents = events.filter(
    (ev) => !signedUp.some((s) => s.id === ev.id)
  );

  // -------------------------------------------------
  // SIGN UP HANDLER
  // -------------------------------------------------
  const handleSignUp = async (eventId: string) => {
    if (!userId) return alert("You must be logged in.");

    try {
      // STEP 1 — get shift ID for this event
      const shiftRes = await fetch(`/api/volunteer-events/${eventId}`);
      const { shiftId } = await shiftRes.json();

      // STEP 2 — create signup
      const signupRes = await fetch("/api/signups", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, shiftId }),
      });

      if (!signupRes.ok) {
        const err = await signupRes.json();
        alert(err.error || "Signup failed.");
        return;
      }

      const signup = await signupRes.json();
      const eventObj = signup.shift.event;

      // Update UI
      setSignedUp((prev) => [...prev, eventObj]);
    } catch (err) {
      console.error("Signup error:", err);
      alert("Failed to sign up.");
    }
  };

  // -------------------------------------------------
  // Convert DBEvent → EventList format
  // -------------------------------------------------
  const convert = (e: DBEvent) => ({
    id: e.id,
    title: e.name,
    date: e.startTime.slice(0, 10),
    time: new Date(e.startTime).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }),
    location: e.location || "Unknown",
  });
  
  // Get total hours completed
  useEffect(() => {
    if (!userId) return;

    const getHoursCompleted = async () => {
      try {
        const res = await fetch(`/api/hours-completed?user=${userId}`);
        const hoursCompletedData = await res.json();
        const hours = hoursCompletedData.hoursCompleted;
        setTotalHours(hours);
      } catch (err) {
        console.error("Failed to get hours completed:", err);
      }
    };

    getHoursCompleted();
  }, [userId]);

  // -------------------------------------------------
  // UI
  // -------------------------------------------------
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      {/* NAVBAR */}
      <nav className="border-b border-[#2E7D32]/20 bg-white/70 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <span className="font-semibold text-[#2E7D32]">AgriScheduler</span>
          </Link>

          <Link href="/auth/login">
            <Button variant="outline" className="text-sm">
              Sign out
            </Button>
          </Link>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <div className="max-w-5xl mx-auto p-6 space-y-6">
        {/* HEADER */}
        <header className="text-center py-10 bg-gradient-to-br from-[#2E7D32]/15 via-[#8BC34A]/15 to-[#F4A261]/15 rounded-2xl shadow-inner border border-[#2E7D32]/20 backdrop-blur-sm">
          <h1 className="text-3xl font-semibold text-[#2E7D32] mb-1">
            Volunteer Dashboard
          </h1>
        </header>

        {/* STATS */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <StatCard label="Total Hours" value={`${totalHours}`} hint="All-time" />
          <StatCard
            label="Upcoming Events"
            value={`${availableEvents.length}`}
            hint="Available"
          />
          <StatCard
            label="Signed Up"
            value={`${signedUp.length}`}
            hint="Your Shifts"
          />
        </section>

        {/* SIGNED-UP EVENTS */}
        <section className="rounded-xl border border-[#2E7D32]/20 bg-white/70 backdrop-blur-sm p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-[#2E7D32] mb-4">
            Signed Up Events
          </h2>

          <EventList
            items={signedUp.map(convert)}
            empty="You have not signed up for any events yet."
          />
        </section>

        {/* AVAILABLE EVENTS */}
        <section className="rounded-xl border border-[#2E7D32]/20 bg-white/70 backdrop-blur-sm p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-[#2E7D32] mb-4">
            Available Events
          </h2>

          {loading ? (
            <p className="text-sm text-foreground/60">Loading events...</p>
          ) : (
            <EventList
              items={availableEvents.map(convert)}
              ctaLabel="Sign Up"
              onCtaClick={handleSignUp}
              empty="No available events."
            />
          )}
        </section>
      </div>
    </main>
  );
}
