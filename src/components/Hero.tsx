
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center min-h-[78vh] gap-8 pt-32 pb-28 section animate-fade-in"
    >
      <div className="w-full max-w-3xl text-center mx-auto">
        <h1 className="text-[2.85rem] md:text-[3.18rem] font-heading font-extrabold text-primary mb-3 drop-shadow tracking-tight">
          Nawwal Aftab Waseer
        </h1>
        <h2 className="text-2xl md:text-3xl font-heading text-foreground font-bold mb-2">
          MERN Stack Developer
        </h2>
        <div className="text-lg md:text-2xl text-muted-foreground font-body max-w-2xl mx-auto font-medium mb-8">
          A dedicated and results-driven MERN Developer passionate about building elegant, user-focused digital experiences. Specializes in creating responsive and dynamic web applications.
        </div>
        <a
          href="#resume"
          className="btn"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}
