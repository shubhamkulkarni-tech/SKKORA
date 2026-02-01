import Reveal from "@/components/Reveal"

const STEPS = [
  {
    step: "01",
    title: "Discovery",
    desc: "We understand your business, users, and goals. This phase defines the foundation for everything that follows.",
    accent: "from-emerald-400 to-emerald-600",
  },
  {
    step: "02",
    title: "Design",
    desc: "We design clean, intuitive interfaces and system architecture focused on clarity and scalability.",
    accent: "from-sky-400 to-sky-600",
  },
  {
    step: "03",
    title: "Development",
    desc: "We build using modern, reliable technologies with performance, security, and maintainability in mind.",
    accent: "from-indigo-400 to-indigo-600",
  },
  {
    step: "04",
    title: "Launch & Scale",
    desc: "We deploy, monitor, and iterate — ensuring your product is ready to grow with your business.",
    accent: "from-amber-400 to-orange-500",
  },
]

export default function Process() {
  return (
    <section id="process" className="py-40 px-6 bg-muted/40">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-20">

        {/* LEFT — INTRO */}
        <div className="lg:sticky lg:top-32 self-start">
          <Reveal>
            <p className="text-sm uppercase tracking-widest text-[#475569]">
              Our process
            </p>
            <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-[#0b2545]">
              A structured approach,<br className="hidden md:block" />
              built for scale
            </h2>
            <p className="mt-6 text-lg text-[#475569] max-w-md">
              We follow a proven, transparent process that minimizes risk
              and ensures quality at every stage of product development.
            </p>
          </Reveal>
        </div>

        {/* RIGHT — STEPS */}
        <div className="space-y-16">
          {STEPS.map((item, i) => (
            <Reveal key={item.step} delay={i * 120}>
              <div className="relative pl-14 group">

                {/* Vertical line */}
                <span className="absolute left-6 top-0 h-full w-px bg-border" />

                {/* Step badge */}
                <span
                  className={`
                    absolute left-0 top-0 flex h-12 w-12 items-center justify-center
                    rounded-full text-sm font-medium text-white
                    bg-gradient-to-br ${item.accent}
                    shadow-sm
                    transition-transform duration-300
                    group-hover:scale-110
                  `}
                >
                  {item.step}
                </span>

                <h3 className="text-xl font-medium text-[#0b2545]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm text-[#475569] leading-relaxed max-w-md">
                  {item.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
