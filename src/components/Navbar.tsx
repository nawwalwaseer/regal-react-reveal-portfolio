
import { useState } from "react";
import { Github, Linkedin, Twitter } from "lucide-react";
import Burger from "./ui/Burger";

const socials = [
  {
    name: "GitHub",
    url: "https://github.com/nawwalwaseer",
    icon: Github,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/nawwal-aftab-waseer-826b97274",
    icon: Linkedin,
  },
  {
    name: "Twitter",
    url: "https://x.com/nawwalw84448?s=11",
    icon: Twitter,
  },
];

const navLinks = [
  { label: "Home", section: "home" },
  { label: "Skills", section: "skills" },
  { label: "Experience", section: "experience" },
  { label: "Projects", section: "projects" },
  { label: "Achievements", section: "achievements" },
  { label: "Resume", section: "resume" },
  { label: "Contact", section: "contact" },
];

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/85 dark:bg-background/90 backdrop-blur border-b border-muted-foreground shadow">
      <nav className="max-w-7xl mx-auto flex justify-between items-center py-2 px-4 relative">
        <div className="flex items-center">
          <div
            className="text-2xl md:text-3xl font-heading font-bold text-primary tracking-tighter select-none cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            NawwalAftab.dev
          </div>
        </div>
        <ul className="hidden md:flex gap-2 lg:gap-5 text-base font-semibold">
          {navLinks.map(link => (
            <li key={link.section}>
              <button
                className="nav-link"
                onClick={() => scrollToSection(link.section)}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
        <div className="flex items-center ml-4 gap-1">
          {socials.map(s => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener"
              className="nav-link px-2"
              aria-label={s.name}
            >
              <s.icon size={22} />
            </a>
          ))}
          <Burger open={navOpen} setOpen={setNavOpen} />
        </div>
        {/* Mobile menu */}
        {navOpen && (
          <div className="absolute right-5 top-16 md:hidden bg-card shadow-lg rounded-2xl p-6 animate-fade-in w-[90vw] max-w-xs z-50 border">
            <ul className="flex flex-col gap-2">
              {navLinks.map(link => (
                <li key={link.section}>
                  <button
                    className="nav-link w-full text-left text-lg"
                    onClick={() => {
                      setNavOpen(false);
                      scrollToSection(link.section);
                    }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
