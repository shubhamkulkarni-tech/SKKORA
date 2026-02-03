import Reveal from "@/components/Reveal"
import { Link } from "react-router-dom"

export default function ServiceLayout({
  breadcrumb,
  title,
  intro,
  sections,
}) {
  return (
    <section className="py-44 bg-white">
      <div className="mx-auto max-w-5xl px-6">

        {/* BREADCRUMB */}
        <Reveal>
          <p className="text-sm text-[#64748b] mb-6">
            <Link to="/#services" className="hover:text-black">
              Services
            </Link>
            <span className="mx-1">/</span>
            <span className="text-black">{breadcrumb}</span>
            <span className="text-[#ff9f1c]">.</span>
          </p>
        </Reveal>

        {/* HEADER */}
        <Reveal>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-black">
            {title}
          </h1>

          <p className="mt-6 text-lg text-[#475569] max-w-2xl">
            {intro}
          </p>
        </Reveal>

        {/* CONTENT */}
        <div className="mt-24 space-y-24">
          {sections.map((section, i) => (
            <Reveal key={i} delay={i * 80}>
              <div>
                <h2 className="text-2xl font-medium text-black">
                  {section.heading}
                </h2>

                <p className="mt-4 text-[#475569] leading-relaxed max-w-3xl">
                  {section.content}
                </p>

                {section.points && (
                  <ul className="mt-6 space-y-3 text-[#475569]">
                    {section.points.map((p, j) => (
                      <li key={j} className="flex gap-3">
                        <span className="text-[#ff9f1c]">•</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
