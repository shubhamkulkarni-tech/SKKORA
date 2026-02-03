import ServiceLayout from "./ServiceLayout"

export default function MaintenanceScaling() {
  return (
    <ServiceLayout
      breadcrumb="Maintenance & Scaling"
      title="Maintenance & Scaling"
      intro="We provide long-term support to keep your systems reliable, secure, and performant."
      sections={[
        {
          heading: "Ongoing support",
          content:
            "We help teams maintain stability as products and user bases grow.",
          points: [
            "Performance monitoring",
            "Bug fixing & optimization",
            "Security updates",
          ],
        },
        {
          heading: "Scaling responsibly",
          content:
            "We ensure systems evolve without accumulating technical debt.",
        },
      ]}
    />
  )
}
