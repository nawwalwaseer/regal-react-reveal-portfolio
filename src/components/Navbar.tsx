
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
    <header className="sticky top-0 z-30 w-full bg-white/90 dark:bg-black/70 backdrop-blur border-b border-muted-foreground shadow-sm">
      <nav className="max-w-7xl mx-auto flex justify-between items-center py-4 px-4">
        <div className="text-2xl font-heading font-bold text-primary tracking-tight cursor-pointer select-none"
          onClick={() => scrollToSection("home")}>
          Nawwal Aftab Waseer
        </div>
        <ul className="hidden md:flex gap-4 text-base font-semibold">
          {navLinks.map(link => (
            <li key={link.section}>
              <button className="btn-ghost transition" onClick={() => scrollToSection(link.section)}>
                {link.label}
              </button>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          {socials.map(s => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener"
              className="text-primary hover:text-accent/90 transition-colors"
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
