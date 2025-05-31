"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"
import { motion, useAnimation, useInView } from "framer-motion"

interface FadeInProps {
  children: React.ReactNode
  direction?: "up" | "down" | "left" | "right" | "none"
  duration?: number
  delay?: number
  className?: string
  once?: boolean
  distance?: number
}

export function FadeIn({
  children,
  direction = "up",
  duration = 0.5,
  delay = 0,
  className = "",
  once = true,
  distance = 50,
}: FadeInProps) {
  const controls = useAnimation()
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once, amount: 0.3 })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    } else if (!once) {
      controls.start("hidden")
    }
  }, [controls, inView, once])

  const getDirectionVariants = () => {
    switch (direction) {
      case "up":
        return {
          hidden: { y: distance, opacity: 0 },
          visible: { y: 0, opacity: 1 },
        }
      case "down":
        return {
          hidden: { y: -distance, opacity: 0 },
          visible: { y: 0, opacity: 1 },
        }
      case "left":
        return {
          hidden: { x: distance, opacity: 0 },
          visible: { x: 0, opacity: 1 },
        }
      case "right":
        return {
          hidden: { x: -distance, opacity: 0 },
          visible: { x: 0, opacity: 1 },
        }
      case "none":
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }
    }
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={getDirectionVariants()}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface StaggerContainerProps {
  children: React.ReactNode
  staggerChildren?: number
  delayChildren?: number
  className?: string
}

export function StaggerContainer({
  children,
  staggerChildren = 0.1,
  delayChildren = 0,
  className = "",
}: StaggerContainerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren,
            delayChildren,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      variants={{
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.5,
            ease: [0.25, 0.1, 0.25, 1],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface TextRevealProps {
  text: string
  className?: string
  once?: boolean
  delay?: number
}

export function TextReveal({ text, className = "", once = true, delay = 0 }: TextRevealProps) {
  const controls = useAnimation()
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once, amount: 0.3 })
  const words = text.split(" ")

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    } else if (!once) {
      controls.start("hidden")
    }
  }, [controls, inView, once])

  return (
    <motion.div ref={ref} className={`flex flex-wrap ${className}`} aria-label={text}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="mr-[0.25em] inline-block overflow-hidden"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: {},
            visible: {},
          }}
          transition={{
            delayChildren: delay + i * 0.1,
            staggerChildren: 0.05,
          }}
        >
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: "100%", opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.5,
                  ease: [0.25, 0.1, 0.25, 1],
                },
              },
            }}
          >
            {word}
          </motion.span>
        </motion.span>
      ))}
    </motion.div>
  )
}

interface ParallaxProps {
  children: React.ReactNode
  speed?: number
  className?: string
}

export function Parallax({ children, speed = 0.5, className = "" }: ParallaxProps) {
  const [scrollY, setScrollY] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const y = scrollY * speed

  return (
    <motion.div
      ref={ref}
      style={{ y: -y }}
      className={`will-change-transform ${className}`}
      transition={{ type: "spring", stiffness: 100 }}
    >
      {children}
    </motion.div>
  )
}

interface GlowEffectProps {
  children: React.ReactNode
  className?: string
  glowColor?: string
}

export function GlowEffect({ children, className = "", glowColor = "rgba(74, 222, 128, 0.6)" }: GlowEffectProps) {
  return (
    <div className={`relative ${className}`}>
      <motion.div
        className="absolute inset-0 rounded-xl blur-xl"
        animate={{
          opacity: [0.5, 0.8, 0.5],
          scale: [0.98, 1.01, 0.98],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{ backgroundColor: glowColor }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  )
}

interface FloatingElementProps {
  children: React.ReactNode
  className?: string
  amplitude?: number
  duration?: number
}

export function FloatingElement({ children, className = "", amplitude = 10, duration = 4 }: FloatingElementProps) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [`-${amplitude}px`, `${amplitude}px`, `-${amplitude}px`],
      }}
      transition={{
        duration,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  )
}

interface TypewriterProps {
  text: string
  className?: string
  speed?: number
  delay?: number
}

export function Typewriter({ text, className = "", speed = 50, delay = 0 }: TypewriterProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })

  useEffect(() => {
    if (inView && !isTyping) {
      setIsTyping(true)
      const timeout = setTimeout(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prev) => {
            if (prev < text.length) {
              setDisplayText(text.substring(0, prev + 1))
              return prev + 1
            } else {
              clearInterval(interval)
              return prev
            }
          })
        }, speed)

        return () => clearInterval(interval)
      }, delay)

      return () => clearTimeout(timeout)
    }
  }, [inView, text, speed, delay, isTyping])

  return (
    <div ref={ref} className={className}>
      {displayText}
      {isTyping && currentIndex < text.length && (
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="inline-block"
        >
          |
        </motion.span>
      )}
    </div>
  )
}
