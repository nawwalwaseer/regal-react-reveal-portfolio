
import { useEffect, useRef, useState } from "react";

const HEADLINE = [
  "Passionate about code & design.",
  "Building modern MERN applications.",
  "Creating user-focused experiences.",
];

export default function Hero() {
  const [headline, setHeadline] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setHeadline(i => (i + 1) % HEADLINE.length);
    }, 2200);
    return () => intervalRef.current && clearInterval(intervalRef.current);
  }, []);

  return (
    <section id="home" className="pt-24 pb-32 min-h-[70vh] flex flex-col items-center justify-center bg-gradient-to-b from-black to-neutral-900 relative">
      <h1 className="text-4xl md:text-6xl font-extrabold text-gold leading-snug text-center font-heading mb-2 tracking-tight">
        Nawwal Aftab Waseer
      </h1>
      <h2 className="text-lg md:text-2xl font-light text-gray-200 tracking-wide mb-2">
        Turning ideas into reality
      </h2>
      <div className="h-7 relative mb-8 mt-2">
        <div className="text-xl md:text-2xl text-gold font-semibold transition-all" key={headline}>
          {HEADLINE[headline]}
        </div>
      </div>
      <a href="#skills" className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer">
        <span className="sr-only">Scroll Down</span>
        <svg className="h-8 w-8 text-gold animate-fade-in" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </a>
    </section>
  );
}
