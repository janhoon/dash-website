export type LandingScreenshot = {
  id: string;
  title: string;
  description: string;
  src: string;
  alt: string;
};

export const screenshotGallery: LandingScreenshot[] = [
  {
    id: 'app-performance',
    title: 'Application Performance',
    description: 'Latency distribution, DB pool duration, resource gauges, and query performance across the application stack.',
    src: '/screenshot-service-health.png',
    alt: 'Ace Application Performance dashboard with average latency, P99 latency, goroutines gauge, memory, query volume, and idle connections',
  },
  {
    id: 'database-health',
    title: 'Database Health',
    description: 'Connection pool monitoring, query latency, and database system breakdown with PostgreSQL vs Redis visibility.',
    src: '/screenshot-infrastructure.png',
    alt: 'Ace Database Health dashboard showing active connections, idle connections, query latency, CPU, and connection pool over time',
  },
  {
    id: 'http-overview',
    title: 'HTTP Service Overview',
    description: 'Gateway traffic, latency percentiles, DB connections by service, and resource utilization for HTTP endpoints.',
    src: '/screenshot-log-intelligence.png',
    alt: 'Ace HTTP Service Overview with request rates, error counts, P50/P99 latency, CPU gauge, and active DB connections',
  },
  {
    id: 'infrastructure',
    title: 'Infrastructure Overview',
    description: 'CPU utilization, memory distribution, goroutines, and connection pools across services at a glance.',
    src: '/screenshot-http-overview.png',
    alt: 'Ace Infrastructure Overview dashboard with CPU gauge, memory by service, goroutines, active requests, and DB pool charts',
  },
  {
    id: 'log-intelligence',
    title: 'Log Intelligence',
    description: 'Service-level log analysis with gateway, orders, payments, and error streams in real time.',
    src: '/screenshot-database-health.png',
    alt: 'Ace Log Intelligence dashboard showing API Gateway, Order Service, Payment Service, and error log streams',
  },
  {
    id: 'service-health',
    title: 'Service Health & Tracing',
    description: 'Monitor request rates, error rates, P50/P99 latency, DB connections, and goroutines per service with distributed trace drill-down.',
    src: '/screenshot-app-performance.png',
    alt: 'Ace Service Health dashboard showing request rate, error rate, latency percentiles, DB connections by service, and trace drill-down',
  },
];

const softwareApplicationStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Ace Observability',
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'Linux, macOS, Windows',
  softwareHelp: 'https://github.com/aceobservability/ace#readme',
  url: 'https://github.com/aceobservability/ace',
  downloadUrl: 'https://github.com/aceobservability/ace',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
  },
  description:
    'Open-source monitoring dashboard with multi-datasource support for Prometheus, Loki, Tempo, VictoriaMetrics, VictoriaLogs, VictoriaTraces, VMAlert, AlertManager, Elasticsearch, ClickHouse, and CloudWatch.',
  featureList: [
    'Metrics, logs, and traces in one interface',
    'Role-based access control',
    'Dashboard import and export',
    'Self-hosted deployment',
    '11 datasource integrations including VictoriaMetrics, ClickHouse, and CloudWatch',
    'Alerting via VMAlert and AlertManager',
  ],
};

const faqStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which datasources does Ace support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ace supports 11 datasources: Prometheus, Loki, Tempo, VictoriaMetrics, VictoriaLogs, VictoriaTraces, VMAlert, AlertManager, Elasticsearch, ClickHouse, and CloudWatch for self-hosted monitoring workflows.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Ace support ClickHouse and Elasticsearch?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Ace supports ClickHouse for SQL-based analytics queries and Elasticsearch for log and text search, alongside Prometheus, Loki, Tempo, VictoriaMetrics, VictoriaLogs, VictoriaTraces, VMAlert, AlertManager, and CloudWatch.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can teams self-host Ace?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Ace is open source and designed for self-hosted deployments with role-based access control and organization-level settings.',
      },
    },
  ],
};

const featureListStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Ace monitoring platform features',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Multi-datasource observability with 11 integrations',
      description:
        'Query Prometheus, Loki, Tempo, VictoriaMetrics, VictoriaLogs, VictoriaTraces, VMAlert, AlertManager, Elasticsearch, ClickHouse, and CloudWatch from a single monitoring dashboard.',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Self-hosted monitoring control',
      description:
        'Deploy Ace in your own infrastructure for secure, open-source observability without vendor lock-in.',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Grafana-compatible migration path',
      description:
        'Import Grafana dashboards and convert panel configurations into Ace for easier migration from legacy tooling.',
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Integrated alerting workflows',
      description:
        'Build alert rules tied to dashboards and datasource queries so incidents can be triaged from one workflow.',
    },
    {
      '@type': 'ListItem',
      position: 5,
      name: 'Single Sign-On administration',
      description:
        'Configure authentication providers and organization access controls for secure SSO onboarding.',
    },
    {
      '@type': 'ListItem',
      position: 6,
      name: 'Flexible themes for operations teams',
      description:
        'Use light and dark dashboard themes tuned for day-shift and on-call monitoring sessions.',
    },
  ],
};

const comparisonTableStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Table',
  name: 'Ace vs Grafana feature comparison',
  about: {
    '@type': 'SoftwareApplication',
    name: 'Ace Observability',
  },
  description:
    'Feature comparison table between Ace and Grafana across deployment model, access control, and dashboard workflows.',
  hasPart: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Self-hosted deployment',
      description: 'Ace: built for self-hosted teams. Grafana: supports cloud and self-hosted.',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Open-source code access',
      description: 'Ace: open source. Grafana: open source core with enterprise/cloud offerings.',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Prometheus metrics',
      description: 'Both Ace and Grafana support Prometheus-compatible metrics.',
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Loki logs',
      description: 'Both Ace and Grafana support Loki log exploration.',
    },
    {
      '@type': 'ListItem',
      position: 5,
      name: 'Tempo traces',
      description: 'Both Ace and Grafana support Tempo trace exploration.',
    },
    {
      '@type': 'ListItem',
      position: 6,
      name: 'YAML dashboard workflow',
      description: 'Ace: first-class YAML export and import workflow. Grafana: JSON-focused export by default.',
    },
    {
      '@type': 'ListItem',
      position: 7,
      name: 'Organization role model',
      description: 'Ace: simple admin/editor/viewer model. Grafana: role model varies by edition and deployment.',
    },
    {
      '@type': 'ListItem',
      position: 8,
      name: 'SSO provider setup',
      description: 'Ace: org settings include provider setup. Grafana: SSO setup depends on deployment and edition.',
    },
    {
      '@type': 'ListItem',
      position: 9,
      name: 'Dashboard import migration',
      description: 'Ace: includes Grafana conversion flow for migration. Grafana: native for Grafana JSON dashboards.',
    },
    {
      '@type': 'ListItem',
      position: 10,
      name: 'Operational focus',
      description: 'Ace is a strong fit for teams that want truly open-source, self-hosted monitoring.',
    },
  ],
};

const breadcrumbStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: '/',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Ace vs Grafana Comparison',
      item: '/#comparison',
    },
  ],
};

const imageGalleryStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'ImageGallery',
  name: 'Ace monitoring platform screenshot gallery',
  description:
    'Screenshot gallery covering Ace dashboards, service health, infrastructure, log intelligence, HTTP overview, database health, and application performance.',
  hasPart: screenshotGallery.map((screenshot, index) => ({
    '@type': 'ImageObject',
    position: index + 1,
    name: screenshot.title,
    description: screenshot.description,
    contentUrl: screenshot.src,
    thumbnailUrl: screenshot.src,
  })),
};

const organizationStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Ace Observability',
  url: 'https://github.com/aceobservability/ace',
  sameAs: ['https://github.com/aceobservability/ace'],
};

const siteNavigationStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'SiteNavigationElement',
  name: ['Features', 'Comparison', 'Get Started'],
  url: ['/#features', '/#comparison', 'https://github.com/aceobservability/ace'],
};

export const structuredDataPayloads = [
  softwareApplicationStructuredData,
  faqStructuredData,
  featureListStructuredData,
  comparisonTableStructuredData,
  breadcrumbStructuredData,
  imageGalleryStructuredData,
  organizationStructuredData,
  siteNavigationStructuredData,
];
