'use client'
import Footer from "@/components/Footer";
import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/projects";
import TechStack from "@/components/stack";
import { useState, useEffect } from "react";

export default function Home({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  const language = searchParams.lang as string | 'english';
  const [projects, setProjects] = useState<any>([]);
  const [description, setDescription] = useState('');

  useEffect(() => {
    fetch('/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt: `Provide the output in JSON format. For example:
{
  "description": "A brief about [Name]",
  "projects": [
    {
      "name": "Project Name",
      "description": "Brief description of the project.",
      "techStack": ["Technology1", "Technology2"]
    }
  ]
}
Task: Create a paragraph-style brief about Reuben Chagas Fernandes based on the following information:

Reuben Chagas Fernandes is an undergraduate student in Computer Science and Engineering (CSE) with a diverse skill set that spans multiple programming languages and frameworks, including ReactJS, NextJS, Generative AI, Flutter, TailwindCSS, Node.js, PHP, and Python. With professional experience in Android application development, Reuben demonstrates a strong passion for full-stack development, game development, UI/UX design, and Artificial Intelligence (AI). He is also a beginner in Japanese and Portuguese, showcasing an enthusiasm for broadening his linguistic horizons.

Reuben has undertaken several impactful projects. His portfolio includes "Reo Bot," a Discord bot serving 100+ users, built with Node.js, React.js, TailwindCSS, Three.js, and MongoDB. He developed the "Apex Legends Stats Website," a stats and map rotation tracker using HTML, CSS, and JavaScript. His "ClearSkies" weather platform, which has over 60 users, was created with React.js, OpenWeatherAPI, and MongoDB. Other notable projects include the "Task Planner App," submitted to the Google Gemini contest and built with Flutter and Google Gemini API, and "FakeInstagram," an Instagram UI clone developed using Flutter.

Reuben also created "Inspirus8," an official event website utilizing Next.js, Spline, and TailwindCSS, as well as the "Land Records" management system built with Next.js, TailwindCSS, and MySQL. Most recently, he worked on "Shadows of Tomorrow," a 2D RPG game leveraging Godot 4, AWS Lambda, and AWS Bedrock.` }),
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setDescription(data.description);
      setProjects(data.projects);
    })
  }, [language]);

  return (
    <div>
      <Hero />
      <About description={description}/>
      <Projects projects={projects} />
      <TechStack />
      <Footer />
    </div>
  );
}
