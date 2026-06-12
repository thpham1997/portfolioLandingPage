import type { ExperienceEntry } from "@/lib/types";

export const experienceEntries: ExperienceEntry[] = [
  {
    id: "ert-corp",
    role: "Software Engineer",
    organization: "ERT Corp",
    location: "Laurel, MD",
    startDate: "2023-01",
    description: [
      "Built and deployed components of the Environmental Satellite Processing and Distribution System (ESPDS) using Java, Oracle, GWT, and Maven to support satellite data distribution.",
      "Developed full-stack features using Spring Boot (backend) and GWT (frontend) for the PDA user portal.",
      "Integrated ActiveMQ message queues for asynchronous communication between microservices.",
      "Worked with F5 and internal load balancers to ensure high availability and reliable traffic routing.",
      "Optimized Oracle database queries for datasets containing 100k+ products, reducing loading time by ~20%.",
      "Deployed services using Blue-Green deployment, enabling zero-downtime releases.",
      "Automated log collection and monitoring using Filebeat, systemd, SolarWinds, and Bash.",
    ],
    type: "work",
  },
];
