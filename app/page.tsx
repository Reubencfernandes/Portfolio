'use client'
import Footer from "@/components/Footer";
import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/projects";
import TechStack from "@/components/stack";
import { useState, useEffect } from "react";

export default function Home({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  const language = searchParams.lang as string | 'english';
  interface Project {
    title: string;
    link: string;
    placeholder: string;
    date: string;
    description: string;
    stack: string;
  }

  const [projects, setProjects] = useState<Project[]>([]);
  const [description, setDescription] = useState('');
  const[show, setShow] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try{
       const res = await fetch('/api', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ prompt: `Strictly output valid JSON only (no Markdown, no triple backticks, no code fences). use the following structure:
    {
      "description": "[general description]",
      "projects": [
        {
        "title":"[name of project]",
        "link": "[link to project]",
        "placeholder": "[link to placeholder image]",
        "date": "[date of project]",
        "description":"[description of project]",
        "stack": "[stack used for project]"
          }
        ]
    }
    
    Task: Create a JSON output for Reuben Chagas Fernandes based on the following details, Use the language ${language} and add variation to the description:  
    
    General Description: Reuben Chagas Fernandes is an undergraduate student in Computer Science and Engineering (CSE) with expertise in various programming languages and frameworks, including ReactJS, NextJS, Generative AI, Flutter, TailwindCSS, Node.js, PHP, and Python. He has professional experience in Android application development and a strong passion for full-stack development, game development, UI/UX design, and Artificial Intelligence (AI). He is a beginner in Japanese and Portuguese, reflecting his interest in exploring new cultures and languages.  
    
    Projects:
    
    1. Reo Bot (January 2022)
       Description: A versatile Discord bot designed to serve over 100 users by automating tasks, moderating chats, and providing engaging interactive features like mini-games and announcements.  
       Stack: Node.js, React.js, TailwindCSS, Three.js, MongoDB  
      placeholder: https://cdn.glitch.com/ad440fa6-74ef-412e-a436-c369122705f0%2Funtitled.png
       Link: https://www.youtube.com/watch?v=zo_UkXzAfLk
    
    2. Apex Legends Stats Website (May 2022)
       Description: A website that provides real-time stats, player rankings, and map rotation schedules for the popular game Apex Legends. Users can easily access in-game data and insights to enhance their gaming strategies.  
       Stack: HTML, CSS, JavaScript  
       placeholder: https://i.pinimg.com/736x/5a/04/c2/5a04c2049b3188e35bf84e23dd6ae64a.jpg
      Link: https://apex-legends-tracker-reubencf.web.app/
    
    3. ClearSkies (February 2024)
       Description: A user-friendly weather platform catering to over 60 users. It offers accurate, real-time weather forecasts, location-based updates, and alerts, ensuring seamless access to weather-related insights.  
       Stack: React.js, OpenWeatherAPI, MongoDB  
       placeholder: https://cdn.glitch.global/ad440fa6-74ef-412e-a436-c369122705f0/cs.png
       Link: https://clear-skies-production.up.railway.app/
    
    4. Task Planner App (June 2024) 
       Description: An innovative task management application developed for the Google Gemini contest, enabling users to create, organize, and track tasks with advanced AI-driven suggestions for productivity enhancement.  
       Stack: Flutter, Google Gemini API  
       placeholder: https://cdn.glitch.global/ad440fa6-74ef-412e-a436-c369122705f0/tp.png
        Link: https://youtu.be/hiJiTCYkdEo?list=PLULNFt50a7-T4PH3tcYLYFRlWcjwh73Ok
    
    5. FakeInstagram (August 2024)  
       Description: An aesthetically accurate Instagram UI clone, demonstrating advanced knowledge of mobile design and responsive layouts. The project serves as a showcase of modern front-end design principles and practices.  
       placeholder: https://cdn.glitch.global/ad440fa6-74ef-412e-a436-c369122705f0/fakeig.jpg
       Stack: Flutter  
      Link: https://www.youtube.com/shorts/F1qRNCr6Muc
    
    6. Inspirus8 (September 2024) 
       Description: The official event website designed to provide a visually engaging and interactive platform for showcasing event details, schedules, and multimedia content.  
       Stack: Next.js, Spline, TailwindCSS  
       placeholder: https://cdn.glitch.global/ad440fa6-74ef-412e-a436-c369122705f0/Screenshot_1.png
       Link: https://inspirus8.netlify.app/
    
    7. Land Records (November 2024) 
       Description: A comprehensive land records management system that simplifies the storage, retrieval, and updating of land-related data with an intuitive interface and robust database handling.  
       Stack: Next.js, TailwindCSS, MySQL  
       placeholder: https://cdn.glitch.global/ad440fa6-74ef-412e-a436-c369122705f0/land.png
       Link: https://www.youtube.com/watch?v=XT5azi648I8
    
    8. Shadows of Tomorrow (January 2025) 
       Description: A captivating 2D RPG game built with Godot 4. It features an immersive storyline, dynamic character interactions, and visually engaging gameplay enhanced by AWS Lambda and Bedrock for seamless backend support.  
       Stack: Godot 4, AWS Lambda, AWS Bedrock
       placeholder:https://cdn.glitch.global/ad440fa6-74ef-412e-a436-c369122705f0/5.png
       Link: https://youtu.be/-h46B68Cqz8
       ` }),
        })
        const data = await res.json();
        setDescription(data.description);
        setProjects(data.projects);
        setShow(true)
      } catch (error) { 
        console.error(error);
      }
    };
    fetchData();
  }, [language]);

  return (
    <div>
      <Hero />
      <About description={description} show={show}/>
      <Projects projects={projects} show={show} />
      <TechStack />
      <Footer />
    </div>
  );
}
