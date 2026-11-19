import { ThemeToggle } from "@/components/ThemeToggle";
import { site } from "@/content/site";

export function SiteNav() {
  const links = site.nav.filter((item) => item.href !== "#contact");
  const contact = site.nav.find((item) => item.href === "#contact");

  return (
    <header className="border-b border-line">
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-3 px-section-x py-4 md:px-section-x-lg">
        <a href="#intro" className="font-body text-[1.85rem] font-semibold leading-none tracking-[-0.04em] text-ink">
          nazish.
        </a>

        <nav aria-label="Page" className="flex flex-wrap items-center justify-end gap-x-5 gap-y-2">
          {links.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-body text-body-sm text-ink hover:text-ink-muted"
            >
              {item.label}
            </a>
          ))}
          {site.resume ? (
            <a
              href={site.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-body-sm text-ink hover:text-ink-muted"
            >
              Resume
            </a>
          ) : null}
          <ThemeToggle />
          {contact ? (
            <a
              href={contact.href}
              className="inline-flex items-center rounded-control bg-accent px-3 py-1.5 font-body text-body-sm text-accent-ink"
            >
              {contact.label}
            </a>
          ) : null}
        </nav>
      </div>
    </header>
  );
}
