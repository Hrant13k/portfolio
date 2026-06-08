"use client";

import { motion } from "motion/react";
import { education } from "@/data/content";
import SectionHeading from "../SectionHeading";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Path() {
  const schools = education.filter((e) => e.kind === "education");
  const certs = education.filter((e) => e.kind === "certification");

  return (
    <section id="path" className="relative scroll-mt-24 py-28 sm:py-36">
      <div className="container-edge">
        <SectionHeading
          index="04"
          label="Education & Certs"
          title={
            <>
              How I keep{" "}
              <span className="font-light italic text-bone-muted">
                sharpening
              </span>
            </>
          }
          intro="A humanities foundation, an intensive engineering track, and self-driven certifications — learning has been continuous, not a phase."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <h3 className="mb-2 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-bone-faint">
              Education
            </h3>
            <div className="flex flex-col">
              {schools.map((s, i) => (
                <motion.div
                  key={s.institution}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "0px 0px -8% 0px" }}
                  transition={{ duration: 0.7, delay: i * 0.08, ease: EASE }}
                  className="group relative border-t border-ink-line py-7 last:border-b"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h4 className="font-serif text-2xl text-bone sm:text-3xl">
                      {s.institution}
                    </h4>
                    <span className="font-mono text-[0.72rem] uppercase tracking-[0.14em] text-lime">
                      {s.period}
                    </span>
                  </div>
                  <p className="mt-1 text-bone-muted">{s.program}</p>
                  {s.note && (
                    <p className="mt-2 max-w-md text-sm text-bone-faint">
                      {s.note}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <h3 className="mb-2 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-bone-faint">
              Certifications
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {certs.map((c, i) => (
                <motion.div
                  key={c.institution}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "0px 0px -8% 0px" }}
                  transition={{ duration: 0.7, delay: i * 0.08, ease: EASE }}
                  className="group rounded-2xl border border-ink-line bg-ink-soft/40 p-6 transition-colors hover:border-bone-faint/40"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-ink-line font-mono text-xs text-lime">
                      ✓
                    </span>
                    <span className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-bone-faint">
                      {c.period}
                    </span>
                  </div>
                  <h4 className="mt-4 font-serif text-xl text-bone">
                    {c.program}
                  </h4>
                  <p className="mt-1 text-sm text-bone-muted">
                    {c.institution}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
