"use client";

import { motion } from "motion/react";
import { languages, skillGroups } from "@/data/content";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Capabilities() {
  return (
    <section
      id="capabilities"
      className="relative scroll-mt-24 border-y border-ink-line bg-ink-soft/40 py-28 sm:py-36"
    >
      <div className="container-edge">
        <SectionHeading
          index="03"
          label="Capabilities"
          title={
            <>
              The full{" "}
              <span className="font-light italic text-bone-muted">stack</span>,
              end to end
            </>
          }
          intro="Comfortable from the database to the design system. Each layer below is something I've used to ship real, user-facing software."
        />

        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-ink-line bg-ink-line md:grid-cols-3">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -8% 0px" }}
              transition={{ duration: 0.7, delay: gi * 0.1, ease: EASE }}
              className="group relative flex flex-col bg-ink p-8 transition-colors hover:bg-ink-raised sm:p-10"
            >
              <div className="flex items-baseline justify-between">
                <h3 className="font-serif text-2xl text-bone">{group.title}</h3>
                <span className="font-mono text-xs text-bone-faint">
                  0{gi + 1}
                </span>
              </div>
              <p className="mt-2 text-sm text-bone-muted">{group.caption}</p>

              <ul className="mt-8 flex flex-col gap-px">
                {group.skills.map((skill, si) => (
                  <li
                    key={skill}
                    className="flex items-center justify-between border-t border-ink-line/60 py-3 text-[0.95rem] text-bone-muted transition-colors group-hover:text-bone"
                  >
                    <span>{skill}</span>
                    <span className="font-mono text-[0.62rem] text-bone-faint">
                      {String(si + 1).padStart(2, "0")}
                    </span>
                  </li>
                ))}
              </ul>

              <span className="pointer-events-none absolute bottom-0 left-0 h-px w-0 bg-lime transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>

        {/* languages */}
        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-col gap-6 rounded-3xl border border-ink-line bg-ink p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
            <div className="flex items-center gap-4">
              <span className="font-serif text-2xl text-bone">Languages</span>
              <span className="h-px w-10 bg-ink-line" />
              <span className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-bone-faint">
                Communication across teams & clients
              </span>
            </div>
            <div className="flex flex-wrap gap-3">
              {languages.map((l) => (
                <span
                  key={l.name}
                  className="inline-flex items-center gap-2 rounded-full border border-ink-line bg-ink-raised/50 px-4 py-2 text-sm text-bone"
                >
                  {l.name}
                  <span className="font-mono text-[0.66rem] uppercase tracking-wide text-lime">
                    {l.level}
                  </span>
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
