export type TechItem = {
  name: string;
  icon: TechIconKey;
};

export type TechIconKey =
  | "javascript"
  | "react"
  | "native"
  | "redux"
  | "tailwind"
  | "framer"
  | "router"
  | "git";

export const techStack: TechItem[] = [
  { name: "JavaScript", icon: "javascript" },
  { name: "React", icon: "react" },
  { name: "React Native", icon: "native" },
  { name: "Redux Toolkit", icon: "redux" },
  { name: "Tailwind", icon: "tailwind" },
  { name: "Framer Motion", icon: "framer" },
  { name: "React Router", icon: "router" },
  { name: "Git", icon: "git" },
];

export const techGroups = [
  {
    label: "Frontend",
    items: ["JavaScript", "React", "React Native", "Tailwind", "Framer Motion"],
  },
  {
    label: "State & data",
    items: ["Redux Toolkit", "React Router"],
  },
  {
    label: "Workflow",
    items: ["Git"],
  },
] as const;
