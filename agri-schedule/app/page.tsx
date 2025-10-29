// app/page.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-[calc(100svh-0px)] grid place-items-center px-6 py-16 bg-[var(--background)] text-[var(--foreground)]">
      <section className="max-w-3xl text-center">
        <div className="inline-flex items-center gap-3 mb-4">
          <div className="h-10 w-10 rounded-2xl bg-white/90 ring-1 ring-black/5 grid place-items-center shadow-sm">
            <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
              <path
                d="M12 21c-1.2-4.6 1.8-8.3 1.8-8.3S17.5 9.7 21 9c-1.2 3.5-3.7 5.8-6.8 6.8m-4.2 5.2C6.2 16.4 8.2 12.7 8.2 12.7S6.5 8.8 3 7.5c.9 3.3 3 5.5 6 6.7"
                fill="none"
                stroke="#2E7D32"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <span className="text-xs tracking-wide uppercase text-foreground/70">
            Porters Community Farm
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
          AgriScheduler
        </h1>
        <p className="mt-3 text-lg text-foreground/70">
          Volunteer scheduling and farm inventory—centralized for Gainesville’s
          community farm. Post shifts, check in/out, and track tools, seeds, and produce.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href="/auth/login">
            <Button variant="primary" className="px-6 py-3 text-base">
              Sign in
            </Button>
          </Link>
          <Link href="/auth/register">
            <Button variant="outline" className="px-6 py-3 text-base">
              Create account
            </Button>
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-sm">
          <Link href="/volunteer" className="block">
            <div className="rounded-xl border border-[#2E7D32]/20 bg-white/70 backdrop-blur-sm p-4 shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all cursor-pointer group">
              <div className="flex items-center gap-2 mb-2">
                <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#2E7D32]" fill="currentColor">
                  <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H16c-.8 0-1.54.37-2.01 1l-2.99 4-.74-1.48A1.5 1.5 0 0 0 9 11H3c-.83 0-1.5.67-1.5 1.5S2.17 14 3 14h5.5l1.5 3h9v5z"/>
                </svg>
                <div className="font-semibold text-[#2E7D32] group-hover:text-[#1B5E20]">Volunteer Scheduling</div>
              </div>
              <div className="text-xs text-foreground/70">Organize farm shifts efficiently</div>
            </div>
          </Link>
          
          <Link href="/inventory" className="block">
            <div className="rounded-xl border border-[#2E7D32]/20 bg-white/70 backdrop-blur-sm p-4 shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all cursor-pointer group">
              <div className="flex items-center gap-2 mb-2">
                <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#2E7D32]" fill="currentColor">
                  <path d="M20 2H4c-1 0-2 .9-2 2v3.01c0 .72.43 1.34 1 1.69V20c0 1.1 1.1 2 2 2h14c.9 0 2-.9 2-2V8.7c.57-.35 1-.97 1-1.69V4c0-1.1-1-2-2-2zm0 5H4V4h16v3z"/>
              </svg>
              <div className="font-semibold text-[#2E7D32] group-hover:text-[#1B5E20]">Inventory Management</div>
            </div>
            <div className="text-xs text-foreground/70">Track tools, seeds & produce</div>
          </div>
        </Link>
        
        <Link href="/reports" className="block">
          <div className="rounded-xl border border-[#2E7D32]/20 bg-white/70 backdrop-blur-sm p-4 shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all cursor-pointer group">
            <div className="flex items-center gap-2 mb-2">
              <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#2E7D32]" fill="currentColor">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
              </svg>
              <div className="font-semibold text-[#2E7D32] group-hover:text-[#1B5E20]">Reports & Analytics</div>
            </div>
            <div className="text-xs text-foreground/70">Farm performance insights</div>
          </div>
        </Link>
        
        <Link href="/profiles" className="block">
          <div className="rounded-xl border border-[#2E7D32]/20 bg-white/70 backdrop-blur-sm p-4 shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all cursor-pointer group">
            <div className="flex items-center gap-2 mb-2">
              <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#2E7D32]" fill="currentColor">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
              <div className="font-semibold text-[#2E7D32] group-hover:text-[#1B5E20]">Volunteer Profiles</div>
            </div>
            <div className="text-xs text-foreground/70">Manage volunteer information</div>
          </div>
        </Link>
      </div>

        {/* Team Credits */}
        <div className="mt-16 pt-8 border-t border-[#2E7D32]/20">
          <div className="text-xs uppercase tracking-wider text-[#2E7D32]/70 mb-3">
            Development Team
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            <span className="text-[#2E7D32] font-medium">Leonardo Fernandez</span>
            <span className="text-[#2E7D32] font-medium">Liliana Lusvardi</span>
            <span className="text-[#2E7D32] font-medium">Chris Oeltjen</span>
          </div>
        </div>
      </section>

      {/* Enhanced background flourish with mint green theme */}
      <div className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-72 bg-gradient-to-br from-[#2E7D32]/15 via-[#8BC34A]/10 to-[#F4A261]/15 blur-3xl" />
      <div className="pointer-events-none fixed inset-0 -z-20 bg-gradient-to-b from-transparent via-[#f0f9f0]/50 to-[#e8f5e8]/30" />
    </main>
  );
}
