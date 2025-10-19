// app/reports/page.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ReportsPage() {
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
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
              </svg>
            </div>
          </div>
          <h1 className="text-4xl font-semibold text-[#2E7D32] mb-4">
            Reports & Analytics
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Generate insights from volunteer activities, track farm productivity, 
            and monitor operational metrics to improve farm management.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="rounded-xl border border-[#2E7D32]/20 bg-white/70 backdrop-blur-sm p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="h-10 w-10 rounded-lg bg-[#2E7D32]/10 grid place-items-center mb-4">
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#2E7D32]" fill="currentColor">
                <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
              </svg>
            </div>
            <h3 className="font-semibold text-[#2E7D32] mb-2">Volunteer Analytics</h3>
            <p className="text-sm text-foreground/70">Track volunteer hours, attendance, and participation trends</p>
          </div>

          <div className="rounded-xl border border-[#2E7D32]/20 bg-white/70 backdrop-blur-sm p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="h-10 w-10 rounded-lg bg-[#2E7D32]/10 grid place-items-center mb-4">
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#2E7D32]" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <h3 className="font-semibold text-[#2E7D32] mb-2">Harvest Reports</h3>
            <p className="text-sm text-foreground/70">Monitor crop yields and seasonal production</p>
          </div>

          <div className="rounded-xl border border-[#2E7D32]/20 bg-white/70 backdrop-blur-sm p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="h-10 w-10 rounded-lg bg-[#2E7D32]/10 grid place-items-center mb-4">
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#2E7D32]" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <h3 className="font-semibold text-[#2E7D32] mb-2">Task Completion</h3>
            <p className="text-sm text-foreground/70">Analyze task completion rates and efficiency</p>
          </div>

          <div className="rounded-xl border border-[#2E7D32]/20 bg-white/70 backdrop-blur-sm p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="h-10 w-10 rounded-lg bg-[#2E7D32]/10 grid place-items-center mb-4">
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#2E7D32]" fill="currentColor">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 19V5h6v14H5zm8-12h6v2h-6V7zm0 4h6v2h-6v-2zm0 4h4v2h-4v-2z"/>
              </svg>
            </div>
            <h3 className="font-semibold text-[#2E7D32] mb-2">Activity Summaries</h3>
            <p className="text-sm text-foreground/70">Weekly and monthly farm activity overviews</p>
          </div>

          <div className="rounded-xl border border-[#2E7D32]/20 bg-white/70 backdrop-blur-sm p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="h-10 w-10 rounded-lg bg-[#2E7D32]/10 grid place-items-center mb-4">
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#2E7D32]" fill="currentColor">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 className="font-semibold text-[#2E7D32] mb-2">Resource Usage</h3>
            <p className="text-sm text-foreground/70">Track tool usage and inventory consumption</p>
          </div>

          <div className="rounded-xl border border-[#2E7D32]/20 bg-white/70 backdrop-blur-sm p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="h-10 w-10 rounded-lg bg-[#2E7D32]/10 grid place-items-center mb-4">
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#2E7D32]" fill="currentColor">
                <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
              </svg>
            </div>
            <h3 className="font-semibold text-[#2E7D32] mb-2">Export Reports</h3>
            <p className="text-sm text-foreground/70">Download reports in CSV and PDF formats</p>
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
              Comprehensive reporting and analytics features are being developed. Check back soon!
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