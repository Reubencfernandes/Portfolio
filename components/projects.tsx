import React from 'react'
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
    <Card className="project-card group overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-secondary/10 border-secondary/30 font-inter">
      <div className="inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />
      <CardHeader>
        <CardTitle className="text-primary font-inter">{title}</CardTitle>
        <CardDescription className="text-muted-foreground font-inter">{date}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-48 mb-4 rounded-lg overflow-hidden">
          <img
            src={placeholder}
            alt={`${title} project screenshot`}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>
        <p className="mb-2 font-inter line-clamp-3">{description}</p>
        <p className="mb-4 text-sm text-muted-foreground font-semibold font-inter">{stack}</p>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" aria-label={`View ${title} project`}>
            <Button size="sm" variant="outline" className="flex gap-2 items-center hover:bg-[#d53c35] hover:text-white font-inter transition-colors">
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
    <section className="px-5 py-10 mt-6 font-inter" aria-labelledby="projects-heading">
      <h2 id="projects-heading" className="text-3xl font-bold tracking-tighter md:text-4xl text-center mb-12 text-primary mt-5">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 content-center align-center justify-items-center max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard key={`${project.title}-${index}`} {...project} />
        ))}
      </div>
    </section>
  )
}