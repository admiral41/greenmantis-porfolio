"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Logo from "@/components/logo"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  {
    name: "Services",
    path: "/services",
    submenu: [
      { name: "AI Solutions", path: "/services/ai-solutions" },
      { name: "Software Development", path: "/services/software-development" },
      { name: "Web Development", path: "/services/web-development" },
      { name: "Mobile App Development", path: "/services/mobile-development" },
      { name: "UI/UX Design", path: "/services/ui-ux-design" },
      { name: "2D/3D Animation", path: "/services/animation" },
    ],
  },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "bg-black/90 backdrop-blur-md py-3 border-b border-primary/10" : "bg-transparent py-5",
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              if (item.submenu) {
                return (
                  <DropdownMenu key={item.path}>
                    <DropdownMenuTrigger asChild>
                      <button
                        className={cn(
                          "text-sm font-medium transition-colors hover:text-primary flex items-center",
                          pathname.startsWith(item.path) ? "text-primary" : "text-white/80",
                        )}
                      >
                        {item.name}
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="center" className="bg-black/95 backdrop-blur-md border-white/10">
                      {item.submenu.map((subitem) => (
                        <DropdownMenuItem key={subitem.path} asChild>
                          <Link
                            href={subitem.path}
                            className={cn(
                              "w-full text-sm",
                              pathname === subitem.path ? "text-primary" : "text-white/80",
                            )}
                          >
                            {subitem.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                )
              }

              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary relative",
                    pathname === item.path ? "text-primary" : "text-white/80",
                  )}
                >
                  {item.name}
                  {pathname === item.path && (
                    <motion.span layoutId="underline" className="absolute left-0 top-full h-[2px] w-full bg-primary" />
                  )}
                </Link>
              )
            })}
            <Button className="ml-4 bg-primary hover:bg-primary/90 text-black font-medium">Get Started</Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-b border-white/10"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col space-y-4">
              {navItems.map((item) => {
                if (item.submenu) {
                  return (
                    <div key={item.path} className="space-y-2">
                      <div className="py-2 text-lg font-medium text-white/80">{item.name}</div>
                      <div className="pl-4 space-y-2 border-l border-white/10">
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.path}
                            href={subitem.path}
                            onClick={() => setIsOpen(false)}
                            className={cn(
                              "block py-2 text-base transition-colors hover:text-primary",
                              pathname === subitem.path ? "text-primary" : "text-white/70",
                            )}
                          >
                            {subitem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )
                }

                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "py-2 text-lg font-medium transition-colors hover:text-primary",
                      pathname === item.path ? "text-primary" : "text-white/80",
                    )}
                  >
                    {item.name}
                  </Link>
                )
              })}
              <Button className="mt-4 w-full bg-primary hover:bg-primary/90 text-black font-medium">Get Started</Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
