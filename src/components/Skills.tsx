
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
    <div id="skills" className="section animate-fade-in">
      <h3 className="section-title">Skills &amp; Tools</h3>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-end">
        {data.map((d, i) => (
          <div key={d.label} className="flex flex-col items-center card hover-glow py-6 animate-fade-in">
            <div className="bg-primary/10 border-2 border-primary rounded-full p-4 mb-4 group-hover:scale-110 transition-transform shadow">
              <d.icon color={d.color} size={38} />
            </div>
            <div className="font-semibold text-primary font-heading text-lg">{d.label}</div>
            <div className="w-full mt-2 h-2 bg-muted rounded-xl overflow-hidden">
              <div
                className="bg-primary h-2 rounded-xl transition-all"
                style={{ width: `${counts[i]}%`, transition: "width 1.1s cubic-bezier(.6,.3,0,1)" }}
              ></div>
            </div>
            <div className="text-xs text-muted-foreground mt-1 tracking-widest">{counts[i]}%</div>
          </div>
        ))}
      </div>
    </div>
  );
}
