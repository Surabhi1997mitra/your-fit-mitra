export default function Coaching() {
  return (
    <section className="py-20 bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)]">
            Coaching
          </h2>
          <p className="mt-4 text-[var(--text-secondary)] max-w-2xl mx-auto">
            Simple, structured coaching designed to fit into your lifestyle.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* Card */}
          {[
            {
              title: "Personal Online Training",
              desc: "Customized workout guidance with focus on form, progression, and long-term consistency.",
            },
            {
              title: "One-Time Workout Plan",
              desc: "A structured plan based on your goals, easy to follow and sustainable.",
            },
            {
              title: "Basic Nutrition Guidance",
              desc: "Practical food guidance to support your training without extreme dieting.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="
                bg-[var(--bg-card)]
                border border-[var(--border)]
                p-8 rounded-xl
                transition
                hover:-translate-y-1
                hover:shadow-lg
              "
            >
              <h3 className="text-xl font-semibold mb-3 text-[var(--text-primary)]">
                {item.title}
              </h3>
              <p className="text-[var(--text-secondary)]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
