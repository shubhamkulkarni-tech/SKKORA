import ServiceLayout from "./ServiceLayout"

export default function MobileApps() {
  return (
    <ServiceLayout
      breadcrumb="Mobile Applications"
      title="Mobile Applications"
      intro="We develop cross-platform mobile applications that feel native, perform well, and scale with your product."
      sections={[
        {
          heading: "Cross-platform strategy",
          content:
            "We build mobile apps that share logic across platforms without compromising user experience.",
          points: [
            "Consistent UX across devices",
            "Performance-focused implementation",
            "Maintainable codebases",
          ],
        },
        {
          heading: "From launch to scale",
          content:
            "We support your mobile app beyond launch with updates, monitoring, and improvements.",
        },
      ]}
    />
  )
}
