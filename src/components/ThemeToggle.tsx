
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  
  useEffect(() => {
    if (
      (theme === "dark") ||
      (theme !== "light" && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
  }, [theme]);

  return (
    <button
      className="border border-border rounded-full p-2 bg-black/80 hover:bg-gold/10 transition-colors"
      title="Toggle dark/light theme"
      aria-label="Toggle dark/light theme"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? <Sun size={18} className="text-gold" /> : <Moon size={18} className="text-primary" />}
    </button>
  );
}
