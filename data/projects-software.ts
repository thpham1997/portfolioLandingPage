import type { SoftwareProject } from "@/lib/types";

export const softwareProjects: SoftwareProject[] = [
  {
    id: "documind-rag",
    title: "DocuMind RAG — Document Intelligence System",
    description: [
      "Built a production-grade RAG pipeline that ingests PDFs/web pages, indexes them for semantic search in Qdrant, and streams cited answers token-by-token via Server-Sent Events.",
      "Designed hybrid retrieval combining vector search with keyword-triggered front-matter injection — solved the fundamental semantic gap where embedding models fail on metadata queries like \"who wrote this?\"",
      "Implemented idempotent ingestion with UUIDv5 deterministic point IDs, sentence-aware 800-char chunking with 200-char overlap, and metadata enrichment limited to front-matter chunks only.",
      "Structured as a full-stack async application: FastAPI backend with SSE streaming, React + TypeScript frontend with drag-and-drop uploads and clickable cited sources, PostgreSQL for audit logging.",
    ],
    techStack: ["Python", "FastAPI", "PyMuPDF", "Qdrant", "PostgreSQL", "DeepSeek API", "sentence-transformers", "Docker", "React", "TypeScript"],
    repoUrl: "https://github.com/thpham1997/industrial-ml-projects",
    highlight: true,
  },
  {
    id: "finetunepro",
    title: "FineTunePro — Domain LLM Fine-tuning Pipeline",
    description: [
      "Built a production-grade LoRA fine-tuning pipeline for Mistral 7B on Apple Silicon (MPS, 32GB). Full lifecycle: JSONL dataset upload, training with Hugging Face SFTTrainer + PEFT (LoRA r=8, alpha=16, gradient checkpointing), evaluation against DeepSeek baseline via ROUGE-L, and A/B comparison with interleaved SSE streaming of base vs. fine-tuned tokens.",
      "Training runs as an asyncio subprocess so the FastAPI event loop stays responsive. Implemented 7-table PostgreSQL schema (datasets, training_jobs, training_logs, fine_tuned_models, eval_runs, eval_results, comparison_logs).",
      "LRU model cache (max 2: base + 1 fine-tuned) fits within 32GB RAM. Solved Apple Silicon constraints: LoRA not QLoRA (bitsandbytes unsupported on MPS), FastAPI on host for GPU access (Docker has no MPS passthrough), Hugging Face pipeline for inference (vLLM unsupported on MPS).",
    ],
    techStack: ["Python", "PyTorch (MPS)", "Hugging Face TRL + PEFT", "FastAPI", "PostgreSQL", "DeepSeek API", "Docker", "React", "TypeScript"],
    repoUrl: "https://github.com/thpham1997/industrial-ml-projects",
    highlight: true,
  },
  {
    id: "agentforge",
    title: "AgentForge — LLM Agent Framework",
    description: [
      "Built a multi-agent framework with LangGraph State Graph implementing the ReAct loop (Think → Act → Observe → Finalize) with anti-loop guards and declarative conditional routing.",
      "Developed a 5-tool registry (web search via DuckDuckGo, AST-based safe calculator, sandboxed file I/O) with 3-stage fuzzy tool name resolution handling LLM naming inconsistencies.",
      "Implemented Supervisor + Worker orchestrator with tool gating — specialized workers get only the tools they need, enforcing principle of least privilege.",
      "Wrote a 93-test pytest suite covering agent engine, tools, guardrails, orchestrator, and API. Two-tier memory: Redis for short-term conversation window + Qdrant for long-term semantic experience retrieval, with full audit trail and cost tracking per task.",
    ],
    techStack: ["Python", "FastAPI", "LangChain + LangGraph", "DeepSeek API", "PostgreSQL", "Redis", "Qdrant", "Docker", "React", "TypeScript"],
    repoUrl: "https://github.com/thpham1997/industrial-ml-projects",
    highlight: true,
  },
  {
    id: "servescale",
    title: "ServeScale — Model Serving & Deployment Platform",
    description: [
      "Built model serving platform with Docker SDK orchestration: dynamic container creation via put_archive, health-check polling with 10s timeout, port allocation with collision avoidance, and orphaned container cleanup on startup.",
      "Control plane / data plane separation — API manages registry and deployments while isolated model-host containers serve predictions.",
      "Weighted random canary routing with traffic weights stored in PostgreSQL, read fresh on every prediction request. Weight changes take effect immediately with no reload, one-click rollback with zero downtime.",
      "Integrated Prometheus + Grafana monitoring with pre-loaded dashboards (throughput, p50/p95/p99 latency, error rate per model version) and prediction audit logging for latency and drift analysis.",
    ],
    techStack: ["Python", "FastAPI", "Docker SDK", "PostgreSQL", "Prometheus", "Grafana", "Nginx", "React", "TypeScript"],
    repoUrl: "https://github.com/thpham1997/industrial-ml-projects",
    highlight: true,
  },
];
