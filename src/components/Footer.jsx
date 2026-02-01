import Reveal from "@/components/Reveal"
import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="relative bg-white border-t border-border/60 px-6 pt-28 pb-14">
      <div className="mx-auto max-w-7xl">

        {/* TOP */}
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-14 mb-20">

            {/* BRAND */}
            <div className="md:col-span-2">
              <h3 className="text-xl font-semibold tracking-wide text-[#0b2545]">
                SKKORA
              </h3>
              <p className="mt-4 max-w-md text-[#475569] leading-relaxed">
                An engineering-first development studio building scalable
                digital products with clarity, performance, and long-term
                growth in mind.
              </p>
            </div>

            {/* COMPANY */}
            <div>
              <p className="mb-4 text-sm font-medium text-[#0b2545]">
                Company
              </p>
              <ul className="space-y-3 text-sm text-[#475569]">
                <li><a href="#services" className="hover:text-[#0b2545]">Services</a></li>
                <li><a href="#process" className="hover:text-[#0b2545]">Process</a></li>
                <li><a href="#work" className="hover:text-[#0b2545]">Work</a></li>
                <li><a href="#contact" className="hover:text-[#0b2545]">Contact</a></li>
              </ul>
            </div>

            {/* CONTACT */}
            <div>
              <p className="mb-4 text-sm font-medium text-[#0b2545]">
                Contact
              </p>
              <ul className="space-y-3 text-sm text-[#475569]">
                <li>
                  <a
                    href="mailto:hello@skkora.com"
                    className="hover:text-[#0b2545]"
                  >
                    hello@skkora.com
                  </a>
                </li>
                <li>India</li>
              </ul>
            </div>
          </div>
        </Reveal>

        {/* BOTTOM */}
        <Reveal delay={200}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-border/60">
            <p className="text-sm text-[#64748b]">
              © {new Date().getFullYear()} SKKORA. All rights reserved.
            </p>

            <div className="flex items-center gap-6 text-sm text-[#64748b]">
              <Link to="/privacy" className="hover:text-[#0b2545]">
                Privacy
              </Link>
              <Link to="/terms" className="hover:text-[#0b2545]">
                Terms
              </Link>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#0b2545]"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </Reveal>

      </div>
    </footer>
  )
}
