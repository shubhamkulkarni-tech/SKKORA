// ✅ FINAL Hero.jsx
import { useEffect, useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { Button } from "@/components/ui/button"
import ParticleBackground from "@/components/ParticleBackground"

const TITLE = "We build scalable digital products"

export default function Hero() {
  const [typed, setTyped] = useState("")
  const [done, setDone] = useState(false)

  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      setTyped(TITLE.slice(0, i + 1))
      i++
      if (i === TITLE.length) {
        clearInterval(interval)
        setTimeout(() => setDone(true), 400)
      }
    }, 45)

    return () => clearInterval(interval)
  }, [])

  const scrollToWork = () => {
    if (location.pathname !== "/") {
      navigate("/")
      setTimeout(() => {
        document.getElementById("work")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }, 300)
      return
    }

    document.getElementById("work")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  return (
    <section className="relative isolate min-h-screen flex items-center justify-center px-4 sm:px-6 overflow-hidden bg-white">
      
      {/* Gradient depth */}
      <div className="absolute inset-0 -z-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-[520px] w-[520px] rounded-full bg-gradient-to-r from-emerald-200 via-sky-200 to-orange-200 blur-3xl opacity-40" />
      </div>

      {/* Particles */}
      <ParticleBackground />

      <div className="relative z-10 max-w-5xl w-full text-center">
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-tight text-[#0b2545]">
          <span>{typed}</span>
          {!done && (
            <span className="inline-block align-baseline ml-1 w-[2px] h-[1em] bg-[#0b2545] animate-pulse" />
          )}
        </h1>

        <p
          className={`mt-6 sm:mt-8 md:mt-10 text-base sm:text-lg md:text-xl text-[#475569] max-w-xl sm:max-w-2xl mx-auto transition-all duration-700 ${
            done ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          SKKORA is an engineering-first development agency helping startups
          and businesses design, build, and scale modern software.
        </p>

        <div
          className={`mt-10 sm:mt-12 md:mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 transition-all duration-700 delay-150 ${
            done ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Button
            size="lg"
            className="px-8 sm:px-10 w-full sm:w-auto bg-[#ff9f1c] text-black hover:bg-[#ffb347] shadow-md"
            onClick={() => navigate("/start-project")}
          >
            Start a Project
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="px-8 sm:px-10 w-full sm:w-auto border-[#0b2545] text-[#0b2545] hover:bg-[#0b2545] hover:text-white"
            onClick={scrollToWork}
          >
            View Work
          </Button>
        </div>
      </div>
    </section>
  )
}
