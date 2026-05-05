import type { ResearchProject } from "@/lib/types";

export const researchProjects: ResearchProject[] = [
  {
    id: "efficient-attention",
    title: "Efficient Attention Mechanisms for Long-Context Transformers",
    abstract:
      "Proposed a novel sparse attention pattern that reduces the quadratic complexity of self-attention to O(n log n) while maintaining 98% of full attention's accuracy on long-document benchmarks.",
    authors: "Pham, T., Chen, R., & Williams, K.",
    venue: "ICML 2025",
    paperUrl: "https://arxiv.org/abs/example1",
    codeUrl: "https://github.com/thanhpham/efficient-attention",
    tags: ["NLP", "Transformers", "Attention"],
  },
  {
    id: "multimodal-fusion",
    title: "Cross-Modal Fusion for Vision-Language Navigation",
    abstract:
      "Introduced a cross-attention fusion module that aligns visual and linguistic representations in a shared embedding space, improving vision-language navigation success rate by 23% on Room-to-Room.",
    authors: "Pham, T., & Rodriguez, M.",
    venue: "CVPR 2024 Workshop",
    paperUrl: "https://arxiv.org/abs/example2",
    codeUrl: "https://github.com/thanhpham/multimodal-fusion",
    tags: ["Computer Vision", "NLP", "Multimodal"],
  },
  {
    id: "rl-robotics",
    title: "Sample-Efficient Reinforcement Learning for Robotic Manipulation",
    abstract:
      "Developed a model-based RL approach using learned world models that achieves human-level performance on dexterous manipulation tasks with 10x fewer environment interactions than prior methods.",
    authors: "Pham, T., Liu, J., & Park, S.",
    venue: "arXiv preprint",
    paperUrl: "https://arxiv.org/abs/example3",
    tags: ["Reinforcement Learning", "Robotics"],
  },
  {
    id: "llm-alignment",
    title: "Constitutional AI Alignment via Recursive Reward Modeling",
    abstract:
      "Investigated a training framework where an LLM iteratively refines its own reward model through constitutional principles, reducing harmful outputs by 76% without human feedback scaling.",
    authors: "Pham, T.",
    venue: "NeurIPS 2024",
    paperUrl: "https://arxiv.org/abs/example4",
    codeUrl: "https://github.com/thanhpham/llm-alignment",
    tags: ["LLMs", "AI Safety", "RLHF"],
  },
];
