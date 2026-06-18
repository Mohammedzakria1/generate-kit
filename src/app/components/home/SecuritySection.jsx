"use client";

import {
  ShieldCheck,
  Lock,
  Database,
  ServerOff,
  EyeOff,
  BadgeCheck,
} from "lucide-react";

const securityItems = [
  {
    icon: ShieldCheck,
    title: "Web Crypto API",
    description:
      "All cryptographic operations use the browser’s built-in Web Crypto API for maximum security.",
  },
  {
    icon: ServerOff,
    title: "Fully Client-Side",
    description:
      "No backend processing. Everything runs locally in your browser environment.",
  },
  {
    icon: Database,
    title: "No Data Storage",
    description:
      "We never store or log generated passwords, keys, or sensitive values.",
  },
  {
    icon: EyeOff,
    title: "Privacy Guaranteed",
    description:
      "Your generated data never leaves your device. No tracking, no telemetry.",
  },
  {
    icon: Lock,
    title: "Secure by Design",
    description:
      "Built using modern security principles used in production-grade systems.",
  },
  {
    icon: BadgeCheck,
    title: "Production Ready",
    description:
      "Trusted utilities designed for real-world development and SaaS workflows.",
  },
];

export default function SecuritySection() {
  return (
    <section className="relative py-28 bg-linear-to-b from-slate-50 via-white to-blue-50">
      
      {/* subtle background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-25 left-1/2 h-100 w-100 -translate-x-1/2 rounded-full bg-slate-200/40 blur-3xl" />
        <div className="absolute -bottom-25 right-0 h-90 w-90 rounded-full bg-blue-100/40 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto">

          <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 shadow-sm">
            Security & Privacy
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">
            Built with
            <span className="block text-blue-600">
              Enterprise-Grade Security
            </span>
          </h2>

          <p className="mt-5 text-lg text-slate-600 leading-relaxed">
            GenerateKit is designed with a privacy-first architecture.
            Everything runs locally inside your browser — no data ever leaves your device.
          </p>
        </div>

        {/* GRID */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {securityItems.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                
                {/* icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 border border-slate-200">
                  <Icon className="h-6 w-6 text-slate-700" />
                </div>

                {/* title */}
                <h3 className="mt-5 text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>

                {/* description */}
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>

              </div>
            );
          })}

        </div>

        {/* TRUST STRIP */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">

          <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
            <p className="text-2xl font-semibold text-slate-900">100%</p>
            <p className="text-sm text-slate-500 mt-1">Client Side</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
            <p className="text-2xl font-semibold text-slate-900">0</p>
            <p className="text-sm text-slate-500 mt-1">Data Stored</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
            <p className="text-2xl font-semibold text-slate-900">256-bit</p>
            <p className="text-sm text-slate-500 mt-1">Security Level</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
            <p className="text-2xl font-semibold text-slate-900">Instant</p>
            <p className="text-sm text-slate-500 mt-1">Processing</p>
          </div>

        </div>

      </div>
    </section>
  );
}