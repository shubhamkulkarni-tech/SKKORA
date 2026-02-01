import { useState } from "react"
import Reveal from "@/components/Reveal"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Link } from "react-router-dom"

export default function StartProject() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <main className="relative min-h-screen px-4 sm:px-6 py-32 md:py-40 flex items-center">
      <div className="mx-auto max-w-4xl w-full">

        {/* HEADER */}
        {!submitted && (
          <Reveal>
            <div className="max-w-3xl mb-16 md:mb-20">
              <p className="text-sm uppercase tracking-widest text-muted-foreground">
                Start a project
              </p>
              <h1 className="mt-5 text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
                Tell us about<br className="hidden md:block" />
                your project
              </h1>
              <p className="mt-8 text-lg text-muted-foreground">
                Share a bit about your idea, goals, and timeline.
                We’ll review and get back to you if it’s a good fit.
              </p>
            </div>
          </Reveal>
        )}

        {/* FORM */}
        {!submitted && (
          <Reveal delay={150}>
            <form
              className="rounded-2xl border bg-background p-8 md:p-12 space-y-8"
              onSubmit={(e) => {
                e.preventDefault()
                setSubmitted(true)
              }}
            >
              <div>
                <label className="text-sm text-muted-foreground">
                  Your name
                </label>
                <Input required placeholder="John Doe" className="mt-2" />
              </div>

              <div>
                <label className="text-sm text-muted-foreground">
                  Email address
                </label>
                <Input
                  type="email"
                  required
                  placeholder="john@company.com"
                  className="mt-2"
                />
              </div>

              <div>
                <label className="text-sm text-muted-foreground">
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
                <label className="text-sm text-muted-foreground">
                  Timeline / budget (optional)
                </label>
                <Input
                  placeholder="e.g. 2–3 months, MVP stage"
                  className="mt-2"
                />
              </div>

              <div className="pt-6">
                <Button size="lg" className="w-full">
                  Submit project request
                </Button>

                <p className="mt-4 text-xs text-muted-foreground text-center">
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
              <p className="text-sm uppercase tracking-widest text-muted-foreground">
                Request received
              </p>

              <h2 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight">
                Thanks for reaching out
              </h2>

              <p className="mt-8 text-lg text-muted-foreground">
                We’ve received your project details.
                Our team will review your request and get back to you
                within <span className="text-foreground">24–48 hours</span>.
              </p>

              <div className="mt-14 flex flex-col sm:flex-row justify-center gap-6">
                <Link to="/">
                  <Button size="lg">
                    Back to home
                  </Button>
                </Link>

                <Button
                  size="lg"
                  variant="outline"
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
  )
}
