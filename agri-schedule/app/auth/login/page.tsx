"use client";

import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    try {
      setLoading(true);

      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Login failed");

      const role = data.user?.role;

      if (role === "ADMIN") window.location.href = "/admin";
      else window.location.href = "/volunteer";

    } catch (err: any) {
      setError(err.message ?? "Login failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#e9f7e9] via-[#dff3df] to-[#c7ecc7]">
      <div className="bg-white/70 backdrop-blur-lg shadow-xl rounded-2xl p-10 w-[380px] border border-[#2E7D32]/20">

        <h1 className="text-3xl font-bold text-[#2E7D32] text-center mb-6">
          Welcome Back 🌿
        </h1>

        <p className="text-center text-sm text-gray-600 mb-6">
          Log in to access your AgriScheduler dashboard
        </p>

        {error && (
          <p className="text-sm text-red-600 text-center mb-3">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm shadow-sm"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm shadow-sm"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full rounded-xl bg-[#2E7D32] text-white py-3 text-sm font-semibold shadow-md hover:bg-[#25682b] transition disabled:opacity-60"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Log in"}
          </button>
        </form>
      </div>
    </main>
  );
}
