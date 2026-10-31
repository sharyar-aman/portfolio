"use client";

import { useEffect, useState } from "react";
import Tilt from "@/components/Tilt";
import MagneticLink from "@/components/MagneticLink";

const tabs = {
  "about.js": `const developer = {
  name: 'Sharyar Aman',
  role: 'Full-Stack Developer',
  stack: ['HTML', 'JS', 'Node'],
  learning: 'React + Next.js',
  available: true
};`,
  "skills.json": `{
  "frontend": ["HTML", "CSS", "JS", "React"],
  "backend": ["Node", "Express", "MongoDB"],
  "learning": "Next.js"
}`,
} as const;

type Tab = keyof typeof tabs;

function highlight(text: string) {
  const parts = text.split(/('[^']*'|"[^"]*"|\b(?:const|true|false)\b|\w+(?=['"]?:))/);
  return parts.map((p, i) => {
    if (/^['"]/.test(p)) return <span key={i} className="text-accent2">{p}</span>;
    if (/^(const|true|false)$/.test(p)) return <span key={i} className="text-[#ff8f6b]">{p}</span>;
    if (/^\w+$/.test(p) && parts[i + 1] === undefined) return p;
    if (i % 2 === 1) return <span key={i} className="text-[#f6c452]">{p}</span>;
    return p;
  });
}

export default function Hero() {
  const [tab, setTab] = useState<Tab>("about.js");
  const [text, setText] = useState("");
  const [clock, setClock] = useState("");

  useEffect(() => {
    const code: string = tabs[tab];
    let i = 0;
    setText("");
    const id = setInterval(() => {
      i++;
      setText(code.slice(0, i));
      if (i >= code.length) clearInterval(id);
    }, 14);
    return () => clearInterval(id);
  }, [tab]);

  useEffect(() => {
    const tick = () => setClock(new Date().toLocaleTimeString("en-GB"));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative mx-auto flex min-h-screen max-w-6xl flex-wrap items-center gap-14 px-6 pt-28 pb-24">
      <div className="min-w-0 flex-1 basis-105">
        <p className="mb-6 flex items-center gap-3 font-head text-sm text-accent2">
          <span className="size-2 animate-pulse rounded-full bg-accent2 shadow-[0_0_10px_#ff6a3d]" />
          {"// available for freelance work"}
        </p>

        <h1 className="scanlines relative mb-6 font-head text-4xl leading-tight uppercase sm:text-5xl lg:text-6xl">
          <span className="neon flicker block" style={{ animationDelay: "0s" }}>I build things</span>
          <span className="neon flicker block" style={{ animationDelay: "1.2s" }}>that live on</span>
          <span className="neon-outline flicker block" style={{ animationDelay: "2.4s" }}>the internet.</span>
        </h1>

        <p className="mb-8 max-w-lg text-muted">
          I&apos;m Sharyar Aman. I study, and I build full-stack web apps with
          HTML, CSS, JavaScript, React and Node. Everything below is something
          I actually made.
        </p>

        <div className="mb-10 flex flex-wrap gap-4">
          <MagneticLink
            href="#work"
            className="relative overflow-hidden rounded-lg bg-linear-to-r from-accent to-red-800 px-7 py-3.5 font-head text-white shadow-[0_8px_24px_-8px_rgba(255,43,63,0.5)]"
          >
            View my work
          </MagneticLink>
          <a
            href="#contact"
            className="rounded-lg border border-red-500/40 bg-red-500/5 px-7 py-3.5 font-head transition hover:border-accent2"
          >
            Contact me
          </a>
        </div>

        <div className="flex gap-10 font-head">
          <div><p className="text-3xl text-accent">6</p><p className="text-xs text-muted">projects built</p></div>
          <div><p className="text-3xl text-accent">14</p><p className="text-xs text-muted">technologies</p></div>
          <div><p className="text-3xl text-accent">Open</p><p className="text-xs text-muted">to freelance</p></div>
        </div>
      </div>

      <Tilt className="min-w-0 flex-1 basis-95">
        <div className="glow-border overflow-hidden rounded-2xl border border-red-500/20 bg-[#0b0707]/90 shadow-[0_12px_40px_-12px_rgba(255,43,63,0.3)] backdrop-blur-xl">
          <div className="flex items-center gap-4 border-b border-red-500/20 bg-white/5 px-4 py-3">
            <div className="flex gap-2">
              <span className="size-3 rounded-full bg-[#f6707c]" />
              <span className="size-3 rounded-full bg-[#f6c452]" />
              <span className="size-3 rounded-full bg-accent2" />
            </div>
            <div className="flex gap-2">
              {(Object.keys(tabs) as Tab[]).map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`rounded px-2.5 py-0.5 font-head text-xs transition ${
                    tab === t ? "bg-white/10 text-white" : "text-muted hover:text-white"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
          <pre className="min-h-75 whitespace-pre-wrap p-6 font-head text-sm leading-8 text-gray-200 sm:text-base">
            {highlight(text)}
            <span className="cursor text-accent2">▌</span>
          </pre>
          <div className="flex gap-5 border-t border-red-500/20 bg-white/5 px-4 py-2 font-head text-xs text-muted">
            <span className="text-accent2">● main</span>
            <span>UTF-8</span>
            <span>JavaScript</span>
            <span className="ml-auto">{clock}</span>
          </div>
        </div>
      </Tilt>

      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 font-head text-xs text-muted md:flex">
        scroll
        <span className="relative h-10 w-px bg-white/20">
          <span className="drop absolute left-1/2 size-1.5 -translate-x-1/2 rounded-full bg-accent" />
        </span>
      </div>
    </section>
  );
}