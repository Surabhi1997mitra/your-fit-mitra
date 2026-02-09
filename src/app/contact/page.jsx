"use client";

import { useEffect, useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
  });

  useEffect(() => {
    if (window.location.hash === "#whatsapp") {
      const el = document.getElementById("whatsapp");
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
          el.classList.add("glow-pulse");
          setTimeout(() => el.classList.remove("glow-pulse"), 1600);
        }, 200);
      }
    }
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `Hi, I want to connect.\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}`;
    const whatsappUrl = `https://wa.me/918637568054?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <main className="bg-[var(--bg-secondary)] text-[var(--text-primary)]">
      <div className="max-w-7xl mx-auto px-6 py-20 space-y-24">

        {/* Header */}
        <section className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Contact
          </h1>
          <p className="mt-6 text-[var(--text-secondary)] text-lg leading-relaxed">
            Have questions or thinking about coaching?
            <br />
            Drop your details — I’ll personally reach out.
          </p>
        </section>

        {/* FORM SECTION */}
        <section className="max-w-3xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-8 space-y-6"
          >
            <h2 className="text-2xl font-semibold">
              Share your details
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm mb-2 text-[var(--text-secondary)]">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full rounded-lg px-4 py-3
                             bg-[var(--bg-secondary)]
                             border border-[var(--border)]
                             focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>

              <div>
                <label className="block text-sm mb-2 text-[var(--text-secondary)]">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="WhatsApp number"
                  className="w-full rounded-lg px-4 py-3
                             bg-[var(--bg-secondary)]
                             border border-[var(--border)]
                             focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm mb-2 text-[var(--text-secondary)]">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Optional but helpful"
                className="w-full rounded-lg px-4 py-3
                           bg-[var(--bg-secondary)]
                           border border-[var(--border)]
                           focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#E10600] hover:bg-red-700
                         transition py-3 rounded-lg font-semibold text-white"
            >
              Send & Connect on WhatsApp
            </button>

            <p className="text-sm text-center text-[var(--text-secondary)]">
              No spam. No pressure. Just a real conversation.
            </p>
          </form>
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
      </div>
    </main>
  );
}
