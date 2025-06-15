
import { ThemeToggle } from "./ThemeToggle";
import { Github, Linkedin, Twitter } from "lucide-react";

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
  { label: "Achievements", section: "achievements" },
  { label: "Projects", section: "projects" },
  { label: "Resume", section: "resume" },
  { label: "Contact", section: "contact" },
];

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 w-full bg-black/70 backdrop-blur border-b border-border">
      <nav className="max-w-7xl mx-auto flex justify-between items-center py-2 px-4">
        <div className="text-lg font-semibold text-gold tracking-wide cursor-pointer select-none" onClick={() => scrollToSection("home")}>
          Nawwal Aftab Waseer
        </div>
        <ul className="hidden md:flex gap-5 text-base font-medium">
          {navLinks.map(link => (
            <li key={link.section}>
              <button className="hover:text-gold transition-colors duration-200" onClick={() => scrollToSection(link.section)}>
                {link.label}
              </button>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          {socials.map(s => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener"
              className="hover:text-gold transition-colors"
              aria-label={s.name}
            >
              <s.icon size={22} />
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
