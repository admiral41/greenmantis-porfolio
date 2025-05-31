"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle, Code, Server, Database, Lock, GitBranch, Layers } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/advanced-animations"
import SectionHeading from "@/components/section-heading"

export default function SoftwareDevelopmentPage() {
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
              Software <span className="gradient-text">Development</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-white/80"
            >
              Custom software solutions tailored to your business needs, built with cutting-edge technologies.
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
                <SectionHeading title="Custom Software Solutions for Modern Businesses" align="left" />
                <p className="text-white/70 mb-6">
                  At Green Mantis, we specialize in developing custom software solutions that address your unique
                  business challenges and help you achieve your goals. Our team of experienced developers combines
                  technical expertise with business acumen to create robust, scalable, and secure applications.
                </p>
                <p className="text-white/70 mb-8">
                  Whether you need enterprise software, SaaS applications, or specialized tools for your industry, we
                  have the skills and experience to deliver high-quality solutions that drive efficiency, productivity,
                  and growth.
                </p>
                <div className="space-y-4">
                  {[
                    "Tailored solutions designed for your specific business needs",
                    "Scalable architecture that grows with your business",
                    "Secure, reliable, and high-performance applications",
                    "Ongoing support and maintenance",
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
                  <Image
                    src="/placeholder.svg?height=600&width=600"
                    alt="Software Development"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-2/3 aspect-video rounded-xl overflow-hidden border border-white/10">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Software Development Process"
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
              title="Our Software Development Services"
              subtitle="Comprehensive development services to meet your business needs."
            />
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Custom Application Development",
                description:
                  "Bespoke software applications designed and built from the ground up to address your specific business requirements.",
                icon: Code,
              },
              {
                title: "Enterprise Software Solutions",
                description:
                  "Robust, scalable enterprise applications that streamline operations, improve efficiency, and drive growth.",
                icon: Server,
              },
              {
                title: "Database Design & Development",
                description:
                  "Optimized database architectures that ensure data integrity, security, and performance for your applications.",
                icon: Database,
              },
              {
                title: "API Development & Integration",
                description:
                  "Seamless integration of third-party services and systems through well-designed, secure, and efficient APIs.",
                icon: GitBranch,
              },
              {
                title: "Legacy System Modernization",
                description:
                  "Transform outdated systems into modern, efficient applications while preserving valuable business logic and data.",
                icon: Layers,
              },
              {
                title: "Secure Software Development",
                description:
                  "Security-first approach to software development, ensuring your applications are protected against threats.",
                icon: Lock,
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

      {/* Technologies Section */}
      <section className="py-20 bg-black relative">
        <div className="circuit-pattern"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <FadeIn>
            <SectionHeading
              title="Technologies We Use"
              subtitle="We leverage modern technologies to build robust and scalable software solutions."
            />
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-primary">Programming Languages</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {["JavaScript", "TypeScript", "Python", "Java", "C#", "Go"].map((tech) => (
                      <div
                        key={tech}
                        className="bg-secondary/30 border border-white/10 rounded-lg p-3 text-center hover:border-primary/50 transition-all duration-300"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 text-primary">Frameworks & Libraries</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {["React", "Node.js", "Express", "Django", "Spring Boot", ".NET Core"].map((tech) => (
                      <div
                        key={tech}
                        className="bg-secondary/30 border border-white/10 rounded-lg p-3 text-center hover:border-primary/50 transition-all duration-300"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-primary">Databases</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {["PostgreSQL", "MongoDB", "MySQL", "Redis", "Elasticsearch", "Firebase"].map((tech) => (
                      <div
                        key={tech}
                        className="bg-secondary/30 border border-white/10 rounded-lg p-3 text-center hover:border-primary/50 transition-all duration-300"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 text-primary">DevOps & Cloud</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "CI/CD"].map((tech) => (
                      <div
                        key={tech}
                        className="bg-secondary/30 border border-white/10 rounded-lg p-3 text-center hover:border-primary/50 transition-all duration-300"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 bg-gradient-to-b from-black to-black/95 relative">
        <div className="hexagon-grid"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <FadeIn>
            <SectionHeading
              title="Our Development Process"
              subtitle="A structured approach to delivering high-quality software solutions."
            />
          </FadeIn>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {[
                {
                  step: "01",
                  title: "Discovery & Planning",
                  description:
                    "We begin by understanding your business objectives, requirements, and constraints. Our team works with you to define the scope, timeline, and budget for your project, creating a detailed roadmap for development.",
                },
                {
                  step: "02",
                  title: "Design & Architecture",
                  description:
                    "Our architects design a robust, scalable system architecture that meets your requirements. We create detailed technical specifications, database schemas, and API designs to guide the development process.",
                },
                {
                  step: "03",
                  title: "Development & Testing",
                  description:
                    "Using agile methodologies, our developers build your solution in iterative cycles, with regular reviews and feedback. Comprehensive testing is performed at each stage to ensure quality and reliability.",
                },
                {
                  step: "04",
                  title: "Deployment & Support",
                  description:
                    "We deploy your application to your preferred environment and provide thorough documentation and training. Our team offers ongoing support and maintenance to ensure your software continues to perform optimally.",
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
                    alt="Software Case Study"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div>
                <span className="text-primary font-medium mb-2 block">Case Study</span>
                <h3 className="text-3xl font-bold mb-4">Smart City Dashboard: Urban Infrastructure Management</h3>
                <p className="text-white/70 mb-6">
                  We developed a comprehensive dashboard for urban infrastructure management that integrates data from
                  various IoT sensors and city systems to provide real-time insights and analytics for city
                  administrators.
                </p>
                <p className="text-white/70 mb-8">
                  The solution features a scalable microservices architecture, real-time data processing, and an
                  intuitive user interface that allows administrators to monitor and manage various aspects of urban
                  infrastructure, from traffic flow to energy consumption.
                </p>
                <Button asChild>
                  <Link href="/portfolio/smart-city-dashboard">
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
                Ready to Build Your Custom Software Solution?
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Contact us today to discuss how our software development services can help you achieve your business
                goals.
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
