"use client";

import Link from "next/link";
import {
KeyRound,
Fingerprint,
Shield,
Hash,
Braces,
FileJson,
ArrowRight,
} from "lucide-react";

const tools = [
{
title: "Password Generator",
description:
"Generate strong, secure and random passwords instantly.",
icon: KeyRound,
href: "/password-generator",
color: "from-blue-500 to-cyan-500",
},

{
title: "JWT Secret Generator",
description:
"Create cryptographically secure JWT signing secrets.",
icon: Shield,
href: "/jwt-secret-generator",
color: "from-indigo-500 to-purple-500",
},

{
title: "UUID Generator",
description:
"Generate RFC 4122 compliant UUID v4 identifiers.",
icon: Fingerprint,
href: "/uuid-generator",
color: "from-emerald-500 to-teal-500",
},

{
title: "API Key Generator",
description:
"Create secure API keys for authentication systems.",
icon: KeyRound,
href: "/api-key-generator",
color: "from-orange-500 to-red-500",
},

{
title: "SHA-256 Generator",
description:
"Generate cryptographic SHA-256 hashes instantly.",
icon: Hash,
href: "/sha256-generator",
color: "from-pink-500 to-rose-500",
},

{
title: "JSON Formatter",
description:
"Format, validate and beautify JSON data quickly.",
icon: FileJson,
href: "/json-formatter",
color: "from-violet-500 to-fuchsia-500",
},
];

export default function FeaturedToolsSection() {
return ( <section
   id="tools"
   className="relative py-28 bg-linear-to-b from-slate-50 via-white to-blue-50 ">
{/* Background Glow */} <div className="absolute inset-0 -z-10 overflow-hidden">

    <div className="absolute top-0 left-1/2 h-125 w-125 -translate-x-1/2 rounded-full bg-blue-100 blur-[120px]" />

  </div>

  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center max-w-3xl mx-auto">

      <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
        Developer Utilities
      </span>

      <h2 className="mt-6 text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
        Powerful Tools For Modern Developers
      </h2>

      <p className="mt-5 text-lg text-slate-600">
        Everything you need to generate, validate,
        format and secure your applications.
      </p>

    </div>

    {/* Tool Grid */}
    <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

      {tools.map((tool, index) => {
        const Icon = tool.icon;

        return (
          <Link
            key={index}
            href={tool.href}
            className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            {/* Gradient Glow */}
            <div
              className={`absolute top-0 right-0 h-40 w-40 rounded-full bg-linear-to-r ${tool.color} opacity-10 blur-3xl`}
            />

            {/* Icon */}
            <div
              className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-r ${tool.color} text-white`}
            >
              <Icon size={28} />
            </div>

            {/* Content */}
            <h3 className="mt-6 text-xl font-bold text-slate-900">
              {tool.title}
            </h3>

            <p className="mt-3 text-slate-600 leading-relaxed">
              {tool.description}
            </p>

            {/* CTA */}
            <div className="mt-6 flex items-center gap-2 font-medium text-blue-600">

              Open Tool

              <ArrowRight
                size={16}
                className="transition group-hover:translate-x-1"
              />

            </div>

          </Link>
        );
      })}

    </div>

  </div>
</section>

);
}
