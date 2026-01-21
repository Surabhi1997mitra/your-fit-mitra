import Link from "next/link";

export default function Contact() {
  return (
    <section className="py-20 bg-[var(--bg)]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to start your fitness journey?
        </h2>

        <p className="text-[var(--text-secondary)]-400 text-lg mb-10">
          Get structured guidance, accountability, and sustainable results.
        </p>

        <Link href="/contact#whatsapp"
        className="bg-red-600 hover:bg-red-700 text-[var(--text-primary)] font-semibold px-8 py-4 rounded-lg transition">
          Sign Up for Coaching
        </Link>
      </div>
    </section>
  );
}
