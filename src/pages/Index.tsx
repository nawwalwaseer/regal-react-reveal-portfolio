import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AnimatedSection from "@/components/AnimatedSection";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Achievements from "@/components/Achievements";
import Projects from "@/components/Projects";
import ResumeDownload from "@/components/ResumeDownload";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="bg-black min-h-screen font-body text-white">
      <Navbar />
      <main className="w-full">
        <Hero />
        <AnimatedSection id="skills"><Skills /></AnimatedSection>
        <AnimatedSection id="experience"><Experience /></AnimatedSection>
        <AnimatedSection id="education"><Education /></AnimatedSection>
        <AnimatedSection id="achievements"><Achievements /></AnimatedSection>
        <AnimatedSection id="projects"><Projects /></AnimatedSection>
        <AnimatedSection id="resume"><ResumeDownload /></AnimatedSection>
        <AnimatedSection id="contact"><Contact /></AnimatedSection>
        <footer className="py-8 text-center text-gray-500 text-sm font-medium">
          &copy; {new Date().getFullYear()} Nawwal Aftab Waseer. All rights reserved.
        </footer>
      </main>
    </div>
  );
};

export default Index;
