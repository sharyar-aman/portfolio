"use client";

import { useEffect, useState } from "react";

const lines = [
  "$ initializing portfolio...",
  "$ loading modules [ok]",
  "$ compiling styles [ok]",
  "$ ready — welcome ▌",
];

export default function BootLoader() {
  const [shown, setShown] = useState(0);
  const [pct, setPct] = useState(0);
  const [fade, setFade] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const timers = lines.map((_, i) => setTimeout(() => setShown(i + 1), i * 350));
    const p = setInterval(
      () => setPct((v) => Math.min(100, v + Math.random() * 22)),
      180
    );
    const f = setTimeout(() => {
      setPct(100);
      setFade(true);
    }, 1500);
    const g = setTimeout(() => {
      setGone(true);
      document.body.style.overflow = "";
    }, 2100);
    return () => {
      timers.forEach(clearTimeout);
      clearInterval(p);
      clearTimeout(f);
      clearTimeout(g);
      document.body.style.overflow = "";
    };
  }, []);

  if (gone) return null;

  return (
    <div
      className={`fixed inset-0 z-100 flex flex-col items-center justify-center gap-6 bg-bg transition-opacity duration-500 ${
        fade ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="w-72 space-y-2 font-head text-sm text-accent2">
        {lines.slice(0, shown).map((l) => (
          <p key={l}>{l}</p>
        ))}
      </div>
      <div className="h-0.5 w-56 overflow-hidden rounded bg-white/10">
        <div
          className="h-full bg-linear-to-r from-accent to-accent2 transition-all duration-200"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}