"use client";

import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    if (window.location.hash === "#whatsapp") {
      const el = document.getElementById("whatsapp");
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });

          el.classList.add("glow-pulse");

          setTimeout(() => {
            el.classList.remove("glow-pulse");
          }, 1600);
        }, 200);
      }
    }
  }, []);

  return (
    <>
      <main className="bg-[var(--bg-secondary)] text-[var(--text-primary)]">
        <div className="max-w-7xl mx-auto px-6 py-20 space-y-20">
          {/* Header */}
          <section className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Contact
            </h1>
            <p className="mt-6 text-[var(--text-secondary)] text-lg leading-relaxed">
              Have questions? Want to start coaching?
              <br />
              Reach out — I personally respond.
            </p>
          </section>

          {/* Contact Methods */}
          <section className="grid md:grid-cols-3 gap-8">
            {/* WhatsApp */}
            <a
              id="whatsapp"
              href="https://wa.me/918637568054"
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-[var(--border)] rounded-xl p-6
                         bg-[var(--bg-card)]
                         hover:border-[#E10600]
                         hover:translate-y-[-2px]
                         transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
              <p className="text-[var(--text-secondary)] mb-4">
                Quick questions or coaching inquiries
              </p>
              <p className="text-sm text-[var(--text-secondary)] group-hover:text-[var(--text-primary)]">
                +91 86375 68054
              </p>
            </a>

            {/* Email */}
            <a
              href="mailto:your.fit.mitra@gmail.com"
              className="group border border-[var(--border)] rounded-xl p-6
                         bg-[var(--bg-card)]
                         hover:border-[#E10600]
                         hover:translate-y-[-2px]
                         transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-[var(--text-secondary)] mb-4">
                Detailed queries or collaborations
              </p>
              <p className="text-sm text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] break-all">
                your.fit.mitra@gmail.com
              </p>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/your.fit.mitra/"
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-[var(--border)] rounded-xl p-6
                         bg-[var(--bg-card)]
                         hover:border-[#E10600]
                         hover:translate-y-[-2px]
                         transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-2">Instagram</h3>
              <p className="text-[var(--text-secondary)] mb-4">
                Fitness content & updates
              </p>
              <p className="text-sm text-[var(--text-secondary)] group-hover:text-[var(--text-primary)]">
                @your.fit.mitra
              </p>
            </a>
          </section>

          {/* Guidance Note */}
          <section className="max-w-3xl mx-auto text-center">
            <p className="text-[var(--text-secondary)] leading-relaxed">
              If you’re unsure where to start, just message me.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              We’ll figure out what works best for you — no pressure, no rush.
            </p>
          </section>

          {/* CTA */}
          <section className="text-center">
            <a
              href="https://wa.me/918637568054"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#E10600] hover:bg-red-700 transition
                         px-8 py-4 rounded-lg text-sm font-semibold text-white" 
            >
              Message on WhatsApp
            </a>
          </section>
        </div>
      </main>
    </>
  );
}
