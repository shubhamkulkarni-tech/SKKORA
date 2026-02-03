import { useRef, useState, useEffect } from "react"
import emailjs from "@emailjs/browser"
import Reveal from "@/components/Reveal"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Link } from "react-router-dom"

const STORAGE_KEY = "skkora_start_project_form"

export default function StartProject() {
  const formRef = useRef(null)
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  /* ---------------------------
     RESTORE SAVED FORM
  ---------------------------- */
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY))
    if (saved && formRef.current) {
      Object.entries(saved).forEach(([k, v]) => {
        if (formRef.current.elements[k]) {
          formRef.current.elements[k].value = v
        }
      })
    }
  }, [])

  /* ---------------------------
     AUTO SAVE
  ---------------------------- */
  const handleChange = () => {
    const data = {}
    Array.from(formRef.current.elements).forEach((el) => {
      if (el.name) data[el.name] = el.value
    })
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  }

  /* ---------------------------
     SUBMIT
  ---------------------------- */
  const handleSubmit = (e) => {
    e.preventDefault()

    const f = formRef.current
    const newErrors = {}

    if (!f.name.value.trim()) newErrors.name = "Required"
    if (!/^\S+@\S+\.\S+$/.test(f.email.value))
      newErrors.email = "Invalid email"
    if (!f.problem.value.trim())
      newErrors.problem = "Required"

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setErrors({})
    setLoading(true)

    emailjs
      .sendForm(
        "service_e2l33gi",
        "template_g8ovv05",
        formRef.current,
        "2mbzRNoFaCOEJw2-K"
      )
      .then(() => {
        setLoading(false)
        setSubmitted(true)
        localStorage.removeItem(STORAGE_KEY)

        // ✅ SUCCESS → SCROLL TO TOP
        window.scrollTo({ top: 0, behavior: "smooth" })
      })
      .catch(() => {
        setLoading(false)
        alert("Something went wrong. Please try again.")
      })
  }

  return (
    <main className="min-h-screen bg-[#f8fafc] px-4 sm:px-6 py-32">
      <div className="mx-auto max-w-5xl">

        {!submitted && (
          <Reveal>
            <div className="mb-16 max-w-3xl">
              <p className="text-sm uppercase tracking-widest text-slate-500">
                Start a project
              </p>
              <h1 className="mt-4 text-4xl md:text-6xl font-semibold text-black">
                Tell us about your idea
                <span className="text-[#ff9f1c]">.</span>
              </h1>
              <p className="mt-6 text-lg text-slate-600">
                Share a few details and we’ll get back with clear next steps.
              </p>
            </div>
          </Reveal>
        )}

        {!submitted && (
          <Reveal delay={150}>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              onChange={handleChange}
              onKeyDown={(e) => {
                if (e.key === "Enter" && e.target.tagName !== "TEXTAREA") {
                  e.preventDefault()
                }
              }}
              className="relative bg-white rounded-3xl border shadow-sm p-8 md:p-16 space-y-16"
            >
              <div className="absolute inset-x-0 top-0 h-[3px] rounded-t-3xl bg-[#ff9f1c]" />

              {/* ABOUT YOU */}
              <section className="space-y-8">
                <h3 className="text-xl font-semibold text-black">About you</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Input name="name" placeholder="Your full name" />
                    {errors.name && (
                      <p className="text-xs text-slate-500">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <Input name="email" placeholder="Email address" />
                    {errors.email && (
                      <p className="text-xs text-slate-500">{errors.email}</p>
                    )}
                  </div>
                  <Input name="company" placeholder="Company / Startup (optional)" />
                  <Input name="role" placeholder="Your role (optional)" />
                </div>
              </section>

              {/* PROJECT */}
              <section className="space-y-8">
                <h3 className="text-xl font-semibold text-black">The project</h3>

                <div className="grid md:grid-cols-2 gap-6">
                  <select name="project_type" className="rounded-xl border px-4 py-3 text-sm bg-white">
                    <option value="">Project type</option>
                    <option>Website</option>
                    <option>Web application</option>
                    <option>Mobile app</option>
                    <option>MVP</option>
                  </select>

                  <select name="platform" className="rounded-xl border px-4 py-3 text-sm bg-white">
                    <option value="">Target platform</option>
                    <option>Web</option>
                    <option>Mobile</option>
                    <option>Web + Mobile</option>
                  </select>
                </div>

                <div>
                  <Textarea
                    name="problem"
                    rows={4}
                    placeholder="What problem are you trying to solve?"
                  />
                  {errors.problem && (
                    <p className="text-xs text-slate-500">{errors.problem}</p>
                  )}
                </div>

                <Textarea
                  name="features"
                  rows={4}
                  placeholder="Key features or requirements"
                />
              </section>

              {/* EXECUTION */}
              <section className="space-y-8">
                <h3 className="text-xl font-semibold text-black">
                  Execution & expectations
                </h3>

                <div className="grid md:grid-cols-2 gap-6">
                  <select name="stage" className="rounded-xl border px-4 py-3 text-sm bg-white">
                    <option value="">Current stage</option>
                    <option>Idea</option>
                    <option>MVP</option>
                    <option>Live product</option>
                  </select>

                  <select name="help_needed" className="rounded-xl border px-4 py-3 text-sm bg-white">
                    <option value="">Help needed</option>
                    <option>Design</option>
                    <option>Development</option>
                    <option>Design + Development</option>
                  </select>
                </div>

                <Textarea
                  name="references"
                  rows={3}
                  placeholder="Reference products or inspiration (optional)"
                />
              </section>

              {/* TIMELINE */}
              <section className="space-y-8">
                <h3 className="text-xl font-semibold text-black">
                  Timeline & budget
                </h3>

                <div className="grid md:grid-cols-2 gap-6">
                  <Input name="timeline" placeholder="Expected timeline" />
                  <Input name="budget" placeholder="Budget range (optional)" />
                </div>

                <Textarea
                  name="notes"
                  rows={3}
                  placeholder="Anything else we should know?"
                />
              </section>

              {/* SUBMIT */}
              <Button
                size="lg"
                disabled={loading}
                className="w-full bg-[#ff9f1c] text-black hover:bg-[#ffb347]"
              >
                {loading ? "Sending..." : "Submit project request"}
              </Button>

              <p className="text-xs text-slate-500 text-center">
                We usually respond within 24–48 hours.
              </p>
            </form>
          </Reveal>
        )}

        {/* SUCCESS */}
        {submitted && (
          <Reveal>
            <div className="mt-24 bg-white rounded-3xl border shadow-sm p-20 text-center">
              <h2 className="text-4xl font-semibold text-black">
                Thanks for reaching out
                <span className="text-[#ff9f1c]">.</span>
              </h2>
              <p className="mt-4 text-slate-600">
                We’ve received your request and will get back to you shortly.
              </p>
              <div className="mt-10">
                <Link to="/">
                  <Button>Back to home</Button>
                </Link>
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </main>
  )
}
