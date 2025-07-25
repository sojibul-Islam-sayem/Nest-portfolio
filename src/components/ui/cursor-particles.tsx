"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  life: number
  maxLife: number
  size: number
}

export default function CursorParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const animationRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createParticle = (x: number, y: number) => {
      const particle: Particle = {
        x,
        y,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        life: 0,
        maxLife: 30 + Math.random() * 20,
        size: 1 + Math.random() * 2,
      }
      particlesRef.current.push(particle)
    }

    const updateParticles = () => {
      const particles = particlesRef.current

      for (let i = particles.length - 1; i >= 0; i--) {
        const particle = particles[i]

        particle.x += particle.vx
        particle.y += particle.vy
        particle.life++

        if (particle.life >= particle.maxLife) {
          particles.splice(i, 1)
        }
      }
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const particles = particlesRef.current

      particles.forEach((particle) => {
        const alpha = 1 - particle.life / particle.maxLife
        const hue = 160 + Math.sin(particle.life * 0.1) * 20

        ctx.save()
        ctx.globalAlpha = alpha
        ctx.fillStyle = `hsl(${hue}, 70%, 60%)`
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      })
    }

    const animate = () => {
      updateParticles()
      drawParticles()
      animationRef.current = requestAnimationFrame(animate)
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX
      mouseRef.current.y = e.clientY

      // Create particles occasionally
      if (Math.random() < 0.3) {
        createParticle(e.clientX, e.clientY)
      }
    }

    const handleClick = (e: MouseEvent) => {
      // Create burst of particles on click
      for (let i = 0; i < 8; i++) {
        createParticle(e.clientX, e.clientY)
      }
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)
    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("click", handleClick)

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("click", handleClick)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-[9996]" style={{ mixBlendMode: "screen" }} />
  )
}