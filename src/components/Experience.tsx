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
    <div id="experience" className="section animate-fade-in">
      <h3 className="section-title">Work Experience</h3>
      <div className="flex flex-col gap-6">
        {experiences.map((exp, idx) => (
          <div
            key={exp.role + idx}
            className="card hover-glow p-7 flex flex-col md:flex-row items-start gap-4 animate-fade-in"
          >
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-1">
                <span className="card-title">{exp.role}</span>
                <span className="text-xs text-primary bg-muted px-2 py-1 rounded-lg font-mono font-body">{exp.period}</span>
              </div>
              <div className="font-medium text-muted-foreground">{exp.org}</div>
              <div className="text-muted-foreground/90 text-sm mt-1">{exp.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
