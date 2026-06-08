const words = [
  "Full-Stack Engineering",
  "Product Thinking",
  "React",
  "Node.js",
  "Design Systems",
  "TypeScript",
  "User Experience",
  "Scalable Architecture",
];

export default function Marquee() {
  const sequence = [...words, ...words];
  return (
    <div
      className="mask-x relative flex select-none overflow-hidden border-y border-ink-line py-6"
      aria-hidden
    >
      <div className="flex shrink-0 animate-marquee items-center gap-10 pr-10">
        {sequence.map((w, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className="font-serif text-2xl italic text-bone-faint sm:text-3xl">
              {w}
            </span>
            <span className="text-lime">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
