"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import ScrollAnimation from "@/components/scroll-animation"

const categories = [
  "All",
  "AI & Machine Learning",
  "Software Development",
  "Web Development",
  "Mobile Development",
  "UI/UX Design",
  "Industry Insights",
]

const blogPosts = [
  {
    title: "The Future of AI in Business: Trends to Watch",
    category: "AI & Machine Learning",
    excerpt:
      "Explore the emerging AI trends that are transforming businesses and creating new opportunities for growth and innovation.",
    image: "/placeholder.svg?height=600&width=800",
    date: "May 15, 2023",
    author: "Alex Johnson",
    slug: "future-of-ai-in-business",
  },
  {
    title: "Building Scalable Web Applications with Next.js",
    category: "Web Development",
    excerpt:
      "Learn how to leverage Next.js to create fast, scalable, and SEO-friendly web applications that deliver exceptional user experiences.",
    image: "/placeholder.svg?height=600&width=800",
    date: "April 28, 2023",
    author: "Sarah Chen",
    slug: "building-scalable-web-applications",
  },
  {
    title: "The Role of UX Design in Product Success",
    category: "UI/UX Design",
    excerpt:
      "Discover how user-centered design principles can significantly impact product adoption, user satisfaction, and business outcomes.",
    image: "/placeholder.svg?height=600&width=800",
    date: "April 10, 2023",
    author: "Priya Sharma",
    slug: "role-of-ux-design-in-product-success",
  },
  {
    title: "Implementing Machine Learning Models in Production",
    category: "AI & Machine Learning",
    excerpt:
      "A comprehensive guide to deploying, monitoring, and maintaining machine learning models in production environments.",
    image: "/placeholder.svg?height=600&width=800",
    date: "March 22, 2023",
    author: "Michael Rodriguez",
    slug: "implementing-ml-models-in-production",
  },
  {
    title: "Cross-Platform Mobile Development: React Native vs Flutter",
    category: "Mobile Development",
    excerpt: "A comparative analysis of two popular frameworks for building cross-platform mobile applications.",
    image: "/placeholder.svg?height=600&width=800",
    date: "March 5, 2023",
    author: "David Kim",
    slug: "react-native-vs-flutter",
  },
  {
    title: "The Impact of AI on Software Development Practices",
    category: "Software Development",
    excerpt: "How artificial intelligence is changing the way we develop, test, and maintain software applications.",
    image: "/placeholder.svg?height=600&width=800",
    date: "February 18, 2023",
    author: "Alex Johnson",
    slug: "ai-impact-on-software-development",
  },
]

export default function BlogPage() {
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
              Our <span className="gradient-text">Blog</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-white/80"
            >
              Insights, tutorials, and industry perspectives from our team of experts.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-10 bg-black relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-2xl mx-auto mb-10">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" />
              <Input placeholder="Search articles..." className="pl-10 bg-secondary/30 border-white/10" />
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <Button key={category} variant={index === 0 ? "default" : "outline"} className="rounded-full">
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-10 bg-black relative">
        <div className="grid-pattern absolute inset-0 opacity-10"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <ScrollAnimation>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-16">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/10">
                <Image src="/placeholder.svg?height=600&width=800" alt="Featured Post" fill className="object-cover" />
              </div>
              <div>
                <span className="text-primary text-sm mb-2 block">AI & Machine Learning</span>
                <h2 className="text-3xl font-bold mb-4">The Future of AI in Business: Trends to Watch</h2>
                <p className="text-white/70 mb-6">
                  Explore the emerging AI trends that are transforming businesses and creating new opportunities for
                  growth and innovation. From natural language processing to computer vision, discover how these
                  technologies are being applied across industries.
                </p>
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 rounded-full bg-secondary mr-3"></div>
                  <div>
                    <p className="font-medium">Alex Johnson</p>
                    <p className="text-white/50 text-sm">May 15, 2023</p>
                  </div>
                </div>
                <Button asChild>
                  <Link href="/blog/future-of-ai-in-business">
                    Read Article
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-10 bg-black relative">
        <div className="grid-pattern absolute inset-0 opacity-10"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <ScrollAnimation key={post.slug} delay={index * 0.1}>
                <Link href={`/blog/${post.slug}`} className="group block">
                  <div className="relative overflow-hidden rounded-xl border border-white/10 aspect-[4/3] mb-4">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="mb-2">
                    <span className="text-primary text-sm">{post.category}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
                  <p className="text-white/70 mb-4">{post.excerpt}</p>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-secondary mr-3"></div>
                    <div>
                      <p className="font-medium text-sm">{post.author}</p>
                      <p className="text-white/50 text-xs">{post.date}</p>
                    </div>
                  </div>
                </Link>
              </ScrollAnimation>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-black to-secondary/50 relative mt-10">
        <div className="grid-pattern absolute inset-0 opacity-10"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollAnimation>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">Subscribe to Our Newsletter</h2>
              <p className="text-xl text-white/80 mb-8">
                Stay updated with the latest insights, tutorials, and news from our team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <Input placeholder="Enter your email" type="email" className="bg-black/50 border-white/20" />
                <Button className="whitespace-nowrap">Subscribe</Button>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </>
  )
}
