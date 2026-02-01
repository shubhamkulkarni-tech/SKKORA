import { Outlet, Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="border-b">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link to="/" className="text-xl font-semibold tracking-wide">
            SKKORA
          </Link>

          <nav className="hidden md:flex gap-6 text-sm">
            <Link to="/services">Services</Link>
            <Link to="/work">Work</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </nav>

          <Button size="sm">Get a Quote</Button>
        </div>
      </header>

      {/* Page Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t">
        <div className="container mx-auto px-4 py-6 text-sm text-muted-foreground">
          © {new Date().getFullYear()} SKKORA. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
