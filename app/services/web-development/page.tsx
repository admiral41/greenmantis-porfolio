"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle, Code, Globe, Smartphone, Gauge, Search, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/advanced-animations"
import SectionHeading from "@/components/section-heading"

export default function WebDevelopmentPage() {
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
              Web <span className="gradient-text">Development</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-white/80"
            >
              Responsive, fast, and SEO-friendly websites and web applications that deliver exceptional user
              experiences.
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
                <SectionHeading title="Modern Web Solutions for the Digital Age" align="left" />
                <p className="text-white/70 mb-6">
                  At Green Mantis, we create cutting-edge websites and web applications that help businesses establish a
                  strong online presence and engage with their audience effectively. Our web development team combines
                  technical expertise with creative design to deliver solutions that not only look great but also
                  perform exceptionally well.
                </p>
                <p className="text-white/70 mb-8">
                  Whether you need a corporate website, an e-commerce platform, a web application, or a custom content
                  management system, we have the skills and experience to bring your vision to life with the latest web
                  technologies and best practices.
                </p>
                <div className="space-y-4">
                  {[
                    "Responsive designs that work seamlessly across all devices",
                    "Performance-optimized websites for fast loading times",
                    "SEO-friendly architecture for better search engine visibility",
                    "Accessible web solutions that comply with WCAG guidelines",
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
                    alt="Web Development"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-2/3 aspect-video rounded-xl overflow-hidden border border-white/10">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Responsive Web Design"
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
              title="Our Web Development Services"
              subtitle="Comprehensive web solutions to establish your online presence."
            />
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Corporate Websites",
                description:
                  "Professional, brand-aligned websites that effectively communicate your company's value proposition and engage your audience.",
                icon: Globe,
              },
              {
                title: "E-Commerce Solutions",
                description:
                  "Feature-rich online stores with secure payment processing, inventory management, and seamless user experience.",
                icon: ShoppingCart,
              },
              {
                title: "Web Applications",
                description:
                  "Custom web applications that automate processes, improve efficiency, and provide valuable tools for your business and customers.",
                icon: Code,
              },
              {
                title: "Responsive Web Design",
                description:
                  "Websites that adapt perfectly to all screen sizes and devices, ensuring a consistent user experience for all visitors.",
                icon: Smartphone,
              },
              {
                title: "Performance Optimization",
                description:
                  "Speed optimization services to ensure your website loads quickly, improving user experience and search engine rankings.",
                icon: Gauge,
              },
              {
                title: "SEO Implementation",
                description:
                  "Technical SEO implementation to improve your website's visibility in search engines and drive organic traffic.",
                icon: Search,
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
              title="Web Technologies We Use"
              subtitle="We leverage modern web technologies to build fast, scalable, and maintainable web solutions."
            />
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-primary">Frontend Technologies</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {["React", "Next.js", "Vue.js", "Angular", "TypeScript", "Tailwind CSS"].map((tech) => (
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
                  <h3 className="text-xl font-bold mb-4 text-primary">Backend Technologies</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {["Node.js", "Express", "Django", "Laravel", "Ruby on Rails", "ASP.NET Core"].map((tech) => (
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
                  <h3 className="text-xl font-bold mb-4 text-primary">CMS Platforms</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {["WordPress", "Shopify", "Strapi", "Contentful", "Sanity", "Drupal"].map((tech) => (
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
                  <h3 className="text-xl font-bold mb-4 text-primary">E-Commerce Platforms</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {["Shopify", "WooCommerce", "Magento", "BigCommerce", "Saleor", "Medusa"].map((tech) => (
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
              title="Our Web Development Process"
              subtitle="A structured approach to creating effective web solutions."
            />
          </FadeIn>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {[
                {
                  step: "01",
                  title: "Discovery & Strategy",
                  description:
                    "We begin by understanding your business goals, target audience, and requirements. Our team develops a comprehensive strategy that outlines the project scope, timeline, and technical approach.",
                },
                {
                  step: "02",
                  title: "Design & Prototyping",
                  description:
                    "Our designers create wireframes and visual designs that align with your brand and meet user needs. We develop interactive prototypes to visualize the user experience before development begins.",
                },
                {
                  step: "03",
                  title: "Development & Testing",
                  description:
                    "Our developers build your website or web application using modern technologies and best practices. Rigorous testing is performed to ensure functionality, performance, and compatibility across devices.",
                },
                {
                  step: "04",
                  title: "Launch & Optimization",
                  description:
                    "We deploy your website to your hosting environment and perform final checks. Post-launch, we monitor performance and make optimizations to ensure your web solution continues to meet your business needs.",
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
                    alt="Web Development Case Study"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div>
                <span className="text-primary font-medium mb-2 block">Case Study</span>
                <h3 className="text-3xl font-bold mb-4">E-Commerce Platform: Revolutionizing Online Shopping</h3>
                <p className="text-white/70 mb-6">
                  We developed a custom e-commerce platform for a retail client that integrated with their existing
                  inventory management system and provided a seamless shopping experience for their customers.
                </p>
                <p className="text-white/70 mb-8">
                  The solution featured a responsive design, advanced product filtering, personalized recommendations,
                  and a streamlined checkout process. The platform resulted in a 45% increase in online sales and a 30%
                  reduction in cart abandonment rates.
                </p>
                <Button asChild>
                  <Link href="/portfolio/ecommerce-platform">
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">Ready to Enhance Your Web Presence?</h2>
              <p className="text-xl text-white/80 mb-8">
                Contact us today to discuss how our web development services can help you achieve your online goals.
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
