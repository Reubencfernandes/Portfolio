'use client'
import Footer from "@/components/Footer";
import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/projects";
import TechStack from "@/components/stack";

// Static portfolio data - no API calls needed
const portfolioData = {
  description: "I'm Reuben Chagas Fernandes, an undergraduate student in Computer Science and Engineering (CSE) with expertise in various programming languages and frameworks, including ReactJS, NextJS, Generative AI, Flutter, TailwindCSS, Node.js, PHP, and Python. I have professional experience in Android application development and a strong passion for full-stack development, game development, UI/UX design, and Artificial Intelligence (AI). I'm deeply interested in Large Language Models (LLMs) and AI research, currently working on innovative projects in this field. I'm also actively developing a Konkani language project to preserve and promote my native language through technology. Additionally, I'm learning Japanese and Portuguese, reflecting my interest in exploring new cultures and languages.",
  projects: [
    {
      title: "Reo Bot",
      link: "https://www.youtube.com/watch?v=zo_UkXzAfLk",
      placeholder: "https://cdn.glitch.com/ad440fa6-74ef-412e-a436-c369122705f0%2Funtitled.png",
      date: "January 2022",
      description: "A versatile Discord bot designed to serve over 100 users by automating tasks, moderating chats, and providing engaging interactive features like mini-games and announcements.",
      stack: "Node.js, React.js, TailwindCSS, Three.js, MongoDB"
    },
    {
      title: "Apex Legends Stats Website",
      link: "https://apex-legends-tracker-reubencf.web.app/",
      placeholder: "https://i.pinimg.com/736x/5a/04/c2/5a04c2049b3188e35bf84e23dd6ae64a.jpg",
      date: "May 2022",
      description: "A website that provides real-time stats, player rankings, and map rotation schedules for the popular game Apex Legends. Users can easily access in-game data and insights to enhance their gaming strategies.",
      stack: "HTML, CSS, JavaScript"
    },
    {
      title: "ClearSkies",
      link: "https://clear-skies-production.up.railway.app/",
      placeholder: "https://cdn.glitch.global/ad440fa6-74ef-412e-a436-c369122705f0/cs.png",
      date: "February 2024",
      description: "A user-friendly weather platform catering to over 60 users. It offers accurate, real-time weather forecasts, location-based updates, and alerts, ensuring seamless access to weather-related insights.",
      stack: "React.js, OpenWeatherAPI, MongoDB"
    },
    {
      title: "Task Planner App",
      link: "https://youtu.be/hiJiTCYkdEo?list=PLULNFt50a7-T4PH3tcYLYFRlWcjwh73Ok",
      placeholder: "https://cdn.glitch.global/ad440fa6-74ef-412e-a436-c369122705f0/tp.png",
      date: "June 2024",
      description: "An innovative task management application developed for the Google Gemini contest, enabling users to create, organize, and track tasks with advanced AI-driven suggestions for productivity enhancement.",
      stack: "Flutter, Google Gemini API"
    },
    {
      title: "FakeInstagram",
      link: "https://www.youtube.com/shorts/F1qRNCr6Muc",
      placeholder: "https://cdn.glitch.global/ad440fa6-74ef-412e-a436-c369122705f0/fakeig.jpg",
      date: "August 2024",
      description: "An aesthetically accurate Instagram UI clone, demonstrating advanced knowledge of mobile design and responsive layouts. The project serves as a showcase of modern front-end design principles and practices.",
      stack: "Flutter"
    },
    {
      title: "Inspirus8",
      link: "https://inspirus8.netlify.app/",
      placeholder: "https://cdn.glitch.global/ad440fa6-74ef-412e-a436-c369122705f0/Screenshot_1.png",
      date: "September 2024",
      description: "The official event website designed to provide a visually engaging and interactive platform for showcasing event details, schedules, and multimedia content.",
      stack: "Next.js, Spline, TailwindCSS"
    },
    {
      title: "Land Records",
      link: "https://www.youtube.com/watch?v=XT5azi648I8",
      placeholder: "https://cdn.glitch.global/ad440fa6-74ef-412e-a436-c369122705f0/land.png",
      date: "November 2024",
      description: "A comprehensive land records management system that simplifies the storage, retrieval, and updating of land-related data with an intuitive interface and robust database handling.",
      stack: "Next.js, TailwindCSS, MySQL"
    },
    {
      title: "Shadows of Tomorrow",
      link: "https://youtu.be/-h46B68Cqz8",
      placeholder: "https://cdn.glitch.global/ad440fa6-74ef-412e-a436-c369122705f0/5.png",
      date: "January 2025",
      description: "A captivating 2D RPG game built with Godot 4. It features an immersive storyline, dynamic character interactions, and visually engaging gameplay enhanced by AWS Lambda and Bedrock for seamless backend support.",
      stack: "Godot 4, AWS Lambda, AWS Bedrock"
    }
  ]
};

export default function Home() {
  return (
    <div>
      <Hero />
      <About description={portfolioData.description} />
      <Projects projects={portfolioData.projects} />
      <TechStack />
      <Footer />
    </div>
  );
}
