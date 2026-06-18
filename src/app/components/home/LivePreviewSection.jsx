"use client";

import { useEffect, useState } from "react";
import {
KeyRound,
Fingerprint,
Shield,
Hash,
} from "lucide-react";

const tabs = [
{
id: "password",
title: "Password",
icon: KeyRound,
},
{
id: "uuid",
title: "UUID",
icon: Fingerprint,
},
{
id: "jwt",
title: "JWT Secret",
icon: Shield,
},
{
id: "hash",
title: "SHA-256",
icon: Hash,
},
];

export default function LivePreviewSection() {
const [active, setActive] = useState("password");

const [preview, setPreview] = useState("");

useEffect(() => {
const generatePreview = () => {
switch (active) {
case "password":
setPreview("A7#kP2!xZ9M@qL8");
break;

    case "uuid":
      setPreview(
        "550e8400-e29b-41d4-a716-446655440000"
      );
      break;

    case "jwt":
      setPreview(
        "V4h7T9!Qx2Lp8#A7sK9dF..."
      );
      break;

    case "hash":
      setPreview(
        "e3b0c44298fc1c149afbf4c8996fb924..."
      );
      break;

    default:
      break;
  }
};

generatePreview();


}, [active]);

return ( <section className="relative py-28 bg-linear-to-b from-slate-50 via-white to-blue-50">

  {/* Background */}
  <div className="absolute inset-0 -z-10 overflow-hidden">

    <div className="absolute left-1/2 top-0 h-125 w-125 -translate-x-1/2 rounded-full bg-blue-100 blur-[120px]" />

  </div>

  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center max-w-3xl mx-auto">

      <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
        Live Preview
      </span>

      <h2 className="mt-6 text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
        See GenerateKit In Action
      </h2>

      <p className="mt-5 text-lg text-slate-600">
        Experience secure generation directly
        in your browser before opening a tool.
      </p>

    </div>

    {/* Preview Card */}
    <div className="mt-16 mx-auto max-w-5xl">

      <div className="rounded-8 border border-slate-200 bg-white shadow-xl overflow-hidden">

        {/* Header */}
        <div className="border-b border-slate-200 p-5">

          <div className="flex flex-wrap gap-3">

            {tabs.map((tab) => {
              const Icon = tab.icon;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActive(tab.id)}
                  className={`flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition ${
                    active === tab.id
                      ? "bg-blue-600 text-white"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  <Icon size={16} />
                  {tab.title}
                </button>
              );
            })}

          </div>

        </div>

        {/* Body */}
        <div className="p-8 md:p-12">

          <div className="rounded-2xl bg-slate-950 p-6 md:p-8">

            <p className="text-xs uppercase tracking-wider text-slate-500">
              Generated Output
            </p>

            <p className="mt-4 break-all font-mono text-green-400 text-sm md:text-lg">
              {preview}
            </p>

          </div>

          {/* Fake Console */}
          <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">

            <p className="font-mono text-sm text-slate-700">
              ✓ Generated securely using Web Crypto API
            </p>

            <p className="font-mono text-sm text-slate-700 mt-2">
              ✓ Processed locally in browser
            </p>

            <p className="font-mono text-sm text-slate-700 mt-2">
              ✓ No data transmitted to servers
            </p>

          </div>

        </div>

      </div>

    </div>

  </div>
</section>

);
}
