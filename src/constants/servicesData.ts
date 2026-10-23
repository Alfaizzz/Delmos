import { ServiceItem } from '../types';
import { IMAGES } from './images';

export const SERVICES: ServiceItem[] = [
  {
    id: 'monitoring',
    number: '01',
    title: 'Application Monitoring',
    category: 'core',
    iconName: 'Activity',
    description:
      'Continuous 24x7 monitoring of applications, background services, microservices, databases, and system telemetry to detect issues before they impact business operations.',
    detailedDescription:
      'We set up and oversee real-time observability pipelines (APM, logs, metrics, alerts) to spot latency anomalies, HTTP error spikes, memory leaks, and disk exhaustion before your customers notice.',
    features: [
      'Real-time APM telemetry & error rate tracking',
      'Synthetic user transaction & endpoint probing',
      'Log aggregation and automated anomaly detection',
      'Custom threshold alerting with PagerDuty / Slack integration',
    ],
    image: IMAGES.services.monitoring,
  },
  {
    id: 'production-support',
    number: '02',
    title: 'Production Support',
    category: 'core',
    iconName: 'ShieldAlert',
    description:
      'Support production applications around the clock, investigate production incidents with disciplined triage, and maintain uninterrupted operational continuity.',
    detailedDescription:
      'Our dedicated engineers manage high-stakes production environments, addressing live user escalations, unexpected outages, third-party service hiccups, and day-to-day runtime issues with strict adherence to agreed SLAs.',
    features: [
      '24/7 on-call incident triage & runbook execution',
      'Production health verification after releases',
      'Root-cause investigation & incident post-mortems',
      'Configuration management and disaster recovery drill assistance',
    ],
    image: IMAGES.services.productionSupport,
  },
  {
    id: 'incident-management',
    number: '03',
    title: 'Incident & Problem Management',
    category: 'core',
    iconName: 'AlertCircle',
    description:
      'Structured identification, tracking, prioritization, and rapid resolution of incidents while systematically addressing recurring root causes.',
    detailedDescription:
      'Prevent recurring fires with our ITIL-aligned problem management methodology. We distinguish between immediate incident alleviation (restoring service) and deep root-cause elimination.',
    features: [
      'Multi-channel incident intake (ticketing, email, webhook)',
      'Severity-based escalation matrix (P1 critical through P4 low)',
      'Post-incident review (PIR) reports with action items',
      'Known error database (KEDB) creation and maintenance',
    ],
    image: IMAGES.services.incident,
  },
  {
    id: 'troubleshooting',
    number: '04',
    title: 'Bug Fixing & Troubleshooting',
    category: 'engineering',
    iconName: 'Bug',
    description:
      'Rapid diagnosis and correction of application defects, unhandled exceptions, browser compatibility quirks, and complex backend defects.',
    detailedDescription:
      'Our full-stack engineers reproduce hard-to-catch defects, inspect logs and memory dumps, write targeted regression-tested code patches, and safely deploy fixes through staging environments.',
    features: [
      'Deep code-level debugging across stack layers',
      'Automated regression unit and integration tests',
      'Isolated staging environment verification',
      'Zero-downtime hotfix deployment procedures',
    ],
    image: IMAGES.services.troubleshooting,
  },
  {
    id: 'performance-optimization',
    number: '05',
    title: 'Performance Optimization',
    category: 'engineering',
    iconName: 'Gauge',
    description:
      'Enhance application speed, Core Web Vitals, server response times, resource utilization, and horizontal scalability.',
    detailedDescription:
      'Slow software burns customer trust and cloud budget. We analyze bottlenecks—slow database queries, excessive re-renders, bloated bundles, unoptimized caching—and tune performance systematically.',
    features: [
      'Frontend bundle splitting, tree-shaking & Core Web Vitals audit',
      'Backend CPU & memory profiling for memory leak resolution',
      'Redis & CDN caching strategies for dynamic content',
      'Database query optimization, index tuning & connection pooling',
    ],
    image: IMAGES.services.performance,
  },
  {
    id: 'security-patching',
    number: '06',
    title: 'Security & Patch Management',
    category: 'infrastructure',
    iconName: 'Lock',
    description:
      'Regular security updates, vulnerability scanning, library patching, and adherence to security best practices.',
    detailedDescription:
      'Outdated packages expose your business to severe zero-day threats. We continuously audit CVE databases, update vulnerable dependencies, test compatibility, and enforce security policies.',
    features: [
      'Automated dependency vulnerability audits (npm, pip, maven, nuget)',
      'Operating system, container & database security patching',
      'SSL/TLS certificate renewal management',
      'API authentication and authorization hardening',
    ],
    image: IMAGES.services.security,
  },
  {
    id: 'database-support',
    number: '07',
    title: 'Database Support & Tuning',
    category: 'infrastructure',
    iconName: 'Database',
    description:
      'Reliable database optimization, backup management, replication monitoring, query index tuning, and performance maintenance.',
    detailedDescription:
      'Expert database administration across PostgreSQL, MySQL, Oracle, Microsoft SQL Server, and MongoDB. We safeguard data integrity, schedule tested backups, and tune execution plans.',
    features: [
      'Automated backup verification & recovery simulation drills',
      'Index optimization & slow query log analysis',
      'High-availability cluster & replication lag monitoring',
      'Schema migration assistance and data cleansing scripts',
    ],
    image: IMAGES.services.database,
  },
  {
    id: 'upgrades',
    number: '08',
    title: 'Application & Framework Upgrades',
    category: 'engineering',
    iconName: 'ArrowUpCircle',
    description:
      'Upgrade runtime engines, frameworks, UI component libraries, and language versions to maintain security and unlock modern features.',
    detailedDescription:
      'Upgrade legacy React versions, Node.js runtimes, Java JDKs, Python environments, or .NET builds safely without business interruption or regression bugs.',
    features: [
      'Compatibility gap analysis & deprecation remediation',
      'Breaking change refactoring with automated test suites',
      'Staged deployment rollouts with rollback mechanisms',
      'End-of-life (EOL) framework risk mitigation',
    ],
    image: IMAGES.services.upgrades,
  },
  {
    id: 'enhancement',
    number: '09',
    title: 'Application Enhancement',
    category: 'engineering',
    iconName: 'Sparkles',
    description:
      'Implement high-value new features, customer-facing workflows, custom reports, and third-party integrations as your business grows.',
    detailedDescription:
      'Software should never remain static. We collaborate with your product and business teams to scope, design, code, and launch iterative enhancements to existing applications.',
    features: [
      'Feature backlog grooming and technical estimation',
      'Third-party SaaS & payment gateway integrations',
      'Custom dashboard & analytical report creation',
      'User experience improvements based on customer feedback',
    ],
    image: IMAGES.services.enhancement,
  },
  {
    id: 'modernization',
    number: '10',
    title: 'Application Modernization',
    category: 'engineering',
    iconName: 'RefreshCw',
    description:
      'Architectural transformation of legacy monolithic codebases toward modern cloud-native architectures, containerization, and modular services.',
    detailedDescription:
      'Transform brittle legacy systems into resilient, high-speed, scalable applications using incremental strangler patterns without needing high-risk total rewrites.',
    features: [
      'Monolith-to-modular architectural redesign',
      'Cloud migration (AWS, Microsoft Azure, Google Cloud)',
      'Legacy HTML/jQuery migration to modern React + Vite',
      'Decoupled REST & GraphQL API orchestration',
    ],
    image: IMAGES.services.modernization,
  },
  {
    id: 'cloud-devops',
    number: '11',
    title: 'Cloud & DevOps Support',
    category: 'infrastructure',
    iconName: 'Cloud',
    description:
      'Management of CI/CD deployment pipelines, container clusters, cloud resource provisioning, and infrastructure-as-code automation.',
    detailedDescription:
      'Bridge the gap between developers and production. We maintain Docker containers, Kubernetes clusters, GitHub Actions/Jenkins pipelines, and monitor cloud costs.',
    features: [
      'CI/CD automated testing & deployment pipelines',
      'Docker containerization & Kubernetes cluster maintenance',
      'Cloud cost optimization and right-sizing analysis',
      'Infrastructure monitoring, auto-scaling & load balancer tuning',
    ],
    image: IMAGES.services.cloudDevOps,
  },
  {
    id: 'tiered-support',
    number: '12',
    title: 'Tiered Support (L1 / L2 / L3)',
    category: 'tier',
    iconName: 'Layers',
    description:
      'Flexible, structured support contracts matched to your operational complexity, available in dedicated pod or shared managed models.',
    detailedDescription:
      'Whether you need first-line user assistance or deep senior engineering escalations, our structured L1-L3 tiers give you clear ownership and predictable SLAs.',
    features: [
      'L1: 24/7 ticket intake, user triage & runbook actions',
      'L2: Technical troubleshooting & database script adjustments',
      'L3: Code-level engineering, security patching & architectural fixes',
      'Custom SLA guarantees with transparent monthly analytics',
    ],
    image: IMAGES.services.tierSupport,
  },
];
