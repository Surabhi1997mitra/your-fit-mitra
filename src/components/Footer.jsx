import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[var(--bg)] border-t border-white/10 py-6">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Left - Brand */}
        <Link
          href="/"
          className="text-sm font-semibold tracking-wide hover:text-[var(--text-primary)] transition"
        >
          your.fit.mitra
        </Link>

        {/* Center - Contact */}
        <Link
          href="/contact"
          className="text-sm text-[var(--text-secondary)]-400 hover:text-[var(--text-primary)] transition"
        >
          Contact
        </Link>

        {/* Right - Copyright */}
        <div className="text-[var(--text-secondary)]-500 text-sm">
          © {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
}
