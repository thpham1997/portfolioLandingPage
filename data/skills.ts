import type { SkillCategory } from "@/lib/types";

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["Python", "TypeScript", "Go", "Rust", "SQL", "C++"],
  },
  {
    category: "ML Frameworks",
    skills: ["PyTorch", "TensorFlow", "JAX", "Hugging Face", "scikit-learn"],
  },
  {
    category: "MLOps & Infrastructure",
    skills: ["Docker", "Kubernetes", "AWS", "GCP", "MLflow", "Kubeflow"],
  },
  {
    category: "Data & Analytics",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Apache Kafka", "Pandas"],
  },
  {
    category: "Research",
    skills: [
      "NLP",
      "Computer Vision",
      "Reinforcement Learning",
      "LLMs",
      "Experiment Design",
    ],
  },
];
