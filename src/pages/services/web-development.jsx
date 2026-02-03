import ServiceLayout from "./ServiceLayout"

export default function WebDevelopment() {
  return (
    <ServiceLayout
      breadcrumb="Web Development"
      title="Web Development"
      intro="We build fast, accessible, and maintainable web applications using modern technologies and proven engineering practices."
      sections={[
        {
          heading: "Modern frontend systems",
          content:
            "Our web applications are designed for performance, accessibility, and long-term maintainability.",
          points: [
            "React-based architectures",
            "Component-driven development",
            "SEO and accessibility best practices",
          ],
        },
        {
          heading: "Scalable platforms",
          content:
            "We ensure your web platform can handle growth — both in users and features.",
          points: [
            "API-first architecture",
            "Optimized build pipelines",
            "Monitoring and performance tracking",
          ],
        },
      ]}
    />
  )
}
