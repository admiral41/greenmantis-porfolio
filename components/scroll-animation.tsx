"use client"

import { useRef, type ReactNode, useMemo } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface ScrollAnimationProps {
  children: ReactNode
  direction?: "up" | "down" | "left" | "right"
  delay?: number
  duration?: number
  threshold?: [number, number]
  className?: string
}

export default function ScrollAnimation({
  children,
  direction = "up",
  delay = 0,
  duration = 0.5,
  threshold = [0, 1],
  className,
}: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const up = useTransform(scrollYProgress, threshold, [50, 0])
  const down = useTransform(scrollYProgress, threshold, [-50, 0])
  const left = useTransform(scrollYProgress, threshold, [50, 0])
  const right = useTransform(scrollYProgress, threshold, [-50, 0])

  const y = useMemo(() => {
    return direction === "up" || direction === "down" ? (direction === "up" ? up : down) : 0
  }, [direction, up, down])

  const x = useMemo(() => {
    return direction === "left" || direction === "right" ? (direction === "left" ? left : right) : 0
  }, [direction, left, right])

  const opacity = useTransform(scrollYProgress, threshold, [0, 1])

  return (
    <motion.div ref={ref} style={{ opacity, y, x }} transition={{ duration, delay }} className={className}>
      {children}
    </motion.div>
  )
}
