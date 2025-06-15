
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
  // Education entry
  {
    role: "Bachelors in Computer Science",
    org: "University of Management and Technology",
    period: "Nov 2021 - Jul 2025",
    desc: (
      <>
        <div className="flex items-center gap-2 mb-1">
          <img
            alt="UMT Logo"
            src="data:image/png;base64,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"
            className="w-9 h-9 rounded-full border border-gold/30"
          />
          <span className="text-gold font-semibold text-base">University of Management and Technology</span>
        </div>
        <div className="text-gray-200 text-sm leading-relaxed">
          CGPA: 3.4+ &nbsp; | &nbsp; Concentration: Web Development<br />
          Scholarship throughout. FYP: <span className="italic">Posify AI</span>
        </div>
      </>
    ),
  },
];

export default function Experience() {
  return (
    <div id="experience" className="w-full max-w-4xl mx-auto py-16">
      <h3 className="text-3xl md:text-4xl font-bold text-gold mb-8 text-center font-heading">
        Work Experience &amp; Education
      </h3>
      <div className="relative border-l-2 border-gold pl-8 space-y-10">
        {experiences.map((exp, idx) => (
          <div key={exp.role + idx} className="relative group">
            <div className="absolute -left-6 top-1 w-5 h-5 bg-gold rounded-full border-4 border-neutral-900"></div>
            <div className="bg-black/70 rounded-lg shadow-lg px-6 py-4 mb-2 hover:shadow-xl transition-shadow cursor-pointer">
              <div className="flex items-center justify-between mb-1">
                <span className="font-semibold text-lg">{exp.role}</span>
                <span className="text-xs text-gold bg-neutral-900 px-2 py-1 rounded font-mono">{exp.period}</span>
              </div>
              <div className="font-medium text-gray-300">{exp.org}</div>
              <div className="text-gray-400 text-sm mt-1">{typeof exp.desc === "string" ? exp.desc : exp.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
