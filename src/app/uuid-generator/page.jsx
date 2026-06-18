"use client";

import { useEffect, useState } from "react";

/* ================= HERO ================= */
function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative bg-[#FCFCFC] overflow-hidden">

      {/* soft glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-300/30 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-300/30 blur-3xl rounded-full animate-pulse"></div>

      <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">

        {/* TEXT */}
        <div className="relative z-10">

          <span className="inline-block px-4 py-1 text-sm bg-blue-100 text-blue-700 rounded-full">
            ⚡ Developer Utility Tool
          </span>

          <h1
            className={`mt-5 text-4xl md:text-5xl font-bold leading-tight transition-all duration-700 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            UUID Generator (v4)
          </h1>

          <p
            className={`mt-4 text-gray-600 text-lg transition-all duration-700 delay-150 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Generate universally unique identifiers instantly for databases,
            APIs, authentication systems, and distributed applications.
          </p>

          <div className="flex gap-4 mt-6 flex-wrap">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
              Generate UUID
            </button>

            <button className="px-6 py-3 border border-gray-300 rounded-xl hover:bg-gray-100 transition">
              Learn More
            </button>
          </div>

          {/* stats */}
          <div className="flex gap-6 mt-8 text-sm text-gray-600">
            <div>
              <p className="font-bold text-black">128-bit</p>
              Standard
            </div>
            <div>
              <p className="font-bold text-black">0</p>
              Stored
            </div>
            <div>
              <p className="font-bold text-black">Instant</p>
              Generation
            </div>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="relative z-10">

          <div className="bg-white border rounded-2xl shadow-lg p-6 hover:scale-[1.02] transition">

            <p className="text-sm text-gray-500">Live UUID Preview</p>

            <div className="mt-3 font-mono text-sm bg-gray-50 p-4 rounded-lg border break-all">
              550e8400-e29b-41d4-a716-446655440000
            </div>

            <div className="mt-4 text-xs text-gray-500">
              RFC 4122 compliant UUID v4
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

/* ================= MAIN PAGE ================= */

export default function UUIDGenerator() {
  const [uuids, setUuids] = useState([]);

  // generate UUID v4
  const generateUUID = () => {
    const uuid = crypto.randomUUID();

    setUuids((prev) => {
      const updated = [uuid, ...prev];
      localStorage.setItem("uuids", JSON.stringify(updated));
      return updated;
    });
  };

  // copy
  const copyUUID = async (id) => {
    await navigator.clipboard.writeText(id);
  };

  // bulk generate
  const generateBulk = (count = 5) => {
    const arr = Array.from({ length: count }, () => crypto.randomUUID());

    setUuids((prev) => {
      const updated = [...arr, ...prev];
      localStorage.setItem("uuids", JSON.stringify(updated));
      return updated;
    });
  };

  useEffect(() => {
    const stored = localStorage.getItem("uuids");
    if (stored) setUuids(JSON.parse(stored));
  }, []);

  return (
    <div className="min-h-screen bg-[#FCFCFC] text-gray-900">

      {/* HERO */}
      <Hero />

      <div className="max-w-5xl mx-auto px-6 py-10">

        {/* AD TOP */}
        <div className="bg-gray-200 text-center py-6 rounded-xl mb-10">
          Ad Slot (Top Banner)
        </div>

        {/* TOOL CARD */}
        <section className="bg-white border rounded-2xl shadow-sm p-6">

          <h2 className="text-2xl font-bold mb-4">
            Generate UUID
          </h2>

          <div className="flex flex-wrap gap-3">

            <button
              onClick={generateUUID}
              className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Generate UUID
            </button>

            <button
              onClick={() => generateBulk(5)}
              className="px-5 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
            >
              Generate 5
            </button>

          </div>
        </section>

        {/* AD MID */}
        <div className="bg-gray-200 text-center py-10 rounded-xl my-10">
          Ad Slot (In Content)
        </div>

        {/* UUID LIST */}
        <section className="bg-white border rounded-2xl p-6">
          <h2 className="font-semibold mb-4">Generated UUIDs</h2>

          {uuids.length === 0 ? (
            <p className="text-gray-500 text-sm">
              No UUIDs generated yet.
            </p>
          ) : (
            uuids.map((id, i) => (
              <div
                key={i}
                className="flex justify-between items-center border-b py-2 text-sm font-mono"
              >
                <span className="break-all">{id}</span>

                <button
                  onClick={() => copyUUID(id)}
                  className="text-blue-600 hover:underline"
                >
                  Copy
                </button>
              </div>
            ))
          )}
        </section>

        {/* SEO CONTENT */}
        <section className="mt-10 bg-white border rounded-2xl p-6">
          <h2 className="text-xl font-bold mb-2">
            What is a UUID?
          </h2>

          <p className="text-gray-600">
            A UUID (Universally Unique Identifier) is a 128-bit identifier
            used in software systems to uniquely identify information
            without central coordination.
          </p>
        </section>

        {/* FOOTER AD */}
        <div className="bg-gray-200 text-center py-6 rounded-xl mt-10">
          Ad Slot (Footer Banner)
        </div>

        {/* FOOTER */}
        <footer className="text-center text-gray-500 text-sm mt-10">
          © {new Date().getFullYear()} Developer Tools • Fast & Free Utilities
        </footer>

      </div>
    </div>
  );
}