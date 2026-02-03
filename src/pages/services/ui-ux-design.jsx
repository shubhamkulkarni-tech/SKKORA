import ServiceLayout from "./ServiceLayout"

export default function UiUxDesign() {
  return (
    <ServiceLayout
      breadcrumb="UI / UX Design"
      title="UI / UX Design"
      intro="We design interfaces that are clear, usable, and aligned with business goals."
      sections={[
        {
          heading: "Design systems",
          content:
            "We create design systems that scale with your product and keep teams aligned.",
          points: [
            "Reusable components",
            "Clear visual hierarchy",
            "Accessibility-first design",
          ],
        },
        {
          heading: "User-centered thinking",
          content:
            "Every design decision is grounded in real user needs and product context.",
        },
      ]}
    />
  )
}
