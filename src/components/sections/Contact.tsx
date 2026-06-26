"use client";

import { motion } from "motion/react";
import { profile } from "@/data/content";
import Reveal from "../Reveal";
import Magnetic from "../Magnetic";

const icons = {
  github: (
    <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.57.1.78-.25.78-.55v-2.1c-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.66.79.55A11.5 11.5 0 0 0 12 .5Z" />
  ),
  linkedin: (
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14Zm1.78 13.02H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
  ),
  behance: (
    <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H0V5.021h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.221 8.061zM3 11h3.584c2.508 0 2.906-3-.312-3H3v3zm3.391 3H3v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
  ),
  email: (
    <path d="M2 4h20a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Zm10 7.4 8-5.4H4l8 5.4Zm0 2.2L3 7.5V18h18V7.5l-9 6.1Z" />
  ),
  phone: (
    <path d="M6.6 10.8a15.5 15.5 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25c1.1.37 2.3.57 3.5.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.2.2 2.4.57 3.5a1 1 0 0 1-.25 1l-2.2 2.3Z" />
  ),
};

const links = [
  {
    label: "GitHub",
    href: profile.github,
    handle: profile.githubHandle,
    icon: icons.github,
  },
  {
    label: "LinkedIn",
    href: profile.linkedin,
    handle: profile.linkedinHandle,
    icon: icons.linkedin,
  },
  {
    label: "Behance",
    href: profile.behance,
    handle: profile.behanceHandle,
    icon: icons.behance,
  },
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    handle: profile.email,
    icon: icons.email,
  },
  {
    label: "Phone",
    href: `tel:${profile.phoneHref}`,
    handle: profile.phone,
    icon: icons.phone,
  },
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
        <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-ink-line bg-ink-line lg:grid-cols-5">
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
              className={`group flex flex-col gap-3 bg-ink p-6 transition-colors hover:bg-ink-raised ${
                i === links.length - 1 ? "col-span-2 lg:col-span-1" : ""
              }`}
            >
              <span className="flex items-center justify-between font-mono text-[0.68rem] uppercase tracking-[0.16em] text-bone-faint">
                <span className="flex items-center gap-2.5">
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden
                    className="h-4 w-4 fill-bone-muted transition-colors group-hover:fill-lime"
                  >
                    {l.icon}
                  </svg>
                  {l.label}
                </span>
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
            {profile.lastName}
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
