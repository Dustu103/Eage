
"use client"

import type React from "react"

import Link from "next/link";
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
  link: string
}

const events: Event[] = [
    {
      id: 1,
      title: "Future career aspects in geophysical mineral explorations",
      date: "2025-03-15",
      time: "2:00 PM - 4:00 PM",
      location: "Online Session",
      type: "GeoQuest Series",
      description:
        "Learn about municipal budgeting processes and financial management in local government with guest speaker from City Hall.",
      image: "/recent_events/event_1.jpg?height=200&width=400",
      link: "https://www.youtube.com/@EAGE_Student_Chapter_IITISM",
    },
    {
      id: 2,
      title: "Geosciences unlock the Earth's secrets; GeoQuest guides you to unlock your professional journey",
      date: "2025-02-20",
      time: "6:00 PM - 8:00 PM",
      location: "Online Session",
      type: "GeoQuest Series",
      description: "Meet with local city managers and learn about career paths in municipal administration.",
      image: "/recent_events/event_2.jpg?height=200&width=400",
      
      link: "https://www.youtube.com/@EAGE_Student_Chapter_IITISM",
    },
    {
      id: 3,
      title: "Special Talk on Time Management for Students",
      date: "2025-02-20",
      time: "6:00 PM - 8:00 PM",
      location: "Online Session",
      type: "Special talk",
      description: "Meet with local city managers and learn about career paths in municipal administration.",
      image: "/recent_events/event_3.jpg?height=200&width=400",
      
      link: "https://www.youtube.com/@EAGE_Student_Chapter_IITISM",
    },
    {
      id: 4,
      title: "Introduction to Python & Machine Learning for Geosciences",
      date: "2025-01-25",
      time: "3:00 PM - 5:00 PM",
      location: "Online Session",
      type: "Workshop",
      description:
        "Explored cutting-edge technologies and innovative approaches being implemented in our local government.",
      image: "/recent_events/event_4.jpg?height=200&width=400",
      
      link: "https://youtu.be/CZasLNHU3aw",
    },
    {
      id: 5,
      title: "Advanced Machine Learning Techniques for Geoscience Interpretation and Explanation",
      date: "2025-01-25",
      time: "3:00 PM - 5:00 PM",
      location: "Online Session",
      type: "GeoQuest Series",
      description:
        "Explored cutting-edge technologies and innovative approaches being implemented in our local government.",
      image: "/recent_events/event_5.jpg?height=200&width=400",
      
      link: "https://youtu.be/n_SdVNjxyZY",
    },
  ]

function page() {
  return (
    <div>
       <section id="events" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Recent Events</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join us for expert-led webinars, interactive lecture series, and hands-on workshops designed to deepen your geoscience knowledge and skills.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {events
              .map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="overflow-hidden h-full group cursor-pointer">
                    <div className="relative overflow-hidden">
                      <img
                        src={event.image || "/placeholder.svg"}
                        alt={event.title}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <Badge className="absolute top-4 right-4 bg-[#019c7d] text-white">{event.type}</Badge>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">{event.title}</h3>
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
                      <Button
                        onClick={() => window.open(event.link, "_blank", "noopener,noreferrer")}
                        className="w-full bg-[#019c7d] hover:bg-[#FF0000] text-white"
                      >
                        View Recordings
                      </Button>
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

export default page
