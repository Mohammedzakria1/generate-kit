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
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-emerald-300/30 blur-3xl rounded-full animate-pulse" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-300/30 blur-3xl rounded-full animate-pulse" />

      <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">

        {/* TEXT */}
        <div className="relative z-10">

          <span className="inline-block px-4 py-1 text-sm bg-emerald-100 text-emerald-700 rounded-full">
            ⚙️ Developer Formatter Tool
          </span>

          <h1
            className={`mt-5 text-4xl md:text-5xl font-bold leading-tight transition-all duration-700 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            JSON Formatter & Validator
          </h1>

          <p
            className={`mt-4 text-gray-600 text-lg transition-all duration-700 delay-150 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Format, validate, and beautify JSON instantly. Built for developers,
            APIs, debugging, and production-level data inspection.
          </p>

          <div className="flex gap-4 mt-6 flex-wrap">
            <button className="px-6 py-3 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition">
              Format JSON
            </button>

            <button className="px-6 py-3 border border-gray-300 rounded-xl hover:bg-gray-100 transition">
              Learn More
            </button>
          </div>

          {/* stats */}
          <div className="flex gap-6 mt-8 text-sm text-gray-600">
            <div>
              <p className="font-bold text-black">Fast</p>
              Parsing
            </div>
            <div>
              <p className="font-bold text-black">Safe</p>
              Validation
            </div>
            <div>
              <p className="font-bold text-black">Free</p>
              Forever
            </div>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="relative z-10">

          <div className="bg-white border rounded-2xl shadow-lg p-6 hover:scale-[1.02] transition">

            <p className="text-sm text-gray-500">Live JSON Preview</p>

            <pre className="mt-3 text-xs bg-gray-50 p-4 rounded-lg border overflow-x-auto">
{`{
  "name": "GenerateKit",
  "type": "tool",
  "status": "active"
}`}
            </pre>

            <p className="text-xs text-gray-400 mt-3">
              Structured data visualization
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

/* ================= MAIN PAGE ================= */

export default function JsonFormatter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [history, setHistory] = useState([]);

  // format JSON
  const formatJSON = () => {
    try {
      const parsed = JSON.parse(input);
      const formatted = JSON.stringify(parsed, null, 2);

      setOutput(formatted);
      setError("");

      setHistory((prev) => {
        const updated = [{ input, output: formatted }, ...prev];
        localStorage.setItem("json_history", JSON.stringify(updated));
        return updated;
      });

    } catch (err) {
      setError("Invalid JSON format");
      setOutput("");
    }
  };

  // minify JSON
  const minifyJSON = () => {
    try {
      const parsed = JSON.parse(input);
      const minified = JSON.stringify(parsed);

      setOutput(minified);
      setError("");
    } catch {
      setError("Invalid JSON format");
    }
  };

  const copyOutput = async () => {
    if (!output) return;
    await navigator.clipboard.writeText(output);
  };

  useEffect(() => {
    const stored = localStorage.getItem("json_history");
    if (stored) setHistory(JSON.parse(stored));
  }, []);

  return (
    <div className="min-h-screen bg-[#FCFCFC] text-gray-900">

      {/* HERO */}
      <Hero />

      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* AD TOP */}
        <div className="bg-gray-200 text-center py-6 rounded-xl mb-10">
          Ad Slot (Top Banner)
        </div>

        {/* TOOL GRID */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* INPUT */}
          <section className="bg-white border rounded-2xl p-5 shadow-sm">

            <h2 className="font-semibold mb-3">Input JSON</h2>

            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder='{"name":"example"}'
              className="w-full h-72 p-3 border rounded-lg bg-gray-50 font-mono text-sm"
            />

            <div className="flex gap-3 mt-4 flex-wrap">

              <button
                onClick={formatJSON}
                className="px-5 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700"
              >
                Format
              </button>

              <button
                onClick={minifyJSON}
                className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Minify
              </button>

            </div>

            {error && (
              <p className="text-red-500 text-sm mt-3">{error}</p>
            )}
          </section>

          {/* OUTPUT */}
          <section className="bg-white border rounded-2xl p-5 shadow-sm">

            <h2 className="font-semibold mb-3">Formatted Output</h2>

            <pre className="w-full h-72 p-3 border rounded-lg bg-gray-50 font-mono text-sm overflow-auto">
              {output || "Formatted JSON will appear here..."}
            </pre>

            <button
              onClick={copyOutput}
              className="mt-4 px-5 py-2 bg-gray-900 text-white rounded-lg hover:bg-black"
            >
              Copy Output
            </button>

          </section>

        </div>

        {/* AD MID */}
        <div className="bg-gray-200 text-center py-10 rounded-xl my-10">
          Ad Slot (In Content)
        </div>

        {/* HISTORY */}
        <section className="bg-white border rounded-2xl p-6">
          <h2 className="font-semibold mb-4">History</h2>

          {history.length === 0 ? (
            <p className="text-gray-500 text-sm">No history yet.</p>
          ) : (
            history.map((item, i) => (
              <div key={i} className="border-b py-3 text-sm">
                <p className="font-medium">Input:</p>
                <pre className="text-xs bg-gray-50 p-2 rounded">
                  {item.input}
                </pre>
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
          © {new Date().getFullYear()} Developer Tools • JSON Utilities
        </footer>

      </div>
    </div>
  );
}