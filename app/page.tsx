"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { ArrowRight, Brain, Code, Smartphone, Palette, Film, ChevronRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FadeIn, StaggerContainer, StaggerItem, FloatingElement } from "@/components/advanced-animations"
import SectionHeading from "@/components/section-heading"
import NetworkParticles from "@/components/network-particles"

const services = [
  {
    title: "AI Solutions",
    description: "Voice & NLP chatbots, sentiment analysis, and machine learning applications.",
    icon: Brain,
    link: "/services/ai-solutions",
  },
  {
    title: "Software Development",
    description: "Custom software solutions tailored to your business needs.",
    icon: Code,
    link: "/services/software-development",
  },
  {
    title: "Web Development",
    description: "Responsive, fast, and SEO-friendly websites and web applications.",
    icon: Code,
    link: "/services/web-development",
  },
  {
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android.",
    icon: Smartphone,
    link: "/services/mobile-development",
  },
  {
    title: "UI/UX Design",
    description: "User-centered design that enhances user experience and engagement.",
    icon: Palette,
    link: "/services/ui-ux-design",
  },
  {
    title: "2D/3D Animation",
    description: "Engaging animations that bring your ideas to life.",
    icon: Film,
    link: "/services/animation",
  },
]

const caseStudies = [
  {
    title: "ASIC Nepal",
    description: "AI-powered document processing system for government agency.",
    image: "/placeholder.svg?height=600&width=800",
    link: "/portfolio/asic-nepal",
  },
  {
    title: "Smart City Dashboard",
    description: "Real-time data visualization for urban infrastructure management.",
    image: "/placeholder.svg?height=600&width=800",
    link: "/portfolio/smart-city-dashboard",
  },
  {
    title: "HealthTech Mobile App",
    description: "AI-driven health monitoring and recommendation system.",
    image: "/placeholder.svg?height=600&width=800",
    link: "/portfolio/healthtech-app",
  },
]

export default function Home() {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  })

  // Smoother animations with springs
  const smoothYProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })
  const y = useTransform(smoothYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(smoothYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(smoothYProgress, [0, 0.5], [1, 0.95])

  // Parallax effect for blobs
  const blobY1 = useTransform(smoothYProgress, [0, 1], ["0%", "30%"])
  const blobY2 = useTransform(smoothYProgress, [0, 1], ["0%", "20%"])

  return (
    <>
      {/* Hero Section */}
      <section ref={targetRef} className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <NetworkParticles />
        </div>
        <div className="noise-overlay"></div>
        {/* Remove the hero-gradient div to avoid adding a background */}

        {/* Floating blobs with parallax effect */}
        <motion.div
          className="blob absolute top-1/4 right-[20%] w-[300px] h-[300px]"
          style={{ y: blobY1 }}
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="blob absolute bottom-1/3 left-[15%] w-[250px] h-[250px]"
          style={{ y: blobY2 }}
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.25, 0.35, 0.25],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />

<motion.div 
  style={{ y, scale }}
  className="container mx-auto px-4 md:px-6 relative z-10"
>
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              Build the Future with <br />
              <motion.span
                className="text-gradient-animated relative inline-block"
                animate={{ opacity: [0, 1, 0] }}
            
                transition={{
                  duration: 15,
                  ease: "linear",
                  repeat: Number.POSITIVE_INFINITY,
                }}
              >
                Intelligent Design
              </motion.span>
            </motion.h1>

            <FadeIn direction="up" delay={0.3} className="mb-10">
              <p className="text-lg sm:text-xl md:text-2xl text-white/70 max-w-3xl mx-auto">
                We create cutting-edge AI solutions and innovative software that transforms businesses and enhances user
                experiences.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.5}>
              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <motion.div
                  whileHover={{
                    scale: 1.03,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    size="lg"
                    className="professional-button text-lg group h-12 px-6 overflow-hidden relative"
                  >
                    <motion.span
                      className="absolute inset-0 bg-primary/20"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                    <span className="relative z-10">
                      Explore Our Services
                      <ArrowRight className="ml-2 h-5 w-5 inline transition-transform group-hover:translate-x-1" />
                    </span>
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{
                    scale: 1.03,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg h-12 px-6 border-white/10 hover:bg-white/5"
                  >
                    View Our Work
                  </Button>
                </motion.div>
              </div>
            </FadeIn>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-0 right-0 flex justify-center"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, ease: "easeInOut" }}
            className="bg-primary/5 rounded-full p-2"
          >
            <ChevronRight size={30} className="rotate-90 text-primary/80" />
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="section-spacing professional-gradient relative">
        <div className="tech-dots absolute inset-0 opacity-20"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <FadeIn>
            <SectionHeading
              title="Our Services"
              subtitle="We offer a comprehensive range of services to help you build innovative digital solutions."
            />
          </FadeIn>

          <StaggerContainer className="precise-grid">
            {services.map((service, index) => (
              <StaggerItem key={service.title}>
                <motion.div className="h-full" whileHover={{ y: -10, transition: { duration: 0.3 } }}>
                  <Card className="professional-card h-full">
                    <CardContent className="p-6 content-spacing">
                      <motion.div
                        className="icon-container bg-[rgba(154,222,0,0.2)]"
                        whileHover={{
                          scale: 1.1,
                          transition: { duration: 0.3 },
                        }}
                      >
                        <service.icon className="h-6 w-6" />
                      </motion.div>
                      <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                      <p className="text-white/60 mb-5">{service.description}</p>
                      <Link
                        href={service.link}
                        className="inline-flex items-center text-primary hover:text-primary/80 font-medium group"
                      >
                        Learn More{" "}
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* About Section */}
      <section className="section-spacing clean-section">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <div className="relative">
                <motion.div
                  className="subtle-shadow rounded-2xl overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/placeholder.svg?height=600&width=600"
                    alt="Green Mantis Team"
                    width={600}
                    height={600}
                    className="object-cover w-full h-auto"
                  />
                </motion.div>
                <FloatingElement className="absolute -bottom-8 -right-8 w-2/3 aspect-video rounded-xl overflow-hidden subtle-shadow">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Green Mantis Office"
                    fill
                    className="object-cover"
                  />
                </FloatingElement>
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div className="content-spacing">
                <div className="subtle-accent">
                  <h2 className="text-3xl md:text-4xl font-bold">Who We Are</h2>
                </div>
                <p className="text-lg text-white/60 mt-8">
                  Green Mantis is a forward-thinking AI and software development company dedicated to creating
                  innovative solutions that drive business growth and enhance user experiences.
                </p>
                <p className="text-lg text-white/60 mt-4">
                  With our expertise in cutting-edge technologies, we help businesses transform their digital presence
                  and stay ahead in the rapidly evolving tech landscape.
                </p>
                <motion.div
                  className="highlight-box mt-8"
                  whileInView={{
                    x: [20, 0],
                    opacity: [0, 1],
                  }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <p className="text-white/80 italic">
                    "Our team of skilled professionals combines technical expertise with creative thinking to deliver
                    solutions that not only meet but exceed client expectations."
                  </p>
                </motion.div>
                <div className="mt-8">
                  <Button asChild className="professional-button group h-12 px-6">
                    <Link href="/about">
                      Learn More About Us
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="section-spacing professional-gradient relative">
        <div className="tech-dots absolute inset-0 opacity-20"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <FadeIn>
            <SectionHeading
              title="Case Studies"
              subtitle="Explore our recent projects and see how we've helped our clients achieve their goals."
            />
          </FadeIn>

          <StaggerContainer className="precise-grid">
            {caseStudies.map((study, index) => (
              <StaggerItem key={study.title}>
                <Link href={study.link} className="group block">
                  <motion.div
                    className="professional-card rounded-xl overflow-hidden"
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={study.image || "/placeholder.svg"}
                        alt={study.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex items-center gap-2 bg-black/50 border-white/10"
                        >
                          View Case Study
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {study.title}
                      </h3>
                      <p className="text-white/60">{study.description}</p>
                    </div>
                  </motion.div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <div className="mt-12 text-center">
            <FadeIn direction="up">
              <Button asChild variant="outline"                  
className="h-12 px-6 professional-button border-white/10 hover:bg-white/5 group ">
                <Link href="/portfolio">
                  View All Case Studies
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 clean-section">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="clean-card text-center"
              whileInView={{
                y: [50, 0],
                opacity: [0, 1],
              }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <FadeIn>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Let's Build Something <span className="text-gradient-animated">Extraordinary</span> Together
                </h2>
                <p className="text-xl text-white/60 mb-8 max-w-2xl mx-auto">
                  Ready to transform your ideas into reality? Contact us today to discuss your project.
                </p>
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    size="lg"
                    asChild
                    className="professional-button group h-12 px-8"
                  >
                    <Link href="/contact">
                      Get in Touch
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </motion.div>
              </FadeIn>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
