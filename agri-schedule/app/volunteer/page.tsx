"use client";
import Link from "next/link";
import { useMemo } from "react";
import { StatCard } from "@/components/stat-card";
import { EventList } from "@/components/event-list";
import { Button } from "@/components/ui/button";
import { myEvents, upcomingEvents } from "@/lib/sampleData";


export default function VolunteerHome() {
const totalHours = useMemo(() => {
return myEvents.reduce((sum, e) => sum + (e.hours || 0), 0);
}, []);


return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      {/* Navigation Header */}
      <nav className="border-b border-[#2E7D32]/20 bg-white/70 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-xl bg-white/90 ring-1 ring-black/5 grid place-items-center shadow-sm">
              <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
                <path
                  d="M12 21c-1.2-4.6 1.8-8.3 1.8-8.3S17.5 9.7 21 9c-1.2 3.5-3.7 5.8-6.8 6.8m-4.2 5.2C6.2 16.4 8.2 12.7 8.2 12.7S6.5 8.8 3 7.5c.9 3.3 3 5.5 6 6.7"
                  fill="none"
                  stroke="#2E7D32"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <span className="font-semibold text-[#2E7D32]">AgriScheduler</span>
          </Link>
          <div className="flex items-center gap-3">
            <Link href="/auth/login">
              <Button variant="outline" className="text-sm">Sign out</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto p-6 space-y-6">
        {/* 🌿 Pretty gradient volunteer header */}
        <header className="text-center py-10 bg-gradient-to-br from-[#2E7D32]/15 via-[#8BC34A]/15 to-[#F4A261]/15 
          rounded-2xl shadow-inner border border-[#2E7D32]/20 backdrop-blur-sm">
          
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-12 w-12 rounded-2xl bg-[#2E7D32] text-white grid place-items-center shadow-lg">
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H16c-.8 0-1.54.37-2.01 1l-2.99 4-.74-1.48A1.5 1.5 0 0 0 9 11H3c-.83 0-1.5.67-1.5 1.5S2.17 14 3 14h5.5l1.5 3h9v5z"/>
              </svg>
            </div>
          </div>

          <h1 className="text-3xl font-semibold text-[#2E7D32] mb-1">
            Volunteer Dashboard
          </h1>
          <p className="text-foreground/70 max-w-md mx-auto">
            Track your volunteer hours and upcoming farm shifts.
          </p>
        </header>



        <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <StatCard label="Total Hours" value={`${totalHours}`} hint="All-time" />
            <StatCard label="Upcoming Signed" value={`${myEvents.filter(e=>!e.completed).length}`} hint="Next 30 days" />
            <StatCard label="Completed Shifts" value={`${myEvents.filter(e=>e.completed).length}`} hint="Recorded" />
        </section>


        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="rounded-xl border border-[#2E7D32]/20 bg-white/70 backdrop-blur-sm p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-[#2E7D32] mb-4">My Events</h2>
                <EventList items={myEvents} empty="You haven't signed up for any events yet." />
            </div>
            <div className="rounded-xl border border-[#2E7D32]/20 bg-white/70 backdrop-blur-sm p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-[#2E7D32] mb-4">Upcoming Events</h2>
                <EventList items={upcomingEvents} ctaLabel="Sign up" onCtaClick={(id)=>console.log("sign up", id)} empty="No upcoming events." />
            </div>
        </section>
      </div>

      {/* Background Elements */}
      <div className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-72 bg-gradient-to-br from-[#2E7D32]/15 via-[#8BC34A]/10 to-[#F4A261]/15 blur-3xl" />
      <div className="pointer-events-none fixed inset-0 -z-20 bg-gradient-to-b from-transparent via-[#f0f9f0]/50 to-[#e8f5e8]/30" />
    </main>
);
}