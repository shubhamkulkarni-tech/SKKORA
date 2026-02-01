import { useState, useRef } from "react"
import emailjs from "@emailjs/browser"
import Reveal from "@/components/Reveal"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Link } from "react-router-dom"

export default function StartProject() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const formRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs
      .sendForm(
        "service_e2l33gi",     // SERVICE ID
        "template_g8ovv05",    // TEMPLATE ID
        formRef.current,
        "2mbzRNoFaCOEJw2-K"    // PUBLIC KEY
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text)
          setLoading(false)
          setSubmitted(true)
        },
        (error) => {
          console.error("EmailJS Error:", error)
          setLoading(false)
          alert("Failed to send email. Check console.")
        }
      )
  }

  return (
    <main className="min-h-screen px-4 sm:px-6 py-32 flex items-center">
      <div className="mx-auto max-w-4xl w-full">

        {!submitted && (
          <Reveal>
            <div className="mb-12">
              <p className="text-sm uppercase tracking-widest text-[#475569]">
                Start a project
              </p>
              <h1 className="mt-4 text-4xl md:text-6xl font-semibold text-[#0b2545]">
                Let’s talk about your next idea
              </h1>
            </div>
          </Reveal>
        )}

        {!submitted && (
          <Reveal delay={150}>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="relative bg-white p-8 md:p-12 rounded-2xl border space-y-8 shadow-sm"
            >
              {/* Accent bar */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-emerald-400 via-sky-400 to-orange-400 rounded-t-2xl" />

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm text-[#475569]">Name</label>
                  <Input name="name" required placeholder="John Doe" />
                </div>

                <div>
                  <label className="text-sm text-[#475569]">Email</label>
                  <Input name="email" type="email" required />
                </div>

                <div>
                  <label className="text-sm text-[#475569]">Country</label>
                  <select
                    name="country"
                    required
                    className="mt-2 w-full rounded-md border px-3 py-2 text-sm"
                  >
                    <option value="">Select country</option>
                    <option>India</option>
                    <option>USA</option>
                    <option>UK</option>
                    <option>Canada</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm text-[#475569]">
                    Contact number
                  </label>
                  <Input name="phone" type="tel" required />
                </div>
              </div>

              <div>
                <label className="text-sm text-[#475569]">
                  Project details
                </label>
                <Textarea
                  name="message"
                  rows={4}
                  required
                  placeholder="Describe your product or idea..."
                />
              </div>

              <div>
                <label className="text-sm text-[#475569]">
                  Timeline / budget (optional)
                </label>
                <Input
                  name="timeline"
                  placeholder="e.g. 2–3 months, MVP stage"
                />
              </div>

              <Button
                size="lg"
                disabled={loading}
                className="w-full bg-[#ff9f1c] text-black hover:bg-[#ffb347]"
              >
                {loading ? "Sending..." : "Submit project request"}
              </Button>
            </form>
          </Reveal>
        )}

        {submitted && (
          <Reveal>
            <div className="text-center">
              <h2 className="text-4xl font-semibold text-[#0b2545]">
                Thanks for reaching out ...
              </h2>
              <p className="mt-4 text-[#475569]">
                We’ve received your request and will get back to you within
                24–48 hours.
              </p>

              <div className="mt-10 flex justify-center gap-4">
                <Link to="/">
                  <Button>Back to home</Button>
                </Link>

                <Button
                  variant="outline"
                  onClick={() => setSubmitted(false)}
                >
                  Submit another
                </Button>
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </main>
  )
}
