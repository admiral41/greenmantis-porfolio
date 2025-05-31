import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

export const metadata: Metadata = {
  title: "Green Mantis | AI & Software Development",
  description:
    "Build the future with intelligent design. We specialize in AI solutions, software development, web & mobile apps, UI/UX design, and 2D/3D animation.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://greenmantis.com",
    siteName: "Green Mantis",
    title: "Green Mantis | AI & Software Development",
    description:
      "Build the future with intelligent design. We specialize in AI solutions, software development, web & mobile apps, UI/UX design, and 2D/3D animation.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Green Mantis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Green Mantis | AI & Software Development",
    description:
      "Build the future with intelligent design. We specialize in AI solutions, software development, web & mobile apps, UI/UX design, and 2D/3D animation.",
    images: ["/images/og-image.jpg"],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} font-sans bg-black text-white`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Navigation />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
