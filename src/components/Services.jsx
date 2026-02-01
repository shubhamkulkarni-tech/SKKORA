import Reveal from "@/components/Reveal"

const SERVICES = [
  { title: "Product Engineering", desc: "End-to-end product development with scalable architecture.", accent: "from-emerald-400 to-emerald-600" },
  { title: "Web Development", desc: "High-performance web apps using modern stacks.", accent: "from-sky-400 to-sky-600" },
  { title: "Mobile Applications", desc: "Cross-platform mobile apps with smooth UX.", accent: "from-indigo-400 to-indigo-600" },
  { title: "UI / UX Design", desc: "Minimal, conversion-focused design systems.", accent: "from-pink-400 to-rose-500" },
  { title: "Backend & APIs", desc: "Secure APIs with authentication and scalability.", accent: "from-amber-400 to-orange-500" },
  { title: "Maintenance & Scaling", desc: "Long-term support and performance optimization.", accent: "from-teal-400 to-cyan-600" },
]

export default function Services() {
  return (
    <section id="services" className="py-36 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">

        {/* HEADER */}
        <Reveal>
          <div className="mb-20 max-w-3xl">
            <p className="text-sm uppercase tracking-widest text-[#475569]">
              What we do
            </p>
            <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-[#0b2545]">
              Services, clearly defined
            </h2>
            <p className="mt-6 text-lg text-[#475569]">
              A focused set of capabilities covering the full product lifecycle.
            </p>
          </div>
        </Reveal>

        {/* AUTO LOOP SLIDER */}
        <div className="relative overflow-hidden">
          <div className="flex gap-8 w-max animate-services-loop">
            {[...SERVICES, ...SERVICES].map((s, i) => (
              <div
                key={i}
                className="
                  min-w-[300px] sm:min-w-[360px]
                  rounded-2xl border border-border/60 bg-white p-8
                  shadow-sm
                "
              >
                {/* Accent */}
                <span
                  className={`inline-block mb-6 h-2 w-16 rounded-full bg-gradient-to-r ${s.accent}`}
                />

                <h3 className="text-xl font-medium text-[#0b2545] mb-3">
                  {s.title}
                </h3>

                <p className="text-sm text-[#475569] leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ANIMATION */}
      <style jsx>{`
        @keyframes services-loop {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-services-loop {
          animation: services-loop 40s linear infinite;
        }
      `}</style>
    </section>
  )
}
