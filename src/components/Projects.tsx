
import { useNavigate } from "react-router-dom";

const projectList = [
  {
    id: "1",
    title: "Ecommerce Platform",
    desc: "Full MERN ecommerce site with custom dashboard and payment.",
    tech: ["React", "Redux", "Node.js", "MongoDB"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
  },
  {
    id: "2",
    title: "Portfolio Website",
    desc: "Animated developer portfolio with smooth transitions and SEO.",
    tech: ["React", "Framer Motion", "Vite"],
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800",
  },
  {
    id: "3",
    title: "Admin Dashboard",
    desc: "Role-based dashboard with real-time charts and management.",
    tech: ["React", "Recharts", "Node.js"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800",
  },
  {
    id: "4",
    title: "Chat App",
    desc: "Instant messaging web app with notifications and presence.",
    tech: ["React", "Socket.io", "Express", "MongoDB"],
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800",
  },
];

export default function Projects() {
  const navigate = useNavigate();

  return (
    <div id="projects" className="w-full max-w-6xl mx-auto py-16">
      <h3 className="text-3xl md:text-4xl font-bold text-gold mb-8 text-center font-heading">
        Projects
      </h3>
      <div className="grid md:grid-cols-2 gap-8">
        {projectList.map(p => (
          <div
            key={p.id}
            className="bg-black/80 border border-gold/30 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group cursor-pointer flex flex-col"
            onClick={() => navigate(`/project/${p.id}`)}
          >
            <img src={p.image} alt={p.title} className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
            <div className="p-5 flex-1 flex flex-col">
              <div className="text-xl font-semibold text-gold mb-1 font-heading">{p.title}</div>
              <div className="text-gray-300 mb-2">{p.desc}</div>
              <div className="flex gap-2 flex-wrap mt-auto">
                {p.tech.map(t => (
                  <span key={t} className="bg-gold/10 text-gold px-3 py-1 rounded-full text-xs font-mono border border-gold/20">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
