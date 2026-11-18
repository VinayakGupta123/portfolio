/**
 * ====================================================================
 * PORTFOLIO CONFIGURATION DATA
 * ====================================================================
 * Customize your portfolio easily by updating the fields below!
 * All changes will automatically reflect across the entire website.
 */

const PORTFOLIO_DATA = {
  // Personal & Hero Information
  personal: {
    fullName: "Vinayak Gupta",
    role: "Full-Stack Software Engineer",
    tagline: "Architecting scalable web applications, robust distributed backends, and pixel-perfect user experiences.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400",
    location: "Haryana, India / Remote",
    statusBadge: "Available for Roles & Projects",
    statusAvailable: true,
    bio: [
      "I am a passionate Full-Stack Engineer with experience building responsive web applications, microservices, and elegant modern frontends.",
      "My engineering philosophy centers around clean architecture, type safety, performance optimization, and developer ergonomics. Whether designing robust RESTful APIs or crafting responsive web interfaces, I deliver software that scales."
    ],
    resumeUrl: "#resume-modal", // Triggers the interactive resume modal
    email: "vinayakgupta5770@gmail.com",
    github: "https://github.com/VinayakGupta123",
    linkedin: "https://github.com/VinayakGupta123",
    twitter: "https://github.com/VinayakGupta123",
    stats: [
      { label: "Years Experience", value: "4+" },
      { label: "Production Apps", value: "20+" },
      { label: "Cloud Deployments", value: "100+" },
      { label: "Code Commits", value: "2.4k+" }
    ]
  },

  // Skills & Technologies
  skills: [
    {
      category: "Frontend Development",
      icon: "layout",
      description: "Building responsive, accessible, high-performance user interfaces.",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit", "Vue.js", "HTML5/CSS3", "Framer Motion"]
    },
    {
      category: "Backend & Systems",
      icon: "server",
      description: "Engineering secure APIs, asynchronous workers, and distributed services.",
      items: ["Node.js", "Express", "Python", "FastAPI", "Go", "GraphQL", "RESTful APIs", "gRPC"]
    },
    {
      category: "Databases & Storage",
      icon: "database",
      description: "Data modeling, query optimization, indexing, and transactional integrity.",
      items: ["PostgreSQL", "MongoDB", "Redis", "Prisma ORM", "TypeORM", "Elasticsearch", "Supabase"]
    },
    {
      category: "Cloud, DevOps & Tooling",
      icon: "cloud",
      description: "Automated pipelines, containerization, and cloud infrastructure.",
      items: ["Docker", "Kubernetes", "AWS (S3, EC2, Lambda)", "GitHub Actions", "Terraform", "CI/CD", "Linux", "Git"]
    }
  ],

  // Featured Projects
  projects: [
    {
      id: "cloudscale-analytics",
      title: "CloudScale Realtime Analytics",
      category: "fullstack",
      categoryName: "Full Stack",
      featured: true,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=900",
      description: "High-throughput realtime analytics dashboard processing 50k+ events/sec with dynamic visualization widgets, custom alerting, and role-based access control.",
      tags: ["Next.js", "TypeScript", "Node.js", "Redis", "PostgreSQL", "Tailwind CSS", "WebSockets"],
      liveUrl: "https://example.com/demo",
      repoUrl: "https://github.com/example/cloudscale-analytics",
      caseStudy: {
        problem: "Legacy monitoring tool had a 15-minute data lag and crashed under peak traffic during sales events.",
        solution: "Engineered an event-driven ingest pipeline using Redis pub/sub and WebSockets connected to a Next.js real-time dashboard.",
        impact: "Reduced data latency from 15 mins to < 250ms, decreased server costs by 34%, and supported 100k peak concurrent users."
      }
    },
    {
      id: "hypercommerce-platform",
      title: "HyperCommerce Microservices Platform",
      category: "backend",
      categoryName: "Backend / Microservices",
      featured: true,
      image: "https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&q=80&w=900",
      description: "Distributed e-commerce engine with inventory locking, Stripe/PayPal payment gateway integration, distributed tracing, and fault-tolerant cart checkout.",
      tags: ["Go", "Node.js", "Docker", "PostgreSQL", "Kafka", "Stripe API", "Prometheus"],
      liveUrl: "https://example.com/demo",
      repoUrl: "https://github.com/example/hypercommerce",
      caseStudy: {
        problem: "Race conditions in inventory reconciliation during flash sales caused frequent double-selling errors.",
        solution: "Implemented distributed locking with Redis Redlock and an event-sourced ledger architecture in Go and PostgreSQL.",
        impact: "Zero inventory discrepancy incidents across 1.2M transactions with 99.99% checkout availability."
      }
    },
    {
      id: "devsync-collaborative-ide",
      title: "DevSync Collaborative Code Workspace",
      category: "frontend",
      categoryName: "Frontend & WebSockets",
      featured: true,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=900",
      description: "Browser-based multiplayer code editor featuring CRDT-based concurrent editing, live audio/video channels, syntax highlighting, and instant code execution.",
      tags: ["React", "Monaco Editor", "Yjs / CRDT", "WebRTC", "Tailwind CSS", "Node.js"],
      liveUrl: "https://example.com/demo",
      repoUrl: "https://github.com/example/devsync",
      caseStudy: {
        problem: "Distributed engineering teams lacked a fast, friction-free way to pair-program and run quick sandbox snippets without heavy desktop setups.",
        solution: "Built a sleek React application embedding Monaco Editor with WebRTC audio streams and real-time cursor sync using Yjs.",
        impact: "Adopted by 3,500+ developers with sub-30ms typing synchronization latency worldwide."
      }
    },
    {
      id: "kube-sentinel-devops",
      title: "KubeSentinel Infrastructure Monitor",
      category: "cloud",
      categoryName: "Cloud & DevOps",
      featured: false,
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=900",
      description: "Automated Kubernetes cluster health auditor and cost optimizer that analyzes pod resource utilization and recommends right-sizing adjustments.",
      tags: ["Python", "FastAPI", "Kubernetes API", "Docker", "AWS EKS", "Chart.js"],
      liveUrl: "https://example.com/demo",
      repoUrl: "https://github.com/example/kube-sentinel",
      caseStudy: {
        problem: "Unmonitored dev and staging clusters accumulated 40% waste in over-provisioned CPU and memory allocations.",
        solution: "Created an automated periodic auditor in Python querying the K8s Metrics Server and calculating waste metrics.",
        impact: "Saved an estimated $14,000 annually across 8 AWS EKS development clusters."
      }
    }
  ],

  // Certifications & Verified Credentials (Requested Highlight)
  certifications: [
    {
      id: "aws-saa",
      title: "AWS Certified Solutions Architect – Associate",
      issuer: "Amazon Web Services",
      issuerLogo: "aws",
      issueDate: "Issued Jan 2024 · Valid through Jan 2027",
      credentialId: "AWS-SAA-84920184",
      verifyUrl: "https://aws.amazon.com/verification",
      badgeColor: "from-amber-500/10 to-orange-500/10 border-amber-500/20",
      badgeText: "Verified AWS Architect",
      description: "Validated expertise in designing secure, resilient, high-performing, and cost-optimized architectures on Amazon Web Services.",
      skills: ["VPC & Networking", "Auto Scaling", "IAM Security", "S3 / RDS / DynamoDB", "Serverless Lambda"]
    },
    {
      id: "meta-fullstack",
      title: "Meta Full-Stack Engineer Professional Certificate",
      issuer: "Meta (Facebook)",
      issuerLogo: "meta",
      issueDate: "Issued Sep 2023",
      credentialId: "META-FS-9102381",
      verifyUrl: "https://coursera.org/verify/professional-cert/meta-fullstack",
      badgeColor: "from-blue-500/10 to-indigo-500/10 border-blue-500/20",
      badgeText: "Meta Verified",
      description: "Comprehensive 9-course professional certification covering end-to-end frontend development, backend APIs, data structures, and production deployment.",
      skills: ["React & React Native", "Django / Python", "REST APIs", "Unit Testing", "Version Control"]
    },
    {
      id: "kubernetes-cka",
      title: "Certified Kubernetes Administrator (CKA)",
      issuer: "Cloud Native Computing Foundation (CNCF)",
      issuerLogo: "cncf",
      issueDate: "Issued May 2024 · Valid through May 2027",
      credentialId: "CKA-294810-CNCF",
      verifyUrl: "https://www.cncf.io/certification/cka/",
      badgeColor: "from-cyan-500/10 to-blue-500/10 border-cyan-500/20",
      badgeText: "CNCF Certified",
      description: "Hands-on, performance-based certification proving mastery over Kubernetes cluster architecture, installation, configuration, networking, and troubleshooting.",
      skills: ["Cluster Architecture", "Service Mesh", "Ingress & Storage", "Troubleshooting", "RBAC"]
    },
    {
      id: "docker-certified",
      title: "Docker Certified Associate (DCA)",
      issuer: "Docker Inc.",
      issuerLogo: "docker",
      issueDate: "Issued Nov 2023",
      credentialId: "DCA-773910-DCK",
      verifyUrl: "https://www.docker.com",
      badgeColor: "from-sky-500/10 to-teal-500/10 border-sky-500/20",
      badgeText: "Docker Certified",
      description: "Official validation of containerization skills including multi-stage image builds, Docker Compose, networking, volume management, and container security.",
      skills: ["Container Security", "Multi-stage Builds", "Docker Compose", "Orchestration", "Volume Persist"]
    }
  ],

  // Work Experience
  experience: [
    {
      role: "Senior Full-Stack Engineer",
      company: "Nexus Technologies",
      period: "2023 – Present",
      location: "San Francisco, CA (Hybrid)",
      highlights: [
        "Architected and deployed microservices in Node.js and Go handling 12M+ monthly API calls with 99.98% uptime.",
        "Spearheaded redesign of core web application using Next.js 14 and TypeScript, cutting initial page load time by 48%.",
        "Mentored junior and mid-level engineers through code reviews, design documentation, and weekly engineering brown-bags."
      ],
      technologies: ["TypeScript", "Next.js", "Node.js", "PostgreSQL", "Docker", "AWS", "Redis"]
    },
    {
      role: "Software Engineer",
      company: "Vanguard Digital Lab",
      period: "2021 – 2023",
      location: "Remote",
      highlights: [
        "Developed reusable React design system components used by 14 product squads, increasing UI development speed by 35%.",
        "Integrated payment workflows and automated billing with Stripe API, handling $4M+ in annual recurring subscription revenue.",
        "Authored automated CI/CD pipelines in GitHub Actions reducing deployment failure rate from 8% to under 0.5%."
      ],
      technologies: ["React", "JavaScript", "Express", "MongoDB", "Jest", "Tailwind CSS", "GitHub Actions"]
    },
    {
      role: "Junior Software Developer",
      company: "Apex Innovations",
      period: "2020 – 2021",
      location: "San Jose, CA",
      highlights: [
        "Built responsive client portals and dashboards with REST API integrations.",
        "Refactored legacy database queries, improving average response time by 28%.",
        "Assisted in Dockerizing legacy monolithic services for modern cloud migration."
      ],
      technologies: ["Python", "Flask", "PostgreSQL", "HTML5", "CSS3", "Git"]
    }
  ],

  // Education
  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "State University",
      period: "2016 – 2020",
      details: "Graduated with Honors (GPA 3.8/4.0). Focus on Distributed Systems, Algorithms, and Software Engineering."
    }
  ],

  // Resume Full Content for Instant View/Print
  resumeData: {
    summary: "Accomplished Full-Stack Software Engineer with 4+ years of professional experience building scalable distributed architectures, resilient REST/GraphQL APIs, and high-performance web applications. Strong track record of improving system uptime, reducing latency, and delivering clean, maintainable code.",
    keyCompetencies: [
      "Full-Stack Web Engineering (React, Next.js, Node.js, Go)",
      "Database Architecture & Performance Optimization (PostgreSQL, Redis)",
      "Cloud & Container Orchestration (AWS, Docker, Kubernetes)",
      "System Design & Microservices Architecture",
      "CI/CD Automation, Test-Driven Development (TDD) & Agile Leadership"
    ]
  }
};

// Export for module systems or window object for standard script loading
if (typeof module !== "undefined" && module.exports) {
  module.exports = PORTFOLIO_DATA;
} else {
  window.PORTFOLIO_DATA = PORTFOLIO_DATA;
}
