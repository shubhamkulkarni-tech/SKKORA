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

  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
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
    <header className="fixed top-0 z-50 w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className={`mt-3 rounded-2xl border backdrop-blur-xl transition-all
          ${scrolled ? "bg-white/90 shadow-sm" : "bg-white/70"}`}
        >
          <div className="flex h-16 items-center justify-between px-4 sm:px-6">

            {/* LOGO */}
            <button onClick={goToHero} className="flex items-center z-50">
              <img src={logo} alt="SKKORA" className="h-12 w-auto" />
            </button>

            {/* DESKTOP NAV */}
            <nav className="hidden md:flex items-center gap-10 text-sm">
              {NAV_ITEMS.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => goToSection(id)}
                  className="
                    text-[#0b2545] transition
                    hover:text-[#0d6efd]
                  "
                >
                  {label}
                </button>
              ))}
            </nav>

            {/* CTA + MOBILE */}
            <div className="flex items-center gap-3">
              <Link to="/start-project" className="hidden md:block">
                <Button
                  size="sm"
                  className="
                    bg-[#ff9f1c] text-black
                    hover:bg-[#ffb347]
                    shadow-sm
                  "
                >
                  Start Project
                </Button>
              </Link>

              <button
                onClick={() => setOpen(!open)}
                className="md:hidden rounded-md border px-3 py-2 text-sm text-[#0b2545]"
              >
                {open ? "Close" : "Menu"}
              </button>
            </div>
          </div>

          {/* MOBILE MENU */}
          {open && (
            <div className="md:hidden border-t bg-white/95 backdrop-blur-xl px-6 py-6">
              <nav className="flex flex-col gap-6 text-sm">
                {NAV_ITEMS.map(({ id, label }) => (
                  <button
                    key={id}
                    onClick={() => goToSection(id)}
                    className="text-left text-[#0b2545] hover:text-[#0d6efd]"
                  >
                    {label}
                  </button>
                ))}

                <Link to="/start-project" onClick={() => setOpen(false)}>
                  <Button
                    className="
                      mt-4 w-full
                      bg-[#ff9f1c] text-black
                      hover:bg-[#ffb347]
                    "
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
  )
}
