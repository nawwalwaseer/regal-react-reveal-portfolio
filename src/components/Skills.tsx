
import { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, ResponsiveContainer, Cell } from "recharts";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiGit,
} from "react-icons/si";

const data = [
  { label: "React.js", level: 90, icon: SiReact, color: "#61dafb" },
  { label: "Node.js", level: 85, icon: SiNodedotjs, color: "#80bd01" },
  { label: "Express.js", level: 80, icon: SiExpress, color: "#fff" },
  { label: "MongoDB", level: 75, icon: SiMongodb, color: "#13aa52" },
  { label: "TypeScript", level: 80, icon: SiTypescript, color: "#3178c6" },
  { label: "JavaScript", level: 90, icon: SiJavascript, color: "#f7df1e" },
  { label: "HTML5", level: 95, icon: SiHtml5, color: "#e34c26" },
  { label: "CSS3", level: 85, icon: SiCss3, color: "#2965f1" },
  { label: "Git", level: 80, icon: SiGit, color: "#f34f29" },
];

function useAnimatedLevels(levels: number[]) {
  const [counts, setCounts] = useState(Array(levels.length).fill(0));
  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prev) =>
        prev.map((val, i) =>
          val < levels[i] ? Math.min(val + Math.ceil((levels[i] - val) / 9), levels[i]) : val
        )
      );
    }, 30);
    if (counts.every((val, i) => val === levels[i])) clearInterval(interval);
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, [counts, levels]);
  return counts;
}

export default function Skills() {
  const levels = data.map(d => d.level);
  const counts = useAnimatedLevels(levels);

  return (
    <div id="skills" className="w-full max-w-5xl mx-auto py-16">
      <h3 className="text-3xl md:text-4xl font-bold text-gold mb-8 text-center font-heading">Skills & Tools</h3>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-end">
        {data.map((d, i) => (
          <div key={d.label} className="flex flex-col items-center group">
            <div className="bg-black/80 border border-gold rounded-full p-5 mb-4 group-hover:scale-110 transition-transform shadow-lg">
              <d.icon color={d.color} size={38} />
            </div>
            <div className="font-semibold text-gold group-hover:text-white transition-colors">{d.label}</div>
            <div className="w-full mt-2 h-2 bg-neutral-800 rounded">
              <div
                className="bg-gold h-2 rounded transition-all"
                style={{ width: `${counts[i]}%`, transition: "width 1.1s cubic-bezier(.6,.3,0,1)" }}
              ></div>
            </div>
            <div className="text-xs text-gray-400 mt-1">{counts[i]}%</div>
          </div>
        ))}
      </div>
    </div>
  );
}
