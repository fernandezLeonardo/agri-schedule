// app/page.tsx
import Link from "next/link";

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
          <Link
            href="/auth/login"
            className="rounded-xl px-5 py-2.5 bg-[#2E7D32] text-white font-medium shadow-sm hover:brightness-110 active:scale-[0.99] transition"
          >
            Sign in
          </Link>
          <Link
            href="/auth/register"
            className="rounded-xl px-5 py-2.5 border border-foreground/15 bg-background hover:bg-foreground/5 font-medium"
          >
            Create account
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
          <div className="rounded-xl border border-foreground/10 p-4">
            Volunteer Scheduling
          </div>
          <div className="rounded-xl border border-foreground/10 p-4">
            Inventory Management
          </div>
          <div className="rounded-xl border border-foreground/10 p-4">
            Reports & Profiles
          </div>
        </div>
      </section>

      {/* Subtle “sunrise” background flourish */}
      <div className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-72 bg-gradient-to-br from-[#2E7D32]/20 via-[#8BC34A]/20 to-[#F4A261]/20 blur-2xl" />
    </main>
  );
}
