
import React from "react";

export default function Burger({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (b: boolean) => void;
}) {
  return (
    <button
      className="burger"
      aria-label={open ? "Close Navigation" : "Open Navigation"}
      aria-expanded={open}
      onClick={() => setOpen(!open)}
    >
      <span className={`burger-line ${open ? "rotate-45 translate-y-2" : ""}`} />
      <span className={`burger-line ${open ? "opacity-0" : ""}`} />
      <span className={`burger-line ${open ? "-rotate-45 -translate-y-2" : ""}`} />
    </button>
  );
}
