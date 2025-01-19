
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/projects";
import TechStack from "@/components/stack";
export default function Home() {
  return (
    <div className="">
    <Hero/>
    <About/>
    <Projects/>
    <TechStack/>
    <Footer/>
    </div>
  );
}
