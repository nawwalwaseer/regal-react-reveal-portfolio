
import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const socials = [
    { name: "GitHub", url: "https://github.com/nawwalwaseer", icon: Github },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/nawwal-aftab-waseer-826b97274", icon: Linkedin },
    { name: "Twitter", url: "https://x.com/nawwalw84448?s=11", icon: Twitter },
  ];

  return (
    <footer className="py-8 text-center mt-5 flex flex-col items-center bg-transparent">
      <div className="text-xl mb-4 flex gap-6 justify-center">
        {socials.map(s => (
          <a
            key={s.name}
            href={s.url}
            target="_blank"
            rel="noopener"
            className="text-primary hover:text-accent transition-colors"
            aria-label={s.name}
          >
            <s.icon size={26} />
          </a>
        ))}
      </div>
      <div className="text-sm text-muted-foreground font-medium">
        &copy; {new Date().getFullYear()} Nawwal Aftab Waseer. All rights reserved.
      </div>
    </footer>
  );
}
