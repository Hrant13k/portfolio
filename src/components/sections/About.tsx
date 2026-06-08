"use client";

import { motion } from "motion/react";
import { principles, profile } from "@/data/content";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-24 py-28 sm:py-36">
      <div className="container-edge">
        <SectionHeading
          index="01"
          label="About"
          title={
            <>
              Engineer first. <br />
              Designer by{" "}
              <span className="font-light italic text-bone-muted">
                instinct.
              </span>
            </>
          }
          intro="The combination is the point: I don't hand off between building and designing — I carry a product through both."
        />

        <div className="mt-16 grid gap-12 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-7">
            <Reveal>
              <p className="text-balance font-serif text-2xl leading-snug text-bone sm:text-3xl">
                {profile.summary}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-bone-muted">
                I started in UI/UX — shipping design systems and prototypes in
                Figma for international clients — then moved deeper into
                engineering, where I now build and deploy full-stack
                applications. That path means I read a flow before I write a
                line, weigh the user experience against the architecture, and
                care about the whole product rather than my slice of it.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4 border-t border-ink-line pt-8 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-bone-faint">
                <span>
                  <span className="text-bone-muted">Based in</span>{" "}
                  {profile.location}
                </span>
                <span>
                  <span className="text-bone-muted">Focus</span> Full-Stack ·
                  Web
                </span>
                <span>
                  <span className="text-bone-muted">Open to</span> Roles &
                  freelance
                </span>
              </div>
            </Reveal>
          </div>

          {/* Principles */}
          <div className="md:col-span-5">
            <ul className="flex flex-col">
              {principles.map((p, i) => (
                <motion.li
                  key={p.no}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                  transition={{
                    duration: 0.7,
                    delay: i * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="group border-t border-ink-line py-6 last:border-b"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-xs text-lime">{p.no}</span>
                    <div>
                      <h3 className="font-serif text-xl text-bone">
                        {p.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-bone-muted">
                        {p.body}
                      </p>
                    </div>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
