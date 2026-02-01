import { useEffect, useRef } from "react"

export default function ParticleBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    // 🔒 MOBILE OFF (PREMIUM PRACTICE)
    if (window.innerWidth < 768) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")

    let w, h
    let animationId

    const dots = []
    const ripples = []

    // Light-mode pastel colors
    const COLORS = [
      "rgba(99,102,241,0.25)",   // indigo
      "rgba(59,130,246,0.22)",   // blue
      "rgba(14,165,233,0.22)",   // sky
      "rgba(167,139,250,0.22)",  // violet
      "rgba(148,163,184,0.18)",  // slate
    ]

    const resize = () => {
      const rect = canvas.parentElement.getBoundingClientRect()
      w = canvas.width = rect.width
      h = canvas.height = rect.height
      init()
    }

    class Dot {
      constructor() {
        this.baseX = Math.random() * w
        this.baseY = Math.random() * h
        this.x = this.baseX
        this.y = this.baseY
        this.size = 1.4
        this.color = COLORS[Math.floor(Math.random() * COLORS.length)]
      }

      update() {
        this.x = this.baseX
        this.y = this.baseY

        // ripple distortion
        ripples.forEach((r) => {
          const dx = this.baseX - r.x
          const dy = this.baseY - r.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < r.radius && dist > r.radius - 36) {
            const force = Math.sin((dist - r.radius) * 0.12)
            this.x += (dx / dist) * force * 8
            this.y += (dy / dist) * force * 8
          }
        })
      }

      draw() {
        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    class Ripple {
      constructor(x, y) {
        this.x = x
        this.y = y
        this.radius = 0
        this.speed = 2.6
        this.life = 1
      }

      update() {
        this.radius += this.speed
        this.life -= 0.02
      }
    }

    const init = () => {
      dots.length = 0
      const density = Math.floor((w * h) / 4200)
      for (let i = 0; i < density; i++) dots.push(new Dot())
    }

    const animate = () => {
      ctx.clearRect(0, 0, w, h)

      dots.forEach((d) => {
        d.update()
        d.draw()
      })

      for (let i = ripples.length - 1; i >= 0; i--) {
        ripples[i].update()
        if (ripples[i].life <= 0) ripples.splice(i, 1)
      }

      animationId = requestAnimationFrame(animate)
    }

    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      ripples.push(
        new Ripple(e.clientX - rect.left, e.clientY - rect.top)
      )
      if (ripples.length > 4) ripples.shift()
    }

    resize()
    animate()

    window.addEventListener("resize", resize)
    window.addEventListener("mousemove", onMouseMove)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", resize)
      window.removeEventListener("mousemove", onMouseMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 -z-10 pointer-events-none"
    />
  )
}
