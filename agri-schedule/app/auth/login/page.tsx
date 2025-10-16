// app/auth/login/page.tsx  (or app/(auth)/login/page.tsx)
"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: hook up credentials / server action / NextAuth
  }

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-[var(--background)] text-[var(--foreground)]">
      {/* Left / Brand panel */}
      <section className="relative hidden lg:flex flex-col p-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2E7D32] via-[#8BC34A] to-[#F4A261] opacity-90" />
        <svg className="absolute inset-0 opacity-20" aria-hidden width="100%" height="100%">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        <div className="relative z-10 flex h-full flex-col justify-between">
          <header className="flex items-center gap-3">
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
            <div>
              <p className="text-white/80 text-xs tracking-wide uppercase">Porters Community Farm</p>
              <h1 className="text-white text-2xl font-medium tracking-tight">AgriSchedule</h1>
            </div>
          </header>

          <div className="max-w-md">
            <h2 className="text-white text-4xl font-semibold leading-tight">Grow together.</h2>
            <p className="mt-3 text-white/90 text-lg">
              Coordinate volunteers, track tools & produce, and keep the farm running smoothly — all in one place.
            </p>
            <ul className="mt-6 space-y-2 text-white/90 text-sm">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/90" />
                Volunteer scheduling & check-in/out
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/90" />
                Inventory of tools, seeds, and produce
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/90" />
                Contribution history & reports
              </li>
            </ul>
          </div>

          <footer className="text-white/80 text-xs">Gainesville, FL • Community-driven since 2012</footer>
        </div>
      </section>

      {/* Right / Auth card */}
      <main className="flex items-center justify-center p-6 sm:p-10 bg-background">
        <div className="w-full max-w-md">
          <div className="mb-8 lg:hidden">
            <h1 className="text-2xl font-semibold tracking-tight">AgriSchedule</h1>
            <p className="text-sm text-fozreground/70">Welcome back — let’s get growing.</p>
          </div>

          <div className="rounded-2xl border border-foreground/10 shadow-lg bg-white p-6 sm:p-8">
            <form className="space-y-5" onSubmit={onSubmit}>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-foreground/20 bg-transparent px-4 py-2.5 outline-none ring-0 focus:border-[#2E7D32]"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="text-sm font-medium">
                    Password
                  </label>
                  <button
                    type="button"
                    onClick={() => setShowPassword((s) => !s)}
                    className="text-xs text-foreground/70 hover:text-foreground/90 underline underline-offset-2"
                    aria-pressed={showPassword}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-foreground/20 bg-transparent px-4 py-2.5 outline-none ring-0 focus:border-[#2E7D32]"
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm">
                  <input type="checkbox" className="h-4 w-4 rounded border-foreground/30" /> Remember me
                </label>
                <Link href="/reset" className="text-sm text-[#2E7D32] hover:underline">
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-[#2E7D32] text-white py-2.5 font-medium shadow-sm hover:brightness-110 active:scale-[0.99] transition"
              >
                Sign in
              </button>

              <div className="relative py-2 text-center text-xs text-foreground/60 select-none">
                <span className="bg-background px-3 relative z-10">or</span>
                <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-foreground/10" />
              </div>

              <div className="grid grid-cols-1 gap-3">
                <button type="button" className="inline-flex items-center justify-center gap-2 rounded-xl border border-foreground/15 bg-background py-2.5 hover:bg-foreground/5">
                  {/* Google icon */}
                  <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
                    <path d="M21.6 12.227c0-.638-.057-1.252-.163-1.84H12v3.48h5.38a4.6 4.6 0 0 1-2 3.017v2.5h3.24c1.9-1.747 2.98-4.322 2.98-7.157Z" fill="#4285F4" />
                    <path d="M12 22c2.7 0 4.96-.894 6.614-2.423l-3.24-2.5c-.9.6-2.06.957-3.374.957-2.594 0-4.79-1.752-5.574-4.106H3.09v2.58A10 10 0 0 0 12 22Z" fill="#34A853" />
                    <path d="M6.426 13.93A6.01 6.01 0 0 1 6.11 12c0-.67.115-1.31.316-1.93V7.49H3.09A10 10 0 0 0 2 12c0 1.62.388 3.15 1.09 4.51l3.336-2.58Z" fill="#FBBC05" />
                    <path d="M12 6.4c1.47 0 2.79.505 3.83 1.49l2.87-2.87C16.96 3.3 14.7 2.4 12 2.4 8.09 2.4 4.7 4.64 3.09 7.49l3.336 2.58C7.21 8.15 9.41 6.4 12 6.4Z" fill="#EA4335" />
                  </svg>
                  <span className="text-sm font-medium">Google</span>
                </button>
              </div>

              <p className="text-xs text-foreground/60">
                By continuing you agree to our <Link href="/terms" className="underline">Terms</Link> and{" "}
                <Link href="/privacy" className="underline">Privacy Policy</Link>.
              </p>
            </form>

            <div className="mt-6 text-sm text-foreground/80">
              New to AgriSchedule? <Link href="/auth/register" className="text-[#2E7D32] hover:underline">Create an account</Link>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4 text-center text-xs text-foreground/60">
            <div className="rounded-xl border border-foreground/10 p-3">Volunteer Focused</div>
            <div className="rounded-xl border border-foreground/10 p-3">Inventory Aware</div>
            <div className="rounded-xl border border-foreground/10 p-3">Community Driven</div>
          </div>
        </div>
      </main>
    </div>
  );
}
