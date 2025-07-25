"use client";
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Award, Users, ArrowRight, Play, CheckCircle, Phone, Mail, MapPin } from "lucide-react"
import AnimatedCursor from "@/components/ui/animated-cursor"
import CursorParticles from "@/components/ui/cursor-particles"
import { saveAs } from "file-saver"
import { motion } from 'framer-motion';
import { easeInOut } from 'framer-motion';

export default function Portfolio() {
  // const handleDownload = () => {
  //   saveAs('./Cover_Letter(4).pdf', 'Cover_Letter(4).pdf');
  // }
  const handleDownload = () => {
    saveAs("./Resume.pdf", "Resume.pdf");
  };
  return (
    <div className="min-h-screen bg-white">
      <AnimatedCursor />
      <CursorParticles />
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#" className="text-gray-700 hover:text-emerald-500">
              Home
            </Link>
            <Link href="#" className="text-gray-700 hover:text-emerald-500">
              About
            </Link>
            <Link href="#" className="text-gray-700 hover:text-emerald-500">
              Projects
            </Link>
            <Link href="#" className="text-gray-700 hover:text-emerald-500">
              Blog
            </Link>
            <Link href="#" className="text-gray-700 hover:text-emerald-500">
              Contact
            </Link>
          </nav>

          <Button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6">Hire me</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-emerald-50 to-blue-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
           initial={{x:-50, opacity: 0 }}
            animate={{x:0 , opacity: 1 }}
            transition={{ease:easeInOut , duration: 0.75 }}
            > <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-emerald-500 font-medium">Hi There!</p>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
                  I'm Sojibul islam
                  <br />
                  <span className="text-emerald-500">Front-End-Developer</span>
                </h1>
              </div>
              <p className="text-gray-600 text-lg max-w-md">
                a final-year Computer Science student with over a year of hands-on experience in front-end development. I specialize in React, Next.js, and Tailwind CSS, creating responsive web interfaces backed by real-world API and MongoDB integrations.
              </p>
              <a
                onClick={handleDownload}
                className="inline-flex  items-center px-6 py-3 border border-emerald-500 text-emerald-500 rounded-md hover:bg-emerald-50 transition"
              >
                Download CV
              </a>

            </div> </motion.div>


             <motion.div
            initial={{x:50, opacity: 0 }}
            animate={{x:0 , opacity: 1 }}
            transition={{ease:easeInOut , duration: 1 }}
        >
             <div className="relative">
              <div className="absolute  bg-emerald-400 rounded-full w-80 h-80 -z-10 opacity-20"></div>
              <div className="absolute top-10 right-10 w-32 h-32 bg-emerald-500 rounded-full opacity-35"></div>
              <Image
                src="/pp.png"
                alt="Rachel Davis"
                width={400}
                height={500}
                className="relative z-10 rounded-2xl"
              />
            </div>
        </motion.div>
          </div>
        </div>
      </section>

      {/* Scrolling Banner */}
      <div className="bg-gray-900 py-4 overflow-hidden">
        <div className="flex animate-scroll whitespace-nowrap">
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i} className="text-white text-lg font-semibold mx-8">
              ★ The Best Solution
            </span>
          ))}
        </div>
      </div>

      {/* Problem Solving Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">
                Solving Problems With
                <br />
                <span className="text-emerald-500">Intuitive Design</span>
              </h2>
              <p className="text-gray-600">
                I build responsive, user-focused web interfaces using React and Next.js that turn ideas into smooth, real-world experiences. My goal is to blend clean design with efficient code to solve real problems.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-bold text-gray-900">1+</div>
                  <p className="text-gray-600">Years Experience</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">99+</div>
                  <p className="text-gray-600">Projects Done</p>
                </div>
              </div>
              <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">View Portfolio</Button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-emerald-400 rounded-full w-80 h-80 -z-10 opacity-20"></div>
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Problem solving"
                width={400}
                height={400}
                className="rounded-2xl"
              />
              <div className="absolute top-4 right-4 bg-white rounded-lg p-4 shadow-lg">
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-emerald-500" />
                  <span className="font-semibold">0</span>
                </div>
                <p className="text-sm text-gray-600">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Process */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              The <span className="text-emerald-500">Ease</span> Service Process
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              My streamlined process ensures efficient delivery of high-quality design solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Front-End Development", desc: "Interactive and responsive UI using React, Next.js, and Tailwind CSS" },
              { step: "02", title: "API Integration & Development", desc: "Efficient REST API integration and backend setup using Node.js and MongoDB" },
              { step: "03", title: "Responsive Web Design", desc: "Clean, mobile-first designs with a focus on user experience" },
              { step: "04", title: "Dashboard & Admin Panels", desc: "Custom admin interfaces and data dashboards for web applications" },
            ].map((service, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">{service.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-bold text-gray-900">
              My Featured <span className="text-emerald-500">Projects</span>
            </h2>
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">View All</Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "SEM Studio",
                category: "Next.js web App",
                image: "/placeholder.svg?height=300&width=400",
                link: "https://sem-studio.netlify.app/",
              },
              { title: "Dream House", category: "React Web App", image: "/placeholder.svg?height=300&width=400", link: "https://real-estate-5830c.web.app", },
              { title: "Book Vibe", category: "React Web App", image: "/placeholder.svg?height=300&width=400", link: "https://book-vibe-lib.netlify.app/", },
              { title: "Sem Travel", category: "Web App", image: "/placeholder.svg?height=300&width=400", link: "https://sem-travel.netlify.app/", },
              {
                title: "SEM-Paribahan",
                category: "Web App",
                image: "/placeholder.svg?height=300&width=400",
                link: "https://sem-poribahan.netlify.app/",
              },
              {
                title: "Hockey's World",
                category: "Web App",
                image: "/placeholder.svg?height=300&width=400",
                link: "https://sem-sports-club.netlify.app/",
              },

            ].map((project, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow portfolio-item">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="p-6">
                    <Badge variant="secondary" className="mb-2">
                      {project.category}
                    </Badge>
                    <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
                    <Link href={project.link} target="_blank" className="text-emerald-500 hover:text-emerald-600 flex items-center">
                      View Project <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Work Experience */}
      {/* <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            My <span className="text-emerald-500">Work</span> Experience
          </h2>

          <div className="max-w-4xl mx-auto">
            {[
              { year: "2023", role: "Senior Designer", company: "Google", location: "California" },
              { year: "2022", role: "UI Designer - Lead Team", company: "Facebook", location: "New York" },
              { year: "2021", role: "Product Designer & UI Product Manager", company: "Dribbble", location: "Remote" },
              { year: "2020", role: "Junior UI Product Designer", company: "Behance", location: "California" },
            ].map((exp, index) => (
              <div key={index} className="flex items-center space-x-8 py-6 border-b border-gray-700 last:border-b-0">
                <div className="text-emerald-500 font-bold text-xl w-16">{exp.year}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">{exp.role}</h3>
                  <p className="text-gray-400">
                    {exp.company} • {exp.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Awards & Recognition */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="text-emerald-500">Awards</span> & Recognition
          </h2>

          <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
            {[
              { title: "Complete Web Development", org: "Programming Hero", icon: Award },
            ].map((award, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <award.icon className="w-8 h-8 text-emerald-500" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{award.title}</h3>
                <p className="text-gray-600">{award.org}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              My <span className="text-emerald-500">Pricing</span> Plan
            </h2>
            <p className="text-gray-600">Choose the perfect plan for your project needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Basic Plan",
                price: "$29.99",
                period: "Per Month",
                features: ["UI Design", "Web Design", "Prototype", "Source File", "Commercial Use"],
              },
              {
                name: "Standard Plan",
                price: "$49.99",
                period: "Per Month",
                popular: true,
                features: [
                  "UI Design",
                  "Web Design",
                  "Prototype",
                  "Source File",
                  "Commercial Use",
                  "Multiple Revision",
                ],
              },
              {
                name: "Premium Plan",
                price: "$89.99",
                period: "Per Month",
                features: [
                  "UI Design",
                  "Web Design",
                  "Prototype",
                  "Source File",
                  "Commercial Use",
                  "Multiple Revision",
                  "24/7 Support",
                ],
              },
            ].map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? "ring-2 ring-emerald-500" : ""}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-emerald-500 text-white">Most Popular</Badge>
                  </div>
                )}
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-emerald-500">{plan.price}</span>
                    <span className="text-gray-600">/{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-emerald-500 mr-3" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${plan.popular ? "bg-emerald-500 hover:bg-emerald-600 text-white" : "bg-gray-100 hover:bg-gray-200 text-gray-900"}`}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Client Testimonials */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Our Clients <span className="text-emerald-500">Awesome</span> Testimonials
            </h2>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <div className="text-3xl font-bold mb-4">
              4.8 <span className="text-lg font-normal text-gray-400">Rating</span>
            </div>
            <blockquote className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              "Working with Rachel was an absolute pleasure. Her attention to detail and creative vision transformed our
              project beyond our expectations."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Latest Blog */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Latest <span className="text-emerald-500">Blog</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "The Importance Of User Experience In Web Design",
                date: "Dec 15, 2023",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                title: "Top Trends in UI/UX Design for 2024",
                date: "Dec 10, 2023",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                title: "How to Create Engaging User Interfaces",
                date: "Dec 5, 2023",
                image: "/placeholder.svg?height=200&width=300",
              },
            ].map((post, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-gray-500 mb-2">{post.date}</div>
                    <h3 className="font-semibold text-lg mb-4">{post.title}</h3>
                    <Link href="#" className="text-emerald-500 hover:text-emerald-600 flex items-center">
                      Read More <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8">View All Posts</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">X</span>
                </div>
                <span className="font-semibold text-lg"></span>
              </div>
              <p className="text-gray-400 mb-4">
                I'm a passionate front-end developer dedicated to crafting seamless digital experiences. Let's build something amazing together!
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-500 transition-colors cursor-pointer">
                  <span className="text-sm">f</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-500 transition-colors cursor-pointer">
                  <span className="text-sm">t</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-500 transition-colors cursor-pointer">
                  <span className="text-sm">in</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Contact</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-emerald-500" />
                  <span className="text-gray-400">+8801784804618</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-emerald-500" />
                  <span className="text-gray-400">sojibulislamsayem420@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-emerald-500" />
                  <span className="text-gray-400">Dhaka, Bangladesh</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Useful Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-emerald-500">
                    About Me
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-emerald-500">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-emerald-500">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-emerald-500">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-emerald-500">
                    UI/UX Design
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-emerald-500">
                    Web Design
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-emerald-500">
                    Mobile App Design
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-emerald-500">
                    Branding
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">© 2024 Sojibul Islam Sayem. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
