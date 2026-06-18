"use client";

import Link from "next/link";
import {
  KeyRound,
  Shield,
  Fingerprint,
  Hash,
  Braces,
  LockKeyhole,
  ArrowUpRight,
} from "lucide-react";

const tools = [
  {
    title: "Password Generator",
    description:
      "Generate cryptographically secure passwords for production systems.",
    icon: KeyRound,
    href: "/password-generator",
    preview: "A7#kP2!xZ9M@qL8",
    featured: true,
  },
  {
    title: "JWT Secret",
    description: "Secure signing keys for authentication systems.",
    icon: Shield,
    href: "/jwt-secret-generator",
    preview: "eyJhbGciOiJIUzI1...",
  },
  {
    title: "UUID Generator",
    description: "RFC 4122 compliant identifiers for databases.",
    icon: Fingerprint,
    href: "/uuid-generator",
    preview: "550e8400-e29b-41d4...",
  },
  {
    title: "API Key Generator",
    description: "Secure API credentials for SaaS applications.",
    icon: LockKeyhole,
    href: "/api-key-generator",
    preview: "sk_live_7f9c2a9d...",
  },
  {
    title: "SHA-256 Generator",
    description: "Instant cryptographic hashing in browser.",
    icon: Hash,
    href: "/sha256-generator",
    preview: "e3b0c44298fc1c14...",
  },
  {
    title: "JSON Formatter",
    description: "Format, validate and beautify JSON instantly.",
    icon: Braces,
    href: "/json-formatter",
    preview: '{"name":"GenerateKit"}',
  },
];

export default function BentoGridSection() {
  return (
    <section id="tools" className="relative py-28  bg-linear-to-b from-slate-50 via-white to-blue-50">
      {/* subtle background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 h-125 w-125 -translate-x-1/2 rounded-full bg-slate-200/40 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-100 w-100 rounded-full bg-blue-100/40 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto">

          <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 shadow-sm">
            Developer Toolkit
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">
            Everything You Need
            <span className="block text-blue-600">
              in One Platform
            </span>
          </h2>

          <p className="mt-5 text-lg text-slate-600">
            Secure generators, cryptographic tools, and developer utilities
            designed for modern engineering workflows.
          </p>
        </div>

        {/* GRID */}
        <div className="mt-16 grid gap-6 lg:grid-cols-4 auto-rows-[220px]">

          {tools.map((tool, i) => {
            const Icon = tool.icon;

            return (
              <Link
                key={i}
                href={tool.href}
                className={`
                  group relative rounded-3xl border border-slate-200
                  bg-white p-6 shadow-sm
                  transition-all duration-300
                  hover:shadow-xl hover:-translate-y-1
                  ${tool.featured ? "lg:col-span-2 lg:row-span-2 p-8" : ""}
                `}
              >
                {/* ICON */}
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 border border-slate-200">
                    <Icon className="h-6 w-6 text-slate-700" />
                  </div>

                  <div className="text-xs text-slate-500 font-medium">
                    Secure Tool
                  </div>
                </div>

                {/* TITLE */}
                <h3 className="mt-5 text-xl font-semibold text-slate-900">
                  {tool.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {tool.description}
                </p>

                {/* PREVIEW BOX (REAL PRODUCT FEEL) */}
                <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4 font-mono text-sm text-slate-700 break-all">
                  {tool.preview}
                </div>

                {/* CTA */}
                <div className="mt-5 flex items-center gap-2 text-sm font-medium text-blue-600 group-hover:gap-3 transition-all">
                  Open Tool
                  <ArrowUpRight size={16} />
                </div>

                {/* FEATURED BADGE */}
                {tool.featured && (
                  <div className="absolute top-5 right-5 text-xs bg-blue-50 text-blue-600 px-3 py-1 rounded-full border border-blue-100">
                    Featured
                  </div>
                )}
              </Link>
            );
          })}

        </div>
      </div>
    </section>
  );
}