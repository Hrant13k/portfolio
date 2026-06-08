import Reveal from "./Reveal";

type Props = {
  index: string;
  label: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
};

export default function SectionHeading({ index, label, title, intro }: Props) {
  return (
    <div className="grid gap-8 md:grid-cols-12 md:items-end">
      <div className="md:col-span-7">
        <Reveal>
          <span className="eyebrow">
            <span className="text-lime">{index}</span>
            <span className="h-px w-8 bg-ink-line" />
            {label}
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-5 max-w-2xl text-balance font-serif text-4xl leading-[1.02] tracking-tightest text-bone sm:text-5xl lg:text-6xl">
            {title}
          </h2>
        </Reveal>
      </div>
      {intro && (
        <div className="md:col-span-5">
          <Reveal delay={0.16}>
            <p className="max-w-md text-pretty text-base leading-relaxed text-bone-muted">
              {intro}
            </p>
          </Reveal>
        </div>
      )}
    </div>
  );
}
