import Image from "next/image";
import Image7 from "@/assets/Image7.jpg";
import Food4 from "@/assets/Food4.jpeg";
import Image17 from "@/assets/Image17.jpg";
import Link from "next/link";

export default function Coaching() {
  return (
    <>
      <main className="bg-[var(--bg-secondary)] text-[var(--text-primary)]">
        <div className="max-w-7xl mx-auto px-6 py-20 space-y-20">
          {/* Header */}
          <section className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Coaching
            </h1>
            <p className="mt-6 text-[var(--text-secondary)] text-lg leading-relaxed">
              Practical training, simple nutrition, and guidance built around
              your lifestyle — not generic plans.
            </p>
          </section>

          {/* Coaching Philosophy */}
          <section className="grid gap-12 items-center">
            <div>
              <h2 className="text-2xl font-semibold mb-4">
                What my coaching focuses on
              </h2>

              <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                I work with people who want real, sustainable progress — without
                extreme restrictions or unrealistic routines. My coaching is
                designed to help you train safely, eat mindfully, and stay
                consistent even on your busiest days.
              </p>

              <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                Instead of quick fixes, I focus on building strong fundamentals:
                proper form, structured workouts, and nutrition that supports
                both performance and long-term health.
              </p>

              <p className="text-[var(--text-secondary)] leading-relaxed">
                Whether your goal is fat loss, strength, or overall fitness, the
                approach stays the same — clarity over confusion, consistency
                over intensity, and habits that actually last.
              </p>
            </div>
          </section>

          {/* Coaching Philosophy – Visual Story Blocks */}
          <section className="space-y-24">
            {/* Block 1 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  Form & technique first
                </h2>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  Every transformation starts with learning how to move
                  correctly. Proper form reduces injury risk, builds confidence,
                  and allows your body to progress safely over time instead of
                  breaking down.
                </p>
              </div>

              <div className="rounded-2xl overflow-hidden border border-[var(--border)]">
                <Image
                  src={Image17}
                  alt="Training form"
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>

            {/* Block 2 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="md:order-2">
                <h2 className="text-2xl font-semibold mb-4">
                  Simple, realistic nutrition
                </h2>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  Nutrition shouldn’t feel like punishment. I focus on helping
                  you build a healthy relationship with food — meals that
                  support your goals, taste good, and fit your lifestyle.
                </p>
              </div>

              <div className="md:order-1 rounded-2xl overflow-hidden border border-[var(--border)]">
                <Image
                  src={Food4}
                  alt="Training form"
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>

            {/* Block 3 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  Consistency over intensity
                </h2>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  You don’t need extreme workouts. Showing up consistently —
                  even on low-energy days — is what creates visible change,
                  often within just 3 months.
                </p>
              </div>

              <div className="rounded-2xl overflow-hidden border border-[var(--border)]">
                <Image
                  src={Image7}
                  alt="Training form"
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </section>

          {/* Coaching Plans */}
          <section>
  <h2 className="text-2xl font-semibold mb-12 text-center">
    Coaching Options
  </h2>

  <div className="grid md:grid-cols-3 gap-8">
    {/* 1:1 Personal Coaching */}
    <div className="border border-[var(--border-color)] rounded-xl p-6 bg-[var(--card-bg)] hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-1 flex items-center gap-2">
        🔥 1:1 Personal Coaching Plan
      </h3>
      <p className="text-sm font-medium text-[var(--text-secondary)] mb-4">
        ⏳ Duration: <span className="font-semibold">3–6 months</span>
      </p>

      <p className="text-[var(--text-secondary)] mb-6">
        A fully personalised coaching experience focused on
        <span className="font-medium text-[var(--text-primary)]">
          {" "}long-term, sustainable results{" "}
        </span>
        with structure and accountability.
      </p>

      <ul className="space-y-3 text-sm text-[var(--text-secondary)]">
        <li>✅ <span className="font-medium">Custom workout plan</span> based on your goals</li>
        <li>🥗 <span className="font-medium">Personalised diet & nutrition plan</span></li>
        <li>📊 Weekly check-ins for progress & accountability</li>
        <li>📸 Before-and-after progress check-ins</li>
        <li>🎥 Form & technique analysis via your workout videos</li>
        <li>💬 WhatsApp support <span className="text-xs">(Mon–Sat, 9 AM – 9 PM)</span></li>
      </ul>

      <p className="text-xs text-[var(--text-secondary)] mt-4 italic">
        *Live workout sessions are chargeable separately if required.
      </p>
    </div>

    {/* One-Time Nutrition Plan */}
    <div className="border border-[var(--border-color)] rounded-xl p-6 bg-[var(--card-bg)] hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
        🥗 One-Time Nutrition / Diet Plan
      </h3>

      <p className="text-[var(--text-secondary)] mb-6">
        A one-time customised nutrition plan designed around your
        <span className="font-medium text-[var(--text-primary)]">
          {" "}goals, preferences, and lifestyle.
        </span>
      </p>

      <ul className="space-y-3 text-sm text-[var(--text-secondary)]">
        <li>🎯 Goal-oriented nutrition planning</li>
        <li>🍽️ Based on food preferences & routine</li>
        <li>🧘 Simple, flexible, and easy to follow</li>
        <li>🗂️ Clear structure with practical guidance</li>
      </ul>
    </div>

    {/* Live Training Session */}
    <div className="border border-[var(--border-color)] rounded-xl p-6 bg-[var(--card-bg)] hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
        🏋️ Live Training Session
      </h3>

      <p className="text-[var(--text-secondary)] mb-6">
        One-on-one live workout sessions focused on
        <span className="font-medium text-[var(--text-primary)]">
          {" "}proper form and real-time coaching.
        </span>
      </p>

      <ul className="space-y-3 text-sm text-[var(--text-secondary)]">
        <li>💰 Charged per session</li>
        <li>⏱️ 30–45 minute live workout</li>
        <li>🏠 Train from home or gym</li>
        <li>⚙️ With or without equipment</li>
        <li>👀 Real-time form correction</li>
      </ul>
    </div>
  </div>
</section>


          {/* Expectations */}
          <section className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-semibold mb-4">What you can expect</h2>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              When you stay consistent, progress follows — not just physically,
              but mentally too. I focus on providing clear direction and honest
              guidance, not quick fixes.
            </p>
          </section>

          {/* CTA */}
          <section className="text-center">
            <Link
              href="/contact"
              className="bg-[#E10600] hover:bg-red-700 transition px-8 py-4 rounded-lg text-sm font-semibold text-white"
            >
              Start Coaching
            </Link>
          </section>
        </div>
      </main>
    </>
  );
}
