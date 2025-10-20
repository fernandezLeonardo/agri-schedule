"use client";

import React from "react";
import Link from "next/link";
import { useState, type FormEvent } from "react";
import { POST } from "@/app/api/shifts/route";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("Create account");

    async function onSubmit(e: FormEvent<HTMLFormElement>) {
      e.preventDefault();

      const data = new FormData(e.currentTarget)
      const email = data.get("email")
      const password = data.get("password")

      const res = await fetch("/api/register", {
        method: "POST",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify({email, password})
      })

      const msg = res.json()
      setMessage(msg.message);
    }

  return (
    <main className="flex items-center justify-center p-6 sm:p-10 bg-background">
        <div className="w-full max-w-md">

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
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-[#2E7D32] text-white py-2.5 font-medium shadow-sm hover:brightness-110 active:scale-[0.99] transition"
              >
                <p>{message}</p>
              </button>

            </form>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4 text-center text-xs text-foreground/60">
            <div className="rounded-xl border border-foreground/10 p-3">Volunteer Focused</div>
            <div className="rounded-xl border border-foreground/10 p-3">Inventory Aware</div>
            <div className="rounded-xl border border-foreground/10 p-3">Community Driven</div>
          </div>
        </div>
      </main>
  );
}