"use client"

import { useEffect, useRef, useState } from "react"

export default function AnimatedCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const followerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)
  const [cursorText, setCursorText] = useState("")
  const trailsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const cursor = cursorRef.current
    const follower = followerRef.current
    const text = textRef.current

    if (!cursor || !follower || !text) return

    let mouseX = 0
    let mouseY = 0
    let followerX = 0
    let followerY = 0

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY

      // Update cursor position immediately
      cursor.style.left = `${mouseX - 10}px`
      cursor.style.top = `${mouseY - 10}px`

      // Update text position
      text.style.left = `${mouseX}px`
      text.style.top = `${mouseY - 30}px`

      // Create trail effect
      createTrail(mouseX, mouseY)
    }

    const createTrail = (x: number, y: number) => {
      const trail = document.createElement("div")
      trail.className = "cursor-trail"
      trail.style.left = `${x - 3}px`
      trail.style.top = `${y - 3}px`
      document.body.appendChild(trail)

      // Remove trail after animation
      setTimeout(() => {
        if (trail.parentNode) {
          trail.parentNode.removeChild(trail)
        }
      }, 500)
    }

    const animateFollower = () => {
      const dx = mouseX - followerX
      const dy = mouseY - followerY

      followerX += dx * 0.1
      followerY += dy * 0.1

      follower.style.left = `${followerX - 20}px`
      follower.style.top = `${followerY - 20}px`

      requestAnimationFrame(animateFollower)
    }

    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement
      setIsHovering(true)
      cursor.classList.add("hover")
      follower.classList.add("hover")

      // Set cursor text based on element
      if (target.tagName === "A") {
        setCursorText("Click")
      } else if (target.tagName === "BUTTON") {
        setCursorText("Click")
      } else if (target.classList.contains("portfolio-item")) {
        setCursorText("View")
      } else {
        setCursorText("Hover")
      }
    }

    const handleMouseLeave = () => {
      setIsHovering(false)
      cursor.classList.remove("hover")
      follower.classList.remove("hover")
      setCursorText("")
    }

    const handleMouseDown = () => {
      cursor.classList.add("click")
    }

    const handleMouseUp = () => {
      cursor.classList.remove("click")
    }

    // Add event listeners
    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mousedown", handleMouseDown)
    document.addEventListener("mouseup", handleMouseUp)

    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"], .portfolio-item')
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter)
      el.addEventListener("mouseleave", handleMouseLeave)
    })

    // Start follower animation
    animateFollower()

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mousedown", handleMouseDown)
      document.removeEventListener("mouseup", handleMouseUp)

      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter)
        el.removeEventListener("mouseleave", handleMouseLeave)
      })
    }
  }, [])

  useEffect(() => {
    const text = textRef.current
    if (!text) return

    if (cursorText) {
      text.textContent = cursorText
      text.classList.add("show")
    } else {
      text.classList.remove("show")
    }
  }, [cursorText])

  return (
    <>
      <div ref={cursorRef} className="cursor" />
      <div ref={followerRef} className="cursor-follower" />
      <div ref={textRef} className="cursor-text" />
    </>
  )
}
