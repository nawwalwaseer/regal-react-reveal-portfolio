import React from "react";

const certificates = [
  {
    img: "/assets/certificate1.jpg",
    institute: "Coursera – Meta Front-End Certificate",
    desc: "Comprehensive training on modern frontend practices using React, CSS, and JavaScript.",
  },
  {
    img: "/assets/certificate2.jpg",
    institute: "Udemy – MERN Stack Mastery",
    desc: "Intensive bootcamp on MongoDB, Express, React, and Node.js with real-world projects.",
  },
  {
    img: "/assets/certificate3.jpg",
    institute: "freeCodeCamp – Responsive Web Design",
    desc: "Built advanced layouts and ensured cross-device accessibility using the latest web standards.",
  },
];

export default function Achievements() {
  return (
    <div id="achievements">
      <h3 className="section-title">Achievements</h3>
      <div className="flex flex-col md:flex-row justify-center gap-8">
        {certificates.map(({ img, institute, desc }, i) => (
          <div
            key={i}
            className="card flex flex-col items-center px-4 py-6 w-full md:w-1/3 hover:bg-primary/10 transition"
          >
            <div className="w-full flex justify-center mb-4">
              <img
                src={img}
                alt={`${institute} certificate`}
                className="rounded-lg shadow aspect-[3/2] object-cover w-full max-w-[320px] border border-primary/20"
                loading="lazy"
              />
            </div>
            <div className="mt-2 text-primary font-bold text-lg text-center font-heading">{institute}</div>
            <div className="text-muted-foreground text-center text-sm mt-2">{desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
