import { BoxLabel } from "@/components/BoxLabel";
import { TechIcon } from "@/components/icons/TechIcons";
import { techStack } from "@/content/tech";

export function TechBanner() {
  return (
    <section id="stack" aria-labelledby="stack-heading" className="relative border-b border-line">
      <BoxLabel>Stack</BoxLabel>
      <div className="px-section-x pb-10 pt-6 md:px-section-x-lg md:pb-12 md:pt-8">
        <h2
          id="stack-heading"
          className="max-w-[16ch] font-body text-[clamp(2rem,4vw,3.15rem)] font-semibold leading-[1.05] tracking-[-0.04em]"
        >
          This is how I <span className="text-ink-muted">design &amp; build,</span> every day.
        </h2>
        <p className="mt-4 max-w-xl font-body text-body leading-relaxed text-ink-muted">
          JavaScript, React, and React Native. The pieces I reach for from a rough layout to a
          shipped interface.
        </p>
        <ul className="mt-10 flex flex-wrap gap-3">
          {techStack.map((item) => (
            <li key={item.name} className="w-[6.75rem] sm:w-[7.5rem]">
              <div className="flex aspect-square items-center justify-center border border-[#e4d8b4] bg-[#efe9d2]">
                <TechIcon name={item.icon} className="h-[4.25rem] w-[4.25rem]" />
              </div>
              <p className="mt-2 text-center font-body text-label uppercase tracking-[0.12em] text-ink-muted">
                {item.name}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
