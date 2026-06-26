"use client";

import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";

/**
 * Makes every Motion component honor the OS "reduce motion" setting:
 * transform/layout animations are dropped while opacity fades remain.
 * This covers components that animate imperatively (Hero, Nav, Work…)
 * which the CSS prefers-reduced-motion rule can't reach.
 */
export default function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
