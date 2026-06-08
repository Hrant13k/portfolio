"use client";

import { motion } from "motion/react";
import { profile } from "@/data/content";
import Reveal from "../Reveal";
import Magnetic from "../Magnetic";

const links = [
  { label: "GitHub", href: profile.github, handle: "@hrant" },
  { label: "LinkedIn", href: profile.linkedin, handle: "in/hrant" },
  { label: "Email", href: `mailto:${profile.email}`, handle: profile.email },
  { label: "Phone", href: `tel:${profile.phoneHref}`, handle: profile.phone },
];

export default function Contact() {
  return (
    <footer
      id="contact"
      className="relative scroll-mt-24 overflow-hidden border-t border-ink-line bg-radial-glow pt-28 sm:pt-36"
    >
      <div className="container-edge">
        <Reveal>
          <span className="eyebrow">
            <span className="text-lime">05</span>
            <span className="h-px w-8 bg-ink-line" />
            Contact
          </span>
        </Reveal>

        <div className="mt-8 max-w-5xl">
          <Reveal delay={0.05}>
            <h2 className="text-balance font-serif text-[clamp(2.6rem,8vw,6.5rem)] font-light leading-[0.95] tracking-tightest text-bone">
              Let&rsquo;s build
              <br />
              something{" "}
              <span className="italic text-lime">worth shipping.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-bone-muted">
              Open to full-stack engineering roles and freelance work. If you
              need someone who can take a product from idea to deployed —
              interface and infrastructure alike — let&rsquo;s talk.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <Magnetic>
                <a
                  href={`mailto:${profile.email}`}
                  data-cursor-label="Email"
                  className="group inline-flex items-center gap-3 rounded-full bg-lime px-8 py-4 text-sm font-medium text-ink transition-transform hover:scale-[1.02]"
                >
                  {profile.email}
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </Magnetic>
              <a
                href={profile.cv}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline py-4 font-mono text-[0.78rem] uppercase tracking-[0.14em] text-bone-muted hover:text-bone"
              >
                Download CV ↓
              </a>
            </div>
          </Reveal>
        </div>

        {/* link grid */}
        <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-ink-line bg-ink-line sm:grid-cols-4">
          {links.map((l, i) => (
            <motion.a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="group flex flex-col gap-3 bg-ink p-6 transition-colors hover:bg-ink-raised"
            >
              <span className="flex items-center justify-between font-mono text-[0.68rem] uppercase tracking-[0.16em] text-bone-faint">
                {l.label}
                <span className="text-bone-muted transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  ↗
                </span>
              </span>
              <span className="truncate text-sm text-bone-muted transition-colors group-hover:text-bone">
                {l.handle}
              </span>
            </motion.a>
          ))}
        </div>

        {/* big name watermark */}
        <div
          aria-hidden
          className="pointer-events-none mt-20 select-none overflow-hidden"
        >
          <div className="bg-gradient-to-b from-ink-line/70 to-transparent bg-clip-text text-center font-serif text-[clamp(3rem,18vw,16rem)] font-light leading-none tracking-tightest text-transparent">
            Karapetyan
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-ink-line py-8 sm:flex-row">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-bone-faint">
            © {new Date().getFullYear()} {profile.name}
          </p>
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-bone-faint">
            {profile.location} · {profile.role}
          </p>
          <a
            href="#top"
            className="link-underline font-mono text-[0.68rem] uppercase tracking-[0.16em] text-bone-muted hover:text-bone"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
