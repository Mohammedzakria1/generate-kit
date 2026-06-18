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

      {/* glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-300/30 blur-3xl rounded-full animate-pulse" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-300/30 blur-3xl rounded-full animate-pulse" />

      <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">

        {/* TEXT */}
        <div className="relative z-10">

          <span className="inline-block px-4 py-1 text-sm bg-indigo-100 text-indigo-700 rounded-full">
            🔐 Cryptographic Tool
          </span>

          <h1
            className={`mt-5 text-4xl md:text-5xl font-bold leading-tight transition-all duration-700 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            SHA-256 Hash Generator
          </h1>

          <p
            className={`mt-4 text-gray-600 text-lg transition-all duration-700 delay-150 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Convert text into secure SHA-256 hashes instantly using
            browser-based cryptography (Web Crypto API).
          </p>

          <div className="flex gap-4 mt-6 flex-wrap">
            <button className="px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition">
              Generate Hash
            </button>

            <button className="px-6 py-3 border border-gray-300 rounded-xl hover:bg-gray-100 transition">
              Learn More
            </button>
          </div>

          {/* stats */}
          <div className="flex gap-6 mt-8 text-sm text-gray-600">
            <div>
              <p className="font-bold text-black">256-bit</p>
              Output
            </div>
            <div>
              <p className="font-bold text-black">Fast</p>
              Browser
            </div>
            <div>
              <p className="font-bold text-black">Secure</p>
              No Server
            </div>
          </div>

        </div>

        {/* RIGHT CARD */}
        <div className="relative z-10">

          <div className="bg-white border rounded-2xl shadow-lg p-6 hover:scale-[1.02] transition">

            <p className="text-sm text-gray-500">Live SHA-256 Output</p>

            <div className="mt-3 font-mono text-xs bg-gray-50 p-4 rounded-lg border break-all">
              e3b0c44298fc1c149afbf4c8996fb924...
            </div>

            <p className="text-xs text-gray-400 mt-3">
              Deterministic cryptographic hash function
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

/* ================= MAIN PAGE ================= */

export default function SHA256Page() {
  const [text, setText] = useState("");
  const [hash, setHash] = useState("");
  const [history, setHistory] = useState([]);

  // SHA-256 using Web Crypto API
  const generateHash = async (value) => {
    if (!value) return;

    const encoder = new TextEncoder();
    const data = encoder.encode(value);

    const buffer = await crypto.subtle.digest("SHA-256", data);

    const hashArray = Array.from(new Uint8Array(buffer));
    const hex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");

    setHash(hex);

    setHistory((prev) => {
      const updated = [{ text: value, hash: hex }, ...prev];
      localStorage.setItem("sha256_history", JSON.stringify(updated));
      return updated;
    });
  };

  const copyHash = async () => {
    await navigator.clipboard.writeText(hash);
  };

  useEffect(() => {
    const stored = localStorage.getItem("sha256_history");
    if (stored) setHistory(JSON.parse(stored));
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
            SHA-256 Generator
          </h2>

          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text to hash..."
            className="w-full p-3 border rounded-lg bg-gray-50 min-h-25"
          />

          <div className="flex gap-3 mt-4 flex-wrap">

            <button
              onClick={() => generateHash(text)}
              className="px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              Generate Hash
            </button>

            <button
              onClick={copyHash}
              className="px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Copy
            </button>

          </div>

          {/* OUTPUT */}
          {hash && (
            <div className="mt-5 font-mono text-sm bg-gray-50 p-4 rounded-lg border break-all">
              {hash}
            </div>
          )}

        </section>

        {/* AD MID */}
        <div className="bg-gray-200 text-center py-10 rounded-xl my-10">
          Ad Slot (In Content)
        </div>

        {/* INFO */}
        <section className="bg-white border rounded-2xl p-6">
          <h2 className="text-xl font-bold mb-2">What is SHA-256?</h2>
          <p className="text-gray-600">
            SHA-256 is a cryptographic hash function that converts input data
            into a fixed 256-bit hash. It is widely used in blockchain,
            authentication, and data integrity systems.
          </p>
        </section>

        {/* HISTORY */}
        <section className="mt-10 bg-white border rounded-2xl p-6">
          <h2 className="font-semibold mb-4">History</h2>

          {history.length === 0 ? (
            <p className="text-gray-500 text-sm">No history yet.</p>
          ) : (
            history.map((item, i) => (
              <div key={i} className="border-b py-2 text-sm">
                <p className="font-medium">Input: {item.text}</p>
                <p className="font-mono text-xs text-gray-600">
                  {item.hash}
                </p>
              </div>
            ))
          )}
        </section>

        {/* FOOTER AD */}
        <div className="bg-gray-200 text-center py-6 rounded-xl mt-10">
          Ad Slot (Footer Banner)
        </div>

        {/* FOOTER */}
        <footer className="text-center text-gray-500 text-sm mt-10">
          © {new Date().getFullYear()} Cryptography Tools • Secure Web Utilities
        </footer>

      </div>
    </div>
  );
}