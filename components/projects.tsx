import React from 'react'
import { Skeleton } from '@/components/ui/skeleton'
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
  show?: boolean
}

const ProjectCard = ({ title, description, date, stack, link, placeholder }: Project) => {
  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-secondary/10 border-secondary/30 font-inter">
      <div className="inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />
      <CardHeader>
        <CardTitle className="text-primary font-inter">{title}</CardTitle>
        <CardDescription className="text-muted-foreground font-inter ">{date}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-48 mb-4 rounded-lg">
          <img
            src={placeholder}
            alt="Placeholder"
            className="object-cover w-full h-full"
          />
        </div>
        <p className="mb-2 font-inter">{description}</p>
        <p className="mb-4 text-sm text-muted-foreground font-semibold font-inter">{stack}</p>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <Button size="sm" variant="outline" className="flex gap-2 items-center hover:bg-[#d53c35] hover:text-white font-inter">
              View Project
              <ExternalLink className="w-4 h-4" />
            </Button>
          </a>
        )}
      </CardContent>
    </Card>
  )
}

export default function Projects({ projects = [], show }: ProjectsProps) {
  return (
    <div className="px-5 py-10 mt-6 font-inter">
      <h1 className="text-3xl font-bold tracking-tighter md:text-4xl text-center mb-12 text-primary mt-5">Projects</h1>
      {show ?(
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 content-center align-center justify-items-center">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
      ):(
        <div className="flex flex-col space-y-3 justify-center items-center">
      <Skeleton className="h-[500px] w-full rounded-xl bg-gray-300" />
    </div>
      )}
    </div>
  )
}