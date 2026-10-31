const groups = [
  {
    title: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "React (learning)", "Next.js (learning)"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "MongoDB"],
  },
  {
    title: "3D & Motion",
    items: ["Three.js", "GSAP"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "VS Code"],
  },
];

export default function Stack() {
  return (
    <section id="stack" className="mx-auto max-w-6xl px-6 py-24">
      <p className="mb-3 font-head text-sm text-accent2">
        <span className="text-muted">03</span> Tech stack
      </p>
      <h2 className="mb-10 font-head text-3xl sm:text-4xl">
        What I <span className="text-accent">work with.</span>
      </h2>

      <div className="grid gap-6 sm:grid-cols-2">
        {groups.map((g) => (
          <div
            key={g.title}
            className="rounded-2xl border border-red-500/25 bg-red-500/5 p-6"
          >
            <h3 className="mb-4 font-head text-lg">{g.title}</h3>
            <div className="flex flex-wrap gap-2">
              {g.items.map((it) => (
                <span
                  key={it}
                  className="rounded-full bg-accent2/20 px-3 py-1 font-head text-xs text-accent2"
                >
                  {it}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}