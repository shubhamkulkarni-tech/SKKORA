import Reveal from "@/components/Reveal"
import { Link } from "react-router-dom"
import logo from "../assets/LOGO-1.png"

export default function Footer() {

  const goToHero = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="relative overflow-hidden bg-white px-6 pt-32 pb-14">

      {/* BACKGROUND ACCENTS */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-sky-100 via-emerald-100 to-transparent blur-3xl opacity-70" />
      </div>

      <div className="mx-auto max-w-7xl">

        {/* TOP */}
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">

            {/* BRAND */}
            <div className="md:col-span-2">
              <button
                onClick={goToHero}
                className="group flex items-center"
                aria-label="Go to top"
              >
                <img
                  src={logo}
                  alt="SKKORA logo"
                  className="h-20 w-auto transition-transform duration-300 group-hover:scale-105"
                />
              </button>

              <p className="mt-6 max-w-md text-[15px] leading-relaxed text-slate-600">
                An engineering-first development studio building scalable
                digital products with clarity, performance, and long-term
                growth in mind.
              </p>
            </div>

            {/* COMPANY */}
            <div>
              <p className="mb-5 text-sm font-semibold tracking-wide text-[#0b2545]">
                Company
              </p>
              <ul className="space-y-4 text-sm text-slate-600">
                {["Services", "Process", "Work", "Contact"].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="relative inline-block transition-colors hover:text-[#0b2545]
                      after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:w-0
                      after:bg-[#0b2545] after:transition-all after:duration-300
                      hover:after:w-full"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* CONTACT */}
            <div>
              <p className="mb-5 text-sm font-semibold tracking-wide text-[#0b2545]">
                Contact
              </p>
              <ul className="space-y-4 text-sm text-slate-600">
                <li>
                  <a
                    href="mailto:skkora.tech@gmail.com"
                    className="transition-colors hover:text-[#0b2545]"
                  >
                    skkora.tech@gmail.com
                  </a>
                </li>
                <li>India</li>
              </ul>
            </div>
          </div>
        </Reveal>

        {/* DIVIDER */}
        <div className="relative mb-8">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        </div>

        {/* BOTTOM */}
        <Reveal delay={200}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-6">

            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} SKKORA. All rights reserved.
            </p>

            <div className="flex items-center gap-8 text-sm text-slate-500">
              <Link
                to="/privacy"
                className="transition hover:text-[#0b2545]"
              >
                Privacy
              </Link>
              <Link
                to="/terms"
                className="transition hover:text-[#0b2545]"
              >
                Terms
              </Link>
            </div>
          </div>
        </Reveal>

      </div>
    </footer>
  )
}
