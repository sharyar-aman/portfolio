import Image from "next/image";

const tags = ["Student", "Full-Stack", "Mianwali, PK", "Open to work"];

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto flex max-w-6xl flex-wrap items-center gap-14 px-6 py-24"
    >
      <div className="min-w-0 flex-1 basis-95">
        <p className="mb-3 font-head text-sm text-accent2">
          <span className="text-muted">01</span> About me
        </p>
        <h2 className="mb-6 font-head text-3xl sm:text-4xl">
          Student by day, <span className="text-accent">builder</span> always.
        </h2>
        <p className="mb-4 text-muted">
          I&apos;m Sharyar Aman, a student from Mianwali, Pakistan. I love
          turning ideas into real websites, from clean landing pages to full
          apps with a backend and a database.
        </p>
        <p className="mb-6 text-muted">
          I build with HTML, CSS, JavaScript, Node.js and MongoDB, and I&apos;m
          now leveling up with React and Next.js. Open to freelance work and
          collaborations.
        </p>
        <div className="mb-6 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t} className="rounded-full border border-red-500/30 px-3 py-1 font-head text-xs text-accent2">
              {t}
            </span>
          ))}
        </div>

        <div className="rounded-xl border border-red-500/25 bg-black/50 p-5 font-head text-sm leading-7">
          <p><span className="text-accent2">$</span> whoami</p>
          <p className="text-muted">sharyar_aman</p>
          <p><span className="text-accent2">$</span> cat role.txt</p>
          <p className="text-muted">Student &amp; Full-Stack Web Developer</p>
          <p><span className="text-accent2">$</span> cat location.txt</p>
          <p className="text-muted">Mianwali, Pakistan</p>
          <p><span className="text-accent2">$</span> echo $STATUS</p>
          <p className="text-muted">open to freelance <span className="cursor text-accent2">▌</span></p>
        </div>
      </div>

      <div className="flex flex-1 basis-75 justify-center">
        <div className="relative size-72 overflow-hidden rounded-2xl border border-red-500/40 shadow-[0_12px_40px_-12px_rgba(255,43,63,0.4)]">
          <Image
            src="/images/Profile.jpg"
            alt="Sharyar Aman"
            fill
            sizes="288px"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}