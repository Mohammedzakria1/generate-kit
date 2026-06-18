"use client";

import { useEffect, useState } from "react";

/* ================= HERO ================= */
function Hero() {
  const [demo, setDemo] = useState("A7#kP2!xZ9");

  useEffect(() => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%";

    const interval = setInterval(() => {
      let out = "";
      for (let i = 0; i < 10; i++) {
        out += chars[Math.floor(Math.random() * chars.length)];
      }
      setDemo(out);
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#FCFCFC]">

      {/* Background glow */}
      <div className="absolute top-[-100px] left-[-100px] w-96 h-96 bg-blue-300/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-96 h-96 bg-purple-300/30 rounded-full blur-3xl animate-pulse"></div>

      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <div className="relative z-10">

          <span className="px-4 py-1 text-sm bg-blue-100 text-blue-700 rounded-full">
            🔐 Free & Secure Tool
          </span>

          <h1 className="mt-5 text-4xl md:text-5xl font-bold leading-tight">
            Free Online Password Generator
          </h1>

          <p className="mt-4 text-gray-600 text-lg">
            Generate strong, secure, and random passwords instantly using
            cryptographically secure algorithms. Perfect for developers,
            websites, and accounts.
          </p>

          <div className="flex gap-4 mt-6 flex-wrap">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
              Generate Password
            </button>

            <button className="px-6 py-3 border border-gray-300 rounded-xl hover:bg-gray-100 transition">
              Learn More
            </button>
          </div>

          {/* stats */}
          <div className="flex gap-6 mt-8 text-sm text-gray-600">
            <div>
              <p className="font-bold text-black">100%</p>
              Secure
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

        {/* RIGHT */}
        <div className="relative z-10">

          <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-6 hover:scale-[1.02] transition">

            <p className="text-sm text-gray-500">
              Live Generated Password
            </p>

            <div className="mt-3 font-mono text-xl tracking-widest bg-gray-50 p-4 rounded-lg border">
              {demo}
            </div>

            <div className="mt-4 flex justify-between text-sm text-gray-500">
              <span>Strength: 🔥 Strong</span>
              <span>Auto Refresh</span>
            </div>

            <div className="mt-5 h-2 w-full bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-linear-to-r from-blue-500 to-purple-500 animate-pulse w-3/4"></div>
            </div>

          </div>

          <div className="absolute -bottom-6 -right-6 bg-white border rounded-xl shadow-md px-4 py-2 text-sm animate-bounce">
            ⚡ Secure Generator
          </div>

        </div>

      </div>
    </section>
  );
}

/* ================= MAIN PAGE ================= */

export default function PasswordGeneratorPage() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(12);

  const [options, setOptions] = useState({
    upper: true,
    lower: true,
    numbers: true,
    symbols: false,
  });

  const [saved, setSaved] = useState([]);

  const generatePassword = () => {
    let chars = "";

    if (options.upper) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (options.lower) chars += "abcdefghijklmnopqrstuvwxyz";
    if (options.numbers) chars += "0123456789";
    if (options.symbols) chars += "!@#$%^&*()_+-=[]{}|;:,.<>?";

    if (!chars) return;

    const array = new Uint32Array(length);
    crypto.getRandomValues(array);

    let result = "";
    for (let i = 0; i < length; i++) {
      result += chars[array[i] % chars.length];
    }

    setPassword(result);
  };

  const copyPassword = async () => {
    await navigator.clipboard.writeText(password);
  };

  const savePassword = () => {
    const updated = [...saved, password];
    setSaved(updated);
    localStorage.setItem("pw-saved", JSON.stringify(updated));
  };

  useEffect(() => {
    const stored = localStorage.getItem("pw-saved");
    if (stored) setSaved(JSON.parse(stored));

    generatePassword();
  }, []);

  useEffect(() => {
    generatePassword();
  }, [length, options]);

  return (
    <div className="bg-[#FCFCFC] min-h-screen text-gray-900">

      {/* HERO */}
      <Hero />

      <div className="max-w-5xl mx-auto px-6 py-10">

        {/* AD */}
        <div className="bg-gray-200 text-center py-6 rounded-xl mb-8">
          Ad Slot (Header Banner)
        </div>

        {/* TOOL CARD */}
        <section className="bg-white border rounded-2xl shadow-sm p-6">

          <h2 className="text-2xl font-bold mb-4">
            Generate Secure Password
          </h2>

          {/* PASSWORD */}
          <input
            value={password}
            readOnly
            className="w-full p-3 border rounded-lg bg-gray-50 font-mono"
          />

          <div className="flex gap-3 mt-3">
            <button
              onClick={generatePassword}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Generate
            </button>

            <button
              onClick={copyPassword}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-800"
            >
              Copy
            </button>

            <button
              onClick={savePassword}
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-800"
            >
              Save
            </button>
          </div>

          {/* LENGTH */}
          <div className="mt-6">
            <div className="flex justify-between text-sm">
              <span>Length</span>
              <span>{length}</span>
            </div>

            <input
              type="range"
              min="6"
              max="128"
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="w-full"
            />
          </div>

          {/* OPTIONS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-5 text-sm">
            {Object.keys(options).map((key) => (
              <label key={key} className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  checked={options[key]}
                  onChange={(e) =>
                    setOptions({ ...options, [key]: e.target.checked })
                  }
                />
                {key}
              </label>
            ))}
          </div>
        </section>

        {/* AD */}
        <div className="bg-gray-200 text-center py-10 rounded-xl my-10">
          Ad Slot (In Content)
        </div>

        {/* SEO SECTION */}
        <section className="bg-white border rounded-2xl p-6">
          <h2 className="text-xl font-bold mb-2">
            Why Use a Password Generator?
          </h2>

          <p className="text-gray-600">
            Strong passwords protect your accounts from hackers. This tool uses
            cryptographically secure random generation for maximum safety.
          </p>
        </section>

        {/* SAVED */}
        <section className="mt-10 bg-white border rounded-2xl p-6">
          <h2 className="font-semibold mb-3">Saved Passwords</h2>

          {saved.length === 0 ? (
            <p className="text-gray-500 text-sm">No saved passwords.</p>
          ) : (
            saved.map((p, i) => (
              <div key={i} className="border-b py-1 text-sm">
                {i + 1}. {p}
              </div>
            ))
          )}
        </section>

        {/* FOOTER */}
        <footer className="text-center text-gray-500 text-sm mt-10">
          © {new Date().getFullYear()} Password Tools • Free & Secure
        </footer>

      </div>
    </div>
  );
}