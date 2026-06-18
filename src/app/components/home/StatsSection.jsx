"use client";

import {
ShieldCheck,
Zap,
Lock,
Cpu,
} from "lucide-react";

const stats = [
{
icon: ShieldCheck,
value: "100%",
label: "Client-Side Processing",
description: "Everything runs in your browser",
},
{
icon: Lock,
value: "0",
label: "Data Stored",
description: "No passwords or secrets saved",
},
{
icon: Zap,
value: "<1s",
label: "Generation Speed",
description: "Instant secure generation",
},
{
icon: Cpu,
value: "24/7",
label: "Available",
description: "Free access anytime",
},
];

export default function StatsSection() {
return ( <section className="relative py-24 bg-linear-to-b from-slate-50 via-white to-blue-50">

  {/* Background Glow */}
  <div className="absolute inset-0 -z-10 overflow-hidden">

    <div className="absolute left-1/2 top-0 h-100 w-100 -translate-x-1/2 rounded-full bg-blue-100/50 blur-[120px]" />

  </div>

  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center max-w-3xl mx-auto">

      <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
        Trusted Developer Toolkit
      </span>

      <h2 className="mt-6 text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
        Built For Security,
        Speed & Privacy
      </h2>

      <p className="mt-5 text-lg text-slate-600">
        GenerateKit is designed for developers who need
        secure tools without sacrificing performance or privacy.
      </p>

    </div>

    {/* Stats Grid */}
    <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

      {stats.map((item, index) => {
        const Icon = item.icon;

        return (
          <div
            key={index}
            className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">

              <Icon size={28} />

            </div>

            <h3 className="mt-6 text-4xl font-bold text-slate-900">

              {item.value}

            </h3>

            <p className="mt-2 font-semibold text-slate-800">

              {item.label}

            </p>

            <p className="mt-3 text-sm leading-relaxed text-slate-500">

              {item.description}

            </p>

          </div>
        );
      })}

    </div>

  </div>
</section>


);
}
