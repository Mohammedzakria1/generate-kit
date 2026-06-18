"use client";

import Link from "next/link";
import { ArrowRight, ShieldCheck, Zap, Lock } from "lucide-react";
import FeaturedToolsSection from "./FeaturedToolsSection";

export default function CtaSection() {
  return (
    <section className="relative overflow-hidden py-28 border-t border-slate-200 bg-linear-to-b from-slate-50 via-white to-blue-50 ">

      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 h-125 w-125 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-100 w-100 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-6">

        {/* Main Card */}
        <div className="relative rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-100 overflow-hidden">

          {/* Glow overlay */}
          <div className="absolute inset-0 bg-linear-to-r from-blue-50 via-white to-indigo-50 opacity-70" />

          <div className="relative z-10 px-8 py-16 text-center">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
              <ShieldCheck size={16} />
              Trusted by Developers Worldwide
            </div>

            {/* Heading */}
            <h2 className="mt-8 text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Start Generating Secure
              <span className="block text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600">
                Developer Resources Instantly
              </span>
            </h2>

            {/* Description */}
            <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
              Generate passwords, JWT secrets, API keys, UUIDs, and cryptographic hashes 
              in seconds — directly in your browser. No login. No tracking. No storage.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">

              <Link
                href="/password-generator"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-4 text-white font-medium shadow-md transition hover:bg-blue-700 hover:shadow-lg"
              >
                Start Free Now
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/tools"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-8 py-4 text-slate-700 font-medium transition hover:bg-slate-50"
              >
                Explore Tools
              </Link>

            </div>

            {/* Trust indicators */}
            <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-slate-600">

              <div className="flex items-center justify-center gap-2">
                <Zap className="text-blue-600" size={18} />
                Lightning Fast
              </div>

              <div className="flex items-center justify-center gap-2">
                <Lock className="text-indigo-600" size={18} />
                100% Client-Side Secure
              </div>

              <div className="flex items-center justify-center gap-2">
                <ShieldCheck className="text-emerald-600" size={18} />
                No Data Stored
              </div>

            </div>

          </div>
        </div>

        {/* Bottom SEO micro text */}
        <p className="mt-10 text-center text-xs text-slate-500 leading-relaxed">
          GenerateKit is a privacy-first developer toolkit for password generation, JWT secrets, UUIDs,
          API keys, SHA256 hashing, and JSON formatting. Built for modern developers and SaaS platforms.
        </p>

      </div>
    </section>
  );
}