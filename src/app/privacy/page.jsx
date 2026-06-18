export const metadata = {
  title: "Privacy Policy | GenerateKit",
  description:
    "Learn how GenerateKit handles your data. We are a privacy-first developer toolkit with zero data collection and fully client-side processing.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="relative overflow-hidden bg-white text-slate-900">

      {/* Soft background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 h-100 w-100 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-75 w-75 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-6 py-24">

        {/* Header */}
        <header className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Privacy Policy
          </h1>

          <p className="mt-4 text-slate-600 text-lg">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <p className="mt-6 text-slate-600">
            GenerateKit is built with a strict privacy-first philosophy.
            This page explains how we handle (or do not handle) your data.
          </p>
        </header>

        {/* Content */}
        <section className="mt-14 space-y-10 leading-relaxed text-slate-700">

          {/* Section 1 */}
          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              1. No Data Collection
            </h2>
            <p className="mt-2">
              GenerateKit does not collect, store, or transmit any personal data.
              All tools run entirely inside your browser.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              2. Client-Side Processing
            </h2>
            <p className="mt-2">
              All operations such as password generation, UUID creation, and hashing
              are performed locally using your browser’s Web Crypto API.
              No server-side processing is involved.
            </p>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              3. No Cookies for Tracking
            </h2>
            <p className="mt-2">
              We do not use tracking cookies, analytics trackers, or advertising pixels
              to monitor user behavior.
            </p>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              4. Third-Party Services
            </h2>
            <p className="mt-2">
              GenerateKit does not integrate with third-party analytics or data collection
              services. If this changes in the future, this policy will be updated.
            </p>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              5. Data Security
            </h2>
            <p className="mt-2">
              Since no data leaves your browser, there is no risk of server-side data leaks.
              Your generated secrets remain fully private.
            </p>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              6. Changes to This Policy
            </h2>
            <p className="mt-2">
              We may update this Privacy Policy from time to time. Updates will be posted
              on this page with a new revision date.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              7. Contact
            </h2>
            <p className="mt-2">
              If you have any questions about this Privacy Policy, you can contact us at:
            </p>

            <p className="mt-2 font-medium text-blue-600">
              support@generatekit.com
            </p>
          </div>

        </section>

        {/* Footer note */}
        <div className="mt-16 text-center text-sm text-slate-500">
          Built for developers who value privacy, speed, and security.
        </div>

      </div>
    </main>
  );
}