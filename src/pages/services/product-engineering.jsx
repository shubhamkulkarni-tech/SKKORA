import ServiceLayout from "./ServiceLayout"

export default function ProductEngineering() {
  return (
    <ServiceLayout
      breadcrumb="Product Engineering"
      title="Product Engineering"
      intro="We design and build digital products with a strong engineering foundation — focused on scalability, clarity, and long-term ownership."
      sections={[
        {
          heading: "What we focus on",
          content:
            "Product engineering is not just about shipping features. We focus on building systems that can evolve safely as your business grows.",
          points: [
            "Clean, modular architecture",
            "Performance and reliability from day one",
            "Clear technical decision-making",
          ],
        },
        {
          heading: "Our approach",
          content:
            "We work closely with founders and teams to understand the problem deeply before writing code. This ensures fewer rewrites and better outcomes.",
          points: [
            "Early architecture planning",
            "Iterative delivery with clear milestones",
            "Continuous feedback and improvement",
          ],
        },
        {
          heading: "Best suited for",
          content:
            "Startups and teams building new products, MVPs, or replacing fragile legacy systems.",
        },
      ]}
    />
  )
}
