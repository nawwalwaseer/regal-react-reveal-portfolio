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
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="bg-background min-h-screen font-body text-foreground">
      <Navbar />
      <main className="w-full px-3 md:px-6 pt-0 lg:pt-2">
        <Hero />
        <AnimatedSection id="skills" className="section"><Skills /></AnimatedSection>
        <AnimatedSection id="experience" className="section"><Experience /></AnimatedSection>
        <AnimatedSection id="education" className="section"><Education /></AnimatedSection>
        <AnimatedSection id="achievements" className="section"><Achievements /></AnimatedSection>
        <AnimatedSection id="projects" className="section"><Projects /></AnimatedSection>
        <AnimatedSection id="resume" className="section"><ResumeDownload /></AnimatedSection>
        <AnimatedSection id="contact" className="section"><Contact /></AnimatedSection>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
