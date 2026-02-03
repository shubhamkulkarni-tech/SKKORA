import { useRef, useState, useEffect } from "react"
import emailjs from "@emailjs/browser"
import Reveal from "@/components/Reveal"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const STORAGE_KEY = "skkora_contact_form"
const MAX_MESSAGE_LENGTH = 500
const MIN_MESSAGE_LENGTH = 20

export default function Contact() {
  const formRef = useRef(null)
  const messageRef = useRef(null)

  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [charCount, setCharCount] = useState(0)
  const [errors, setErrors] = useState({})

  /* ---------------------------
     RESTORE SAVED FORM
  ---------------------------- */
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY))
    if (saved && formRef.current) {
      Object.entries(saved).forEach(([name, value]) => {
        const field = formRef.current.elements[name]
        if (field) field.value = value
      })
      if (saved.message) setCharCount(saved.message.length)
    }
  }, [])

  /* ---------------------------
     AUTO SAVE + VALIDATION
  ---------------------------- */
  const handleChange = () => {
    if (!formRef.current) return

    const data = {}
    const newErrors = {}

    const name = formRef.current.elements.name?.value || ""
    const email = formRef.current.elements.email?.value || ""
    const message = messageRef.current?.value || ""

    if (name && name.length < 2) {
      newErrors.name = "Please enter your full name"
    }

    if (email && !/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (message && message.length < MIN_MESSAGE_LENGTH) {
      newErrors.message = `Please provide at least ${MIN_MESSAGE_LENGTH} characters`
    }

    Array.from(formRef.current.elements).forEach((el) => {
      if (el.name) data[el.name] = el.value
    })

    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
    setErrors(newErrors)
    setCharCount(message.length)
  }

  /* ---------------------------
     SUBMIT
  ---------------------------- */
  const handleSubmit = (e) => {
    e.preventDefault()

    if (Object.keys(errors).length > 0) return

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

        /* ANALYTICS EVENT (SAFE) */
        if (window.gtag) {
          window.gtag("event", "contact_form_submit", {
            event_category: "engagement",
            event_label: "Contact Form",
          })
        }

        if (window.dataLayer) {
          window.dataLayer.push({
            event: "contact_form_submit",
            form: "contact",
          })
        }
      })
      .catch((error) => {
        console.error("EmailJS Error:", error)
        setLoading(false)
        alert("Something went wrong. Please try again.")
      })
  }

  return (
    <section
      id="contact"
      className="relative py-44 px-6 overflow-hidden bg-muted/40"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 
          h-[520px] w-[520px] rounded-full 
          bg-gradient-to-r from-emerald-200 via-sky-200 to-orange-200 
          blur-3xl opacity-40" />
      </div>

      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-24">

        {/* LEFT */}
        <div className="self-center">
          <Reveal>
            <p className="text-sm uppercase tracking-widest text-[#475569]">
              Get in touch
            </p>

            <h2 className="mt-5 text-4xl md:text-6xl font-semibold leading-tight text-black">
              Let’s build something<br className="hidden md:block" />
              meaningful together<span className="text-[#ff9f1c]">.</span>
            </h2>

            <p className="mt-8 text-lg text-[#475569] max-w-md">
              Tell us about your idea, product, or challenge.
            </p>
          </Reveal>
        </div>

        {/* RIGHT */}
        <Reveal delay={200}>
          {!submitted ? (
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              onChange={handleChange}
              className="relative rounded-2xl border border-border/60
                bg-white p-10 space-y-6
                shadow-[0_20px_50px_-20px_rgba(0,0,0,0.12)]"
            >
              <div className="absolute inset-x-0 top-0 h-[3px] rounded-t-2xl bg-[#ff9f1c]" />

              {/* NAME */}
              <div>
                <label className="text-sm text-[#475569]">Your name</label>
                <Input name="name" required className="mt-2" />
                {errors.name && (
                  <p className="mt-1 text-xs text-slate-500">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* EMAIL */}
              <div>
                <label className="text-sm text-[#475569]">Email address</label>
                <Input name="email" type="email" required className="mt-2" />
                {errors.email && (
                  <p className="mt-1 text-xs text-slate-500">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* MESSAGE */}
              <div>
                <label className="text-sm text-[#475569]">Project details</label>
                <Textarea
                  ref={messageRef}
                  name="message"
                  required
                  rows={4}
                  maxLength={MAX_MESSAGE_LENGTH}
                  className="mt-2 resize-none"
                />
                <div className="mt-1 flex justify-between text-xs text-[#64748b]">
                  {errors.message ? (
                    <span>{errors.message}</span>
                  ) : (
                    <span />
                  )}
                  <span>{charCount}/{MAX_MESSAGE_LENGTH}</span>
                </div>
              </div>

              {/* HIDDEN */}
              <input type="hidden" name="country" value="Not specified" />
              <input type="hidden" name="phone" value="Not provided" />
              <input type="hidden" name="timeline" value="Contact form" />

              <Button
                size="lg"
                disabled={loading || Object.keys(errors).length > 0}
                className="w-full mt-4 bg-[#ff9f1c] text-black hover:bg-[#ffb347]"
              >
                {loading ? "Sending..." : "Start the conversation"}
              </Button>

              <p className="text-xs text-[#64748b] text-center pt-2">
                By submitting this form, you agree to be contacted by SKKORA.
              </p>
            </form>
          ) : (
            <div className="text-center bg-white p-14 rounded-2xl border shadow-sm animate-[fadeInScale_0.4s_ease-out]">
              <h3 className="text-3xl font-semibold text-black">
                Message received<span className="text-[#ff9f1c]">.</span>
              </h3>
              <p className="mt-4 text-[#475569]">
                Thanks for reaching out. We’ll get back to you shortly.
              </p>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  )
}
