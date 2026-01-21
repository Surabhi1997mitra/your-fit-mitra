import Image from "next/image";
import Image10 from "@/assets/Image10.jpg";
import Food1 from "@/assets/Food1.jpeg";
import Food2 from "@/assets/Food2.jpeg";
import Food3 from "@/assets/Food3.jpeg";
import Before from "@/assets/Before.jpeg";

export default function Mission() {
  return (
    <>
      <main className="text-[var(--text-primary)]">
        {/* Header */}
        <section className="bg-[var(--bg)]">
          <div className="max-w-7xl mx-auto px-6 py-20">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                My Mission
              </h1>
              <p className="mt-6 text-[var(--text-secondary)] text-lg leading-relaxed">
                Fitness is not about extremes. It’s about building habits you
                can actually live with — training smart, eating well, and
                staying consistent.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="bg-[var(--bg)] border-t border-[var(--border)]">
          <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-semibold mb-4">
                Sustainable fitness, not shortcuts
              </h2>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                My goal is to help people move away from crash diets,
                overtraining, and confusion. You don’t need perfection — you
                need consistency, clarity, and guidance that fits your real
                life.
              </p>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                Even{" "}
                <span className="text-[var(--text-primary)] font-medium">
                  3 months of honest consistency
                </span>{" "}
                is enough to see meaningful change — in strength, energy, and
                how you feel in your body.
              </p>
            </div>

            {/* Transformation Images */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-xl overflow-hidden border border-[var(--border)]">
                <span className="absolute top-3 left-3 text-xs bg-[var(--bg)]/80 px-3 py-1 rounded-full">
                  Then
                </span>
                <Image
                  src={Before}
                  alt="Before"
                  className="w-full h-full object-cover"
                  priority
                />
              </div>

              <div className="relative rounded-xl overflow-hidden border border-[var(--border)]">
                <span className="absolute top-3 left-3 text-xs bg-[var(--bg)]/80 px-3 py-1 rounded-full">
                  Now
                </span>

                <Image
                  src={Image10}
                  alt="After"
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Food Philosophy */}
        <section className="bg-[var(--bg-secondary)] border-t border-[var(--border)]">
          <div className="max-w-7xl mx-auto px-6 py-20">
            <div className="max-w-3xl mb-12">
              <h2 className="text-2xl font-semibold mb-4">
                Building a healthy relationship with food
              </h2>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                Food is not the enemy. You don’t need to survive on salads or
                eliminate everything you enjoy. Healthy food can taste good,
                feel satisfying, and still support your goals.
              </p>
            </div>

            {/* Food Images */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--bg-card)]">
                <Image
                  src={Food1}
                  alt="Food1"
                  className="w-full h-full object-cover"
                  priority
                />
              </div>

              <div className="rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--bg-card)]">
                <Image
                  src={Food2}
                  alt="Food2"
                  className="w-full h-full object-cover"
                  priority
                />
              </div>

              <div className="rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--bg-card)]">
                <Image
                  src={Food3}
                  alt="Food3"
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Closing Message */}
        <section className="bg-[var(--bg)] border-t border-[var(--border)]">
          <div className="max-w-7xl mx-auto px-6 py-20">
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
                You don’t need to change everything overnight.
                <br />
                You just need the right direction — and the discipline to show
                up.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
