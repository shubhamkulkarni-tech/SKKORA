import { useState } from "react"
import Reveal from "@/components/Reveal"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Link } from "react-router-dom"

export default function StartProject() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <>
      <main className="relative min-h-screen px-4 sm:px-6 py-32 md:py-40 flex items-center">
        <div className="mx-auto max-w-4xl w-full">

          {/* HEADER */}
          {!submitted && (
            <Reveal>
              <div className="max-w-3xl mb-16 md:mb-20">
                <p className="text-sm uppercase tracking-widest text-[#475569]">
                  Start a project
                </p>

                <h1 className="mt-5 text-4xl md:text-6xl font-semibold tracking-tight leading-tight text-[#0b2545]">
                  Let’s talk about<br className="hidden md:block" />
                  your next idea
                </h1>

                <p className="mt-8 text-lg text-[#475569] max-w-2xl">
                  Share a bit about your product, goals, and timeline.
                  We’ll review the details and reach out if it’s a good fit.
                </p>
              </div>
            </Reveal>
          )}

          {/* FORM */}
          {!submitted && (
            <Reveal delay={150}>
              <form
                className="
                  relative rounded-2xl border border-border/60
                  bg-white p-8 md:p-12 space-y-8
                  shadow-sm
                "
                onSubmit={(e) => {
                  e.preventDefault()
                  setSubmitted(true)
                }}
              >
                {/* Accent bar */}
                <div className="absolute inset-x-0 top-0 h-[4px] rounded-t-2xl bg-gradient-to-r from-emerald-400 via-sky-400 to-orange-400" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm text-[#475569]">Your name</label>
                    <Input required placeholder="John Doe" className="mt-2" />
                  </div>

                  <div>
                    <label className="text-sm text-[#475569]">Email address</label>
                    <Input type="email" required placeholder="john@company.com" className="mt-2" />
                  </div>
                </div>

                <div>
                  <label className="text-sm text-[#475569]">
                    What are you looking to build?
                  </label>
                  <Textarea
                    required
                    rows={4}
                    placeholder="Briefly describe your product, problem, or idea..."
                    className="mt-2 resize-none"
                  />
                </div>

                <div>
                  <label className="text-sm text-[#475569]">
                    Timeline / budget (optional)
                  </label>
                  <Input
                    placeholder="e.g. 2–3 months, MVP stage"
                    className="mt-2"
                  />
                </div>

                <div className="pt-6">
                  <Button
                    size="lg"
                    className="w-full bg-[#ff9f1c] text-black hover:bg-[#ffb347] shadow-md"
                  >
                    Submit project request
                  </Button>

                  <p className="mt-4 text-xs text-[#64748b] text-center">
                    We typically respond within 24–48 hours.
                  </p>
                </div>
              </form>
            </Reveal>
          )}

          {/* SUCCESS */}
          {submitted && (
            <Reveal>
              <div className="text-center max-w-2xl mx-auto">
                <p className="text-sm uppercase tracking-widest text-[#475569]">
                  Request received
                </p>

                <h2 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight text-[#0b2545]">
                  Thanks for reaching out
                </h2>

                <p className="mt-8 text-lg text-[#475569]">
                  We’ll review your request and get back to you within{" "}
                  <span className="font-medium text-[#0b2545]">24–48 hours</span>.
                </p>

                <div className="mt-14 flex flex-col sm:flex-row justify-center gap-6">
                  <Link to="/">
                    <Button className="bg-[#ff9f1c] text-black hover:bg-[#ffb347]">
                      Back to home
                    </Button>
                  </Link>

                  <Button
                    variant="outline"
                    className="border-[#0b2545] text-[#0b2545] hover:bg-[#0b2545] hover:text-white"
                    onClick={() => setSubmitted(false)}
                  >
                    Submit another request
                  </Button>
                </div>
              </div>
            </Reveal>
          )}
        </div>
      </main>

      {/* FOOTER */}
    </>
  )
}
