import type { ExperienceEntry } from "@/lib/types";

export const experienceEntries: ExperienceEntry[] = [
  {
    id: "senior-mle",
    role: "Senior Machine Learning Engineer",
    organization: "TechCorp AI",
    location: "San Francisco, CA",
    startDate: "2023-03",
    description:
      "Led the ML infrastructure team building model deployment pipelines serving 10M+ predictions/day. Designed and implemented an automated retraining system that reduced model staleness by 60%.",
    type: "work",
  },
  {
    id: "ml-researcher",
    role: "Machine Learning Researcher",
    organization: "AI Research Lab",
    location: "Boston, MA",
    startDate: "2021-06",
    endDate: "2023-02",
    description:
      "Published 4 papers at top-tier conferences (ICML, NeurIPS, CVPR) on efficient transformers and multimodal learning. Built open-source libraries adopted by 500+ researchers.",
    type: "work",
  },
  {
    id: "phd",
    role: "Ph.D. in Computer Science",
    organization: "MIT",
    location: "Cambridge, MA",
    startDate: "2017-09",
    endDate: "2021-05",
    description:
      "Dissertation on efficient deep learning architectures for multimodal understanding. Advised by Prof. Jane Smith. GPA: 4.0/4.0.",
    type: "education",
  },
  {
    id: "bs",
    role: "B.S. in Computer Science & Mathematics",
    organization: "UC Berkeley",
    location: "Berkeley, CA",
    startDate: "2013-08",
    endDate: "2017-05",
    description:
      "Double major with honors. Undergraduate thesis on scalable approximate nearest neighbor search. TA for Machine Learning (CS 189).",
    type: "education",
  },
];
