import { Routes, Route } from "react-router-dom"
import ScrollToTop from "@/components/ScrollToTop"
import ParticleBackground from "@/components/ParticleBackground"

import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Services from "@/components/Services"
import Process from "@/components/Process"
import Work from "@/components/Work"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

import StartProject from "@/pages/StartProject"
import PrivacyPolicy from "@/components/Privacy"
import Terms from "@/components/Terms"

function Home() {
  return (
    <main id="top">
      <Hero />
      <Services />
      <Process />
      <Work />
      <Contact />
    </main>
  )
}

export default function App() {
  return (
    <div className="relative isolate bg-white">
      {/* Reset scroll on route change */}
      <ScrollToTop />

      {/* Navbar (global) */}
      <Navbar />

      {/* 🌈 GLOBAL SOFT GRADIENT */}
      <div className="fixed inset-0 -z-40 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-gradient-to-r from-emerald-200 via-sky-200 to-orange-200 blur-3xl opacity-40" />
      </div>

      {/* ✨ GLOBAL PARTICLES */}
      <ParticleBackground />

      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/start-project" element={<StartProject />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>

      {/* Footer (GLOBAL – ALL PAGES) */}
      <Footer />
    </div>
  )
}
