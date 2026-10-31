"use client";

import { useState } from "react";

const links = [
  { n: "01", label: "About", href: "#about" },
  { n: "02", label: "Work", href: "#work" },
  { n: "03", label: "Stack", href: "#stack" },
  { n: "04", label: "Log", href: "#log" },
  { n: "05", label: "Contact", href: "#contact" },
];
export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-red-500/20 bg-bg/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="font-head text-xl">
          <span className="text-accent">&lt;</span>SA
          <span className="text-accent">/&gt;</span>
        </a>

        <nav className="hidden gap-8 text-sm md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-muted transition hover:text-accent2"
            >
              <span className="font-head text-accent2">{l.n}.</span> {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-full border border-red-500/40 bg-red-500/5 px-5 py-2 font-head text-sm transition hover:bg-red-500/15 md:block"
        >
          Hire me →
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="font-head text-accent md:hidden"
          aria-label="Menu"
        >
          {open ? "[ X ]" : "[ = ]"}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-4 border-t border-red-500/20 px-6 py-4 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-muted hover:text-accent2"
            >
              <span className="font-head text-accent2">{l.n}.</span> {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}