"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Brain, Code, Smartphone, Palette, Film } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import ScrollAnimation from "@/components/scroll-animation"
import SectionHeading from "@/components/section-heading"

const services = [
  {
    title: "AI Solutions",
    description:
      "Harness the power of artificial intelligence with our custom AI solutions. We develop voice & NLP chatbots, sentiment analysis tools, and machine learning applications tailored to your business needs.",
    icon: Brain,
    link: "/services/ai-solutions",
  },
  {
    title: "Software Development",
    description:
      "From concept to deployment, we create robust, scalable software solutions that drive business growth and operational efficiency. Our expert developers build custom applications that solve complex problems.",
    icon: Code,
    link: "/services/software-development",
  },
  {
    title: "Web Development",
    description:
      "We build responsive, fast, and SEO-friendly websites and web applications that deliver exceptional user experiences. Our web solutions are designed to engage visitors and convert them into customers.",
    icon: Code,
    link: "/services/web-development",
  },
  {
    title: "Mobile App Development",
    description:
      "Create powerful mobile experiences with our native and cross-platform mobile applications for iOS and Android. We focus on intuitive interfaces, performance, and seamless functionality.",
    icon: Smartphone,
    link: "/services/mobile-development",
  },
  {
    title: "UI/UX Design",
    description:
      "Our user-centered design approach enhances user experience and engagement. We create intuitive, visually appealing interfaces that guide users through your digital products effortlessly.",
    icon: Palette,
    link: "/services/ui-ux-design",
  },
  {
    title: "2D/3D Animation",
    description:
      "Bring your ideas to life with our engaging 2D and 3D animations. From explainer videos to product demonstrations, we create compelling visual content that captivates your audience.",
    icon: Film,
    link: "/services/animation",
  },
]

export default function ServicesPage() {
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
              Our <span className="gradient-text">Services</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-white/80"
            >
              Comprehensive solutions to help you build innovative digital products and experiences.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-black relative">
        <div className="grid-pattern absolute inset-0 opacity-10"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ScrollAnimation key={service.title} delay={index * 0.1}>
                <Card className="bg-secondary/30 border border-white/10 hover:border-primary/50 transition-all duration-300 h-full">
                  <CardContent className="p-8">
                    <service.icon className="h-12 w-12 text-primary mb-6" />
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="text-white/70 mb-6">{service.description}</p>
                    <Link
                      href={service.link}
                      className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
                    >
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-b from-black to-black/95 relative">
        <div className="grid-pattern absolute inset-0 opacity-10"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <ScrollAnimation>
            <SectionHeading title="Our Process" subtitle="How we work with you to bring your ideas to life." />
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "We start by understanding your business, goals, and challenges to define the project scope.",
              },
              {
                step: "02",
                title: "Planning",
                description: "We create a detailed roadmap with timelines, milestones, and deliverables.",
              },
              {
                step: "03",
                title: "Development",
                description:
                  "Our team builds your solution using agile methodologies with regular updates and feedback.",
              },
              {
                step: "04",
                title: "Delivery & Support",
                description: "We deploy your solution and provide ongoing support and maintenance.",
              },
            ].map((process, index) => (
              <ScrollAnimation key={process.title} delay={index * 0.1}>
                <div className="relative">
                  <div className="text-5xl font-bold text-primary/20 mb-4">{process.step}</div>
                  <h3 className="text-xl font-bold mb-3">{process.title}</h3>
                  <p className="text-white/70">{process.description}</p>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-8 right-0 w-full h-[2px] bg-gradient-to-r from-primary/50 to-transparent transform translate-x-1/2"></div>
                  )}
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-black relative">
        <div className="grid-pattern absolute inset-0 opacity-10"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <ScrollAnimation>
            <SectionHeading
              title="Technologies We Use"
              subtitle="We leverage cutting-edge technologies to build innovative solutions."
            />
          </ScrollAnimation>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              "TensorFlow",
              "PyTorch",
              "React",
              "Next.js",
              "Node.js",
              "Python",
              "Flutter",
              "React Native",
              "AWS",
              "Google Cloud",
              "Docker",
              "Kubernetes",
            ].map((tech, index) => (
              <ScrollAnimation key={tech} delay={index * 0.05}>
                <div className="bg-secondary/30 border border-white/10 rounded-lg p-4 flex items-center justify-center h-24 hover:border-primary/50 transition-all duration-300">
                  <span className="text-lg font-medium">{tech}</span>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
