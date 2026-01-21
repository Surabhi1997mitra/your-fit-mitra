import Image from "next/image";
import Link from "next/link";
import HeroImage from "@/assets/Hero.jpg";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight">
            Sustainable fitness.
            <br />
            <span className="text-[#E10600]">Real guidance.</span>
            <br />
            Real progress.
          </h1>

          <p className="mt-6 text-lg text-[var(--text-secondary)]-300 max-w-xl">
            Fitness trainer with 5 years of experience, focused on practical
            training, form, and long-term consistency.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            {/* View Coaching */}
            <Link
              href="/coaching"
              className="
      inline-flex items-center justify-center
      bg-[var(--accent)]
      hover:bg-red-700
      text-white
      transition
      px-6 py-3
      font-semibold
      rounded-md
    "
            >
              View Coaching
            </Link>

            {/* Contact Me */}
            <Link
              href="/contact"
              className="
                inline-flex items-center justify-center
                border border-[var(--accent)]
                text-[var(--accent)]
                hover:bg-[var(--accent)]
                hover:text-white
                transition
                px-6 py-3
                font-semibold
                rounded-md
              "
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <div className="rounded-2xl overflow-hidden w-fullbg-gray-800 rounded-xl flex items-center justify-center text-[var(--text-secondary)]">
            <Image
              src={HeroImage}
              alt="Training form"
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
