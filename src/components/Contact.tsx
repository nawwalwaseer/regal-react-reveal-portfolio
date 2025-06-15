
import { useState } from "react";
import { Github, Linkedin, Twitter } from "lucide-react";

const socials = [
  { name: "GitHub", url: "https://github.com/nawwalwaseer", icon: Github },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/nawwal-aftab-waseer-826b97274", icon: Linkedin },
  { name: "Twitter", url: "https://x.com/nawwalw84448?s=11", icon: Twitter },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3600);
  }

  return (
    <div id="contact" className="section animate-fade-in mx-auto">
      <h3 className="section-title">Contact Me</h3>
      <form onSubmit={handleSubmit} className="card hover-glow mb-8 space-y-4 max-w-lg mx-auto p-7">
        <input
          className="w-full"
          type="text"
          name="name"
          placeholder="Your Name"
          required
        />
        <input
          className="w-full"
          type="email"
          name="email"
          placeholder="Your Email"
          required
        />
        <textarea
          className="w-full"
          name="message"
          rows={5}
          placeholder="Your Message"
          required
        />
        <button
          className="w-full btn"
          type="submit"
        >
          {submitted ? "Message Sent!" : "Send Message"}
        </button>
      </form>
      <div className="text-center mb-6 text-lg text-muted-foreground">
        <div>Email: <a href="mailto:waseernawwal@gmail.com" className="text-primary hover:underline">waseernawwal@gmail.com</a></div>
        <div>WhatsApp / Phone: <a href="https://wa.me/923164900961" target="_blank" rel="noopener" className="text-primary hover:underline">+92 316 4900961</a></div>
      </div>
      <div className="flex justify-center gap-8">
        {socials.map(s => (
          <a key={s.name} href={s.url} target="_blank" rel="noopener" aria-label={s.name} className="nav-link text-xl">
            <s.icon size={28} />
          </a>
        ))}
      </div>
    </div>
  );
}
