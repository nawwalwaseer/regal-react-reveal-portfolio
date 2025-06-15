
const experiences = [
  {
    role: "MERN Stack Developer",
    org: "Freelance - Remote",
    period: "2022 - Present",
    desc: "Led end-to-end MERN projects for global clients, delivering robust solutions with a user-first approach.",
  },
  {
    role: "Frontend Developer",
    org: "Tech Startup",
    period: "2021 - 2022",
    desc: "Developed scalable client-side features and UI components, improving engagement and user retention.",
  },
  {
    role: "Web Developer Intern",
    org: "PakDev Labs",
    period: "2020 - 2021",
    desc: "Assisted in building custom web applications, learning full-stack best practices and agile shipping.",
  },
];

export default function Experience() {
  return (
    <div id="experience" className="w-full max-w-4xl mx-auto py-16">
      <h3 className="text-3xl md:text-4xl font-bold text-gold mb-8 text-center font-heading">
        Work Experience
      </h3>
      <div className="relative border-l-2 border-gold pl-8 space-y-10">
        {experiences.map((exp, idx) => (
          <div key={exp.role} className="relative group">
            <div className="absolute -left-6 top-1 w-5 h-5 bg-gold rounded-full border-4 border-neutral-900"></div>
            <div className="bg-black/70 rounded-lg shadow-lg px-6 py-4 mb-2 hover:shadow-xl transition-shadow cursor-pointer">
              <div className="flex items-center justify-between mb-1">
                <span className="font-semibold text-lg">{exp.role}</span>
                <span className="text-xs text-gold bg-neutral-900 px-2 py-1 rounded font-mono">{exp.period}</span>
              </div>
              <div className="font-medium text-gray-300">{exp.org}</div>
              <div className="text-gray-400 text-sm mt-1">{exp.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
