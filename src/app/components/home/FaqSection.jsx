"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Is GenerateKit free to use?",
    answer:
      "Yes. GenerateKit is completely free to use. All tools including password generator, JWT secret generator, UUID generator, and JSON formatter are available without any subscription or login.",
  },
  {
    question: "Is my data stored on your servers?",
    answer:
      "No. GenerateKit does not store, log, or transmit any generated data. Everything runs locally in your browser using the Web Crypto API.",
  },
  {
    question: "How secure are the generated passwords and keys?",
    answer:
      "All passwords, API keys, and secrets are generated using cryptographically secure randomness provided by the browser's native Web Crypto API.",
  },
  {
    question: "Do I need to create an account?",
    answer:
      "No account is required. You can use all tools instantly without signing up or providing personal information.",
  },
  {
    question: "Can I use GenerateKit in production projects?",
    answer:
      "Yes. The generated outputs are production-ready and widely used for backend systems, authentication, APIs, and SaaS applications.",
  },
  {
    question: "Does GenerateKit work offline?",
    answer:
      "Yes. Since all tools run in the browser, many features continue to work even without an internet connection after the page is loaded.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="relative py-28 border-t border-slate-200 bg-linear-to-b from-slate-50 via-white to-blue-50 overflow-hidden">

      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 h-100 w-100 -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-6">

        {/* Header */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Frequently Asked
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600">
              Questions
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Everything you need to know about GenerateKit, security, privacy, and usage.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="mt-14 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border border-slate-200 rounded-2xl bg-white shadow-sm transition hover:shadow-md"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <h3 className="text-lg font-semibold text-slate-900">
                    {faq.question}
                  </h3>

                  {isOpen ? (
                    <Minus className="text-slate-500" />
                  ) : (
                    <Plus className="text-slate-500" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-slate-600 leading-relaxed text-sm md:text-base">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* SEO Boost Block */}
        <div className="mt-16 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-600">
          <strong className="text-slate-900">GenerateKit FAQ Topics:</strong>{" "}
          password generator security, JWT secret generation, UUID generator usage, API key safety,
          SHA256 hashing, JSON formatting tools, developer utilities, privacy-first tools
        </div>

      </div>
    </section>
  );
}