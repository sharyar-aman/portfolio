"use client";

import { useState } from "react";

const ACCESS_KEY = "PASTE_YOUR_KEY_HERE";

const links = [
  {
    label: "LinkedIn",
    value: "linkedin.com/in/aslam-niazi-19155441a",
    href: "https://www.linkedin.com/in/aslam-niazi-19155441a/",
  },
  {
    label: "GitHub",
    value: "github.com/sharyar-aman",
    href: "https://github.com/sharyar-aman",
  },
  {
    label: "Live site",
    value: "fame-factory-mu.vercel.app",
    href: "https://fame-factory-mu.vercel.app/",
  },
];

const field =
  "w-full rounded-md border border-red-500/25 bg-black/40 px-3 py-2.5 font-head text-sm text-gray-100 outline-none transition focus:border-accent";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const send = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `Portfolio message from ${name}`,
          name,
          email,
          message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <p className="mb-3 font-head text-sm text-accent2">
        <span className="text-muted">05</span> Contact
      </p>
      <h2 className="mb-10 font-head text-3xl sm:text-4xl">
        Let&apos;s build something <span className="text-accent">together.</span>
      </h2>

      <div className="flex flex-wrap gap-8">
        <form
          onSubmit={send}
          className="min-w-0 flex-1 basis-95 overflow-hidden rounded-2xl border border-red-500/35 bg-[#0b0707]/90"
        >
          <div className="flex items-center gap-4 border-b border-red-500/20 bg-white/5 px-4 py-3">
            <div className="flex gap-2">
              <span className="size-3 rounded-full bg-[#f6707c]" />
              <span className="size-3 rounded-full bg-[#f6c452]" />
              <span className="size-3 rounded-full bg-accent2" />
            </div>
            <span className="rounded bg-white/10 px-2.5 py-0.5 font-head text-xs">
              contact.sh
            </span>
          </div>

          <div className="space-y-4 p-6">
            <label className="block">
              <span className="mb-1 block font-head text-xs text-accent2">$ --name</span>
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="your name"
                className={field}
              />
            </label>
            <label className="block">
              <span className="mb-1 block font-head text-xs text-accent2">$ --email</span>
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                className={field}
              />
            </label>
            <label className="block">
              <span className="mb-1 block font-head text-xs text-accent2">$ --message</span>
              <textarea
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="tell me about your project"
                className={field}
              />
            </label>
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full rounded-lg bg-linear-to-r from-accent to-red-800 py-3 font-head text-white shadow-[0_8px_24px_-8px_rgba(255,43,63,0.5)] transition hover:-translate-y-0.5 disabled:opacity-60"
            >
              {status === "sending" ? "sending..." : "run contact --send"}
            </button>
            {status === "success" && (
              <p className="font-head text-sm text-green-400">
                ✓ message sent. I&apos;ll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="font-head text-sm text-accent">
                ✗ something went wrong. Please try again.
              </p>
            )}
          </div>
        </form>

        <div className="flex min-w-0 flex-1 basis-75 flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-red-500/25 bg-red-500/5 px-5 py-4 transition hover:border-red-500/60"
            >
              <span className="block font-head text-xs tracking-widest text-muted uppercase">
                {l.label}
              </span>
              <span className="text-sm break-all">{l.value}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}