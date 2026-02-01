import { Card, CardContent } from "@/components/ui/card"
import Reveal from "@/components/Reveal"

const SERVICES = [
  { title: "Product Engineering", desc: "End-to-end product development with scalable architecture." },
  { title: "Web Development", desc: "High-performance web apps using modern stacks." },
  { title: "Mobile Applications", desc: "Cross-platform mobile apps with smooth UX." },
  { title: "UI / UX Design", desc: "Minimal, conversion-focused design systems." },
  { title: "Backend & APIs", desc: "Secure APIs with authentication and scalability." },
  { title: "Maintenance & Scaling", desc: "Long-term support and performance optimization." },
]

export default function Services() {
  return (
    <section id="services" className="py-36 px-6">
      <div className="mx-auto max-w-7xl">

        <Reveal>
          <div className="max-w-3xl mb-20">
            <p className="text-sm uppercase tracking-widest text-muted-foreground">
              What we do
            </p>
            <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">
              Services designed for growth
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              We build reliable, scalable digital products for modern businesses.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {SERVICES.map((s, i) => (
            <Reveal key={i} delay={i * 80}>
              <Card className="border-muted/60 bg-background transition hover:shadow-md">
                <CardContent className="p-8">
                  <h3 className="text-xl font-medium mb-4">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {s.desc}
                  </p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
