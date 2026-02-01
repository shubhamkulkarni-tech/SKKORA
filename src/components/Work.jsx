import Reveal from "@/components/Reveal"

const WORK = [
  {
    metric: "3×",
    title: "Operational efficiency",
    desc: "Streamlined internal workflows and reduced manual effort by building a scalable employee management platform.",
  },
  {
    metric: "99.9%",
    title: "Platform reliability",
    desc: "Engineered backend systems with role-based access and optimized APIs designed for long-term scale.",
  },
  {
    metric: "40%",
    title: "User engagement lift",
    desc: "Redesigned and rebuilt customer-facing products with a strong focus on UX clarity and performance.",
  },
  {
    metric: "End-to-end",
    title: "Product ownership",
    desc: "Handled complete product lifecycle — from architecture and design to deployment and scaling.",
  },
]

export default function Work() {
  return (
    <section
      id="work"
      className="relative py-32 md:py-44 px-4 sm:px-6 overflow-hidden"
    >
      {/* SOFT BACKGROUND ACCENT */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-muted/40 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <Reveal>
          <div className="max-w-3xl mb-24 md:mb-28">
            <p className="text-sm uppercase tracking-widest text-muted-foreground">
              Our work
            </p>
            <h2 className="mt-5 text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
              Measurable impact,<br className="hidden md:block" />
              thoughtfully delivered
            </h2>
            <p className="mt-8 text-lg text-muted-foreground">
              We focus on outcomes that matter — efficiency, reliability,
              and long-term scalability.
            </p>
          </div>
        </Reveal>

        {/* METRIC GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 md:gap-x-24 gap-y-20 md:gap-y-24">
          {WORK.map((item, i) => (
            <Reveal key={i} delay={i * 120}>
              <div>
                <div className="text-6xl md:text-7xl font-semibold tracking-tight text-foreground/90">
                  {item.metric}
                </div>

                <div className="mt-6 h-px w-16 bg-border" />

                <h3 className="mt-6 text-xl md:text-2xl font-medium">
                  {item.title}
                </h3>
                <p className="mt-4 text-muted-foreground max-w-md leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* NOTE */}
        <Reveal delay={500}>
          <div className="mt-28 md:mt-36 max-w-2xl">
            <p className="text-sm text-muted-foreground">
              Detailed case studies are shared selectively to respect client
              confidentiality and project scope.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
