const items = [
  "HTML", "CSS", "JavaScript", "React", "Next.js", "Node.js",
  "Express", "MongoDB", "Tailwind CSS", "Three.js", "GSAP", "Git",
];

export default function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="marquee relative z-10 overflow-hidden border-y border-red-500/20 bg-white/2 py-5">
      <div className="marquee-track gap-8 font-head text-lg text-muted">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-8 whitespace-nowrap">
            {t} <span className="text-accent">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
