import { Link } from "react-router-dom"
import Reveal from "@/components/Reveal"

const SERVICES = [
  {
    title: "Product Engineering",
    label: "Architecture & delivery",
    desc: "End-to-end product development with scalable, maintainable architecture.",
    href: "/services/product-engineering",
    accent: "bg-emerald-500",
  },
  {
    title: "Web Development",
    label: "Frontend & platforms",
    desc: "High-performance web applications built with modern, proven stacks.",
    href: "/services/web-development",
    accent: "bg-sky-500",
  },
  {
    title: "Mobile Applications",
    label: "iOS & Android",
    desc: "Cross-platform mobile apps with consistent UX and native performance.",
    href: "/services/mobile-apps",
    accent: "bg-indigo-500",
  },
  {
    title: "UI / UX Design",
    label: "Design systems",
    desc: "Clear, minimal interfaces focused on usability, clarity, and conversion.",
    href: "/services/ui-ux-design",
    accent: "bg-rose-500",
  },
  {
    title: "Backend & APIs",
    label: "Infrastructure",
    desc: "Secure, well-structured APIs with authentication and scalability.",
    href: "/services/backend-apis",
    accent: "bg-amber-500",
  },
  {
    title: "Maintenance & Scaling",
    label: "Long-term ownership",
    desc: "Ongoing support, performance optimization, and system evolution.",
    href: "/services/maintenance-scaling",
    accent: "bg-teal-500",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-36 bg-white">
      <div className="mx-auto max-w-7xl px-6">

        {/* HEADER */}
        <Reveal>
          <div className="mb-28 max-w-3xl">
            <p className="text-xs uppercase tracking-[0.25em] text-[#64748b]">
              What we do
            </p>

            <h2 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight text-black">
              Services, clearly defined<span className="text-[#ff9f1c]">.</span>
            </h2>

            <p className="mt-6 text-lg text-[#475569]">
              A focused set of capabilities covering the full product lifecycle —
              from early architecture to long-term ownership.
            </p>
          </div>
        </Reveal>

        {/* LIST STYLE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">
          {SERVICES.map((s, i) => (
            <Reveal key={i} delay={i * 70}>
              <Link
                to={s.href}
                className="
                  group relative block
                  border-b border-[#e5e7eb]
                  pb-10
                  focus:outline-none
                "
              >
                {/* subtle accent line */}
                <span
                  className={`
                    absolute left-0 top-1 h-6 w-[2px]
                    ${s.accent}
                    opacity-70
                  `}
                />

                <div className="pl-6">
                  <h3 className="text-xl font-medium text-black">
                    {s.title}
                  </h3>

                  <p className="mt-1 text-xs uppercase tracking-widest text-[#94a3b8]">
                    {s.label}
                  </p>

                  <p className="mt-4 text-[#475569] leading-relaxed max-w-md">
                    {s.desc}
                  </p>

                  {/* Explore */}
                  <span
                    className="
                      inline-flex items-center gap-2 mt-6
                      text-sm font-medium text-[#475569]
                      transition-colors
                      group-hover:text-black
                    "
                  >
                    Explore
                    <span
                      className="
                        transition-transform duration-200
                        group-hover:translate-x-[2px]
                      "
                    >
                      →
                    </span>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
