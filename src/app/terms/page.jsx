export const metadata = {
  title: "Terms of Service | GenerateKit",
  description:
    "Read the Terms of Service for GenerateKit. Learn the rules for using our privacy-first developer tools and services.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <main className="relative overflow-hidden bg-white text-slate-900">

      {/* Soft background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 h-105 w-105 -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-[320px] rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-6 py-24">

        {/* Header */}
        <header className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Terms of Service
          </h1>

          <p className="mt-4 text-slate-600 text-lg">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <p className="mt-6 text-slate-600">
            By using GenerateKit, you agree to the following terms. Please read them carefully.
          </p>
        </header>

        {/* Content */}
        <section className="mt-14 space-y-10 leading-relaxed text-slate-700">

          {/* Section 1 */}
          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              1. Use of Service
            </h2>
            <p className="mt-2">
              GenerateKit provides free developer tools including password generators,
              UUID generators, API key tools, and cryptographic utilities.
              You may use these tools for personal and commercial projects.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              2. Client-Side Nature
            </h2>
            <p className="mt-2">
              All tools run entirely in your browser. We do not process, store, or transmit
              any generated data. You are responsible for how you use generated outputs.
            </p>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              3. No Warranty
            </h2>
            <p className="mt-2">
              The service is provided "as is" without warranties of any kind.
              We do not guarantee uninterrupted availability, accuracy, or fitness for a particular purpose.
            </p>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              4. User Responsibility
            </h2>
            <p className="mt-2">
              You are solely responsible for securing any passwords, keys, or secrets
              generated using GenerateKit. We are not liable for data loss or misuse.
            </p>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              5. Prohibited Use
            </h2>
            <p className="mt-2">
              You agree not to use GenerateKit for illegal activities, harmful automation,
              or any purpose that violates applicable laws or regulations.
            </p>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              6. Service Availability
            </h2>
            <p className="mt-2">
              We may update, modify, or discontinue any tool at any time without notice.
            </p>
          </div>

          {/* Section 7 */}
          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              7. Changes to Terms
            </h2>
            <p className="mt-2">
              We may update these Terms periodically. Continued use of GenerateKit
              means you accept the updated terms.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              8. Contact
            </h2>
            <p className="mt-2">
              If you have any questions about these Terms, contact us at:
            </p>

            <p className="mt-2 font-medium text-blue-600">
              support@generatekit.com
            </p>
          </div>

        </section>

        {/* Footer note */}
        <div className="mt-16 text-center text-sm text-slate-500">
          Built for developers who value speed, privacy, and control.
        </div>

      </div>
    </main>
  );
}