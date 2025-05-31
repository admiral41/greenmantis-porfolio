"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle, Smartphone, Tablet, Layers, Zap, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/advanced-animations"
import SectionHeading from "@/components/section-heading"

export default function MobileDevelopmentPage() {
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
              Mobile App <span className="gradient-text">Development</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-white/80"
            >
              Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and
              Android.
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
                <SectionHeading title="Innovative Mobile Solutions for Modern Businesses" align="left" />
                <p className="text-white/70 mb-6">
                  At Green Mantis, we specialize in developing high-performance mobile applications that help businesses
                  connect with their customers, streamline operations, and drive growth. Our mobile development team
                  combines technical expertise with creative design to create intuitive, feature-rich apps that users
                  love.
                </p>
                <p className="text-white/70 mb-8">
                  Whether you need a native iOS or Android app, a cross-platform solution, or a progressive web app, we
                  have the skills and experience to bring your mobile vision to life with the latest technologies and
                  best practices.
                </p>
                <div className="space-y-4">
                  {[
                    "User-centered design that prioritizes usability and engagement",
                    "High-performance apps that work seamlessly across devices",
                    "Secure development practices to protect user data",
                    "Ongoing support and maintenance to keep your app running smoothly",
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
                    alt="Mobile App Development"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-2/3 aspect-video rounded-xl overflow-hidden border border-white/10">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Mobile App Design"
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
              title="Our Mobile Development Services"
              subtitle="Comprehensive mobile solutions to connect with your audience."
            />
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Native iOS Development",
                description:
                  "Custom iOS applications built with Swift and SwiftUI that leverage the full potential of Apple's ecosystem and provide a seamless user experience.",
                icon: Smartphone,
              },
              {
                title: "Native Android Development",
                description:
                  "Feature-rich Android applications developed with Kotlin and Jetpack Compose that deliver exceptional performance and user experience.",
                icon: Smartphone,
              },
              {
                title: "Cross-Platform Development",
                description:
                  "Efficient cross-platform solutions using React Native or Flutter that allow you to reach both iOS and Android users with a single codebase.",
                icon: Layers,
              },
              {
                title: "Progressive Web Apps",
                description:
                  "Web applications that offer a mobile app-like experience, combining the best of web and mobile apps for broader reach and accessibility.",
                icon: Tablet,
              },
              {
                title: "Performance Optimization",
                description:
                  "Optimization services to ensure your mobile app runs smoothly, loads quickly, and provides a responsive user experience.",
                icon: Zap,
              },
              {
                title: "App Security & Compliance",
                description:
                  "Implementation of robust security measures and compliance with industry standards to protect user data and privacy.",
                icon: ShieldCheck,
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
              title="Mobile Technologies We Use"
              subtitle="We leverage modern mobile technologies to build fast, scalable, and maintainable applications."
            />
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-primary">iOS Development</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {["Swift", "SwiftUI", "UIKit", "Core Data", "ARKit", "Core ML"].map((tech) => (
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
                  <h3 className="text-xl font-bold mb-4 text-primary">Android Development</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {["Kotlin", "Jetpack Compose", "Android SDK", "Room", "ARCore", "TensorFlow Lite"].map((tech) => (
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
                  <h3 className="text-xl font-bold mb-4 text-primary">Cross-Platform</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {["React Native", "Flutter", "Expo", "Ionic", "Capacitor", "NativeScript"].map((tech) => (
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
                  <h3 className="text-xl font-bold mb-4 text-primary">Backend & APIs</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {["Firebase", "AWS Amplify", "GraphQL", "REST APIs", "WebSockets", "Push Notifications"].map(
                      (tech) => (
                        <div
                          key={tech}
                          className="bg-secondary/30 border border-white/10 rounded-lg p-3 text-center hover:border-primary/50 transition-all duration-300"
                        >
                          {tech}
                        </div>
                      ),
                    )}
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
              title="Our Mobile App Development Process"
              subtitle="A structured approach to creating effective mobile solutions."
            />
          </FadeIn>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {[
                {
                  step: "01",
                  title: "Discovery & Planning",
                  description:
                    "We begin by understanding your business goals, target audience, and app requirements. Our team develops a comprehensive plan that outlines the app's features, user flows, and technical architecture.",
                },
                {
                  step: "02",
                  title: "UI/UX Design",
                  description:
                    "Our designers create wireframes and visual designs that prioritize user experience and align with your brand. We develop interactive prototypes to visualize the app's functionality before development begins.",
                },
                {
                  step: "03",
                  title: "Development & Testing",
                  description:
                    "Our developers build your mobile app using modern technologies and best practices. Rigorous testing is performed to ensure functionality, performance, and compatibility across devices.",
                },
                {
                  step: "04",
                  title: "Deployment & Optimization",
                  description:
                    "We handle the app submission process to the App Store and Google Play Store. Post-launch, we monitor performance, gather user feedback, and make continuous improvements to enhance the app's success.",
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
                    alt="Mobile App Case Study"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div>
                <span className="text-primary font-medium mb-2 block">Case Study</span>
                <h3 className="text-3xl font-bold mb-4">HealthTech Mobile App: AI-Driven Health Monitoring</h3>
                <p className="text-white/70 mb-6">
                  We developed a comprehensive health monitoring app that uses AI to provide personalized health
                  insights and recommendations based on user data from wearable devices and manual inputs.
                </p>
                <p className="text-white/70 mb-8">
                  The app features real-time health tracking, personalized recommendations, secure data storage, and
                  integration with various health devices. The solution has helped users improve their health metrics
                  and maintain better wellness habits.
                </p>
                <Button asChild>
                  <Link href="/portfolio/healthtech-app">
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
                Ready to Build Your Mobile Application?
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Contact us today to discuss how our mobile development services can help you connect with your audience
                and achieve your business goals.
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
