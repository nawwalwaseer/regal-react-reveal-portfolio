
import { useRef, useEffect, useState, ReactNode } from "react";

interface Props {
  id?: string;
  children: ReactNode;
  className?: string;
  animationClass?: string;
}

export default function AnimatedSection({ id, children, className = "", animationClass = "animate-fade-in" }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.unobserve(node);
  }, []);

  return (
    <section
      ref={ref}
      id={id}
      className={`${className} transition-opacity duration-700 ${visible ? animationClass : "opacity-0 translate-y-6"}`}
    >
      {children}
    </section>
  );
}
