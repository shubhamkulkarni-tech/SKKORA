import { useEffect, useRef, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import logo from "@/assets/logo.svg"

const NAV_ITEMS = [
  { id: "services", label: "Services" },
  { id: "process", label: "Process" },
  { id: "work", label: "Work" },
  { id: "contact", label: "Contact" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState("")
  const menuRef = useRef(null)

  const location = useLocation()
  const navigate = useNavigate()

  /* SCROLL STATE + ACTIVE SECTION (HOME ONLY) */
  useEffect(() => {
    if (location.pathname !== "/") return

    const onScroll = () => {
      setScrolled(window.scrollY > 20)

      let current = ""
      NAV_ITEMS.forEach(({ id }) => {
        const el = document.getElementById(id)
        if (!el) return
        const rect = el.getBoundingClientRect()
        if (rect.top <= 120 && rect.bottom >= 120) {
          current = id
        }
      })
      setActive(current)
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [location.pathname])

  /* CLOSE MOBILE MENU ON OUTSIDE CLICK + ESC */
  useEffect(() => {
    const onClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    const onEsc = (e) => e.key === "Escape" && setOpen(false)

    document.addEventListener("mousedown", onClickOutside)
    document.addEventListener("keydown", onEsc)
    return () => {
      document.removeEventListener("mousedown", onClickOutside)
      document.removeEventListener("keydown", onEsc)
    }
  }, [])

  /* GO TO SECTION (HOME ONLY SECTIONS) */
  const goToSection = (id) => {
    setOpen(false)

    if (location.pathname !== "/") {
      navigate("/")
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }, 100)
      return
    }

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  /* LOGO → ALWAYS HERO (TOP) */
  const goToHero = () => {
    setOpen(false)

    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }

    navigate("/")
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 100)
  }

  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className={`mt-3 rounded-2xl border backdrop-blur transition-all duration-300
          ${scrolled ? "bg-background/90 shadow-sm" : "bg-background/70"}`}
        >
          <div
            className={`flex items-center justify-between transition-all duration-300
            ${scrolled ? "h-14 px-4 sm:px-6" : "h-16 px-4 sm:px-6"}`}
          >
            {/* LOGO */}
            <button
              onClick={goToHero}
              className="flex items-center gap-3"
              aria-label="Go to hero section"
            >
              <img src={logo} alt="SKKORA" className="h-7 w-auto" />
              <span className="text-lg font-semibold tracking-wide">
                SKKORA
              </span>
            </button>

            {/* DESKTOP NAV */}
            <nav className="hidden md:flex items-center gap-10 text-sm text-muted-foreground">
              {NAV_ITEMS.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => goToSection(id)}
                  className="group relative hover:text-foreground transition-colors"
                  aria-current={active === id ? "page" : undefined}
                >
                  {label}
                  <span
                    className={`absolute left-1/2 -bottom-2 h-1 w-1 -translate-x-1/2 rounded-full bg-foreground transition-opacity
                    ${active === id ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
                  />
                </button>
              ))}
            </nav>

            {/* CTA + MOBILE */}
            <div className="flex items-center gap-3">
              <Link to="/start-project" className="hidden md:block">
                <Button size="sm" variant="outline">
                  Start Project
                </Button>
              </Link>

              <button
                onClick={() => setOpen((v) => !v)}
                className="md:hidden rounded-md border px-3 py-2 text-sm"
                aria-expanded={open}
                aria-controls="mobile-menu"
              >
                {open ? "Close" : "Menu"}
              </button>
            </div>
          </div>

          {/* MOBILE MENU */}
          <div
            id="mobile-menu"
            ref={menuRef}
            className={`md:hidden overflow-hidden transition-all duration-300
            ${open ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"}`}
          >
            <nav className="border-t px-6 py-6 flex flex-col gap-6 text-sm text-muted-foreground">
              {NAV_ITEMS.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => goToSection(id)}
                  className="text-left hover:text-foreground transition-colors"
                >
                  {label}
                </button>
              ))}

              <Link to="/start-project" onClick={() => setOpen(false)}>
                <Button className="mt-4 w-full">
                  Start Project
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
