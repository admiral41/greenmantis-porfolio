"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle, Film, Tv2, CuboidIcon as Cube, Presentation, Megaphone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/advanced-animations"
import SectionHeading from "@/components/section-heading"

export default function AnimationPage() {
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
              2D/3D <span className="gradient-text">Animation</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-white/80"
            >
              Engaging animations that bring your ideas to life and captivate your audience.
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
                <SectionHeading title="Bringing Ideas to Life Through Animation" align="left" />
                <p className="text-white/70 mb-6">
                  At Green Mantis, we specialize in creating captivating 2D and 3D animations that help businesses
                  communicate complex ideas, showcase products, and engage audiences. Our animation team combines
                  artistic talent with technical expertise to create visually stunning and emotionally resonant content.
                </p>
                <p className="text-white/70 mb-8">
                  From explainer videos and product demonstrations to character animations and visual effects, we create
                  custom animations that align with your brand, communicate your message effectively, and leave a lasting
                  impression on your audience.
                </p>
                <div className="space-y-4">
                  {[
                    "Custom animations tailored to your brand and message",
                    "Storytelling that connects with your audience emotionally",
                    "High-quality visuals that showcase your products and services",
                    "Animations that simplify complex concepts and ideas",
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
                  <Image src="/placeholder.svg?height=600&width=600" alt="Animation" fill className="object-cover" />
                </div>
                <div className="absolute -bottom-6 -left-6 w-2/3 aspect-video rounded-xl overflow-hidden border border-white/10">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Animation Process"
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
              title="Our Animation Services"
              subtitle="Comprehensive animation solutions to engage your audience."
            />
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Explainer Videos",
                description:
                  "Engaging animated videos that explain your products, services, or concepts in a clear, concise, and visually appealing way.",
                icon: Presentation,
              },
              {
                title: "Product Demonstrations",
                description:
                  "Detailed animations that showcase your products' features, benefits, and use cases, helping customers understand their value.",
                icon: Cube,
              },
              {
                title: "Character Animation",
                description:
                  "Expressive character animations that bring personality to your brand and create emotional connections with your audience.",
                icon: Film,
              },
              {
                title: "Motion Graphics",
                description:
                  "Dynamic motion graphics that transform static content into engaging visual stories for websites, social media, and presentations.",
                icon: Tv2,
              },
              {
                title: "3D Visualization",
                description:
                  "Realistic 3D visualizations of products, environments, and concepts that provide immersive experiences for your audience.",
                icon: Cube,
              },
              {
                title: "Animated Commercials",
                description:
                  "Compelling animated commercials that capture attention, communicate your message, and drive action from your target audience.",
                icon: Megaphone,
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

      {/* Animation Process */}
      <section className="py-20 bg-black relative">
        <div className="circuit-pattern"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <FadeIn>
            <SectionHeading
              title="Our Animation Process"
              subtitle="A structured approach to creating engaging animations."
            />
          </FadeIn>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {[
                {
                  step: "01",
                  title: "Concept & Storyboarding",
                  description:
                    "We begin by understanding your goals, message, and target audience. Our team develops creative concepts and detailed storyboards that outline the visual narrative and key scenes of your animation.",
                },
                {
                  step: "02",
                  title: "Style Development & Design",
                  description:
                    "We create the visual style, character designs, environments, and assets that will bring your animation to life. This phase establishes the look and feel that aligns with your brand and resonates with your audience.",
                },
                {
                  step: "03",
                  title: "Animation & Sound Design",
                  description:
                    "Our animators bring the storyboard to life, creating fluid movements and engaging visuals. We add professional voiceovers, sound effects, and music that enhance the emotional impact and effectiveness of your animation.",
                },
                {
                  step: "04",
                  title: "Refinement & Delivery",
                  description:
                    "We refine the animation based on your feedback, ensuring every detail meets your expectations. The final animation is delivered in the appropriate formats for your intended platforms and use cases.",
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
              title="Animation Tools We Use"
              subtitle="We leverage industry-standard tools to create exceptional animations."
            />
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              "Adobe After Effects",
              "Cinema 4D",
              "Blender",
              "Maya",
              "Toon Boom",
              "Adobe Animate",
              "Houdini",
              "ZBrush",
              "Substance Painter",
              "Unreal Engine",
              "Unity",
              "Adobe Photoshop",
            ].map((tool, index) => (
              <FadeIn key={tool} delay={index * 0.05}>
                <div className="bg-secondary/30 border border-white/10 rounded-lg p-4 flex items-center justify-center h-24 hover:border-primary/50 transition-all duration-300">
                  <span className="text-lg font-medium text-center">{tool}</span>
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
                    alt="Animation Case Study"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div>
                <span className="text-primary font-medium mb-2 block">Case Study</span>
                <h3 className="text-3xl font-bold mb-4">Product Explainer Video: Simplifying Complex Technology</h3>
                <p className="text-white/70 mb-6">
                  We created an engaging 3D animated explainer video for a tech company to introduce their innovative
                  product to the market in a way that was easy to understand and visually compelling.
                </p>
                <p className="text-white/70 mb-8">
                  The animation simplified complex technical concepts through visual metaphors and clear storytelling,
                  resulting in a 40% increase in product understanding among potential customers and a 25% increase in
                  conversion rates.
                </p>
                <Button asChild>
                  <Link href="/portfolio/product-explainer">
                    View Full Case Study
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

        { /* CTA Section */}
      </>

)}