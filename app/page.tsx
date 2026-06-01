import { HeroSection } from '@/components/portfolio/sections/HeroSection';
import dynamic from 'next/dynamic';

const MarqueeSection = dynamic(() =>
  import('@/components/portfolio/sections/MarqueeSection').then((m) => m.MarqueeSection)
);
const AboutSection = dynamic(() =>
  import('@/components/portfolio/sections/AboutSection').then((m) => m.AboutSection)
);
const ProjectsSection = dynamic(() =>
  import('@/components/portfolio/sections/ProjectsSection').then((m) => m.ProjectsSection)
);
const ContactSection = dynamic(() =>
  import('@/components/portfolio/sections/ContactSection').then((m) => m.ContactSection)
);
const Footer = dynamic(() =>
  import('@/components/portfolio/sections/Footer').then((m) => m.Footer)
);

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
