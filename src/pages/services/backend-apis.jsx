import ServiceLayout from "./ServiceLayout"

export default function BackendApis() {
  return (
    <ServiceLayout
      breadcrumb="Backend & APIs"
      title="Backend & APIs"
      intro="We engineer secure, scalable backend systems that support long-term growth."
      sections={[
        {
          heading: "System architecture",
          content:
            "We design backend systems for reliability, security, and extensibility.",
          points: [
            "API-first design",
            "Authentication & authorization",
            "Scalable infrastructure",
          ],
        },
        {
          heading: "Operational readiness",
          content:
            "Monitoring, logging, and maintainability are built in from the start.",
        },
      ]}
    />
  )
}
