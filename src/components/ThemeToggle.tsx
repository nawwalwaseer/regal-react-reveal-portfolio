
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

// Utilities to set theme (root class) and persist in localStorage
function setRootTheme(theme: "dark" | "light") {
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("light");
  } else {
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.add("light");
  }
  localStorage.setItem("theme", theme);
}

function getInitialTheme(): "dark" | "light" {
  // Check localStorage
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem("theme");
    if (stored === "dark" || stored === "light") return stored;
    // Check prefers-color-scheme
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) return "dark";
  }
  return "light";
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">(getInitialTheme());

  useEffect(() => {
    setRootTheme(theme);
  }, [theme]);

  return (
    <button
      className="border border-border rounded-full p-2 bg-black/80 hover:bg-gold/10 transition-colors"
      title="Toggle dark/light theme"
      aria-label="Toggle dark/light theme"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <Sun size={18} className="text-gold" />
      ) : (
        <Moon size={18} className="text-primary" />
      )}
    </button>
  );
}
