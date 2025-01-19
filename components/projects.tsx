'use client'
import React from 'react'
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from 'lucide-react'

const projects = [
  {
    title: "ClearSkies",
    description: "A weather information platform serving over 60 users from the college, improving access to accurate weather data. Built with React.js, OpenWeatherAPI, and MongoDB.",
    demo: "https://clearskies-demo.com",
    date: "February 2024",
    image: "/placeholder.svg?height=400&width=600"
  },
  {
    title: "Inspirus8",
    description: "Official website for Inspirus 8, increasing event registration by 50%. Built using Next.js, Spline, and TailwindCSS for optimized performance and interactive 3D graphics.",
    demo: "https://inspirus8.com",
    date: "September 2024",
    image: "/placeholder.svg?height=400&width=600"
  },
  {
    title: "Land Records",
    description: "A land records management system designed for over 100 users, reducing inquiry response time by 40%. Built with Next.js, TailwindCSS, and MySQL.",
    demo: "https://landrecords-demo.com",
    date: "November 2024",
    image: "/placeholder.svg?height=400&width=600"
  },
  {
    title: "Shadow's of Tomorrow",
    description: "A 2D RPG Game developed using Godot 4 Game Engine, integrated with AWS services like AWS Lambda and AWS Bedrock.",
    demo: "https://shadows-demo.com",
    date: "January 2025",
    image: "/placeholder.svg?height=400&width=600"
  }
]

interface ProjectCardProps {
  title: string
  description: string
  demo: string
  date: string
  image: string
}

const ProjectCard = ({ title, description, demo, date, image }: ProjectCardProps) => {
  return (
    <Card className="group relative overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-secondary/10 border-secondary/30">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />
      <CardHeader>
        <CardTitle className="text-primary">{title}</CardTitle>
        <CardDescription className="text-muted-foreground">{date}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <p className="mb-4 text-muted-foreground">{description}</p>
        <Button 
          asChild
          className="bg-gradient-to-r from-primary via-accent to-secondary hover:opacity-90 transition-opacity text-white shadow-lg hover:shadow-xl"
        >
          <Link href={demo} target="_blank" className="flex items-center">
            <span className="relative z-10">View Demo</span>
            <ExternalLink className="ml-2 h-4 w-4 relative z-10" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}

const Projects = () => {
  return (
    <section id="projects" className="py-24 lg:py-32 bg-gradient-to-b from-background to-secondary/10">
      <div className="container">
        <div className="mx-auto max-w-[980px]">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-center mb-12 text-primary">
            Projects
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects