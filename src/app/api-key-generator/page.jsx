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

      {/* glow background */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-300/30 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-300/30 blur-3xl rounded-full animate-pulse"></div>

      <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">

        {/* TEXT */}
        <div className="relative z-10">

          <span className="inline-block px-4 py-1 text-sm bg-blue-100 text-blue-700 rounded-full">
            🔐 Developer Security Tool
          </span>

          <h1
            className={`mt-5 text-4xl md:text-5xl font-bold leading-tight transition-all duration-700 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            API Key Generator
          </h1>

          <p
            className={`mt-4 text-gray-600 text-lg transition-all duration-700 delay-150 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Generate secure API keys instantly for authentication, SaaS apps,
            backend services, and developer integrations.
          </p>

          <div className="flex gap-4 mt-6 flex-wrap">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
              Generate Key
            </button>

            <button className="px-6 py-3 border border-gray-300 rounded-xl hover:bg-gray-100 transition">
              Documentation
            </button>
          </div>

          {/* stats */}
          <div className="flex gap-6 mt-8 text-sm text-gray-600">
            <div>
              <p className="font-bold text-black">256-bit</p>
              Security
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

            <p className="text-sm text-gray-500">Live API Key Preview</p>

            <div className="mt-3 font-mono text-sm bg-gray-50 p-4 rounded-lg border break-all">
              sk_live_7f9c2a9d1b8e4f6c9a2d...
            </div>

            <div className="mt-4 text-xs text-gray-500">
              Production-ready secure token
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

/* ================= MAIN PAGE ================= */

export default function ApiKeyGenerator() {
  const [keys, setKeys] = useState([]);
  const [length, setLength] = useState(32);

  // generate API key
  const generateKey = () => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    const arr = new Uint32Array(length);
    crypto.getRandomValues(arr);

    let result = "sk_";
    for (let i = 0; i < length; i++) {
      result += chars[arr[i] % chars.length];
    }

    setKeys((prev) => {
      const updated = [result, ...prev];
      localStorage.setItem("api_keys", JSON.stringify(updated));
      return updated;
    });
  };

  // copy
  const copyKey = async (key) => {
    await navigator.clipboard.writeText(key);
  };

  // bulk generate
  const generateBulk = (count = 5) => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    const arr = Array.from({ length: count }).map(() => {
      const rand = new Uint32Array(length);
      crypto.getRandomValues(rand);

      let key = "sk_";
      for (let i = 0; i < length; i++) {
        key += chars[rand[i] % chars.length];
      }

      return key;
    });

    setKeys((prev) => {
      const updated = [...arr, ...prev];
      localStorage.setItem("api_keys", JSON.stringify(updated));
      return updated;
    });
  };

  useEffect(() => {
    const stored = localStorage.getItem("api_keys");
    if (stored) setKeys(JSON.parse(stored));
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
            Generate API Key
          </h2>

          {/* LENGTH */}
          <div className="mb-4">
            <div className="flex justify-between text-sm text-gray-600">
              <span>Key Length</span>
              <span>{length}</span>
            </div>

            <input
              type="range"
              min="16"
              max="64"
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="w-full mt-2"
            />
          </div>

          <div className="flex flex-wrap gap-3">

            <button
              onClick={generateKey}
              className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Generate Key
            </button>

            <button
              onClick={() => generateBulk(5)}
              className="px-5 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
            >
              Generate 5 Keys
            </button>

          </div>
        </section>

        {/* AD MID */}
        <div className="bg-gray-200 text-center py-10 rounded-xl my-10">
          Ad Slot (In Content)
        </div>

        {/* KEYS LIST */}
        <section className="bg-white border rounded-2xl p-6">
          <h2 className="font-semibold mb-4">Generated API Keys</h2>

          {keys.length === 0 ? (
            <p className="text-gray-500 text-sm">
              No API keys generated yet.
            </p>
          ) : (
            keys.map((key, i) => (
              <div
                key={i}
                className="flex justify-between items-center border-b py-2 text-sm font-mono"
              >
                <span className="break-all">{key}</span>

                <button
                  onClick={() => copyKey(key)}
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
            What is an API Key?
          </h2>

          <p className="text-gray-600">
            API keys are secure tokens used to authenticate requests in APIs,
            SaaS applications, and backend systems. They ensure only authorized
            users can access services.
          </p>
        </section>

        {/* FOOTER AD */}
        <div className="bg-gray-200 text-center py-6 rounded-xl mt-10">
          Ad Slot (Footer Banner)
        </div>

        {/* FOOTER */}
        <footer className="text-center text-gray-500 text-sm mt-10">
          © {new Date().getFullYear()} Developer Tools • Secure & Fast Utilities
        </footer>

      </div>
    </div>
  );
}