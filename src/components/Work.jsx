import Reveal from "@/components/Reveal"

const WORK = [
  {
    metric: "3×",
    title: "Operational efficiency",
    desc: "Focused on building systems that reduce manual effort and simplify internal workflows.",
    accent: "from-emerald-400 to-emerald-600",
  },
  {
    metric: "99.9%",
    title: "Platform reliability",
    desc: "Engineering backend architectures with stability, security, and long-term scalability in mind.",
    accent: "from-sky-400 to-sky-600",
  },
  {
    metric: "40%",
    title: "User engagement lift",
    desc: "Designing and developing interfaces that improve clarity, performance, and user retention.",
    accent: "from-indigo-400 to-indigo-600",
  },
  {
    metric: "End-to-end",
    title: "Product ownership",
    desc: "Taking responsibility from early architecture decisions to deployment and iteration.",
    accent: "from-amber-400 to-orange-500",
  },
]

export default function Work() {
  return (
    <section
      id="work"
      className="relative py-36 px-6 bg-white overflow-hidden"
    >
      {/* SUBTLE GRID BACKDROP */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <Reveal>
          <div className="max-w-3xl mb-28">
            <p className="text-sm uppercase tracking-widest text-[#475569]">
              Our work
            </p>
            <h2 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight text-[#0b2545]">
              How we think about<br className="hidden md:block" />
              building products
            </h2>
            <p className="mt-6 text-lg text-[#475569]">
              We focus on building reliable, scalable systems with
              measurable impact — even at an early stage.
            </p>
          </div>
        </Reveal>

        {/* STACKED BLOCKS */}
        <div className="space-y-20">
          {WORK.map((item, i) => (
            <Reveal key={i} delay={i * 120}>
              <div className="relative grid grid-cols-1 md:grid-cols-12 gap-10 items-start">

                {/* METRIC */}
                <div className="md:col-span-4">
                  <div
                    className={`
                      text-6xl md:text-7xl font-semibold tracking-tight
                      bg-gradient-to-r ${item.accent}
                      bg-clip-text text-transparent
                    `}
                  >
                    {item.metric}
                  </div>
                </div>

                {/* CONTENT */}
                <div className="md:col-span-8 relative pl-6">
                  <span
                    className={`
                      absolute left-0 top-1 h-full w-[3px]
                      rounded-full bg-gradient-to-b ${item.accent}
                    `}
                  />

                  <h3 className="text-xl md:text-2xl font-medium text-[#0b2545]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-[#475569] max-w-xl leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* EARLY-STAGE NOTE (POSITIVE) */}
        <Reveal delay={500}>
          <div className="mt-32 max-w-2xl">
            <p className="text-sm text-[#64748b]">
              We’re actively partnering with early-stage teams and businesses
              to build their first or next product.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
