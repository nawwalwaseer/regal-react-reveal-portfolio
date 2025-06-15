
const achievements = [
  "Successfully launched 20+ full-stack applications.",
  "Recognized as Top-Rated Freelancer on Upwork with 100% job success.",
  "Created and contributed to open source MERN templates.",
  "Mentored junior devs in modern best practices.",
];

export default function Achievements() {
  return (
    <div id="achievements" className="w-full max-w-3xl mx-auto py-16">
      <h3 className="text-3xl md:text-4xl font-bold text-gold mb-8 text-center font-heading">
        Achievements
      </h3>
      <ul className="grid md:grid-cols-2 gap-6">
        {achievements.map((a, i) => (
          <li
            key={i}
            className="bg-black/75 border-l-4 border-gold px-5 py-6 rounded-lg shadow-md text-lg text-gray-200 hover:scale-105 hover:bg-gold/20 transition-all"
          >
            {a}
          </li>
        ))}
      </ul>
    </div>
  );
}
