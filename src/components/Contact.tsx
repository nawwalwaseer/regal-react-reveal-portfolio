
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
    <div id="contact" className="w-full max-w-lg mx-auto py-16">
      <h3 className="text-3xl md:text-4xl font-bold text-gold mb-6 text-center font-heading">Contact Me</h3>
      <form onSubmit={handleSubmit} className="bg-black/80 border border-gold/20 rounded-lg shadow-xl p-7 mb-8 space-y-4">
        <input
          className="w-full px-4 py-3 rounded bg-neutral-900 border border-gold/20 text-white placeholder-gray-400 focus:outline-gold"
          type="text"
          name="name"
          placeholder="Your Name"
          required
        />
        <input
          className="w-full px-4 py-3 rounded bg-neutral-900 border border-gold/20 text-white placeholder-gray-400 focus:outline-gold"
          type="email"
          name="email"
          placeholder="Your Email"
          required
        />
        <textarea
          className="w-full px-4 py-3 rounded bg-neutral-900 border border-gold/20 text-white placeholder-gray-400 focus:outline-gold"
          name="message"
          rows={5}
          placeholder="Your Message"
          required
        />
        <button
          className="w-full bg-gold text-neutral-900 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gold/90 transition-all border border-gold"
          type="submit"
        >
          {submitted ? "Message Sent!" : "Send Message"}
        </button>
      </form>
      <div className="text-center mb-4 text-lg text-gray-300">
        <div>Email: <a href="mailto:waseernawwal@gmail.com" className="text-gold hover:underline">waseernawwal@gmail.com</a></div>
        <div>WhatsApp / Phone: <a href="https://wa.me/923164900961" target="_blank" rel="noopener" className="text-gold hover:underline">+92 316 4900961</a></div>
      </div>
      <div className="flex justify-center gap-6">
        {socials.map(s => (
          <a key={s.name} href={s.url} target="_blank" rel="noopener" aria-label={s.name} className="text-gold hover:text-white transition-colors">
            <s.icon size={24} />
          </a>
        ))}
      </div>
    </div>
  );
}
