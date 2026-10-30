import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0b3d2e] flex items-center justify-center px-6 relative overflow-hidden">
      {/* Decorative background circles */}
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#145c45] opacity-40 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-[#c9a227] opacity-20 blur-3xl" />

      <div className="relative z-10 text-center max-w-xl">
        {/* Big 404 */}
        <h1 className="text-[120px] sm:text-[160px] font-bold leading-none text-[#c9a227] tracking-tight drop-shadow-lg">
          404
        </h1>

        {/* Gold divider */}
        <div className="mx-auto my-6 h-1 w-24 rounded-full bg-gradient-to-r from-transparent via-[#c9a227] to-transparent" />

        <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-3">
          Page Not Found
        </h2>
        <p className="text-[#d6cdb5] text-base mb-8 leading-relaxed">
          Sorry, the page you are looking for doesn&apos;t exist or has been
          moved. Let&apos;s get you back on track.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#c9a227] text-[#0b3d2e] font-semibold hover:bg-[#d4b03a] transition-colors shadow-lg"
          >
            ← Back to Home
          </Link>
          <Link
            href="/biodata"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-[#c9a227] text-[#f5e6b8] font-semibold hover:bg-[#c9a227] hover:text-[#0b3d2e] transition-colors"
          >
            View Biodata
          </Link>
        </div>

        {/* Footer note */}
        <p className="mt-12 text-xs text-[#8a9a8f] tracking-widest uppercase">
          Error Code: 404 — Page Not Found
        </p>
      </div>
    </main>
  );
}