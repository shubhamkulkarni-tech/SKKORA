import { useEffect, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import logo from "../assets/LOGO-1.png"

const NAV_ITEMS = [
  { id: "services", label: "Services" },
  { id: "process", label: "Process" },
  { id: "work", label: "Work" },
  { id: "contact", label: "Contact" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(null)
  const [hidden, setHidden] = useState(false)

  const location = useLocation()
  const navigate = useNavigate()

  /* ---------------------------
     SCROLL: hide / show navbar
  ---------------------------- */
  useEffect(() => {
    let lastY = window.scrollY

    const onScroll = () => {
      const currentY = window.scrollY
      setScrolled(currentY > 24)

      if (!open) {
        if (currentY > lastY && currentY > 100) {
          setHidden(true)
        } else {
          setHidden(false)
        }
      }

      lastY = currentY
    }

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [open])

  /* ---------------------------
     BODY SCROLL LOCK
  ---------------------------- */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => (document.body.style.overflow = "")
  }, [open])

  /* ---------------------------
     ACTIVE SECTION (SCROLL SPY)
  ---------------------------- */
  useEffect(() => {
    const sections = NAV_ITEMS.map(i => document.getElementById(i.id))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { threshold: 0.6 }
    )

    sections.forEach(section => section && observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const goToSection = (id) => {
    setOpen(false)

    if (location.pathname !== "/") {
      navigate("/")
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
      }, 300)
      return
    }

    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  const goToHero = () => {
    setOpen(false)

    if (location.pathname !== "/") {
      navigate("/")
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })
      }, 300)
      return
    }

    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      {/* BLUR OVERLAY */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-black/10 backdrop-blur-sm"
        />
      )}

      <header
        className={`
          fixed top-0 z-50 w-full transition-transform duration-300
          ${hidden ? "-translate-y-full" : "translate-y-0"}
        `}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div
            className={`
              mt-3 rounded-2xl border backdrop-blur-xl transition-all duration-300
              ${scrolled
                ? "bg-white/90 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.15)]"
                : "bg-white/70"}
            `}
          >
            {/* TOP BAR */}
            <div
              className={`
                flex h-16 items-center px-4 sm:px-6
                ${open ? "justify-center" : "justify-between"}
              `}
            >
              {/* LOGO */}
              <button
                onClick={goToHero}
                className={`transition-all ${open ? "mx-auto" : ""}`}
              >
                <img src={logo} alt="SKKORA" className="h-12 w-auto" />
              </button>

              {/* CTA + MENU ICON */}
              <div className={`flex items-center gap-4 ${open ? "absolute right-6" : ""}`}>
                <Link to="/start-project" className="hidden md:block">
                  <Button
                    size="sm"
                    className="bg-[#ff9f1c] text-black hover:bg-[#ffb347]"
                  >
                    Start Project
                  </Button>
                </Link>

                {/* HAMBURGER ICON */}
                <button
                  onClick={() => setOpen(!open)}
                  className="md:hidden relative h-6 w-6 active:scale-90 transition-transform"
                  aria-label="Toggle menu"
                >
                  <span
                    className={`absolute left-0 top-1/2 h-[2px] w-full bg-black transition-all
                      ${open ? "rotate-45" : "-translate-y-2"}`}
                  />
                  <span
                    className={`absolute left-0 top-1/2 h-[2px] w-full bg-black transition-all
                      ${open ? "opacity-0" : "opacity-100"}`}
                  />
                  <span
                    className={`absolute left-0 top-1/2 h-[2px] w-full bg-black transition-all
                      ${open ? "-rotate-45" : "translate-y-2"}`}
                  />
                </button>
              </div>
            </div>

            {/* MOBILE MENU */}
            {open && (
              <div className="md:hidden border-t bg-white/95 px-6 py-12">
                <nav className="flex flex-col items-center gap-8 text-lg">
                  {NAV_ITEMS.map(({ id, label }, i) => (
                    <button
                      key={id}
                      onClick={() => goToSection(id)}
                      style={{ animationDelay: `${i * 80}ms` }}
                      className={`
                        opacity-0 translate-y-3
                        animate-[menuItem_0.4s_ease-out_forwards]
                        transition active:scale-95
                        ${active === id ? "text-black font-medium" : "text-slate-600"}
                      `}
                    >
                      {label}
                    </button>
                  ))}

                  <Link to="/start-project" onClick={() => setOpen(false)}>
                    <Button
                      className="mt-6 bg-[#ff9f1c] text-black hover:bg-[#ffb347] active:scale-95"
                    >
                      Start Project
                    </Button>
                  </Link>
                </nav>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* KEYFRAMES */}
      <style>
        {`
          @keyframes menuItem {
            from {
              opacity: 0;
              transform: translateY(12px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </>
  )
}
