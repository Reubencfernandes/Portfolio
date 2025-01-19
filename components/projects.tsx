'use client'
import React from 'react'
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from 'lucide-react'

interface Project {
  name: string
  description: string
  techStack: string[]
  demo: string
  date: string
  image: string
}

interface ProjectsProps {
  projects?: Project[]
}

const ProjectCard = ({ name, description, techStack, demo, date, image }: Project) => {
  return (
    <Card className="group relative overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-secondary/10 border-secondary/30">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />
      <CardHeader>
        <CardTitle className="text-primary">{name}</CardTitle>
        <CardDescription className="text-muted-foreground">{date}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <p className="mb-4 text-muted-foreground">{description}</p>
        <div className="flex flex-wrap gap-2">
          {techStack?.map((tech, index) => (
            <span key={index} className="bg-secondary/20 px-2 py-1 rounded-md text-xs">
              {tech}
            </span>
          ))}
        </div>
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

export default function Projects({ projects = [] }: ProjectsProps) {
  return (
    <section id="projects" className="py-24 lg:py-32 bg-gradient-to-b from-background to-secondary/10">
      <div className="container">
        <div className="mx-auto max-w-[980px]">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-center mb-12 text-primary">
            Projects
          </h2>
          {projects.length === 0 ? (
            <p className="text-center text-gray-500">Loading projects...</p>
          ) : (
            <div className="grid gap-6 md:grid-cols-2">
              {projects.map((project, index) => (
                <ProjectCard 
                  key={index} 
                  name={project.name} 
                  description={project.description} 
                  techStack={project.techStack} 
                  demo={project.demo} 
                  date={project.date} 
                  image={project.image} 
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}