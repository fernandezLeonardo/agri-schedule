"use client";
import Link from "next/link";
import { useMemo } from "react";
import { StatCard } from "@/components/stat-card";
import { EventList } from "@/components/event-list";
import { myEvents, upcomingEvents } from "@/lib/sampleData";


export default function VolunteerHome() {
const totalHours = useMemo(() => {
return myEvents.reduce((sum, e) => sum + (e.hours || 0), 0);
}, []);


return (
    <main className="max-w-5xl mx-auto p-6 space-y-6">
        <header className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold">Volunteer Home</h1>
            <Link href="/auth/login" className="text-sm underline text-[#2E7D32]">Sign out</Link>
        </header>


        <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <StatCard label="Total Hours" value={`${totalHours}`} hint="All-time" />
            <StatCard label="Upcoming Signed" value={`${myEvents.filter(e=>!e.completed).length}`} hint="Next 30 days" />
            <StatCard label="Completed Shifts" value={`${myEvents.filter(e=>e.completed).length}`} hint="Recorded" />
        </section>


        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
                <h2 className="text-lg font-medium mb-2">My Events</h2>
                <EventList items={myEvents} empty="You haven't signed up for any events yet." />
            </div>
            <div>
                <h2 className="text-lg font-medium mb-2">Upcoming Events</h2>
                <EventList items={upcomingEvents} ctaLabel="Sign up" onCtaClick={(id)=>console.log("sign up", id)} empty="No upcoming events." />
            </div>
        </section>
    </main>
);
}