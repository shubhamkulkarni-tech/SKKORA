import { Routes, Route } from "react-router-dom"
import ScrollToTop from "@/components/ScrollToTop"

import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Services from "@/components/Services"
import Process from "@/components/Process"
import Work from "@/components/Work"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import StartProject from "@/pages/StartProject"

function Home() {
  return (
    <main id="top">
      <Hero />
      <Services />
      <Process />
      <Work />
      <Contact />
      <Footer />
    </main>
  )
}

export default function App() {
  return (
    <div className="relative">
      <ScrollToTop /> {/* 👈 THIS LINE */}

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/start-project" element={<StartProject />} />
      </Routes>
    </div>
  )
}
