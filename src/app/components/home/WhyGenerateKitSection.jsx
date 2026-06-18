"use client";

import {
  ShieldCheck,
  Lock,
  Zap,
  ServerOff,
  Code2,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Privacy First",
    description:
      "Everything runs inside your browser. Your generated data never leaves your device.",
  },
  {
    icon: ServerOff,
    title: "No Backend Processing",
    description:
      "Passwords, JWT secrets, API keys and hashes are generated client-side for maximum privacy.",
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description:
      "Built using modern browser cryptography APIs trusted by millions of applications worldwide.",
  },
  {
    icon: Zap,
    title: "Instant Results",
    description:
      "Generate secure values in milliseconds without waiting for server responses.",
  },
  {
    icon: Code2,
    title: "Developer Focused",
    description:
      "Designed specifically for developers, engineers, DevOps teams and modern SaaS builders.",
  },
  {
    icon: Sparkles,
    title: "Simple Experience",
    description:
      "Clean interface, zero distractions and fast workflows that help you stay productive.",
  },
];

export default function WhyGenerateKitSection() {
  return (
    <section className="relative py-28 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 -z-10">

        <div className="absolute top-20 left-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[140px]" />

        <div className="absolute bottom-20 right-0 h-80 w-80 rounded-full bg-violet-500/10 blur-[140px]" />

      </div>

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">

          <span className="inline-flex items-center rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400">
            Why Developers Choose GenerateKit
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white">
            Built For Modern
            <span className="block bg-linear-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              Security Workflows
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            GenerateKit combines speed, privacy and enterprise-grade
            security into a single toolkit trusted by developers,
            freelancers, startups and engineering teams.
          </p>

        </div>

        {/* Feature Grid */}
        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/30 hover:bg-white/10"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 transition group-hover:bg-cyan-500/20">

                  <Icon className="h-7 w-7 text-cyan-400" />

                </div>

                <h3 className="mt-6 text-xl font-semibold  text-slate-500">
                  {feature.title}
                </h3>

                <p className="mt-3 leading-relaxed text-slate-500">
                  {feature.description}
                </p>

              </div>
            );
          })}

        </div>

        {/* Bottom Highlight */}
        <div className="mt-20 rounded-3xl border border-cyan-500/20 bg-linear-to-r from-cyan-500/10 via-blue-500/10 to-violet-500/10 p-10 text-center backdrop-blur-xl">

          <h3 className="text-2xl md:text-3xl font-bold text-white">
            No Tracking. No Signups. No Stored Data.
          </h3>

          <p className="mt-4 max-w-2xl mx-auto text-slate-500">
            Unlike many online generators, GenerateKit performs
            cryptographic operations directly in your browser.
            Your passwords, secrets and tokens remain yours only.
          </p>

        </div>

      </div>
    </section>
  );
}