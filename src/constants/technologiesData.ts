import { TechCategory } from '../types';

export const TECH_CATEGORIES: TechCategory[] = [
  {
    id: 'frontend',
    number: '01',
    title: 'Frontend Technologies',
    description:
      'Support for modern client-side architectures, single page applications (SPAs), responsive frameworks, and rich interactive interfaces.',
    bullets: [
      {
        title: 'Responsive Web Engineering',
        desc: 'Ensuring seamless responsiveness, accessibility (WCAG AA), and fast interaction across mobile, tablet, and desktop viewports.',
      },
      {
        title: 'Modern UI & UX Optimization',
        desc: 'Refactoring legacy spaghetti JavaScript into modular, maintainable component systems with clean state management.',
      },
      {
        title: 'Frontend Stack Support',
        desc: 'Deep troubleshooting expertise across React, Angular, TypeScript, modern ES modules, and Next.js/Vite build tools.',
      },
      {
        title: 'Core Web Vitals Tuning',
        desc: 'Optimizing Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS) for SEO.',
      },
    ],
    items: [
      { name: 'HTML5', deviconClass: 'devicon-html5-plain colored', color: '#E34F26' },
      { name: 'CSS3 / Tailwind', deviconClass: 'devicon-css3-plain colored', color: '#1572B6' },
      { name: 'JavaScript (ES6+)', deviconClass: 'devicon-javascript-plain colored', color: '#F7DF1E' },
      { name: 'React', deviconClass: 'devicon-react-original colored', color: '#61DAFB' },
      { name: 'Angular', deviconClass: 'devicon-angularjs-plain colored', color: '#DD0031' },
      { name: 'TypeScript', deviconClass: 'devicon-typescript-plain colored', color: '#3178C6' },
    ],
  },
  {
    id: 'backend',
    number: '02',
    title: 'Backend Technologies',
    description:
      'Reliable server-side application maintenance, microservices, enterprise business logic engines, and API controllers.',
    bullets: [
      {
        title: 'Server-Side Reliability',
        desc: 'Diagnosing memory leaks, multithreading locks, CPU spikes, and application crashes in mission-critical environments.',
      },
      {
        title: 'API & Microservice Maintenance',
        desc: 'Ensuring backward compatibility, robust authentication (OAuth 2.0 / JWT), and low-latency JSON/gRPC data communication.',
      },
      {
        title: 'Enterprise Multi-Language Support',
        desc: 'Active maintenance capabilities in Java (Spring Boot), Python (Django/FastAPI), .NET Core, PHP, and Node.js.',
      },
      {
        title: 'Runtime Upgrades & Hardening',
        desc: 'Safe upgrades to latest Long-Term Support (LTS) runtimes with zero breaking API regressions.',
      },
    ],
    items: [
      { name: 'Java / Spring', deviconClass: 'devicon-java-plain colored', color: '#E76F00' },
      { name: 'Python', deviconClass: 'devicon-python-plain colored', color: '#3776AB' },
      { name: '.NET / C#', deviconClass: 'devicon-dotnetcore-plain colored', color: '#512BD4' },
      { name: 'PHP / Laravel', deviconClass: 'devicon-php-plain colored', color: '#777BB4' },
      { name: 'Node.js / Express', deviconClass: 'devicon-nodejs-plain colored', color: '#339933' },
    ],
  },
  {
    id: 'databases',
    number: '03',
    title: 'Databases & Data Storage',
    description:
      'Administration, tuning, replication management, and troubleshooting for enterprise relational and document stores.',
    bullets: [
      {
        title: 'Query Optimization & Indexing',
        desc: 'Resolving expensive sequential table scans, blocking queries, deadlocks, and high query execution latency.',
      },
      {
        title: 'Backup & Recovery Assurance',
        desc: 'Scheduled automated point-in-time backups, recovery testing, and replication lag prevention across clusters.',
      },
      {
        title: 'Enterprise Database Technologies',
        desc: 'Hands-on operational support for Oracle, Microsoft SQL Server, PostgreSQL, MySQL, and MongoDB.',
      },
      {
        title: 'Schema Upgrades & Sanitization',
        desc: 'Executing non-locking database migrations, archiving obsolete telemetry, and enforcing strict data security.',
      },
    ],
    items: [
      { name: 'Oracle Database', deviconClass: 'devicon-oracle-original colored', color: '#F80000' },
      { name: 'SQL Server', deviconClass: 'devicon-microsoftsqlserver-plain colored', color: '#CC2927' },
      { name: 'PostgreSQL', deviconClass: 'devicon-postgresql-plain colored', color: '#336791' },
      { name: 'MySQL', deviconClass: 'devicon-mysql-original colored', color: '#4479A1' },
      { name: 'MongoDB', deviconClass: 'devicon-mongodb-plain colored', color: '#47A248' },
    ],
  },
  {
    id: 'cloud',
    number: '04',
    title: 'Cloud Platforms',
    description:
      'Multi-cloud management, infrastructure monitoring, high-availability architecture, and cost optimization.',
    bullets: [
      {
        title: 'Cloud Application Operations',
        desc: 'Maintaining auto-scaling groups, virtual networks, load balancers, and managed database instances across public clouds.',
      },
      {
        title: 'High Availability & Failover',
        desc: 'Setting up multi-availability zone redundancy to protect revenue-generating apps from regional cloud outages.',
      },
      {
        title: 'Leading Cloud Ecosystems',
        desc: 'Certified engineers supporting Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP).',
      },
      {
        title: 'FinOps & Cost Governance',
        desc: 'Rightsizing underutilized cloud compute, optimizing reserved instances, and pruning orphaned disk storage.',
      },
    ],
    items: [
      { name: 'Amazon Web Services', deviconClass: 'devicon-amazonwebservices-plain-wordmark colored', color: '#FF9900' },
      { name: 'Microsoft Azure', deviconClass: 'devicon-azure-plain colored', color: '#0078D4' },
      { name: 'Google Cloud Platform', deviconClass: 'devicon-googlecloud-plain colored', color: '#4285F4' },
    ],
  },
  {
    id: 'devops',
    number: '05',
    title: 'DevOps & Tooling',
    description:
      'Continuous Integration, Continuous Deployment (CI/CD), containerization, cluster orchestration, and automated health checks.',
    bullets: [
      {
        title: 'Automated CI/CD Pipelines',
        desc: 'Streamlining automated build verification, vulnerability scans, integration testing, and blue-green deployments.',
      },
      {
        title: 'Containerization & Orchestration',
        desc: 'Dockerizing monolithic apps and managing scalable Kubernetes (EKS, AKS, GKE) clusters with health probes.',
      },
      {
        title: 'Observability & Monitoring',
        desc: 'Configuring Prometheus, Grafana, Datadog, or ELK stacks for real-time alerting on error rates and CPU spikes.',
      },
      {
        title: 'Infrastructure as Code (IaC)',
        desc: 'Standardizing cloud environments with Terraform and Ansible for repeatable, audit-ready infrastructure.',
      },
    ],
    items: [
      { name: 'Docker', deviconClass: 'devicon-docker-plain colored', color: '#2496ED' },
      { name: 'Kubernetes', deviconClass: 'devicon-kubernetes-plain colored', color: '#326CE5' },
      { name: 'Jenkins', deviconClass: 'devicon-jenkins-line colored', color: '#D24939' },
      { name: 'Git & GitHub', deviconClass: 'devicon-github-original colored', color: '#181717' },
      { name: 'CI/CD Automation', shortCode: 'CI/CD', color: '#1E66F5' },
      { name: 'Monitoring (APM)', shortCode: 'APM', color: '#10B981' },
    ],
  },
  {
    id: 'integration',
    number: '06',
    title: 'Enterprise Integration & APIs',
    description:
      'Connecting distributed software, legacy enterprise applications, payment gateways, and third-party SaaS platforms.',
    bullets: [
      {
        title: 'REST & GraphQL Gateways',
        desc: 'Engineering resilient API proxies with rate limiting, circuit breakers, and comprehensive payload validation.',
      },
      {
        title: 'System Connectivity & Webhooks',
        desc: 'Bridging front-office customer portals with back-office ERPs, CRMs, accounting systems, and warehouse tools.',
      },
      {
        title: 'Enterprise Service Integrations',
        desc: 'Handling asynchronous event queues (Kafka, RabbitMQ, SQS) to prevent lost data during traffic surges.',
      },
      {
        title: 'Integration Maintenance',
        desc: 'Ongoing monitoring of third-party API deprecations, contract tests, and token renewal lifecycles.',
      },
    ],
    items: [
      { name: 'RESTful APIs', shortCode: 'REST', color: '#1E66F5' },
      { name: 'Service Integrations', shortCode: 'SI', color: '#3B82F6' },
      { name: 'Enterprise Bus', shortCode: 'ESB', color: '#6366F1' },
      { name: 'Webhooks & Events', shortCode: 'EVENT', color: '#0EA5E9' },
    ],
  },
];
