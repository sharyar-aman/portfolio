const steps = [
  { tag: "step-01", title: "HTML & CSS", text: "Started building static pages and responsive layouts." },
  { tag: "step-02", title: "JavaScript", text: "Calculator, DOM projects and interactive interfaces." },
  { tag: "step-03", title: "Node + Express + MongoDB", text: "Built the DevHub backend with contact and login." },
  { tag: "step-04", title: "Three.js + GSAP", text: "Made Aetheria and a futuristic 3D portfolio." },
  { tag: "HEAD", title: "React + Next.js", text: "Building this portfolio. Still shipping." },
];

export default function Timeline() {
  return (
    <section id="log" className="mx-auto max-w-4xl px-6 py-24">
      <p className="mb-3 font-head text-sm text-accent2">
        <span className="text-muted">04</span> Log
      </p>
      <h2 className="mb-2 font-head text-3xl sm:text-4xl">
        git log <span className="text-accent">--learning</span>
      </h2>
      <p className="mb-12 text-sm text-muted">My path so far, one commit at a time.</p>

      <div className="relative border-l border-red-500/40 pl-8">
        {steps.map((s) => (
          <div key={s.tag} className="relative mb-10 last:mb-0">
            <span className="absolute top-1.5 -left-10.5 size-5 rounded-full border-2 border-accent bg-bg shadow-[0_0_12px_#ff2b3f]" />
            <code className="rounded bg-accent2/20 px-2 py-0.5 font-head text-xs text-accent2">
              {s.tag}
            </code>
            <h3 className="mt-2 font-head text-xl">{s.title}</h3>
            <p className="text-sm text-muted">{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}