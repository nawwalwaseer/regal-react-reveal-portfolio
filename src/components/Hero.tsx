
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
    <section
      id="home"
      className="pt-28 pb-32 min-h-[70vh] flex flex-col items-center justify-center bg-gradient-to-b from-primary/10 to-muted relative rounded-2xl shadow mb-10"
    >
      <h1 className="text-5xl md:text-6xl font-heading font-bold text-primary leading-tight text-center mb-4 tracking-tight drop-shadow">
        Nawwal Aftab Waseer
      </h1>
      <h2 className="text-lg md:text-2xl font-body font-normal text-muted-foreground tracking-wide mb-2">
        Turning ideas into reality
      </h2>
      <div className="h-7 relative mb-8 mt-2">
        <div className="text-xl md:text-2xl text-primary font-heading font-semibold transition-all" key={headline}>
          {HEADLINE[headline]}
        </div>
      </div>
      <a
        href="#skills"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
      >
        <span className="sr-only">Scroll Down</span>
        <svg className="h-8 w-8 text-primary animate-fade-in" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </a>
    </section>
  );
}
