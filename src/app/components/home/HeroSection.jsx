"use client";

import Link from "next/link";
import {
ArrowRight,
ShieldCheck,
Zap,
Lock,
Sparkles,
} from "lucide-react";

export default function HeroSection() {
return ( <section className="relative overflow-hidden bg-linear-to-b from-slate-50 via-white to-blue-50">

  {/* ================= BACKGROUND ================= */}

  <div className="absolute inset-0 -z-10 overflow-hidden">

    {/* Grid */}
    <div
      className="absolute inset-0 opacity-[0.04]"
      style={{
        backgroundImage:
          "linear-gradient(#64748b 1px, transparent 1px), linear-gradient(to right, #64748b 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }}
    />

    {/* Glow 1 */}
    <div className="absolute top-0 left-1/2 h-180 w-180 -translate-x-1/2 rounded-full bg-blue-500/20 blur-[140px] animate-pulse" />

    {/* Glow 2 */}
    <div className="absolute left-0 top-40 h-180 w-180 rounded-full bg-cyan-400/20 blur-[120px] animate-pulse" />

    {/* Glow 3 */}
    <div className="absolute right-0 top-32 h-180 w-180 rounded-full bg-purple-400/20 blur-[130px] animate-pulse" />

    {/* Ring */}
    <div className="absolute left-1/2 top-20 -translate-x-1/2 hidden lg:block">
      <div className="h-180 w-180 rounded-full border border-blue-200/40 animate-spin [animation-duration:50s]" />
    </div>

    {/* Floating Card Left */}
    <div className="absolute left-10 top-44 hidden xl:block animate-bounce">
      <div className="rounded-2xl border border-white/40 bg-white/70 backdrop-blur-xl px-5 py-4 shadow-xl">
        <p className="text-xs text-slate-500">
          API Key
        </p>
        <p className="font-mono text-xs mt-1">
          sk_live_a7X92...
        </p>
      </div>
    </div>

    {/* Floating Card Right */}
    <div className="absolute right-16 top-56 hidden xl:block animate-pulse">
      <div className="rounded-2xl border border-white/40 bg-white/70 backdrop-blur-xl px-5 py-4 shadow-xl">
        <p className="text-xs text-slate-500">
          UUID
        </p>
        <p className="font-mono text-xs mt-1">
          550e8400...
        </p>
      </div>
    </div>
  </div>

  {/* ================= CONTENT ================= */}

  <div className="mx-auto max-w-7xl px-6 pt-28 pb-24 lg:pt-36 lg:pb-32">

    <div className="text-center">

      {/* Badge */}
      <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 backdrop-blur-md px-5 py-2 text-sm font-medium text-blue-700 shadow-sm">

        <Sparkles size={15} />

        Trusted by Developers Worldwide

      </div>

      {/* SEO H1 */}
      <h1 className="mt-8 text-5xl font-extrabold tracking-tight text-slate-900 md:text-7xl lg:text-5xl leading-[0.95]">

        Free Online

        <span className="block bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Developer Tools
        </span>

        For Modern Teams

      </h1>

      {/* Description */}
      <p className="mx-auto mt-8 max-w-3xl text-lg md:text-xl leading-relaxed text-slate-600">

        Generate secure passwords, UUIDs, JWT secrets,
        API keys, SHA-256 hashes and format JSON instantly.

        Fast, privacy-first and built entirely in your browser.

      </p>

      {/* CTA */}
      <div className="mt-10 flex flex-wrap justify-center gap-4">

        <Link
          href="/password-generator"
          className="group inline-flex items-center gap-2 rounded-2xl bg-linear-to-r from-blue-600 to-indigo-600 px-8 py-4 text-white font-semibold shadow-xl shadow-blue-200 transition duration-300 hover:scale-105"
        >
          Start Generating

          <ArrowRight
            size={18}
            className="transition group-hover:translate-x-1"
          />
        </Link>

        <Link
          href="#tools"
          className="rounded-2xl border border-slate-300 bg-white/80 backdrop-blur-md px-8 py-4 font-medium text-slate-700 transition hover:bg-white"
        >
          Explore Tools
        </Link>

      </div>

      {/* Trust Indicators */}
      <div className="mt-14 flex flex-wrap justify-center gap-8 text-sm text-slate-500">

        <div className="flex items-center gap-2">
          <Zap size={16} />
          Lightning Fast
        </div>

        <div className="flex items-center gap-2">
          <Lock size={16} />
          Browser-Based
        </div>

        <div className="flex items-center gap-2">
          <ShieldCheck size={16} />
          0 Data Stored
        </div>

        <div>
          Enterprise Security
        </div>

      </div>
    </div>

    {/* ================= DASHBOARD PREVIEW ================= */}

    <div className="mt-24">

      <div className="mx-auto max-w-6xl rounded-8 border border-white/60 bg-white/70 backdrop-blur-xl p-6 shadow-[0_20px_80px_rgba(0,0,0,0.08)]">

        {/* Browser Header */}
        <div className="flex items-center gap-2 border-b border-slate-200 pb-4">

          <div className="h-3 w-3 rounded-full bg-red-400" />
          <div className="h-3 w-3 rounded-full bg-yellow-400" />
          <div className="h-3 w-3 rounded-full bg-green-400" />

        </div>

        {/* Cards */}
        <div className="mt-6 grid gap-5 md:grid-cols-3">

          <div className="rounded-3xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg">

            <p className="text-sm text-slate-500">
              Password Generator
            </p>

            <p className="mt-4 font-mono text-sm">
              A7#kP2!xZ9M@qL8
            </p>

          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg">

            <p className="text-sm text-slate-500">
              UUID Generator
            </p>

            <p className="mt-4 font-mono text-xs break-all">
              550e8400-e29b-41d4-a716-446655440000
            </p>

          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg">

            <p className="text-sm text-slate-500">
              JWT Secret
            </p>

            <p className="mt-4 font-mono text-xs break-all">
              V4h7T9!Qx2Lp8#A7sK...
            </p>

          </div>

        </div>

      </div>

    </div>

  </div>
</section>
);
}
