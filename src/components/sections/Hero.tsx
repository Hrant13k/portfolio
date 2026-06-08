"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { profile, stats } from "@/data/content";
import Magnetic from "../Magnetic";

const EASE = [0.16, 1, 0.3, 1] as const;

const headlineLines = [
  [{ t: "I build", em: false }, { t: "complete", em: true }],
  [{ t: "products —", em: false }],
  [{ t: "not just", em: false }, { t: "code.", em: true }],
];

function Line({ words, base }: { words: { t: string; em: boolean }[]; base: number }) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        className="block"
        initial={{ y: "110%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1, delay: base, ease: EASE }}
      >
        {words.map((w, i) => (
          <span
            key={i}
            className={w.em ? "italic text-lime" : "text-bone"}
          >
            {w.t}
            {i < words.length - 1 ? " " : ""}
          </span>
        ))}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-radial-glow pt-28 pb-16"
    >
      {/* ambient grid + glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff08 1px, transparent 1px), linear-gradient(to bottom, #ffffff08 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(70% 60% at 50% 40%, #000 0%, transparent 100%)",
        }}
      />

      <div className="container-edge relative w-full">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Left: type */}
          <motion.div style={{ y: textY }} className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE }}
              className="flex flex-wrap items-center gap-x-4 gap-y-2"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-ink-line bg-ink-raised/50 px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-bone-muted">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-lime" />
                </span>
                Available for work
              </span>
              <span className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-bone-faint">
                {profile.location}
              </span>
            </motion.div>

            <h1 className="mt-7 font-serif text-[clamp(2.9rem,8.5vw,7rem)] font-light leading-[0.92] tracking-tightest">
              {headlineLines.map((line, i) => (
                <Line key={i} words={line} base={0.25 + i * 0.12} />
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.75, ease: EASE }}
              className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-bone-muted"
            >
              {profile.name} —{" "}
              <span className="text-bone">{profile.role}</span> in{" "}
              {profile.location}. {profile.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.9, ease: EASE }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Magnetic>
                <a
                  href="#work"
                  data-cursor-label="View"
                  className="group inline-flex items-center gap-3 rounded-full bg-bone px-7 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-lime"
                >
                  View selected work
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </Magnetic>
              <a
                href={profile.cv}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline inline-flex items-center gap-2 py-3.5 font-mono text-[0.78rem] uppercase tracking-[0.14em] text-bone-muted hover:text-bone"
              >
                Download CV ↓
              </a>
            </motion.div>
          </motion.div>

          {/* Right: portrait */}
          <motion.div
            style={{ y: portraitY }}
            className="relative lg:col-span-5"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, delay: 0.5, ease: EASE }}
              className="relative mx-auto max-w-sm"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-ink-line bg-ink-raised">
                <Image
                  src="/images/portrait.jpeg"
                  alt={`Portrait of ${profile.name}`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 80vw, 32vw"
                  className="object-cover object-top grayscale transition-all duration-700 hover:grayscale-0"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between font-mono text-[0.62rem] uppercase tracking-[0.18em] text-bone/80">
                  <span>Engineer</span>
                  <span className="text-lime">+ Designer</span>
                </div>
              </div>

              {/* rotating seal */}
              <div className="absolute -left-6 -top-6 hidden h-24 w-24 items-center justify-center rounded-full border border-ink-line bg-ink/80 backdrop-blur sm:flex">
                <svg
                  viewBox="0 0 100 100"
                  className="h-full w-full animate-spin-slow"
                  aria-hidden
                >
                  <defs>
                    <path
                      id="circle"
                      d="M 50,50 m -34,0 a 34,34 0 1,1 68,0 a 34,34 0 1,1 -68,0"
                    />
                  </defs>
                  <text className="fill-bone-muted font-mono text-[9px] uppercase tracking-[0.32em]">
                    <textPath href="#circle" startOffset="0%">
                      • Full-Stack • Product • UX • Web •
                    </textPath>
                  </text>
                </svg>
                <span className="absolute font-serif text-2xl italic text-lime">
                  hk
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* stats row */}
        <motion.div
          style={{ opacity: fade }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.05, ease: EASE }}
          className="mt-16 grid grid-cols-3 gap-4 border-t border-ink-line pt-8 sm:max-w-2xl"
        >
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-serif text-3xl text-bone sm:text-4xl">
                {s.value}
              </div>
              <div className="mt-1 max-w-[12ch] text-xs leading-snug text-bone-faint">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
