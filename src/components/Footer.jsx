import Reveal from "@/components/Reveal"

export default function Footer() {
  return (
    <footer className="relative px-6 pt-32 pb-16 border-t bg-background">
      <div className="mx-auto max-w-7xl">

        {/* TOP */}
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">

            {/* BRAND */}
            <div className="md:col-span-2">
              <h3 className="text-xl font-semibold tracking-wide">
                SKKORA
              </h3>
              <p className="mt-4 text-muted-foreground max-w-md">
                We are an engineering-first development studio building
                scalable digital products with a focus on clarity,
                performance, and long-term growth.
              </p>
            </div>

            {/* LINKS */}
            <div>
              <p className="text-sm font-medium mb-4">Company</p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><a href="#services" className="hover:text-foreground">Services</a></li>
                <li><a href="#process" className="hover:text-foreground">Process</a></li>
                <li><a href="#work" className="hover:text-foreground">Work</a></li>
                <li><a href="#contact" className="hover:text-foreground">Contact</a></li>
              </ul>
            </div>

            {/* CONTACT */}
            <div>
              <p className="text-sm font-medium mb-4">Contact</p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>hello@skkora.com</li>
                <li>India</li>
              </ul>
            </div>
          </div>
        </Reveal>

        {/* BOTTOM */}
        <Reveal delay={200}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} SKKORA. All rights reserved.
            </p>

            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground">Privacy</a>
              <a href="#" className="hover:text-foreground">Terms</a>
              <a href="#" className="hover:text-foreground">LinkedIn</a>
            </div>
          </div>
        </Reveal>

      </div>
    </footer>
  )
}
