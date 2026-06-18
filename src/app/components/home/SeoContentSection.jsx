"use client";

export default function SeoContentSection() {
  return (
    <section className="relative overflow-hidden py-28 border-t border-slate-200 bg-linear-to-b from-slate-50 via-white to-blue-50">
      
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 h-125 w-125 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-100 w-100 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="text-center">
          <p className="text-sm font-semibold tracking-wider text-blue-600 uppercase">
            Developer Toolkit Insights
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Why Developers Choose
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600">
              GenerateKit
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            GenerateKit is a modern, privacy-first developer toolkit built for speed, 
            security, and productivity. It replaces multiple developer utilities with a 
            single unified platform that runs entirely in your browser.
          </p>
        </div>

        {/* Content Grid */}
        <div className="mt-16 grid md:grid-cols-2 gap-10">

          {/* Left column */}
          <div className="space-y-6 text-slate-700 leading-relaxed text-[15px]">
            <p>
              Modern development requires secure, fast, and reliable tools. Whether you are 
              generating passwords, creating JWT secrets, or formatting JSON, developers 
              need instant results without compromising security.
            </p>

            <p>
              <strong className="text-slate-900">GenerateKit</strong> solves this by running 
              all operations locally in your browser using the Web Crypto API. This ensures 
              that no sensitive data is ever sent to a server.
            </p>

            <p>
              Unlike traditional online tools, GenerateKit is optimized for production use, 
              SaaS development, backend engineering, and DevOps workflows.
            </p>
          </div>

          {/* Right column */}
          <div className="space-y-6 text-slate-700 leading-relaxed text-[15px]">
            <p>
              The platform includes essential developer utilities such as:
            </p>

            <ul className="space-y-3 list-disc list-inside text-slate-600">
              <li>Password generators with cryptographic randomness</li>
              <li>JWT secret and token utilities for authentication systems</li>
              <li>UUID generators for distributed applications</li>
              <li>API key generation for secure SaaS platforms</li>
              <li>SHA-256 hashing and JSON formatting tools</li>
            </ul>

            <p>
              Every tool is optimized for performance, minimal latency, and maximum 
              security compliance.
            </p>
          </div>
        </div>

        {/* SEO Keyword block (important for ranking) */}
        <div className="mt-16 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">
            Popular Searches
          </h3>

          <p className="mt-3 text-sm text-slate-600 leading-relaxed">
            password generator, uuid generator, jwt secret generator, api key generator, 
            sha256 generator, json formatter, secure developer tools, online cryptographic 
            utilities, privacy-first tools, frontend developer tools, backend utilities
          </p>
        </div>

      </div>
    </section>
  );
}