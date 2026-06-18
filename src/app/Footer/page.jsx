"use client";

import Link from "next/link";
import {
  ShieldCheck,
  X,
  Mail,
  ArrowUpRight,
  Code2,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-linear-to-b from-slate-50 via-white to-slate-100">

      {/* Soft background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 h-125 w-125 -translate-x-1/2 rounded-full bg-blue-400/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-100 w-100 rounded-full bg-indigo-400/10 blur-[120px]" />
        <div className="absolute left-0 top-1/2 h-75 w-75 rounded-full bg-cyan-400/10 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24">

        {/* Top Grid */}
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold tracking-tight text-slate-900">
              GenerateKit
            </h3>

            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              A privacy-first developer toolkit for generating secure passwords,
              API keys, JWT secrets, UUIDs, and cryptographic utilities directly in your browser.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs text-slate-600 shadow-sm">
              <ShieldCheck size={14} className="text-blue-600" />
              100% Client-Side Secure
            </div>
          </div>

          {/* Tools */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900">
              Developer Tools
            </h4>

            <ul className="mt-5 space-y-3 text-sm text-slate-600">
              {[
                ["Password Generator", "/password-generator"],
                ["JWT Secret", "/jwt-secret-generator"],
                ["UUID Generator", "/uuid-generator"],
                ["API Key Generator", "/api-key-generator"],
                ["SHA256 Generator", "/sha256-generator"],
                ["JSON Formatter", "/json-formatter"],
              ].map(([name, href]) => (
                <li key={name}>
                  <Link
                    href={href}
                    className="hover:text-blue-600 transition-colors"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900">
              Company
            </h4>

            <ul className="mt-5 space-y-3 text-sm text-slate-600">
              {[
                ["All Tools", "#tools"],
                ["Security", "#security"],
                ["FAQ", "#faq"],
                ["Privacy Policy", "/privacy"],
                ["Terms", "/terms"],
              ].map(([name, href]) => (
                <li key={name}>
                  <Link
                    href={href}
                    className="hover:text-blue-600 transition-colors"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900">
              Contact
            </h4>

            <ul className="mt-5 space-y-4 text-sm text-slate-600">

              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a
                  href="mailto:supportgeneratekit@gmail.com?subject=Support%20Request"
                  className="hover:text-blue-600 transition"
                >
                  supportgeneratekit@gmail.com
                </a>
              </li>

              <li className="flex items-center gap-2 hover:text-blue-600">
                <Code2 size={16} />
                <a href="https://github.com/Mohammedzakria1">GitHub Repository</a>
              </li>

              <li className="flex items-center gap-2 ">
                <X size={16} />
                Twitter / X Updates
              </li>

            </ul>

            <Link
              href="/password-generator"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition"
            >
              Start Generating
              <ArrowUpRight size={16} />
            </Link>
          </div>

        </div>

        {/* Divider */}
        <div className="my-14 border-t border-slate-200" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          <p className="text-sm text-slate-500 text-center md:text-left">
            © {new Date().getFullYear()} GenerateKit. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-sm text-slate-500">
            <Link href="/privacy" className="hover:text-blue-600 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-blue-600 transition-colors">
              Terms
            </Link>
            <Link href="/security" className="hover:text-blue-600 transition-colors">
              Security
            </Link>
          </div>

        </div>

      </div>
    </footer>
  );
}