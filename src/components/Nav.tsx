"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { nav, profile } from "@/data/content";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <div
          className={`mx-auto flex max-w-[88rem] items-center justify-between px-6 transition-all duration-500 sm:px-10 lg:px-16 ${
            scrolled ? "py-3" : "py-5"
          }`}
        >
          <a
            href="#top"
            className="group flex items-center gap-3"
            aria-label="Back to top"
          >
            <span className="relative flex h-9 w-9 items-center justify-center rounded-full border border-ink-line bg-ink-raised/60 backdrop-blur">
              <span className="font-serif text-base italic leading-none text-bone">
                hk
              </span>
              <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-lime shadow-[0_0_10px_2px_rgba(214,255,75,0.6)]" />
            </span>
            <span className="hidden font-mono text-[0.7rem] uppercase tracking-[0.22em] text-bone-muted transition-colors group-hover:text-bone sm:block">
              {profile.firstName}
              <span className="text-bone-faint">/eng</span>
            </span>
          </a>

          <nav
            className={`pointer-events-auto hidden items-center gap-1 rounded-full border border-ink-line px-2 py-1.5 backdrop-blur-md transition-colors duration-500 md:flex ${
              scrolled ? "bg-ink-raised/70" : "bg-ink-soft/40"
            }`}
          >
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-1.5 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-bone-muted transition-colors hover:bg-bone/5 hover:text-bone"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="group relative hidden overflow-hidden rounded-full bg-lime px-5 py-2 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-ink transition-transform hover:scale-[1.03] sm:inline-flex"
            >
              Let&rsquo;s talk
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              className="relative flex h-10 w-10 items-center justify-center rounded-full border border-ink-line bg-ink-raised/60 backdrop-blur md:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              <span className="flex flex-col gap-1.5">
                <span
                  className={`h-px w-5 bg-bone transition-transform duration-300 ${
                    open ? "translate-y-[3.5px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`h-px w-5 bg-bone transition-transform duration-300 ${
                    open ? "-translate-y-[3.5px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-ink/95 px-8 backdrop-blur-xl md:hidden"
          >
            <nav className="flex flex-col gap-2">
              {nav.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 * i + 0.1 }}
                  className="font-serif text-5xl tracking-tight text-bone"
                >
                  <span className="mr-3 font-mono text-sm text-lime">
                    0{i + 1}
                  </span>
                  {item.label}
                </motion.a>
              ))}
            </nav>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-12 inline-flex w-fit items-center gap-2 rounded-full bg-lime px-6 py-3 font-mono text-xs uppercase tracking-widest text-ink"
            >
              Let&rsquo;s talk →
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
