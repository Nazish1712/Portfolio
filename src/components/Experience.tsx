import { BoxLabel } from "@/components/BoxLabel";
import { experience } from "@/content/experience";

export function Experience() {
  return (
    <section id="experience" className="relative border-b border-line" aria-labelledby="experience-heading">
      <BoxLabel>Experience</BoxLabel>
      <div className="px-section-x pb-10 pt-6 md:px-section-x-lg md:pb-12 md:pt-8">
        <h2 id="experience-heading" className="sr-only">
          Experience
        </h2>
        <ul className="space-y-8">
          {experience.map((item) => (
            <li key={item.company}>
              <p className="font-body text-[clamp(1.75rem,3vw,2.25rem)] font-semibold leading-none tracking-[-0.03em]">
                {item.company}
              </p>
              <p className="mt-2 font-body text-body-sm text-ink-muted">
                {item.role}
                <span aria-hidden> · </span>
                {item.dates}
              </p>
              <ul className="mt-4 max-w-2xl space-y-2">
                {item.points.map((point) => (
                  <li key={point} className="font-body text-body-sm leading-relaxed text-ink-muted">
                    {point}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
