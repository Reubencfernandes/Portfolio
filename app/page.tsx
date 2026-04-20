import { HeroSection } from '@/components/portfolio/sections/HeroSection';
import { MarqueeSection } from '@/components/portfolio/sections/MarqueeSection';
import { AboutSection } from '@/components/portfolio/sections/AboutSection';
import { ProjectsSection } from '@/components/portfolio/sections/ProjectsSection';
import { ContactSection } from '@/components/portfolio/sections/ContactSection';
import { Footer } from '@/components/portfolio/sections/Footer';

export default function Home() {
  return (
    <main className="w-full bg-[#0C0C0C]">
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
