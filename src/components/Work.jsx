import Reveal from "@/components/Reveal"

const WORK = [
  {
    metric: "3×",
    context: "Across recent projects",
    title: "Operational efficiency",
    desc: "Focused on building systems that reduce manual effort and simplify internal workflows.",
    accent: "from-emerald-500 to-emerald-600",
  },
  {
    metric: "99.9%",
    context: "Uptime targets",
    title: "Platform reliability",
    desc: "Engineering backend architectures with stability, security, and long-term scalability in mind.",
    accent: "from-sky-500 to-sky-600",
  },
  {
    metric: "40%",
    context: "Post-launch improvement",
    title: "User engagement lift",
    desc: "Designing and developing interfaces that improve clarity, performance, and user retention.",
    accent: "from-indigo-500 to-indigo-600",
  },
  {
    metric: "End-to-end",
    context: "From idea to scale",
    title: "Product ownership",
    desc: "Taking responsibility from early architecture decisions to deployment and iteration.",
    accent: "from-amber-500 to-orange-600",
  },
]

export default function Work() {
  return (
    <section
      id="work"
      className="relative py-36 px-6 bg-white"
    >
      {/* VERY SUBTLE GRID BACKDROP */}
      <div className="absolute inset-0 -z-10 
        bg-[linear-gradient(to_right,#00000004_1px,transparent_1px),
            linear-gradient(to_bottom,#00000004_1px,transparent_1px)]
        bg-[size:80px_80px]" />

      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <Reveal>
          <div className="max-w-3xl mb-32">
            <p className="text-xs uppercase tracking-[0.25em] text-[#64748b]">
              Our work
            </p>

            <h2 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight text-black">
              How we think about<br className="hidden md:block" />
              building products<span className="text-[#ff9f1c]">.</span>
            </h2>

            <p className="mt-6 text-lg text-[#475569]">
              We focus on building reliable, scalable systems with
              measurable impact — even at an early stage.
            </p>
          </div>
        </Reveal>

        {/* STACKED BLOCKS */}
        <div className="space-y-24">
          {WORK.map((item, i) => (
            <Reveal key={i} delay={i * 120}>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">

                {/* METRIC */}
                <div className="md:col-span-4">
                  <div
                    className={`
                      text-4xl sm:text-5xl md:text-6xl
                      font-semibold tracking-tight
                      bg-gradient-to-r ${item.accent}
                      bg-clip-text text-transparent
                    `}
                  >
                    {item.metric}
                  </div>

                  {/* CONTEXT LINE */}
                  <p className="mt-2 text-xs uppercase tracking-widest text-[#94a3b8]">
                    {item.context}
                  </p>
                </div>

                {/* CONTENT */}
                <div className="md:col-span-8 relative pl-8">
                  {/* THIN ACCENT */}
                  <span
                    className={`
                      absolute left-0 top-1 h-full w-px
                      bg-gradient-to-b ${item.accent}
                      opacity-50
                    `}
                  />

                  <h3 className="text-xl md:text-2xl font-medium text-black">
                    {item.title}
                  </h3>

                  <p className="mt-4 max-w-xl text-[#475569] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* FOOTNOTE */}
        <Reveal delay={400}>
          <div className="mt-36 max-w-2xl border-l pl-6 border-[#e5e7eb]">
            <p className="text-sm text-[#64748b] leading-relaxed">
              We partner with early-stage teams and growing businesses to
              design, build, and scale products responsibly.
            </p>
          </div>
        </Reveal>

      </div>
    </section>
  )
}
