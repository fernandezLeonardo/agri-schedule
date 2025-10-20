// app/inventory/page.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function InventoryPage() {
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
                <path d="M20 2H4c-1 0-2 .9-2 2v3.01c0 .72.43 1.34 1 1.69V20c0 1.1 1.1 2 2 2h14c.9 0 2-.9 2-2V8.7c.57-.35 1-.97 1-1.69V4c0-1.1-1-2-2-2zm0 5H4V4h16v3z"/>
              </svg>
            </div>
          </div>
          <h1 className="text-4xl font-semibold text-[#2E7D32] mb-4">
            Inventory Management
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Track and manage farm tools, seeds, produce, and supplies. 
            Keep inventory organized and monitor stock levels efficiently.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="rounded-xl border border-[#2E7D32]/20 bg-white/70 backdrop-blur-sm p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="h-10 w-10 rounded-lg bg-[#2E7D32]/10 grid place-items-center mb-4">
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#2E7D32]" fill="currentColor">
                <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
              </svg>
            </div>
            <h3 className="font-semibold text-[#2E7D32] mb-2">Tools & Equipment</h3>
            <p className="text-sm text-foreground/70">Track shovels, hoes, wheelbarrows and farm equipment</p>
          </div>

          <div className="rounded-xl border border-[#2E7D32]/20 bg-white/70 backdrop-blur-sm p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="h-10 w-10 rounded-lg bg-[#2E7D32]/10 grid place-items-center mb-4">
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#2E7D32]" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <h3 className="font-semibold text-[#2E7D32] mb-2">Seeds & Plants</h3>
            <p className="text-sm text-foreground/70">Monitor seed inventory and plant varieties</p>
          </div>

          <div className="rounded-xl border border-[#2E7D32]/20 bg-white/70 backdrop-blur-sm p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="h-10 w-10 rounded-lg bg-[#2E7D32]/10 grid place-items-center mb-4">
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#2E7D32]" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <h3 className="font-semibold text-[#2E7D32] mb-2">Produce Tracking</h3>
            <p className="text-sm text-foreground/70">Record harvested vegetables and fruits</p>
          </div>

          <div className="rounded-xl border border-[#2E7D32]/20 bg-white/70 backdrop-blur-sm p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="h-10 w-10 rounded-lg bg-[#2E7D32]/10 grid place-items-center mb-4">
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#2E7D32]" fill="currentColor">
                <path d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1zM10 6a2 2 0 0 1 4 0v1h-4V6zm8 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2v10z"/>
              </svg>
            </div>
            <h3 className="font-semibold text-[#2E7D32] mb-2">Supply Management</h3>
            <p className="text-sm text-foreground/70">Manage fertilizers, mulch, and other supplies</p>
          </div>

          <div className="rounded-xl border border-[#2E7D32]/20 bg-white/70 backdrop-blur-sm p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="h-10 w-10 rounded-lg bg-[#2E7D32]/10 grid place-items-center mb-4">
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#2E7D32]" fill="currentColor">
                <path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2.5-9H19V1h-2v1H7V1H5v1H4.5C3.11 2 2 3.11 2 4.5v15C2 20.89 3.11 22 4.5 22h15c1.39 0 2.5-1.11 2.5-2.5v-15C22 3.11 20.89 2 19.5 2z"/>
              </svg>
            </div>
            <h3 className="font-semibold text-[#2E7D32] mb-2">Stock Levels</h3>
            <p className="text-sm text-foreground/70">Monitor inventory levels and reorder alerts</p>
          </div>

          <div className="rounded-xl border border-[#2E7D32]/20 bg-white/70 backdrop-blur-sm p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="h-10 w-10 rounded-lg bg-[#2E7D32]/10 grid place-items-center mb-4">
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#2E7D32]" fill="currentColor">
                <path d="M14 6V4h-4v2h4zM4 8v11h16V8H4zm16-2c1.11 0 2 .89 2 2v11c0 1.11-.89 2-2 2H4c-1.11 0-2-.89-2-2l.01-11c0-1.11.88-2 1.99-2h4V4c0-1.11.89-2 2-2h4c1.11 0 2 .89 2 2v2h4z"/>
              </svg>
            </div>
            <h3 className="font-semibold text-[#2E7D32] mb-2">Check In/Out</h3>
            <p className="text-sm text-foreground/70">Track who's using tools and equipment</p>
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
              Advanced inventory management features are in development. Stay tuned for updates!
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