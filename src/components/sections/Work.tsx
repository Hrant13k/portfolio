"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { experience } from "@/data/content";
import SectionHeading from "../SectionHeading";

const EASE = [0.16, 1, 0.3, 1] as const;

function Row({
  item,
  index,
  open,
  onToggle,
}: {
  item: (typeof experience)[number];
  index: number;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.7, ease: EASE }}
      className="group border-t border-ink-line last:border-b"
    >
      <button
        onClick={onToggle}
        aria-expanded={open}
        className="relative grid w-full grid-cols-12 items-center gap-4 py-7 text-left transition-colors"
      >
        {/* hover wash */}
        <span
          aria-hidden
          className={`pointer-events-none absolute inset-x-[-1.5rem] inset-y-0 rounded-2xl bg-bone/[0.02] transition-opacity duration-500 ${
            open ? "opacity-100" : "opacity-0 group-hover:opacity-100"
          }`}
        />
        <span className="col-span-12 flex items-center gap-5 sm:col-span-6">
          <span className="font-mono text-xs text-lime">
            0{index + 1}
          </span>
          <span>
            <span className="block font-serif text-2xl leading-tight text-bone transition-colors sm:text-3xl">
              {item.role}
            </span>
            <span className="mt-0.5 block font-mono text-[0.72rem] uppercase tracking-[0.16em] text-bone-muted">
              {item.company} · {item.type}
            </span>
          </span>
        </span>

        <span className="col-span-7 hidden text-sm text-bone-muted sm:col-span-4 sm:block">
          {item.summary}
        </span>

        <span className="col-span-5 flex items-center justify-end gap-4 sm:col-span-2">
          <span className="hidden text-right font-mono text-[0.7rem] uppercase tracking-[0.12em] text-bone-faint lg:block">
            {item.period}
          </span>
          <span
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ink-line text-bone transition-all duration-300 ${
              open
                ? "rotate-45 border-lime bg-lime text-ink"
                : "group-hover:border-bone-muted"
            }`}
            aria-hidden
          >
            +
          </span>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="overflow-hidden"
          >
            <div className="grid gap-8 pb-9 md:grid-cols-12">
              <div className="md:col-span-1" />
              <ul className="flex flex-col gap-4 md:col-span-7">
                {item.highlights.map((h, i) => (
                  <li key={i} className="flex gap-3 text-bone-muted">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-lime" />
                    <span className="text-[0.95rem] leading-relaxed">{h}</span>
                  </li>
                ))}
                <li className="mt-1 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-bone-faint lg:hidden">
                  {item.period}
                </li>
              </ul>
              <div className="md:col-span-4">
                <span className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-bone-faint">
                  Stack & focus
                </span>
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-ink-line bg-ink-raised/50 px-3 py-1.5 text-xs text-bone-muted"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Work() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section id="work" className="relative scroll-mt-24 py-28 sm:py-36">
      <div className="container-edge">
        <SectionHeading
          index="02"
          label="Selected Work"
          title={
            <>
              Where I&rsquo;ve{" "}
              <span className="font-light italic text-bone-muted">shipped</span>
            </>
          }
          intro="Engagements across product engineering and design — from securing full-stack apps for global clients to architecting design systems. Tap any role to dig into the work."
        />

        <div className="mt-14">
          {experience.map((item, i) => (
            <Row
              key={item.company + item.role}
              item={item}
              index={i}
              open={open === i}
              onToggle={() => setOpen(open === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
