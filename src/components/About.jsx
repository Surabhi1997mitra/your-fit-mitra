import Image from "next/image";
import Image2 from "../assets/Image2.jpg";

export default function About() {
  return (
    <section className="py-20 bg-[var(--bg)]">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[var(--text-primary)]">
            About Me
          </h2>

          <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
            I’m a fitness coach focused on helping people build strength,
            confidence, and consistency — without extreme routines or
            unsustainable diets.
          </p>

          <p className="text-[var(--text-secondary)] leading-relaxed">
            My coaching philosophy is simple: train smart, stay consistent, and
            build habits that actually fit your lifestyle.
          </p>
        </div>

        {/* Image Placeholder */}
        <div className="w-full bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl flex items-center justify-center text-[var(--text-secondary)]">
          <Image
            src={Image2}
            alt="Training form"
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
