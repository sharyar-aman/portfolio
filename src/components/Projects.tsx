import Image from "next/image";
import Tilt from "@/components/Tilt";

type Project = {
  n: string;
  title: string;
  desc: string;
  tags: string[];
  image?: string;
  live?: string;
  code?: string;
};

const projects: Project[] = [
  {
    n: "01",
    title: "DevHub · Learn-to-code platform",
    desc: "Glassmorphism learning site with search, FAQ, notes and a Node + Express + MongoDB backend for contact and login.",
    tags: ["HTML/CSS/JS", "Node.js", "MongoDB"],
    image: "/projects/devhub.jpg",
  },
  {
    n: "02",
    title: "Aetheria · 3D web experience",
    desc: "Immersive landing page with a real-time 3D torus knot that reacts to the mouse and scroll.",
    tags: ["Three.js", "GSAP", "Tailwind"],
    image: "/projects/aetheria.jpg",
  },
  {
    n: "03",
    title: "Futuristic 3D Portfolio",
    desc: "A 3D portfolio with a morphing blob, particle background and scroll timeline, built with Three.js and GSAP.",
    tags: ["Three.js", "GSAP", "Tailwind"],
    image: "/projects/futuristic.jpg",
  },
  {
    n: "04",
    title: "CyberDev Portfolio",
    desc: "A green neon portfolio with project modals and smooth animations.",
    tags: ["JavaScript", "CSS"],
    image: "/projects/cyberdev.jpg",
  },
  {
    n: "05",
    title: "JavaScript Calculator",
    desc: "A clean, keyboard-friendly calculator built with vanilla JavaScript.",
    tags: ["JavaScript", "CSS"],
    image: "/projects/calculator.jpg",
  },
  {
    n: "06",
    title: "Factory Website",
    desc: "A deployed business-style website built and hosted on Vercel.",
    tags: ["Web", "Vercel"],
    image: "/projects/factory.jpg",
    live: "https://fame-factory-mu.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-24">
      <p className="mb-3 font-head text-sm text-accent2">
        <span className="text-muted">02</span> Selected work
      </p>
      <h2 className="mb-10 font-head text-3xl sm:text-4xl">
        Things I&apos;ve <span className="text-accent">built.</span>
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <Tilt key={p.n} max={4}>
            <article className="overflow-hidden rounded-2xl border border-red-500/25 bg-red-500/5 transition hover:border-red-500/50">
              <div className="relative flex aspect-video items-end bg-linear-to-br from-[#3a1012] to-[#12141d] p-4">
                {p.image && (
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                )}
              </div>

              <div className="p-6">
                <h3 className="mb-2 font-head text-xl">{p.title}</h3>
                <p className="mb-4 text-sm text-muted">{p.desc}</p>

                <div className="mb-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-accent2/20 px-3 py-1 font-head text-xs text-accent2"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {(p.live || p.code) && (
                  <div className="flex gap-4 font-head text-sm">
                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noreferrer"
                        className="text-accent hover:text-accent2"
                      >
                        Live ↗
                      </a>
                    )}
                    {p.code && (
                      <a
                        href={p.code}
                        target="_blank"
                        rel="noreferrer"
                        className="text-accent hover:text-accent2"
                      >
                        Code ↗
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          </Tilt>
        ))}
      </div>
    </section>
  );
}