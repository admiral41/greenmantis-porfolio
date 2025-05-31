"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import ScrollAnimation from "@/components/scroll-animation"
import SectionHeading from "@/components/section-heading"

const categories = ["All", "AI Solutions", "Web Development", "Mobile Apps", "UI/UX Design", "Animation"]

const projects = [
  {
    title: "ASIC Nepal",
    category: "AI Solutions",
    description: "AI-powered document processing system for government agency.",
    image: "/placeholder.svg?height=600&width=800",
    link: "/portfolio/asic-nepal",
  },
  {
    title: "Smart City Dashboard",
    category: "Web Development",
    description: "Real-time data visualization for urban infrastructure management.",
    image: "/placeholder.svg?height=600&width=800",
    link: "/portfolio/smart-city-dashboard",
  },
  {
    title: "HealthTech Mobile App",
    category: "Mobile Apps",
    description: "AI-driven health monitoring and recommendation system.",
    image: "/placeholder.svg?height=600&width=800",
    link: "/portfolio/healthtech-app",
  },
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "Fully responsive e-commerce solution with advanced features.",
    image: "/placeholder.svg?height=600&width=800",
    link: "/portfolio/ecommerce-platform",
  },
  {
    title: "Financial Analytics Dashboard",
    category: "UI/UX Design",
    description: "Intuitive interface for complex financial data visualization.",
    image: "/placeholder.svg?height=600&width=800",
    link: "/portfolio/financial-analytics",
  },
  {
    title: "Product Explainer Video",
    category: "Animation",
    description: "3D animated explainer video for a tech product launch.",
    image: "/placeholder.svg?height=600&width=800",
    link: "/portfolio/product-explainer",
  },
]

export default function PortfolioPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-black relative">
        <div className="grid-pattern absolute inset-0 opacity-10"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Our <span className="gradient-text">Portfolio</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-white/80"
            >
              Explore our work and see how we've helped clients achieve their goals with innovative solutions.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Portfolio Filter */}
      <section className="py-10 bg-black relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <Button key={category} variant={index === 0 ? "default" : "outline"} className="rounded-full">
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-10 bg-black relative">
        <div className="grid-pattern absolute inset-0 opacity-10"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ScrollAnimation key={project.title} delay={index * 0.1}>
                <Link href={project.link} className="group block">
                  <div className="relative overflow-hidden rounded-xl border border-white/10 aspect-[4/3] mb-4">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <Button variant="outline" size="sm">
                        View Project
                      </Button>
                    </div>
                  </div>
                  <div className="mb-1">
                    <span className="text-primary text-sm">{project.category}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-white/70">{project.description}</p>
                </Link>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-black to-black/95 relative">
        <div className="grid-pattern absolute inset-0 opacity-10"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <ScrollAnimation>
            <SectionHeading title="Client Testimonials" subtitle="What our clients say about working with us." />
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Green Mantis delivered an exceptional AI solution that transformed our document processing workflow. Their expertise and professionalism exceeded our expectations.",
                author: "Rajesh Sharma",
                position: "CTO, ASIC Nepal",
              },
              {
                quote:
                  "Working with Green Mantis was a game-changer for our smart city initiative. Their innovative approach and technical expertise helped us create a dashboard that provides real-time insights for better decision-making.",
                author: "Sarah Johnson",
                position: "Project Manager, Urban Tech",
              },
              {
                quote:
                  "The mobile app developed by Green Mantis has received overwhelmingly positive feedback from our users. Their attention to detail and focus on user experience resulted in a product that truly stands out.",
                author: "Michael Chen",
                position: "Founder, HealthTech Solutions",
              },
            ].map((testimonial, index) => (
              <ScrollAnimation key={index} delay={index * 0.1}>
                <div className="bg-secondary/30 border border-white/10 rounded-xl p-8 h-full">
                  <div className="text-primary text-4xl mb-4">"</div>
                  <p className="text-white/80 mb-6 italic">{testimonial.quote}</p>
                  <div>
                    <p className="font-bold">{testimonial.author}</p>
                    <p className="text-primary text-sm">{testimonial.position}</p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-black to-secondary/50 relative">
        <div className="grid-pattern absolute inset-0 opacity-10"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollAnimation>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">Ready to Start Your Project?</h2>
              <p className="text-xl text-white/80 mb-8">
                Let's discuss how we can help you achieve your goals with our innovative solutions.
              </p>
              <Button size="lg" asChild>
                <Link href="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </>
  )
}
