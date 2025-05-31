"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle, Palette, Users, Layout, Eye, LineChart, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/advanced-animations"
import SectionHeading from "@/components/section-heading"

export default function UiUxDesignPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-black relative">
        <div className="circuit-pattern"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              UI/UX <span className="gradient-text">Design</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-white/80"
            >
              User-centered design that enhances user experience, drives engagement, and achieves business goals.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-black relative">
        <div className="hexagon-grid"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <div>
                <SectionHeading title="Designing Exceptional User Experiences" align="left" />
                <p className="text-white/70 mb-6">
                  At Green Mantis, we believe that great design is about more than aesthetics—it's about creating
                  intuitive, engaging experiences that solve real user problems and drive business results. Our UI/UX
                  design team combines research, creativity, and technical expertise to create digital products that
                  users love.
                </p>
                <p className="text-white/70 mb-8">
                  From user research and information architecture to visual design and usability testing, we follow a
                  comprehensive design process that ensures your digital products not only look great but also provide
                  exceptional user experiences that convert visitors into customers.
                </p>
                <div className="space-y-4">
                  {[
                    "User-centered design approach that puts your users first",
                    "Research-driven insights that inform design decisions",
                    "Intuitive interfaces that reduce friction and enhance usability",
                    "Consistent design systems that scale across products",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-white/80">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden border border-white/10 glow-border">
                  <Image src="/placeholder.svg?height=600&width=600" alt="UI/UX Design" fill className="object-cover" />
                </div>
                <div className="absolute -bottom-6 -left-6 w-2/3 aspect-video rounded-xl overflow-hidden border border-white/10">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Design Process"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-black to-black/95 relative clip-path-slant">
        <div className="tech-dots"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <FadeIn>
            <SectionHeading
              title="Our UI/UX Design Services"
              subtitle="Comprehensive design solutions to create exceptional user experiences."
            />
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "User Research",
                description:
                  "In-depth research to understand your users' needs, behaviors, and pain points, providing valuable insights that inform the design process.",
                icon: Users,
              },
              {
                title: "UX Strategy",
                description:
                  "Strategic planning that aligns user needs with business goals, creating a roadmap for designing products that deliver value to both users and stakeholders.",
                icon: Lightbulb,
              },
              {
                title: "Information Architecture",
                description:
                  "Organizing and structuring content in a way that helps users find information and complete tasks efficiently and intuitively.",
                icon: Layout,
              },
              {
                title: "UI Design",
                description:
                  "Creating visually appealing interfaces with consistent styling, clear hierarchy, and thoughtful interactions that enhance the user experience.",
                icon: Palette,
              },
              {
                title: "Usability Testing",
                description:
                  "Evaluating designs with real users to identify usability issues, validate assumptions, and gather feedback for continuous improvement.",
                icon: Eye,
              },
              {
                title: "Design Systems",
                description:
                  "Developing comprehensive design systems with reusable components and guidelines that ensure consistency and scalability across products.",
                icon: LineChart,
              },
            ].map((service, index) => (
              <StaggerItem key={service.title}>
                <Card className="service-card bg-secondary/30 border border-white/10 hover:border-primary/50 transition-all duration-300 h-full">
                  <CardContent className="p-8">
                    <service.icon className="h-12 w-12 text-primary mb-6" />
                    <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                    <p className="text-white/70">{service.description}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-20 bg-black relative">
        <div className="circuit-pattern"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <FadeIn>
            <SectionHeading
              title="Our Design Process"
              subtitle="A structured approach to creating user-centered designs."
            />
          </FadeIn>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {[
                {
                  step: "01",
                  title: "Discover",
                  description:
                    "We begin by understanding your business goals, user needs, and project requirements. Through stakeholder interviews, user research, and competitive analysis, we gather insights that inform our design strategy.",
                },
                {
                  step: "02",
                  title: "Define",
                  description:
                    "Based on our research findings, we define the problem space, create user personas, map user journeys, and establish the information architecture. This phase sets the foundation for the design solution.",
                },
                {
                  step: "03",
                  title: "Design",
                  description:
                    "We create wireframes, interactive prototypes, and visual designs that bring your product to life. Our iterative design process ensures that we refine the solution based on feedback and usability testing.",
                },
                {
                  step: "04",
                  title: "Deliver",
                  description:
                    "We prepare design assets for development, create design documentation, and work closely with developers to ensure the design is implemented correctly. We also establish design systems for future scalability.",
                },
              ].map((process, index) => (
                <FadeIn key={process.title} direction={index % 2 === 0 ? "left" : "right"} delay={index * 0.1}>
                  <div className="flex items-start">
                    <div className="mr-6">
                      <div className="text-4xl font-bold text-primary/30">{process.step}</div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">{process.title}</h3>
                      <p className="text-white/70">{process.description}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 bg-gradient-to-b from-black to-black/95 relative">
        <div className="hexagon-grid"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <FadeIn>
            <SectionHeading
              title="Design Tools We Use"
              subtitle="We leverage industry-standard tools to create exceptional designs."
            />
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              "Figma",
              "Adobe XD",
              "Sketch",
              "Protopie",
              "Framer",
              "InVision",
              "Adobe Photoshop",
              "Adobe Illustrator",
              "Miro",
              "Maze",
              "Zeplin",
              "Abstract",
            ].map((tool, index) => (
              <FadeIn key={tool} delay={index * 0.05}>
                <div className="bg-secondary/30 border border-white/10 rounded-lg p-4 flex items-center justify-center h-24 hover:border-primary/50 transition-all duration-300">
                  <span className="text-lg font-medium">{tool}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 bg-black relative">
        <div className="circuit-pattern"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <div className="relative">
                <div className="aspect-video rounded-2xl overflow-hidden border border-white/10 glow-border">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="UI/UX Design Case Study"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div>
                <span className="text-primary font-medium mb-2 block">Case Study</span>
                <h3 className="text-3xl font-bold mb-4">Financial Analytics Dashboard: Data Visualization Redesign</h3>
                <p className="text-white/70 mb-6">
                  We redesigned a complex financial analytics dashboard to improve usability, reduce cognitive load, and
                  help users make better data-driven decisions.
                </p>
                <p className="text-white/70 mb-8">
                  Through user research, information architecture restructuring, and iterative design, we created an
                  intuitive interface that reduced the time to insight by 40% and increased user satisfaction scores by
                  65%.
                </p>
                <Button asChild>
                  <Link href="/portfolio/financial-analytics">
                    View Full Case Study
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 animated-gradient relative clip-path-slant-reverse">
        <div className="tech-dots"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
                Ready to Enhance Your User Experience?
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Contact us today to discuss how our UI/UX design services can help you create exceptional user
                experiences that drive engagement and achieve your business goals.
              </p>
              <Button size="lg" asChild>
                <Link href="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  )
}
