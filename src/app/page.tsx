import MotionProvider from "@/components/MotionProvider";
import SmoothScroll from "@/components/SmoothScroll";
import Cursor from "@/components/Cursor";
import Nav from "@/components/Nav";
import Marquee from "@/components/Marquee";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Work from "@/components/sections/Work";
import Capabilities from "@/components/sections/Capabilities";
import Path from "@/components/sections/Path";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <MotionProvider>
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-full focus:bg-lime focus:px-5 focus:py-2.5 focus:font-mono focus:text-xs focus:uppercase focus:tracking-widest focus:text-ink"
      >
        Skip to content
      </a>
      <SmoothScroll />
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Work />
        <Capabilities />
        <Path />
        <Contact />
      </main>
    </MotionProvider>
  );
}
