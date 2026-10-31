"use client";

import { useEffect, useRef } from "react";

export default function BackgroundFX() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mobile = window.innerWidth < 768;
    const size = 16;
    const chars = "01<>/{}[]();=+*#$";
    let cols = 0;
    let drops: number[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      cols = Math.floor(canvas.width / size);
      drops = Array.from({ length: cols }, () => Math.random() * -50);
    };
    resize();
    window.addEventListener("resize", resize);

    let raf = 0;
    let last = 0;
    const draw = (t: number) => {
      raf = requestAnimationFrame(draw);
      if (t - last < (mobile ? 90 : 55)) return;
      last = t;
      ctx.fillStyle = "rgba(5,5,5,0.12)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${size}px monospace`;
      ctx.fillStyle = "rgba(255,43,63,0.55)";
      for (let i = 0; i < cols; i++) {
        if (mobile && i % 2) continue;
        const ch = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(ch, i * size, drops[i] * size);
        if (drops[i] * size > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };
    if (!reduce) raf = requestAnimationFrame(draw);

    const onMove = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${e.clientX - 200}px, ${e.clientY - 200}px)`;
      }
    };
    if (!mobile) window.addEventListener("mousemove", onMove);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 opacity-20" />
      <div className="blob-a absolute -top-40 -left-40 size-150 rounded-full bg-[radial-gradient(circle,rgba(255,43,63,0.28),transparent_65%)]" />
      <div className="blob-b absolute -right-40 bottom-0 size-150 rounded-full bg-[radial-gradient(circle,rgba(255,106,61,0.2),transparent_65%)]" />
      <div
        ref={glowRef}
        className="absolute top-0 left-0 hidden size-100 rounded-full bg-[radial-gradient(circle,rgba(255,43,63,0.12),transparent_65%)] md:block"
      />
    </div>
  );
}