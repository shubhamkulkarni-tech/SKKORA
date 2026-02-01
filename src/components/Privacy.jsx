export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white px-4 sm:px-6 py-32 md:py-40">
      <div className="mx-auto max-w-4xl text-[#475569]">

        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#0b2545]">
          Privacy Policy
        </h1>

        <p className="mt-6 text-lg">
          This Privacy Policy explains how SKKORA collects, uses, and protects
          your personal information when you visit our website or contact us.
        </p>

        <section className="mt-14 space-y-10">

          <div>
            <h2 className="text-xl font-medium text-[#0b2545] mb-3">
              Information we collect
            </h2>
            <p>
              We collect information that you voluntarily provide, including
              your name, email address, and project details when you contact us
              through our website.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium text-[#0b2545] mb-3">
              How we use your information
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To respond to your inquiries</li>
              <li>To discuss potential projects or collaborations</li>
              <li>To improve our services and communication</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-medium text-[#0b2545] mb-3">
              Data protection
            </h2>
            <p>
              We take reasonable measures to protect your personal data.
              Your information is never sold, rented, or shared with third
              parties for marketing purposes.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium text-[#0b2545] mb-3">
              Cookies
            </h2>
            <p>
              We may use basic cookies or analytics tools to understand website
              usage. These tools do not collect personally identifiable
              information.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium text-[#0b2545] mb-3">
              Contact
            </h2>
            <p>
              If you have questions about this Privacy Policy, contact us at{" "}
              <a
                href="mailto:hello@skkora.com"
                className="font-medium text-[#0b2545]"
              >
                hello@skkora.com
              </a>.
            </p>
          </div>

        </section>
      </div>
    </main>
    
  )
}
