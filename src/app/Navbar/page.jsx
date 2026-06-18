"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Password",
      href: "/password-generator",
    },
    {
      name: "JWT Secret",
      href: "/jwt-secret-generator",
    },
    {
      name: "UUID",
      href: "/uuid-generator",
    },
    {
      name: "API Key",
      href: "/api-key-generator",
    },
    {
      name: "SHA-256",
      href: "/sha256-generator",
    },
    {
      name: "JSON Formatter",
      href: "/json-formatter",
    },
  ];

  return (
    <header className="sticky top-0 z-50 border-b bg-linear-to-b from-slate-50 via-white to-blue-50">
      <nav className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/password-generator"
            className="text-xl font-bold bg-[#FFFFFF] text-slate-900"
          >
            GenerateKit
          </Link>

          <div className="hidden lg:flex items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-700 hover:text-blue-600 transition"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden"
          >
            {open ? <X size={24}/> : <Menu size={24} />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden py-4 flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-slate-700"
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}