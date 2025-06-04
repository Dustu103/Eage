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
    { name: "Events", href: "#events" },
    { name: "Series", href: "#series" },
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" },
  ]

  // const seriesItems = ["ISME Geo Chronicles", "Geo Explorer", "Quiz Series"]

  // Demo Events Data
  const events: Event[] = [
    {
      id: 1,
      title: "Municipal Budget Workshop",
      date: "2025-03-15",
      time: "2:00 PM - 4:00 PM",
      location: "University Library, Room 301",
      type: "Workshop",
      description:
        "Learn about municipal budgeting processes and financial management in local government with guest speaker from City Hall.",
      image: "/placeholder.svg?height=200&width=400",
      status: "upcoming",
    },
    {
      id: 2,
      title: "City Manager Panel Discussion",
      date: "2025-02-20",
      time: "6:00 PM - 8:00 PM",
      location: "Student Union Building",
      type: "Panel",
      description: "Meet with local city managers and learn about career paths in municipal administration.",
      image: "/placeholder.svg?height=200&width=400",
      status: "upcoming",
    },
    {
      id: 3,
      title: "Chapter Social & Networking Night",
      date: "2025-04-10",
      time: "7:00 PM - 9:00 PM",
      location: "Campus Recreation Center",
      type: "Social",
      description: "Connect with fellow chapter members and enjoy food, games, and networking opportunities.",
      image: "/placeholder.svg?height=200&width=400",
      status: "upcoming",
    },
    {
      id: 4,
      title: "Local Government Innovation Seminar",
      date: "2025-01-25",
      time: "3:00 PM - 5:00 PM",
      location: "Business School Auditorium",
      type: "Seminar",
      description:
        "Explored cutting-edge technologies and innovative approaches being implemented in our local government.",
      image: "/placeholder.svg?height=200&width=400",
      status: "past",
    },
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
                src="/placeholder.svg?height=32&width=120"
                alt="ICMA Logo"
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

      {/* Hero Section */}
      <section id="home" className="relative h-screen overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <img
            src="/assets/iitism.jpeg"
            alt="iitism DHANBAD"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        </motion.div>

        <motion.div className="relative z-10 flex items-center justify-center h-full" style={{ opacity: heroOpacity }}>
          <div className="text-center text-white px-4 max-w-4xl">
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-[#019c7d]">EAGE IIT(ISM) Dhanbad</span>
              <br />
              Student Chapter
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
               Enduring Influence for Future Generations — driving discovery and innovation in geoscience to understand our planet and prepare future scientists.

            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button size="lg" className="bg-[#019c7d] hover:bg-[#017a63] text-white px-8 py-3">
                Join Our Chapter
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white hover:bg-white text-[#019c7d] px-8 py-3"
              >
                Learn More
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <ChevronDown className="h-8 w-8 text-white" />
        </motion.div>
      </section>

      {/* Stats Section */}
      <motion.section
        className="py-16 bg-[#019c7d] text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="text-4xl md:text-5xl font-bold mb-2"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, delay: 1 }}
              >
                {counters.members}+
              </motion.div>
              <div className="text-lg opacity-90">Active Members</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="text-4xl md:text-5xl font-bold mb-2"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, delay: 1.2 }}
              >
                {counters.events}+
              </motion.div>
              <div className="text-lg opacity-90">Events This Year</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="text-4xl md:text-5xl font-bold mb-2"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, delay: 1.4 }}
              >
                {counters.informational}+
              </motion.div>
              <div className="text-lg opacity-90">Informational posts</div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Our Chapter</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The European Association of Geoscientists and Engineers (EAGE) Student Chapter at IIT (ISM) Dhanbad is dedicated to creating an environment that fosters learning, collaboration, and innovation in the field of Applied Geophysics. The chapter prioritizes the promotion of geophysical/geological sciences through webinars and live talks that facilitate student understanding beyond the confines of traditional classroom learning through diverse activities conducted throughout the year.
            </p>
          </motion.div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Professional Development",
                description:
                  "Attend workshops, seminars, and guest lectures from local government professionals to enhance your skills and knowledge.",
                icon: GraduationCap,
                image: "/assets/prof_dev_about_chapter.jpg?height=200&width=400",
                color: "bg-blue-500",
              },
              {
                title: "Networking Opportunities",
                description:
                  "Connect with fellow students, alumni, and professionals in the field through our regular events and activities.",
                icon: Users,
                image: "/assets/net_opr_about_chapter.jpg?height=200&width=400",
                color: "bg-green-500",
              },
              {
                title: "Community Engagement",
                description:
                  "Participate in local government meetings, volunteer for community projects, and make a real impact in our city.",
                icon: Building,
                image: "/assets/comm_eng_about_chapter.jpg?height=200&width=400",
                color: "bg-purple-500",
              },
            ].map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="overflow-hidden h-full group cursor-pointer">
                  <div className="relative overflow-hidden">
                    <img
                      src={card.image || "/placeholder.svg"}
                      alt={card.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className={`absolute top-4 left-4 p-3 rounded-full ${card.color}`}>
                      <card.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{card.title}</h3>
                    <p className="text-gray-600 mb-4">{card.description}</p>
                    {/* <Button variant="ghost" className="text-[#019c7d] hover:text-[#017a63] p-0">
                      Learn More →
                    </Button> */}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* series section */}
      <section id="series" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Educational Series</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore our comprehensive educational series designed to enhance your understanding of              geography, geophysical activities through interactive learning experiences.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* GeoExplorer Series */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <Card className="overflow-hidden h-full group cursor-pointer bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                <div className="relative overflow-hidden">
                  <img
                    src="/assets/geoexplorer.jpg?height=250&width=400"
                    alt="GeoExplorer Series"
                    className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 p-3 rounded-full bg-blue-500">
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                  <Badge className="absolute top-4 right-4 bg-blue-600 text-white">Featured Series</Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">GeoExplorer Series</h3>
                  <p className="text-gray-600 mb-4">
                    Dive into the fascinating world beneath our feet! This series unpacks core concepts in geophysics and geoscience, making complex topics accessible, engaging, and insightful for curious minds.
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>Monthly Episodes</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="h-4 w-4 mr-2" />
                      <span>45+ Participants</span>
                    </div>
                  </div>
                  <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">Explore Chronicles</Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* GeoChronicle Serie*/}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <Card className="overflow-hidden h-full group cursor-pointer bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                <div className="relative overflow-hidden">
                  <img
                    src="/assets/geochronicles.jpg?height=250&width=400"
                    alt="GeoChronicle Series"
                    className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 p-3 rounded-full bg-green-500">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <Badge className="absolute top-4 right-4 bg-green-600 text-white">Weekly Series</Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">GeoChronicle Serie</h3>
                  <p className="text-gray-600 mb-4">
                    Stay updated with the pulse of the planet. The GeoChronicle Series brings you the latest breakthroughs, discoveries, and news from the global geoscience community — all in one place.
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>Learn more about Geosciences</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Award className="h-4 w-4 mr-2" />
                      <span>Latest news from the industry</span>
                    </div>
                  </div>
                  <Button className="w-full bg-green-500 hover:bg-green-600 text-white">Start Exploring</Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Quiz Series */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <Card className="overflow-hidden h-full group cursor-pointer bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
                <div className="relative overflow-hidden">
                  <img
                    src="/assets/quizseries.jpg?height=250&width=400"
                    alt="Quiz Series"
                    className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 p-3 rounded-full bg-purple-500">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                  <Badge className="absolute top-4 right-4 bg-purple-600 text-white">Mega Event</Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Quiz Series</h3>
                  <p className="text-gray-600 mb-4">
                    Test your knowledge and challenge your curiosity! This features thought-provoking questions on geoscience topics to sharpen your skills and spark friendly competition among enthusiasts.
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="h-4 w-4 mr-2" />
                      <span>Competitive Format</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Award className="h-4 w-4 mr-2" />
                      <span>Leaderboard & Prizes</span>
                    </div>
                  </div>
                  <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white">Take Quiz</Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Series Statistics */}
          <motion.div
            className="mt-16 bg-white rounded-2xl shadow-lg p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Series Impact</h3>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300, damping: 10 }}>
                <div className="text-3xl font-bold text-[#019c7d] mb-2">120+</div>
                <div className="text-gray-600">Episodes Published</div>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300, damping: 10 }}>
                <div className="text-3xl font-bold text-[#019c7d] mb-2">2,500+</div>
                <div className="text-gray-600">Students Engaged</div>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300, damping: 10 }}>
                <div className="text-3xl font-bold text-[#019c7d] mb-2">95%</div>
                <div className="text-gray-600">Completion Rate</div>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300, damping: 10 }}>
                <div className="text-3xl font-bold text-[#019c7d] mb-2">4.8/5</div>
                <div className="text-gray-600">Average Rating</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Call to Action */}
          {/* <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Learning?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join thousands of students who are already advancing their knowledge in local government and public
              administration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#019c7d] hover:bg-[#017a63] text-white px-8 py-3">
                Browse All Series
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#019c7d] text-[#019c7d] hover:bg-[#019c7d] hover:text-white px-8 py-3"
              >
                View Schedule
              </Button>
            </div>
          </motion.div> */}
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Upcoming Events</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join us for expert-led webinars, interactive lecture series, and hands-on workshops designed to deepen your geoscience knowledge and skills
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {events
              .filter((event) => event.status === "upcoming")
              .map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="overflow-hidden h-full group cursor-pointer">
                    <div className="relative overflow-hidden">
                      <img
                        src={event.image || "/placeholder.svg"}
                        alt={event.title}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <Badge className="absolute top-4 left-4 bg-[#019c7d] text-white">{event.type}</Badge>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{event.title}</h3>
                      <div className="flex items-center text-gray-600 mb-2">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{new Date(event.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center text-gray-600 mb-2">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center text-gray-600 mb-4">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{event.location}</span>
                      </div>
                      <p className="text-gray-600 mb-4">{event.description}</p>
                      <Button className="w-full bg-[#019c7d] hover:bg-[#017a63] text-white">Register Now</Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
          </div>

          {/* Past Events */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Recent Events</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {events
                .filter((event) => event.status === "past")
                .map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Card className="h-full opacity-75 hover:opacity-100 transition-opacity">
                      <CardContent className="p-4">
                        <Badge variant="secondary" className="mb-2">
                          {event.type}
                        </Badge>
                        <h4 className="font-semibold text-gray-900 mb-2">{event.title}</h4>
                        <p className="text-sm text-gray-600">{new Date(event.date).toLocaleDateString()}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Chapter Registration & ICMA Section */}
      <motion.section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#019c7d] to-[#017a63]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-lg shadow-2xl">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Chapter Meeting"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Join Our Community</h3>
                  <p className="text-lg opacity-90">Be part of something bigger</p>
                </div>
              </div>
            </motion.div>

            {/* Right side - Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-white"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Involved?</h2>
              <p className="text-xl mb-8 leading-relaxed opacity-90">
                Join our chapter and become part of a network of future public service leaders. Whether you're just
                starting your academic journey or preparing for graduation, we have opportunities for you to grow and
                make an impact.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-4"></div>
                  <span className="text-lg">Monthly chapter meetings and events</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-4"></div>
                  <span className="text-lg">Professional development workshops</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-4"></div>
                  <span className="text-lg">Networking with local government professionals</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-4"></div>
                  <span className="text-lg">Leadership opportunities and skill development</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" className="bg-white text-[#019c7d] hover:bg-gray-100 px-8 py-3 font-semibold">
                    Register Now
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-[#019c7d] px-8 py-3"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Visit ICMA Official
                  </Button>
                </motion.div>
              </div>

              <div className="mt-8 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <p className="text-sm opacity-90">
                  <strong>New to ICMA?</strong> Learn more about the International City/County Management Association
                  and discover career opportunities in local government management.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Team Section */}
      <section id="team" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Meet Our Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our dedicated student leaders are committed to creating meaningful experiences and opportunities for all
              chapter members.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                        className="text-gray-400 hover:text-[#019c7d] transition-colors"
                        whileHover={{ scale: 1.2 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <Mail className="h-5 w-5" />
                      </motion.a>
                      <motion.a
                        href={member.linkedin}
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

      {/* Resources Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Chapter Resources
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Meeting Minutes & Documents",
                icon: BookOpen,
                description: "Access chapter meeting minutes, bylaws, and important documents for members.",
              },
              {
                title: "Career Development Resources",
                icon: Award,
                description: "Resume templates, interview tips, and career guidance for public service roles.",
              },
              {
                title: "Scholarship Opportunities",
                icon: GraduationCap,
                description: "Information about ICMA scholarships and funding opportunities for students.",
              },
              {
                title: "Local Government Contacts",
                icon: Building,
                description: "Directory of local government professionals and internship opportunities.",
              },
            ].map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="text-center p-6 h-full hover:shadow-lg transition-shadow duration-300">
                  <motion.div
                    className="w-16 h-16 bg-[#019c7d] rounded-full flex items-center justify-center mx-auto mb-4"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <resource.icon className="h-8 w-8 text-white" />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{resource.title}</h3>
                  <p className="text-gray-600 text-sm">{resource.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Contact Our Chapter</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Have questions about joining our chapter or upcoming events? We'd love to hear from you! Reach out using
              the form below or contact us directly.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-8">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-2">Send us a Message</CardTitle>
                  <p className="text-gray-600">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </CardHeader>
                <CardContent className="px-0 pb-0">
                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      viewport={{ once: true }}
                    >
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="pl-10"
                          placeholder="Enter your full name"
                        />
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="pl-10"
                          placeholder="Enter your email address"
                        />
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <Textarea
                          id="message"
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleInputChange}
                          className="pl-10 min-h-[120px]"
                          placeholder="Tell us how we can help you..."
                        />
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <Button type="submit" className="w-full bg-[#019c7d] hover:bg-[#017a63] text-white">
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <Card className="p-6">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Get in Touch</h3>
                  <div className="space-y-4">
                    <motion.div
                      className="flex items-center"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <Mail className="h-5 w-5 text-[#019c7d] mr-3" />
                      <div>
                        <p className="font-medium text-gray-900">Email</p>
                        <p className="text-gray-600">eage.iitism.student.chapter@gmail.com</p>
                      </div>
                    </motion.div>
                    {/* <motion.div
                      className="flex items-center"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <Phone className="h-5 w-5 text-[#019c7d] mr-3" />
                      <div>
                        <p className="font-medium text-gray-900">Phone</p>
                        <p className="text-gray-600">+1 (555) 123-4567</p>
                      </div>
                    </motion.div> */}
                    <motion.div
                      className="flex items-center"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <MapPin className="h-5 w-5 text-[#019c7d] mr-3" />
                      <div>
                        <p className="font-medium text-gray-900">Meeting Location</p>
                        <p className="text-gray-600">
                          Department of Applied Geophysics
                          <br />
                          IIT (ISM), Dhanbad
                          <br />
                          Jharkhand, India
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>

              {/* <Card className="p-6">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Meeting Schedule</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Chapter Meetings</span>
                      <span className="font-medium text-gray-900">2nd Thursday, 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Officer Meetings</span>
                      <span className="font-medium text-gray-900">1st Monday, 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Social Events</span>
                      <span className="font-medium text-gray-900">Monthly (varies)</span>
                    </div>
                  </div>
                </CardContent>
              </Card> */}

              <Card className="p-6 bg-[#019c7d] text-white">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold mb-4">Join Our Community</h3>
                  <p className="text-gray-100 mb-4">
                    Ready to become part of our chapter? Membership is open to all students interested in public service
                    and local government.
                  </p>
                  <Button variant="secondary" className="bg-white text-[#019c7d] hover:bg-gray-100">
                    Membership Info
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#019c7d] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <motion.div
              className="md:col-span-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <img
                  src="/assets/eage.jpg?height=40&width=120"
                  alt="ICMA Logo"
                  className="h-10 w-auto filter brightness-0 invert mr-3"
                />
                <div>
                  <div className="text-sm font-semibold">EAGE IIT (ISM) Dhanabd</div>
                  <div className="text-xs opacity-90">Student Chapter</div>
                </div>
              </div>
              <p className="text-gray-200 text-sm">
                Enduring Influence for Future Generations — driving discovery and innovation in geoscience to understand our planet and prepare future scientists.
              </p>
            </motion.div>

            {/* Navigation Links */}
            <div className="md:col-span-2">
              <div className="grid sm:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                  <ul className="space-y-2">
                    {["About Chapter", "Join Us", "Events", "Resources"].map((link) => (
                      <li key={link}>
                        <a href="#" className="text-gray-200 hover:text-white transition-colors">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-lg font-semibold mb-4">EAGE Resources</h4>
                  <ul className="space-y-2">
                    {["EAGE Official Website", "Career at EAGE", "Publications"].map((link) => (
                      <li key={link}>
                        <a href="#" className="text-gray-200 hover:text-white transition-colors">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <motion.div
              className="md:col-span-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4">Stay Connected</h4>
              <div className="flex flex-col space-y-3">
                <Input type="email" placeholder="Enter your email" className="bg-white text-gray-900" />
                <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                  <Mail className="mr-2 h-4 w-4" />
                  Subscribe
                </Button>
              </div>

              {/* Social Icons */}
              <div className="flex space-x-4 mt-6">
                {[Facebook, Twitter, Linkedin, Youtube].map((Icon, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    className="text-gray-200 hover:text-white transition-colors"
                    whileHover={{ scale: 1.2, y: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom Footer */}
          {/* <motion.div
            className="border-t border-gray-600 mt-8 pt-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-200 text-sm">
              © 2025 State University ICMA Student Chapter. All Rights Reserved |
              <a href="#" className="hover:text-white transition-colors ml-1">
                Privacy Policy
              </a>{" "}
              |
              <a href="#" className="hover:text-white transition-colors ml-1">
                Contact Us
              </a>
            </p>
          </motion.div> */}
        </div>
      </footer>
    </div>
  )
}
