"use client";

import { useEffect, useRef, useState } from "react";

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
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-300/30 blur-3xl rounded-full animate-pulse" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-300/30 blur-3xl rounded-full animate-pulse" />

      <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">

        {/* TEXT */}
        <div className="relative z-10">

          <span className="inline-block px-4 py-1 text-sm bg-blue-100 text-blue-700 rounded-full">
            🔐 Secure Developer Tool
          </span>

          <h1
            className={`mt-5 text-4xl md:text-5xl font-bold leading-tight transition-all duration-700 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            JWT Secret Generator
          </h1>

          <p
            className={`mt-4 text-gray-600 text-lg transition-all duration-700 delay-150 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Generate cryptographically secure JWT signing secrets for Node.js,
            Express, Next.js and production authentication systems.
          </p>

          <div
            className={`flex gap-4 mt-6 flex-wrap transition-all duration-700 delay-300 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <button className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
              Generate Secret
            </button>

            <button className="px-6 py-3 border border-gray-300 rounded-xl hover:bg-gray-100 transition">
              Learn More
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
              Data Stored
            </div>
            <div>
              <p className="font-bold text-black">Free</p>
              Forever
            </div>
          </div>
        </div>

        {/* IMAGE CARD */}
        <div className="relative z-10">

          <div className="bg-white border rounded-2xl shadow-lg overflow-hidden hover:scale-[1.02] transition duration-300">

            <img
              src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1200"
              className="w-full h-72 object-cover"
              alt="JWT Security"
            />

            <div className="p-5">
              <p className="text-sm text-gray-500">Secure Authentication Layer</p>

              <div className="mt-2 font-mono text-xs bg-gray-50 p-3 rounded-lg border">
                eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
              </div>

              <p className="text-xs text-gray-400 mt-2">
                Production-ready token security system
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

/* ================= MAIN ================= */

export default function JwtSecretGenerator() {
  const [secret, setSecret] = useState("");
  const [length, setLength] = useState(32);
  const [history, setHistory] = useState([]);

  const inputRef = useRef(null);

  const generateSecret = () => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}<>?";

    const arr = new Uint32Array(length);
    crypto.getRandomValues(arr);

    let res = "";
    for (let i = 0; i < length; i++) {
      res += chars[arr[i] % chars.length];
    }

    setSecret(res);
  };

  const copySecret = async () => {
    await navigator.clipboard.writeText(secret);
  };

  const saveSecret = () => {
    const updated = [...history, secret];
    setHistory(updated);
    localStorage.setItem("jwt-secrets", JSON.stringify(updated));
  };

  useEffect(() => {
    const stored = localStorage.getItem("jwt-secrets");
    if (stored) setHistory(JSON.parse(stored));

    generateSecret();
  }, []);

  useEffect(() => {
    generateSecret();
  }, [length]);

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
        <section className="bg-white border rounded-2xl shadow-sm p-6 hover:shadow-md transition">

          <h2 className="text-2xl font-bold mb-4">
            Generate JWT Secret
          </h2>

          <input
            ref={inputRef}
            value={secret}
            readOnly
            className="w-full p-3 border rounded-lg bg-gray-50 font-mono"
          />

          {/* LENGTH */}
          <div className="mt-5">
            <div className="flex justify-between text-sm text-gray-600">
              <span>Secret Length</span>
              <span>{length}</span>
            </div>

            <input
              type="range"
              min="16"
              max="128"
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="w-full mt-2"
            />
          </div>

          {/* BUTTONS */}
          <div className="flex gap-3 mt-5 flex-wrap">

            <button
              onClick={generateSecret}
              className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Generate
            </button>

            <button
              onClick={copySecret}
              className="px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Copy
            </button>

            <button
              onClick={saveSecret}
              className="px-5 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
            >
              Save
            </button>

          </div>
        </section>

        {/* AD MID */}
        <div className="bg-gray-200 text-center py-10 rounded-xl my-10">
          Ad Slot (In Content)
        </div>

        {/* SEO SECTION */}
        <section className="bg-white border rounded-2xl p-6">
          <h2 className="text-xl font-bold mb-2">
            What is a JWT Secret?
          </h2>

          <p className="text-gray-600 leading-relaxed">
            JWT secrets are used to sign and verify JSON Web Tokens.
            They ensure authentication security in modern web applications.
          </p>
        </section>

        {/* HISTORY */}
        <section className="mt-10 bg-white border rounded-2xl p-6">
          <h2 className="font-semibold mb-3">Saved Secrets</h2>

          {history.length === 0 ? (
            <p className="text-gray-500 text-sm">No saved secrets yet.</p>
          ) : (
            history.map((item, i) => (
              <div key={i} className="text-sm border-b py-1">
                {i + 1}. {item}
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
          © {new Date().getFullYear()} JWT Tools • Secure Developer Utilities
        </footer>

      </div>
    </div>
  );
}