"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { CheckCircle, Users, Lightbulb, Target, Award } from "lucide-react"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/advanced-animations"
import SectionHeading from "@/components/section-heading"

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 professional-gradient relative">
        <div className="grid-pattern absolute inset-0 opacity-10"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              About <span className="text-gradient-animated">Green Mantis</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-white/70"
            >
              We are a team of innovators, creators, and problem-solvers dedicated to building the future with
              intelligent design.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-spacing clean-section">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <div className="relative">
                <div className="subtle-shadow rounded-2xl overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Green Mantis Team"
                    width={600}
                    height={450}
                    className="object-cover w-full h-auto"
                  />
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div className="content-spacing">
                <div className="subtle-accent">
                  <h2 className="text-3xl md:text-4xl font-bold">Our Story</h2>
                </div>
                <p className="text-lg text-white/60 mt-8">
                  Founded in 2020, Green Mantis began with a vision to bridge the gap between cutting-edge technology
                  and practical business solutions. Our founders, with backgrounds in AI research and software
                  development, recognized the transformative potential of artificial intelligence and set out to make
                  these technologies accessible to businesses of all sizes.
                </p>
                <p className="text-lg text-white/60 mt-4">
                  What started as a small team of passionate technologists has grown into a diverse group of experts
                  across AI, software development, design, and business strategy. Throughout our journey, we've remained
                  committed to our core values of innovation, quality, and client satisfaction.
                </p>
                <p className="text-lg text-white/60 mt-4">
                  Today, Green Mantis stands at the forefront of technological innovation, helping businesses across
                  various industries leverage the power of AI and custom software solutions to drive growth, enhance
                  efficiency, and create exceptional user experiences.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section-spacing professional-gradient relative">
        <div className="tech-dots absolute inset-0 opacity-20"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <FadeIn>
            <SectionHeading title="Mission & Vision" subtitle="Driving innovation and creating impactful solutions." />
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <FadeIn direction="left">
              <div className="professional-card rounded-xl p-8 h-full">
                <div className="flex items-center mb-6">
                  <div className="icon-container mr-4">
                    <Lightbulb className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold">Our Mission</h3>
                </div>
                <p className="text-white/60">
                  To empower businesses with innovative AI and software solutions that solve complex problems, enhance
                  efficiency, and drive growth. We are committed to delivering high-quality, user-centered technology
                  that makes a meaningful impact on our clients and their customers.
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div className="professional-card rounded-xl p-8 h-full">
                <div className="flex items-center mb-6">
                  <div className="icon-container mr-4">
                    <Target className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold">Our Vision</h3>
                </div>
                <p className="text-white/60">
                  To be a global leader in AI-driven software development, recognized for our innovative solutions,
                  technical excellence, and client-focused approach. We aspire to shape the future of technology by
                  creating intelligent systems that enhance human capabilities and transform businesses.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="section-spacing clean-section">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <FadeIn>
            <SectionHeading
              title="Our Core Values"
              subtitle="The principles that guide our work and define our culture."
            />
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Innovation",
                description:
                  "We constantly push boundaries and explore new technologies to create cutting-edge solutions.",
                icon: Lightbulb,
              },
              {
                title: "Excellence",
                description: "We are committed to delivering the highest quality in everything we do.",
                icon: Award,
              },
              {
                title: "Collaboration",
                description: "We believe in the power of teamwork and partnership with our clients.",
                icon: Users,
              },
              {
                title: "Integrity",
                description: "We operate with honesty, transparency, and ethical standards in all our interactions.",
                icon: CheckCircle,
              },
            ].map((value, index) => (
              <StaggerItem key={value.title}></StaggerItem>
                <div className="professional-card rounded-xl p-6 h-full"></div>
                  <div className="icon-container mb-4"></div>
                    <value.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-white/60">{value.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-spacing professional-gradient relative">
        <div className="tech-dots absolute inset-0 opacity-20"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <FadeIn>
            <SectionHeading title="Our Team" subtitle="Meet the talented individuals behind Green Mantis." />
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Susan Kafle",
                role: "Founder & CEO",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Sarah Chen",
                role: "CTO",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Michael Rodriguez",
                role: "AI Research Lead",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Priya Sharma",
                role: "Head of Design",
                image: "/placeholder.svg?height=400&width=400",
              },
            ].map((member, index) => (
              <StaggerItem key={member.name}></StaggerItem>
                <div className="group"></div>            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  )
}
