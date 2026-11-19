import type { JSX } from "react";
import type { TechIconKey } from "@/content/tech";

type IconProps = {
  className?: string;
};

export function TechIcon({
  name,
  className,
}: {
  name: TechIconKey;
  className?: string;
}) {
  const Icon = icons[name];
  if (!Icon) return null;
  return <Icon className={className} />;
}

function Atom({ className, color }: IconProps & { color: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <g fill="none" stroke={color} strokeWidth="1.35">
        <ellipse cx="12" cy="12" rx="9.2" ry="3.6" />
        <ellipse cx="12" cy="12" rx="9.2" ry="3.6" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="9.2" ry="3.6" transform="rotate(120 12 12)" />
      </g>
      <circle cx="12" cy="12" r="1.85" fill={color} />
    </svg>
  );
}

function ReactIcon({ className }: IconProps) {
  return <Atom className={className} color="#61DAFB" />;
}

function JavaScriptIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <rect width="24" height="24" rx="2" fill="#F7DF1E" />
      <text
        x="12.2"
        y="16.4"
        textAnchor="middle"
        fill="#323330"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
        fontSize="9.5"
        fontWeight="700"
      >
        JS
      </text>
    </svg>
  );
}

function NativeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <rect x="6.2" y="1.4" width="11.6" height="21.2" rx="2.4" fill="#0A7EA4" />
      <rect x="7.6" y="3.2" width="8.8" height="15.2" rx="0.6" fill="#E8F7FC" />
      <circle cx="12" cy="19.6" r="0.7" fill="#E8F7FC" />
      <g fill="none" stroke="#61DAFB" strokeWidth="0.7">
        <ellipse cx="12" cy="10.6" rx="3.1" ry="1.2" />
        <ellipse cx="12" cy="10.6" rx="3.1" ry="1.2" transform="rotate(60 12 10.6)" />
        <ellipse cx="12" cy="10.6" rx="3.1" ry="1.2" transform="rotate(120 12 10.6)" />
      </g>
      <circle cx="12" cy="10.6" r="0.7" fill="#61DAFB" />
    </svg>
  );
}

function ReduxIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        d="M12 6.2c2.4 1.5 4.2 3.2 5.2 5.4M16.6 16.4C14.6 15.2 12.8 13.6 11.2 11.4M7.2 15.6C8.4 12.8 9.6 10.6 12 8"
        fill="none"
        stroke="#764ABC"
        strokeWidth="1.35"
        strokeLinecap="round"
      />
      <circle cx="12" cy="5.2" r="2.05" fill="#764ABC" />
      <circle cx="18.4" cy="16.2" r="2.05" fill="#764ABC" />
      <circle cx="5.8" cy="16.6" r="2.05" fill="#764ABC" />
    </svg>
  );
}

function TailwindIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        fill="#38BDF8"
        d="M12 6.2c-2.2 0-3.6 1.1-4.4 3.3 1.1-1.1 2.4-1.5 3.8-1.2.8.2 1.4.7 2.1 1.4 1.1 1.1 2.4 2.3 5.1 2.3 2.2 0 3.6-1.1 4.4-3.3-1.1 1.1-2.4 1.5-3.8 1.2-.8-.2-1.4-.7-2.1-1.4C15.9 7.4 14.6 6.2 12 6.2Zm-4.8 6.6c-2.2 0-3.6 1.1-4.4 3.3 1.1-1.1 2.4-1.5 3.8-1.2.8.2 1.4.7 2.1 1.4 1.1 1.1 2.4 2.3 5.1 2.3 2.2 0 3.6-1.1 4.4-3.3-1.1 1.1-2.4 1.5-3.8 1.2-.8-.2-1.4-.7-2.1-1.4-1.2-1.2-2.5-2.3-5.1-2.3Z"
      />
    </svg>
  );
}

function FramerIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path fill="#0055FF" d="M5 3h14v6H12L5 3Zm7 6h7v6h-7V9ZM5 9h7l-7 6V9Z" />
    </svg>
  );
}

function RouterIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        d="M8 6.5h8.2M16.4 10.2 14.2 16.2M8.2 8.2l4.6 7.6"
        fill="none"
        stroke="#CA4245"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="6" cy="6.2" r="2.15" fill="#CA4245" />
      <circle cx="18.2" cy="8.4" r="2.15" fill="#F44250" />
      <circle cx="14" cy="18" r="2.15" fill="#121212" />
    </svg>
  );
}

function GitIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        d="M7 8.3v7.4M7 12h8"
        fill="none"
        stroke="#F05032"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <circle cx="7" cy="6" r="2.25" fill="#F05032" />
      <circle cx="17.2" cy="12" r="2.25" fill="#F05032" />
      <circle cx="7" cy="18" r="2.25" fill="#F05032" />
    </svg>
  );
}

const icons: Record<TechIconKey, (props: IconProps) => JSX.Element> = {
  javascript: JavaScriptIcon,
  react: ReactIcon,
  native: NativeIcon,
  redux: ReduxIcon,
  tailwind: TailwindIcon,
  framer: FramerIcon,
  router: RouterIcon,
  git: GitIcon,
};
