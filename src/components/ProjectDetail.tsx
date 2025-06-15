
import { useParams, useNavigate } from "react-router-dom";

const projects = [
  {
    id: "1",
    title: "Ecommerce Platform",
    desc: "A complete, scalable ecommerce solution built with the MERN stack, featuring product management, authentication, payment integration, and custom analytics dashboard.",
    tech: ["React", "Redux", "Node.js", "MongoDB"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200",
  },
  {
    id: "2",
    title: "Portfolio Website",
    desc: "A visually attractive portfolio platform to showcase developer skills, packed with lively animations and optimized for SEO and performance.",
    tech: ["React", "Framer Motion", "Vite"],
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=1200",
  },
  {
    id: "3",
    title: "Admin Dashboard",
    desc: "A modern admin dashboard with real-time updates, user and role management, and dynamic data charts. Focused on UX and operational efficiency.",
    tech: ["React", "Recharts", "Node.js"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200",
  },
  {
    id: "4",
    title: "Chat App",
    desc: "Reliable chat web application offering instant messaging, notifications, user presence, and responsive design across all devices.",
    tech: ["React", "Socket.io", "Express", "MongoDB"],
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200",
  },
];

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);
  const navigate = useNavigate();

  if (!project)
    return (
      <div className="text-center pt-40">
        <div className="text-xl text-red-500 mb-4">Project Not Found</div>
        <button
          className="px-4 py-2 bg-gold text-neutral-900 rounded hover:bg-gold/80 font-semibold"
          onClick={() => navigate("/#projects")}
        >
          Return to Projects
        </button>
      </div>
    );

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-start pt-24 px-4">
      <button
        onClick={() => navigate("/#projects")}
        className="mb-7 px-4 py-1.5 bg-gold/15 text-gold rounded hover:bg-gold/25 transition self-start"
      >
        ← Back to Projects
      </button>
      <div className="max-w-3xl w-full bg-neutral-900/95 border border-gold/20 rounded-xl shadow-md p-7">
        <img src={project.image} alt={project.title} className="rounded-lg w-full mb-6 shadow" />
        <h1 className="text-3xl md:text-4xl font-bold text-gold mb-3 font-heading">{project.title}</h1>
        <div className="text-gray-300 mb-5">{project.desc}</div>
        <div className="flex gap-2 flex-wrap mb-4">
          {project.tech.map(t => (
            <span key={t} className="bg-gold/10 text-gold px-3 py-1 rounded-full text-xs font-mono border border-gold/20">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
