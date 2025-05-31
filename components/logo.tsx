import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  variant?: "default" | "white"
}

export default function Logo({ className, variant = "default" }: LogoProps) {
  return (
    <Link href="/" className={cn("inline-block", className)}>
      <div className="relative h-10 w-[140px]">
        <Image src="/images/logo.png" alt="Green Mantis" fill className="object-contain" priority />
      </div>
    </Link>
  )
}
