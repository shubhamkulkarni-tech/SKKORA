import { useEffect, useRef } from "react"

export default function ParticleBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    // Disable on small screens
    if (window.innerWidth < 768) return

    // Disable on Brave (privacy block)
    if (navigator.brave && navigator.brave.isBrave) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")

    let w = window.innerWidth
    let h = window.innerHeight
    let animationId
    let time = 0

    const dots = []

    const COLORS = [
      "rgba(11,37,69,0.16)",
      "rgba(13,110,253,0.18)",
      "rgba(34,197,94,0.18)",
      "rgba(255,159,28,0.14)",
    ]

    const resize = () => {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
      init()
    }

    class Dot {
      constructor() {
        this.baseX = Math.random() * w
        this.baseY = Math.random() * h
        this.size = Math.random() * 1.2 + 0.6
        this.color = COLORS[Math.floor(Math.random() * COLORS.length)]
        this.offset = Math.random() * 1000
      }

      draw() {
        const x = this.baseX + Math.sin(time * 0.0004 + this.offset) * 6
        const y = this.baseY + Math.cos(time * 0.0004 + this.offset) * 6

        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.arc(x, y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const init = () => {
      dots.length = 0
      const density = Math.floor((w * h) / 6500)
      for (let i = 0; i < density; i++) dots.push(new Dot())
    }

    const animate = () => {
      ctx.clearRect(0, 0, w, h)
      time++
      dots.forEach((d) => d.draw())
      animationId = requestAnimationFrame(animate)
    }

    resize()
    animate()
    window.addEventListener("resize", resize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
    />
  )
}
