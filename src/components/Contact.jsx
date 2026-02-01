import Reveal from "@/components/Reveal"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-44 px-6 overflow-hidden bg-muted/40"
    >
      {/* Soft background accent */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-background blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-24">

        {/* LEFT — COPY */}
        <div className="self-center">
          <Reveal>
            <p className="text-sm uppercase tracking-widest text-muted-foreground">
              Get in touch
            </p>

            <h2 className="mt-5 text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
              Let’s build something<br className="hidden md:block" />
              meaningful together
            </h2>

            <p className="mt-8 text-lg text-muted-foreground max-w-md">
              Tell us about your idea, product, or challenge.
              We’ll help you shape it into a scalable, well-engineered solution.
            </p>

            <p className="mt-6 text-sm text-muted-foreground">
              Typically reply within 24–48 hours.
            </p>
          </Reveal>
        </div>

        {/* RIGHT — FORM */}
        <Reveal delay={200}>
          <form
            className="rounded-2xl border bg-background p-10 space-y-6"
            onSubmit={(e) => {
              e.preventDefault()
              alert("Thanks for reaching out. We’ll get back to you shortly.")
            }}
          >
            <div>
              <label className="text-sm text-muted-foreground">
                Your name
              </label>
              <Input
                required
                placeholder="John Doe"
                className="mt-2"
              />
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
                Project details
              </label>
              <Textarea
                required
                rows={4}
                placeholder="Briefly describe your project, goals, or challenges..."
                className="mt-2 resize-none"
              />
            </div>

            <Button size="lg" className="w-full mt-4">
              Start the conversation
            </Button>

            <p className="text-xs text-muted-foreground text-center pt-2">
              By submitting this form, you agree to be contacted by SKKORA.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
