export type Role = {
  role: string;
  company: string;
  location: string;
  dates: string;
  points: string[];
};

export const experience: Role[] = [
  {
    role: "Intern",
    company: "MTX",
    location: "Remote",
    dates: "Feb 2025 – Mar 2025",
    points: [
      "Configured enterprise CRM business objects, user roles, and data access permissions.",
      "Built a custom HR job board to track candidate pipelines and streamline hiring workflows.",
      "Designed interactive reports and dashboards so teams could read the data faster.",
    ],
  },
];
