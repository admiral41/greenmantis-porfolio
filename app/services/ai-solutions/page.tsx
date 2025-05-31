"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle, Brain, MessageSquare, BarChart, Database, Bot, Cpu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import ScrollAnimation from "@/components/scroll-animation"
import SectionHeading from "@/components/section-heading"

export default function AISolutionsPage() {
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
              AI <span className="gradient-text">Solutions</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-white/80"
            >
              Harness the power of artificial intelligence to transform your business with our cutting-edge AI
              solutions.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-black relative">
        <div className="grid-pattern absolute inset-0 opacity-10"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation direction="left">
              <div>
                <SectionHeading title="Intelligent Solutions for Complex Problems" align="left" />
                <p className="text-white/70 mb-6">
                  At Green Mantis, we specialize in developing AI-powered solutions that help businesses automate
                  processes, gain valuable insights, and enhance customer experiences. Our team of AI experts combines
                  deep technical knowledge with business acumen to create solutions that deliver real value.
                </p>
                <p className="text-white/70 mb-8">
                  Whether you're looking to implement chatbots for customer service, develop sentiment analysis tools
                  for market research, or create custom machine learning applications for specific business challenges,
                  we have the expertise to bring your vision to life.
                </p>
                <div className="space-y-4">
                  {[
                    "Custom AI solutions tailored to your business needs",
                    "Experienced team of AI researchers and developers",
                    "End-to-end development from concept to deployment",
                    "Ongoing support and optimization",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-white/80">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="right">
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden border border-white/10 glow-border">
                  <Image src="/placeholder.svg?height=600&width=600" alt="AI Solutions" fill className="object-cover" />
                </div>
                <div className="absolute -bottom-6 -left-6 w-2/3 aspect-video rounded-xl overflow-hidden border border-white/10">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="AI Technology"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-black to-black/95 relative">
        <div className="grid-pattern absolute inset-0 opacity-10"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <ScrollAnimation>
            <SectionHeading
              title="Our AI Services"
              subtitle="Comprehensive AI solutions to address your business challenges."
            />
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Conversational AI",
                description:
                  "Intelligent chatbots and virtual assistants that provide natural, human-like interactions for customer service, lead generation, and internal support.",
                icon: MessageSquare,
              },
              {
                title: "Natural Language Processing",
                description:
                  "Text analysis, sentiment analysis, and language understanding solutions that extract valuable insights from unstructured text data.",
                icon: Brain,
              },
              {
                title: "Predictive Analytics",
                description:
                  "Machine learning models that analyze historical data to predict future outcomes, helping you make data-driven decisions.",
                icon: BarChart,
              },
              {
                title: "Computer Vision",
                description:
                  "Image and video analysis solutions for object detection, facial recognition, and visual inspection in various industries.",
                icon: Bot,
              },
              {
                title: "Data Mining & Analysis",
                description:
                  "Extract valuable patterns and insights from large datasets to inform business strategy and operations.",
                icon: Database,
              },
              {
                title: "Custom AI Applications",
                description:
                  "Tailored AI solutions designed to address specific business challenges and opportunities unique to your organization.",
                icon: Cpu,
              },
            ].map((service, index) => (
              <ScrollAnimation key={service.title} delay={index * 0.1}>
                <Card className="bg-secondary/30 border border-white/10 hover:border-primary/50 transition-all duration-300 h-full">
                  <CardContent className="p-8">
                    <service.icon className="h-12 w-12 text-primary mb-6" />
                    <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                    <p className="text-white/70">{service.description}</p>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 bg-black relative">
        <div className="grid-pattern absolute inset-0 opacity-10"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation direction="left">
              <div className="relative">
                <div className="aspect-video rounded-2xl overflow-hidden border border-white/10 glow-border">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="AI Case Study"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="right">
              <div>
                <span className="text-primary font-medium mb-2 block">Case Study</span>
                <h3 className="text-3xl font-bold mb-4">ASIC Nepal: AI-Powered Document Processing</h3>
                <p className="text-white/70 mb-6">
                  We developed an AI-powered document processing system for a government agency that automated the
                  extraction and verification of information from various document types, reducing processing time by
                  80% and improving accuracy to 99.5%.
                </p>
                <p className="text-white/70 mb-8">
                  The solution incorporated OCR, NLP, and machine learning to handle complex document structures and
                  variations, with a user-friendly interface for operators to review and approve the extracted data. The
                  system also included a comprehensive audit trail and reporting capabilities to track document
                  processing metrics.
                </p>
                <Button asChild>
                  <Link href="/portfolio/asic-nepal">
                    View Full Case Study
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-b from-black to-black/95 relative">
        <div className="grid-pattern absolute inset-0 opacity-10"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <ScrollAnimation>
            <SectionHeading
              title="Our AI Development Process"
              subtitle="A structured approach to creating effective AI solutions."
            />
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Problem Definition",
                description:
                  "We work with you to clearly define the business problem and determine how AI can provide a solution.",
              },
              {
                step: "02",
                title: "Data Collection & Preparation",
                description: "We gather, clean, and prepare the data needed to train and validate the AI models.",
              },
              {
                step: "03",
                title: "Model Development",
                description:
                  "Our team develops and trains AI models using appropriate algorithms and techniques for your specific use case.",
              },
              {
                step: "04",
                title: "Deployment & Optimization",
                description:
                  "We deploy the solution, monitor performance, and continuously optimize for better results.",
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-black to-secondary/50 relative">
        <div className="grid-pattern absolute inset-0 opacity-10"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollAnimation>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Contact us today to discuss how our AI solutions can help you solve complex problems and drive
                innovation.
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
