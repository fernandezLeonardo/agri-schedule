// app/profiles/page.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ProfilesPage() {
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
              <Button variant="outline" className="text-sm">Sign in</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-12 w-12 rounded-2xl bg-[#2E7D32] text-white grid place-items-center shadow-lg">
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
          </div>
          <h1 className="text-4xl font-semibold text-[#2E7D32] mb-4">
            Volunteer Profiles
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Manage volunteer information, track individual contributions, 
            and maintain community member profiles and preferences.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="rounded-xl border border-[#2E7D32]/20 bg-white/70 backdrop-blur-sm p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="h-10 w-10 rounded-lg bg-[#2E7D32]/10 grid place-items-center mb-4">
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#2E7D32]" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
            </div>
            <h3 className="font-semibold text-[#2E7D32] mb-2">Member Directory</h3>
            <p className="text-sm text-foreground/70">Browse all community farm volunteers and their info</p>
          </div>

          <div className="rounded-xl border border-[#2E7D32]/20 bg-white/70 backdrop-blur-sm p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="h-10 w-10 rounded-lg bg-[#2E7D32]/10 grid place-items-center mb-4">
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#2E7D32]" fill="currentColor">
                <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H16c-.8 0-1.54.37-2.01 1l-2.99 4-.74-1.48A1.5 1.5 0 0 0 9 11H3c-.83 0-1.5.67-1.5 1.5S2.17 14 3 14h5.5l1.5 3h9v5z"/>
              </svg>
            </div>
            <h3 className="font-semibold text-[#2E7D32] mb-2">Activity Tracking</h3>
            <p className="text-sm text-foreground/70">Monitor individual volunteer hours and contributions</p>
          </div>

          <div className="rounded-xl border border-[#2E7D32]/20 bg-white/70 backdrop-blur-sm p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="h-10 w-10 rounded-lg bg-[#2E7D32]/10 grid place-items-center mb-4">
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#2E7D32]" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <h3 className="font-semibold text-[#2E7D32] mb-2">Skills & Interests</h3>
            <p className="text-sm text-foreground/70">Track volunteer skills and preferred activities</p>
          </div>

          <div className="rounded-xl border border-[#2E7D32]/20 bg-white/70 backdrop-blur-sm p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="h-10 w-10 rounded-lg bg-[#2E7D32]/10 grid place-items-center mb-4">
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#2E7D32]" fill="currentColor">
                <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </div>
            <h3 className="font-semibold text-[#2E7D32] mb-2">Contact Management</h3>
            <p className="text-sm text-foreground/70">Manage volunteer contact information and preferences</p>
          </div>

          <div className="rounded-xl border border-[#2E7D32]/20 bg-white/70 backdrop-blur-sm p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="h-10 w-10 rounded-lg bg-[#2E7D32]/10 grid place-items-center mb-4">
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#2E7D32]" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <h3 className="font-semibold text-[#2E7D32] mb-2">Recognition & Badges</h3>
            <p className="text-sm text-foreground/70">Award badges and recognize volunteer achievements</p>
          </div>

          <div className="rounded-xl border border-[#2E7D32]/20 bg-white/70 backdrop-blur-sm p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="h-10 w-10 rounded-lg bg-[#2E7D32]/10 grid place-items-center mb-4">
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#2E7D32]" fill="currentColor">
                <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
              </svg>
            </div>
            <h3 className="font-semibold text-[#2E7D32] mb-2">Availability Scheduling</h3>
            <p className="text-sm text-foreground/70">Track when volunteers are available to help</p>
          </div>
        </div>

        {/* Coming Soon Section */}
        <div className="text-center">
          <div className="rounded-2xl border-2 border-dashed border-[#2E7D32]/30 bg-[#2E7D32]/5 p-12">
            <div className="h-16 w-16 rounded-full bg-[#2E7D32]/10 grid place-items-center mx-auto mb-6">
              <svg viewBox="0 0 24 24" className="h-8 w-8 text-[#2E7D32]" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[#2E7D32] mb-3">Coming Soon</h3>
            <p className="text-foreground/70 mb-6 max-w-md mx-auto">
              Volunteer profile management features are under development. Stay tuned for updates!
            </p>
            <Link href="/">
              <Button variant="outline">Back to Home</Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-72 bg-gradient-to-br from-[#2E7D32]/15 via-[#8BC34A]/10 to-[#F4A261]/15 blur-3xl" />
      <div className="pointer-events-none fixed inset-0 -z-20 bg-gradient-to-b from-transparent via-[#f0f9f0]/50 to-[#e8f5e8]/30" />
    </main>
  );
}