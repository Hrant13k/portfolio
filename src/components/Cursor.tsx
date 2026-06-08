"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

/**
 * Minimal trailing cursor ring. Hidden on touch / reduced-motion / small screens.
 * Grows and inverts over interactive elements ([data-cursor] or links/buttons).
 */
export default function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [label, setLabel] = useState<string | null>(null);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.6 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;
    setEnabled(true);

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const el = (e.target as HTMLElement).closest(
        "a, button, [data-cursor]"
      ) as HTMLElement | null;
      setHovering(!!el);
      setLabel(el?.getAttribute("data-cursor-label") ?? null);
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[70] mix-blend-difference"
      style={{ x: sx, y: sy }}
    >
      <motion.div
        className="flex items-center justify-center rounded-full bg-bone font-mono text-[0.6rem] uppercase tracking-widest text-ink"
        animate={{
          width: label ? 76 : hovering ? 44 : 12,
          height: label ? 76 : hovering ? 44 : 12,
          x: label ? -38 : hovering ? -22 : -6,
          y: label ? -38 : hovering ? -22 : -6,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
      >
        {label}
      </motion.div>
    </motion.div>
  );
}
