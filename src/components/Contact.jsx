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
      {/* SOFT GRADIENT BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 h-[520px] w-[520px] rounded-full bg-gradient-to-r from-emerald-200 via-sky-200 to-orange-200 blur-3xl opacity-40" />
      </div>

      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-24">

        {/* LEFT — COPY */}
        <div className="self-center">
          <Reveal>
            <p className="text-sm uppercase tracking-widest text-[#475569]">
              Get in touch
            </p>

            <h2 className="mt-5 text-4xl md:text-6xl font-semibold tracking-tight leading-tight text-[#0b2545]">
              Let’s build something<br className="hidden md:block" />
              meaningful together
            </h2>

            <p className="mt-8 text-lg text-[#475569] max-w-md">
              Tell us about your idea, product, or challenge.
              We’ll help you shape it into a scalable, well-engineered solution.
            </p>

            <p className="mt-6 text-sm text-[#64748b]">
              Typically reply within 24–48 hours.
            </p>
          </Reveal>
        </div>

        {/* RIGHT — FORM */}
        <Reveal delay={200}>
          <form
            className="
              relative rounded-2xl border border-border/60
              bg-white p-10 space-y-6
              shadow-sm
            "
            onSubmit={(e) => {
              e.preventDefault()
              alert("Thanks for reaching out. We’ll get back to you shortly.")
            }}
          >
            {/* Accent strip */}
            <div className="absolute inset-x-0 top-0 h-[4px] rounded-t-2xl bg-gradient-to-r from-emerald-400 via-sky-400 to-orange-400" />

            <div>
              <label className="text-sm text-[#475569]">
                Your name
              </label>
              <Input
                required
                placeholder="John Doe"
                className="mt-2 focus-visible:ring-[#0d6efd]"
              />
            </div>

            <div>
              <label className="text-sm text-[#475569]">
                Email address
              </label>
              <Input
                type="email"
                required
                placeholder="john@company.com"
                className="mt-2 focus-visible:ring-[#0d6efd]"
              />
            </div>

            <div>
              <label className="text-sm text-[#475569]">
                Project details
              </label>
              <Textarea
                required
                rows={4}
                placeholder="Briefly describe your project, goals, or challenges..."
                className="mt-2 resize-none focus-visible:ring-[#0d6efd]"
              />
            </div>

            <Button
              size="lg"
              className="
                w-full mt-4
                bg-[#ff9f1c] text-black
                hover:bg-[#ffb347]
                shadow-sm
              "
            >
              Start the conversation
            </Button>

            <p className="text-xs text-[#64748b] text-center pt-2">
              By submitting this form, you agree to be contacted by SKKORA.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
