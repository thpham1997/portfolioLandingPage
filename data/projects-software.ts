import type { SoftwareProject } from "@/lib/types";

export const softwareProjects: SoftwareProject[] = [
  {
    id: "nlp-dashboard",
    title: "NLP Experiment Dashboard",
    description:
      "Interactive dashboard for tracking NLP model experiments, comparing metrics across fine-tuning runs, and visualizing attention maps for transformer models.",
    techStack: ["Python", "FastAPI", "React", "D3.js", "PostgreSQL"],
    liveUrl: "https://nlp-dashboard.example.com",
    repoUrl: "https://github.com/thanhpham/nlp-dashboard",
    highlight: true,
  },
  {
    id: "ml-deploy-platform",
    title: "ML Model Deployment Platform",
    description:
      "Platform for one-click deployment of ML models with automatic scaling, A/B testing, and real-time monitoring of prediction drift.",
    techStack: ["Python", "Kubernetes", "TensorFlow Serving", "Go", "Redis"],
    repoUrl: "https://github.com/thanhpham/ml-deploy",
    highlight: true,
  },
  {
    id: "cv-annotation-tool",
    title: "Computer Vision Annotation Tool",
    description:
      "Semi-automated image annotation tool using active learning to minimize human labeling effort. Supports polygon, bounding box, and keypoint annotations.",
    techStack: ["TypeScript", "Next.js", "Python", "PyTorch", "MongoDB"],
    liveUrl: "https://cv-annotate.example.com",
    repoUrl: "https://github.com/thanhpham/cv-annotation",
    highlight: false,
  },
  {
    id: "recsys-service",
    title: "Real-time Recommendation Service",
    description:
      "Low-latency recommendation engine using two-tower neural networks and approximate nearest neighbor search for millions of items.",
    techStack: ["Python", "TensorFlow", "FAISS", "gRPC", "Redis"],
    repoUrl: "https://github.com/thanhpham/recsys-service",
    highlight: false,
  },
];
