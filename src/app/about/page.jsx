export default function AboutPage() {
  return (
    <>
      <main className="min-h-screen bg-[var(--bg)] text-[var(--text-primary)]">
        {/* Hero */}
        <section className="bg-[var(--bg)]">
          <div className="max-w-6xl mx-auto px-6 py-20">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Helping you build a stronger body, a disciplined mind, and a
              sustainable lifestyle.
            </h1>

            <p className="text-lg text-[var(--text-secondary)] max-w-3xl">
              I’m a personal fitness coach focused on helping people train
              smarter, not harder. My approach isn’t about quick fixes or
              extreme routines — it’s about building habits, strength, and
              confidence that last.
            </p>
          </div>
        </section>

        {/* Approach */}
        <section className="bg-[var(--bg-secondary)] border-t border-[var(--border)]">
          <div className="max-w-6xl mx-auto px-6 py-16">
            <h2 className="text-2xl font-semibold mb-6">My Approach</h2>

            <p className="text-[var(--text-secondary)] max-w-3xl mb-4">
              I believe real transformation happens when training, nutrition,
              and mindset work together.
            </p>

            <p className="text-[var(--text-secondary)] max-w-3xl">
              That’s why my coaching focuses on consistent strength training,
              simple sustainable nutrition, and long-term discipline over
              short-term motivation. No crash diets. No unrealistic promises.
              Just honest work and measurable progress.
            </p>
          </div>
        </section>

        {/* Who I Work With */}
        <section className="bg-[var(--bg)] border-t border-[var(--border)]">
          <div className="max-w-6xl mx-auto px-6 py-16">
            <h2 className="text-2xl font-semibold mb-6">Who I Work With</h2>

            <p className="text-[var(--text-secondary)] max-w-3xl mb-4">
              I coach people who want structure without rigidity, guidance
              without confusion, and progress they can actually maintain.
            </p>

            <ul className="list-disc list-inside text-[var(--text-secondary)] max-w-3xl space-y-2">
              <li>People tired of starting and stopping</li>
              <li>Those getting back on track after a break</li>
              <li>Anyone ready to commit to consistency</li>
            </ul>
          </div>
        </section>

        {/* Closing */}
        <section className="bg-[var(--bg-secondary)] border-t border-[var(--border)]">
          <div className="max-w-6xl mx-auto px-6 py-20">
            <p className="text-xl font-medium max-w-3xl">
              Fitness is not about perfection. It’s about showing up, improving,
              and staying consistent.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
