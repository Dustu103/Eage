"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  ChevronDown,
  Menu,
  X,
  Users,
  BookOpen,
  Award,
  MapPin,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Calendar,
  Clock,
  Phone,
  Send,
  User,
  MessageSquare,
  ExternalLink,
  GraduationCap,
  Building,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Event {
  id: number
  title: string
  date: string
  time: string
  location: string
  type: string
  description: string
  image: string
  status: string
  link: string
}

interface TeamMember {
  id: number
  name: string
  position: string
  bio: string
  image: string
  email: string
  linkedin: string
  year: string
  major: string
}

interface TeamMember_2 {
  id: number
  name: string
  position: string
  image: string
  email: string
  linkedin: string
  year: string
  major: string
}

interface FormData {
  name: string
  email: string
  message: string
}

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSeriesOpen, setIsSeriesOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [formData, setFormData] = useState<FormData>({ name: "", email: "", message: "" })
  const { scrollY } = useScroll()
  const heroY = useTransform(scrollY, [0, 500], [0, 150])
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0])

  // Counter animation
  const [counters, setCounters] = useState({ members: 0, events: 0, informational: 0 })

  useEffect(() => {
    const timer = setTimeout(() => {
      setCounters({ members: 60, events: 10, informational: 40 })
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  // Intersection Observer for active section
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]")
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3 },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Series", href: "#series" },
    { name: "Events", href: "#events" },
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" },
  ]


  // Demo Team Data
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Amrit Krishn",
      position: "Chapter President",
      bio: "Senior in Public Administration, passionate about sustainable urban development and community engagement.",
      image: "/profiles/amrit.jpg?height=300&width=300",
      email: "21je0098@iitism.ac.in",
      linkedin: "https://www.linkedin.com/in/amrit-krishn-45b67a20b/",
      year: "Final Year",
      major: "Int. MTech in Applied Geophysics",
    },
    {
      id: 2,
      name: "Priti Das",
      position: "Vice President",
      bio: "Junior studying Political Science with a focus on local government policy and public service.",
      image: "/profiles/priti.jpg?height=300&width=300",
      email: "23mc0061@iitism.ac.in",
      linkedin: "https://www.linkedin.com/in/priti-das-70258b290/",
      year: "Final Year",
      major: "Msc. Tech in Applied Geophysics",
    },
    {
      id: 3,
      name: "Pratyush Singh",
      position: "Secretary",
      bio: "Graduate student in Urban Planning, interested in community development and municipal finance.",
      image: "/profiles/pratyush.jpg?height=300&width=300",
      email: "marcus.johnson@university.edu",
      linkedin: "https://www.linkedin.com/in/pratyush-singh-2219w/",
      year: "Pre-Final Year",
      major: "Int. MTech in Applied Geophysics",
    },
    {
      id: 4,
      name: "Harit Dev Rana",
      position: "Treasurer",
      bio: "Sophomore in Public Policy, focused on budget analysis and financial management in government.",
      image: "/profiles/harit.jpg?height=300&width=300",
      email: "24mc0036@iitism.ac.in",
      linkedin: "https://www.linkedin.com/in/haritdevrana/",
      year: "Pre-Final Year",
      major: "Msc. Tech in Applied Geophysics",
    },
    {
      id: 5,
      name: "Manas",
      position: "Event Manager",
      bio: "Sophomore in Public Policy, focused on budget analysis and financial management in government.",
      image: "/profiles/manas.jpg?height=300&width=300",
      email: "22je0537@iitism.ac.in",
      linkedin: "https://www.linkedin.com/in/manas-611a06255/",
      year: "Pre-Final Year",
      major: "Int. MTech in Applied Geophysics",
    },
  ]

  const teamMembers_2: TeamMember_2[] = [
    {
    id: 1,
    name: "Sreeja",
    position: "Editor in Chief",
    image: "/profiles/sreeja.jpg?height=300&width=300",
    email: "24je1104@iitism.ac.in",
    linkedin: "https://www.linkedin.com/in/sreejaiitism",
    year: "Sophomore Year",
    major: "Int. MTech in Applied Geophysics",
    },
    {
    id: 2,
    name: "Aryan Sharma",
    position: "Designer in Chief",
    image: "/profiles/aryan.jpg?height=300&width=300",
    email: "24je1088@iitism.ac.in",
    linkedin: "https://www.linkedin.com/in/aryan-sharma-26276131a/",
    year: "Sophomore Year",
    major: "Int. MTech in Applied Geophysics",
    },
    {
    id: 3,
    name: "Chirag Yadav",
    position: "Content Writer",
    image: "/profiles/chirag.jpg?height=300&width=300",
    email: "24je1091@iitism.ac.in",
    linkedin: "https://www.linkedin.com/in/chirag-yadav-895043316/",
    year: "Sophomore Year",
    major: "Int. MTech in Applied Geophysics",
    },
    {
    id: 4,
    name: "Abhishek Neog",
    position: "Content Writer",
    image: "/profiles/abhishek.jpg?height=300&width=300",
    email: "24mc0003@iitism.ac.in",
    linkedin: "https://www.linkedin.com/in/abhishek-neog",
    year: "Pre-Final Year",
    major: "Msc. Tech in Applied Geophysics",
    },
    {
    id: 5,
    name: "Heramb Gaur",
    position: "Content Writer",
    image: "/profiles/heramb.jpg?height=300&width=300",
    email: "23je0403@iitism.ac.in",
    linkedin: "Third Year",
    year: "https://www.linkedin.com/in/heramb-gaur-109343289",
    major: "Int. MTech in Applied Geology",
    },
    {
    id: 6,
    name: "Ravi Kumar",
    position: "Social Media Strategist",
    image: "/profiles/ravi.jpg?height=300&width=300",
    email: "23je0799@iitism.ac.in",
    linkedin: "https://www.linkedin.com/in/ravi-kumar-3a2a43296/",
    year: "Third Year",
    major: "Int. MTech in Applied Geophysics",
    },
    {
    id: 7,
    name: "Hansraj Meena",
    position: "Social Media Strategist",
    image: "/profiles/hansraj.jpg?height=300&width=300",
    email: "22je0375@iitism.ac.in",
    linkedin: "https://www.linkedin.com/in/hansraj-meena/",
    year: "Pre-Final Year",
    major: "Int. MTech in Applied Geophysics",
    },
    {
    id: 8,
    name: "Pratyan Paul",
    position: "Graphic Designer",
    image: "/profiles/pratyan.jpg?height=300&width=300",
    email: "24mc0055@iitism.ac.in",
    linkedin: "https://www.linkedin.com/in/pratyanpaul/",
    year: "Pre-Final Year",
    major: "Msc. Tech in Applied Geophysics",
    },
    {
    id: 9,
    name: "Anupam Chandra",
    position: "Graphic Designer",
    image: "/profiles/anupam.jpg?height=300&width=300",
    email: "24mc0014@iitism.ac.in",
    linkedin: "https://www.linkedin.com/in/anupam-chanderia-87baa6320/",
    year: "Pre-Final Year",
    major: "Msc. Tech in Applied Geophysics",
    },
    {
    id: 10,
    name: "Puli Swetha",
    position: "Photography/Video Head",
    image: "/profiles/puli.jpg?height=300&width=300",
    email: "24mc0060@iitism.ac.in",
    linkedin: "https://www.linkedin.com/in/swetha-puli-47a38132a",
    year: "Pre-Final Year",
    major: "Msc. Tech in Applied Geophysics",
    },
    {
    id: 11,
    name: "Raj Sahu",
    position: "Communication and Outreach Officer",
    image: "/profiles/raj.jpg?height=300&width=300",
    email: "21je0738@iitism.ac.in",
    linkedin: "https://www.linkedin.com/in/rajsahu2004",
    year: "Final Year",
    major: "Int. MTech in Applied Geophysics",
    },
    {
    id: 12,
    name: "Shusant Dutta",
    position: "Industry-Academic Liaison",
    image: "/profiles/shusant.jpg?height=300&width=300",
    email: "24mc0080@iitism.ac.in",
    linkedin: "https://www.linkedin.com/in/shusantdutta",
    year: "Pre-Final Year",
    major: "Msc. Tech in Applied Geophysics",
    },
    {
    id: 13,
    name: "Samapti Mondal",
    position: "Industry-Academic Liaison",
    image: "/profiles/samapti.jpg?height=300&width=300",
    email: "24mc0072@iitism.ac.in",
    linkedin: "https://www.linkedin.com/in/samapti-mondal-6a885b322",
    year: "Pre-Final Year",
    major: "Msc. Tech in Applied Geophysics",
    },
    {
    id: 14,
    name: "Arnab",
    position: "Web Developer",
    image: "/profiles/arnab.jpg?height=300&width=300",
    email: "23je0150@iitism.ac.in",
    linkedin: "https://www.linkedin.com/in/arnab-pramanik-2921572b4/",
    year: "Third Year",
    major: "Int. MTech in Applied Geophysics",
    },
    {
    id: 15,
    name: "Akarsh Shukla",
    position: "Alumni Relations Coordinator",
    image: "/profiles/akarsh.jpg?height=300&width=300",
    email: "24mc0110@iitism.ac.in",
    linkedin: "https://www.linkedin.com/in/akarsh-shukla",
    year: "Pre-Final Year",
    major: "Msc. Tech in Applied Geophysics",
    },
  ]

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", message: "" })
    alert("Thank you for your message! We'll get back to you soon.")
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <motion.nav
        className="fixed top-0 w-full z-50 bg-[#019c7d] shadow-lg"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <motion.div
              className="flex-shrink-0 flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <img
                className="h-8 w-auto filter brightness-0 invert mr-3"
                src="/assets/eage.jpg?height=32&width=120"
                alt="EAGE IIT ISM Logo"
              />
              <div className="text-white">
                <div className="text-sm font-semibold">EAGE</div>
                <div className="text-xs opacity-90">IITISM Dhanbad Student Chapter</div>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className={`px-3 py-2 text-sm font-medium transition-colors ${
                      activeSection === item.href.slice(1)
                        ? "text-white border-b-2 border-white"
                        : "text-gray-200 hover:text-white"
                    }`}
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {item.name}
                  </motion.a>
                ))}

                {/* Series Dropdown */}
                {/* <div className="relative">
                  <motion.button
                    className="text-gray-200 hover:text-white px-3 py-2 text-sm font-medium flex items-center transition-colors"
                    onClick={() => setIsSeriesOpen(!isSeriesOpen)}
                    whileHover={{ y: -2 }}
                  >
                    Series
                    <motion.div animate={{ rotate: isSeriesOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </motion.div>
                  </motion.button>

                  <motion.div
                    className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{
                      opacity: isSeriesOpen ? 1 : 0,
                      y: isSeriesOpen ? 0 : -10,
                      visibility: isSeriesOpen ? "visible" : "hidden",
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* <div className="py-1">
                      {seriesItems.map((item, index) => (
                        <motion.a
                          key={item}
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#019c7d]"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: isSeriesOpen ? 1 : 0, x: isSeriesOpen ? 0 : -10 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          {item}
                        </motion.a>
                      ))}
                    </div> */}
                  {/* </motion.div> */}
                {/* </div> */} 
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-gray-200"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className="md:hidden bg-[#019c7d] border-t border-[#017a63]"
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: isMenuOpen ? "auto" : 0,
            opacity: isMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          style={{ overflow: "hidden" }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-white hover:text-gray-200 block px-3 py-2 text-base font-medium"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isMenuOpen ? 1 : 0, x: isMenuOpen ? 0 : -20 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.nav>

      {/* Team Section */}
      <section id="team" className="mt-16 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Meet Our Core Team</h2>
            {/* <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              """"""
            </p> */}
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="text-center h-full group">
                  <CardContent className="p-6">
                    <motion.div
                      className="relative mb-4"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    >
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-24 h-24 rounded-full mx-auto object-cover"
                      />
                    </motion.div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-[#019c7d] font-medium mb-1">{member.position}</p>
                    <p className="text-sm text-gray-500 mb-3">
                      {member.year} • {member.major}
                    </p>
                    <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                    <div className="flex justify-center space-x-3">
                      <motion.a
                        href={`mailto:${member.email}`}
                        className="text-gray-400 hovesr:text-[#019c7d] transition-colors"
                        whileHover={{ scale: 1.2 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <Mail className="h-5 w-5" />
                      </motion.a>
                      <motion.a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-[#019c7d] transition-colors"
                        whileHover={{ scale: 1.2 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <Linkedin className="h-5 w-5" />
                      </motion.a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Extended Team Section */}
      <section id="team" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Meet Our Extended Team</h2>
            {/* <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              """"""
            </p> */}
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {teamMembers_2.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="text-center h-full group">
                  <CardContent className="p-6">
                    <motion.div
                      className="relative mb-4"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    >
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-24 h-24 rounded-full mx-auto object-cover"
                      />
                    </motion.div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-[#019c7d] font-medium mb-1">{member.position}</p>
                    <p className="text-sm text-gray-500 mb-3">
                      {member.year} • {member.major}
                    </p>
                    <div className="flex justify-center space-x-3">
                      <motion.a
                        href={`mailto:${member.email}`}
                        className="text-gray-400 hovesr:text-[#019c7d] transition-colors"
                        whileHover={{ scale: 1.2 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <Mail className="h-5 w-5" />
                      </motion.a>
                      <motion.a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-[#019c7d] transition-colors"
                        whileHover={{ scale: 1.2 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <Linkedin className="h-5 w-5" />
                      </motion.a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
