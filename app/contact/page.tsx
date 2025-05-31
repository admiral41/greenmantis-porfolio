"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import ScrollAnimation from "@/components/scroll-animation"
import SectionHeading from "@/components/section-heading"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log("Form submitted:", formState)
    alert("Thank you for your message! We'll get back to you soon.")
    setFormState({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    })
  }

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
              Get in <span className="gradient-text">Touch</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-white/80"
            >
              Let's build something extraordinary together. Reach out to discuss your project.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-black relative">
        <div className="grid-pattern absolute inset-0 opacity-10"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ScrollAnimation direction="left">
              <div>
                <SectionHeading title="Contact Information" align="left" />
                <p className="text-white/70 mb-8">
                  Have a question or want to discuss a project? We'd love to hear from you. Reach out using the contact
                  information below or fill out the form.
                </p>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-primary mr-4 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Our Office</h3>
                      <p className="text-white/70">
                        123 Innovation Street
                        <br />
                        Kathmandu, Nepal
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-primary mr-4 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Phone</h3>
                      <p className="text-white/70">+977 1234567890</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-primary mr-4 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Email</h3>
                      <p className="text-white/70">info@greenmantis.com</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
                  <div className="grid grid-cols-2 gap-2 text-white/70">
                    <div>Monday - Friday</div>
                    <div>9:00 AM - 6:00 PM</div>
                    <div>Saturday</div>
                    <div>10:00 AM - 4:00 PM</div>
                    <div>Sunday</div>
                    <div>Closed</div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="right">
              <div className="bg-secondary/30 border border-white/10 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="bg-black/50 border-white/20"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Your email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="bg-black/50 border-white/20"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone (Optional)</Label>
                      <Input
                        id="phone"
                        name="phone"
                        placeholder="Your phone number"
                        value={formState.phone}
                        onChange={handleChange}
                        className="bg-black/50 border-white/20"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">Company (Optional)</Label>
                      <Input
                        id="company"
                        name="company"
                        placeholder="Your company"
                        value={formState.company}
                        onChange={handleChange}
                        className="bg-black/50 border-white/20"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your project or inquiry"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      className="min-h-[150px] bg-black/50 border-white/20"
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gradient-to-b from-black to-black/95 relative">
        <div className="grid-pattern absolute inset-0 opacity-10"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <ScrollAnimation>
            <SectionHeading title="Find Us" subtitle="Visit our office in Kathmandu, Nepal." />
          </ScrollAnimation>

          <div className="rounded-xl overflow-hidden border border-white/10 h-[400px] w-full">
            {/* This would be replaced with an actual Google Map */}
            <div className="w-full h-full bg-secondary/30 flex items-center justify-center">
              <p className="text-white/70">Google Map would be embedded here</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-black relative">
        <div className="grid-pattern absolute inset-0 opacity-10"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <ScrollAnimation>
            <SectionHeading
              title="Frequently Asked Questions"
              subtitle="Find answers to common questions about working with us."
            />
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "What is the typical timeline for a project?",
                answer:
                  "Project timelines vary depending on complexity and scope. A simple website might take 4-6 weeks, while a complex AI solution could take 3-6 months. We'll provide a detailed timeline during the planning phase.",
              },
              {
                question: "How do you handle project pricing?",
                answer:
                  "We offer flexible pricing models including fixed-price, time and materials, and retainer arrangements. After understanding your requirements, we'll recommend the most suitable approach for your project.",
              },
              {
                question: "Do you offer ongoing support after project completion?",
                answer:
                  "Yes, we provide ongoing support and maintenance services to ensure your solution continues to perform optimally. We offer various support packages tailored to your needs.",
              },
              {
                question: "Can you work with our existing team?",
                answer:
                  "We're experienced in collaborating with in-house teams and can adapt our involvement based on your needs, whether that's augmenting your team or providing specialized expertise.",
              },
            ].map((faq, index) => (
              <ScrollAnimation key={index} delay={index * 0.1}>
                <div className="bg-secondary/30 border border-white/10 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                  <p className="text-white/70">{faq.answer}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
