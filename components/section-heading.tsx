import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  align?: "left" | "center" | "right"
  className?: string
}

export default function SectionHeading({ title, subtitle, align = "center", className }: SectionHeadingProps) {
  return (
    <div className={cn("mb-16", align === "center" && "text-center", align === "right" && "text-right", className)}>
      <div className={cn("relative inline-block", align === "center" && "mx-auto")}>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{title}</h2>
        <div
          className={cn(
            "absolute -bottom-2 h-[3px] w-16 bg-primary/70 rounded-full",
            align === "center" && "left-1/2 transform -translate-x-1/2",
            align === "right" && "right-0",
          )}
        ></div>
      </div>
      {subtitle && (
        <p className={cn("text-lg md:text-xl text-white/60 mt-6", align === "center" && "max-w-3xl mx-auto")}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
