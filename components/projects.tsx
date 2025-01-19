import React from 'react'
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from 'lucide-react'

interface Project {
  title: string
  description: string
  date: string
  placeholder: string
  stack: string
  link: string
}

interface ProjectsProps {
  projects?: Project[]
}

const ProjectCard = ({ title, description, date, stack, link, placeholder }: Project) => {
  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-secondary/10 border-secondary/30 font-inter">
      <div className="inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />
      <CardHeader>
        <CardTitle className="text-primary">{title}</CardTitle>
        <CardDescription className="text-muted-foreground">{date}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-48 mb-4 rounded-lg">
          <img
            src={placeholder}
            alt="Placeholder"
            className="object-cover w-full h-full"
          />
        </div>
        <p className="mb-2">{description}</p>
        <p className="mb-4 text-sm text-muted-foreground font-bold">{stack}</p>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <Button size="sm" variant="outline" className="flex gap-2 items-center hover:bg-[#d53c35] hover:text-white">
              View Project
              <ExternalLink className="w-4 h-4" />
            </Button>
          </a>
        )}
      </CardContent>
    </Card>
  )
}

export default function Projects({ projects = [] }: ProjectsProps) {
  return (
    <div className="px-5 py-10 mt-6 font-inter">
      <h1 className="text-4xl font-bold text-center mb-10">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 content-center align-center justify-items-center">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  )
}