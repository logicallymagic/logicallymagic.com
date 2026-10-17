/**
 * Central product catalogue — powers the homepage grid and cross-links.
 * Each entry corresponds to a docs page under /products.
 */

export const products = [
  {
    id: 'sentin8',
    name: 'Sentin8',
    category: 'Platform',
    tagline: 'The post-quantum, zero-static-secret platform',
    description:
      'One identity plane, live authorization, and mandatory tenant isolation for regulated multi-vertical software.',
    image: '/img/project-grid/sentin8.jpg',
    href: '/products/sentin8-platform/sentin8',
    external: 'https://sentin8.dev/',
  },
  {
    id: 'bank8',
    name: 'Bank8',
    category: 'Banking',
    tagline: 'Banking, payments, and open banking',
    description:
      'A double-entry core ledger with ISO 20022 payment orchestration and FDX v6.5 data exchange.',
    image: '/img/project-grid/bank8.jpg',
    href: '/products/sentin8-platform/bank8',
    external: 'https://bank8.dev/',
  },
  {
    id: 'exchange8',
    name: 'Exchange8',
    category: 'Capital Markets',
    tagline: 'A deterministic matching engine',
    description:
      'FIX/OUCH access, smart order routing, clearing, margin, and multi-jurisdiction regulation.',
    image: '/img/project-grid/exchange8.jpg',
    href: '/products/sentin8-platform/exchange8',
    external: 'https://exchange8.dev/',
  },
  {
    id: 'trade8',
    name: 'Trade8',
    category: 'Professional Trading',
    tagline: 'Order and execution management',
    description:
      'Broker connectivity, synchronous pre-trade risk, market data, and day P&L for professional desks.',
    image: '/img/project-grid/trade8.jpg',
    href: '/products/sentin8-platform/trade8',
    external: 'https://trade8.dev/',
  },
  {
    id: 'bill8',
    name: 'Bill8',
    category: 'Billing & Payments',
    tagline: 'Billing and payments for platforms',
    description:
      'Merchants, checkout, recurring billing, a double-entry money engine, signed webhooks, and fraud screening.',
    image: '/img/project-grid/bill8.jpg',
    href: '/products/sentin8-platform/bill8',
    external: 'https://bill8.dev/',
  },
  {
    id: 'email8',
    name: 'Email8',
    category: 'Communication',
    tagline: 'Modern email infrastructure',
    description:
      'An SMTP/LMTP transfer engine, a mail and collaboration data core with JMAP, and full-protocol mailbox access.',
    image: '/img/project-grid/email8.jpg',
    href: '/products/sentin8-platform/email8',
    external: 'https://email8.dev/',
  },
  {
    id: 'hotel8',
    name: 'Hotel8',
    category: 'Hospitality',
    tagline: 'Property, POS, and distribution as one vertical',
    description:
      'Property management, point of sale, channel distribution, metasearch, loyalty, and guest upsell.',
    image: '/img/project-grid/hotel8.jpg',
    href: '/products/sentin8-platform/hotel8',
    external: 'https://hotel8.dev/',
  },
  {
    id: 'health8',
    name: 'Health8',
    category: 'Healthcare',
    tagline: 'The eighth vertical — in design',
    description:
      'A healthcare vertical for the Sentin8 platform, currently in design.',
    image: '/img/project-grid/health8-thumb.svg',
    href: '/products/sentin8-platform/health8',
    external: 'https://sentin8.dev/docs/verticals/',
  },
  {
    id: 'exchangeprime',
    name: 'exchangePRIME',
    category: 'Capital Markets',
    tagline: 'An advanced hybrid securities exchange',
    description:
      'Operate as an exchange, ECN, MTF, or ATS with sub-microsecond connectivity for HFT and algorithmic trading.',
    image: '/img/project-grid/exchange-thumb.jpg',
    href: '/products/capital-markets/exchangeprime',
    external:
      'https://www.linkedin.com/pulse/advanced-hybrid-securities-exchange-hamid-jahanzad/',
  },
  {
    id: 'brokerprime',
    name: 'brokerPRIME',
    category: 'Capital Markets',
    tagline: 'A resilient, self-healing brokerage platform',
    description:
      'Message-driven microservices with event sourcing and CQRS — a brokerage core built for zero downtime.',
    image: '/img/project-grid/broker-thumb.jpg',
    href: '/products/capital-markets/brokerprime',
    external:
      'https://www.linkedin.com/pulse/anatomy-resilient-self-healing-elastic-architecture-hamid-jahanzad/',
  },
  {
    id: 'traderprime',
    name: 'traderPRIME',
    category: 'Capital Markets',
    tagline: 'AI-assisted ultra-low-latency cross-asset trading',
    description:
      'An EMS with super-fast APIs for human and algorithmic trading in C++, C#, Java, Python, R, and more.',
    image: '/img/project-grid/trader-thumb.jpg',
    href: '/products/capital-markets/traderprime',
    external:
      'https://www.linkedin.com/pulse/traderprime-ai-assisted-ultra-low-latency-cross-asset-hamid-jahanzad/',
  },
  {
    id: 'sorprime',
    name: 'sorPRIME',
    category: 'Capital Markets',
    tagline: 'Machine learning smart order router',
    description:
      'ML-driven best execution and dark pool liquidity prediction for venues, sell-side, and buy-side firms.',
    image: '/img/project-grid/sor-thumb.jpg',
    href: '/products/ai/sorprime',
  },
  {
    id: 'authprime',
    name: 'authPRIME',
    category: 'Identity & Security',
    tagline: 'An OAuth 2.0 / OIDC authorization server',
    description:
      'FAPI 1 and FAPI 2 profiles, dynamic client registration, PKCE, token revocation, and more.',
    image: '/img/project-grid/auth-thumb.jpg',
    href: '/products/ai/authprime',
  },
  {
    id: 'openbanking',
    name: 'Open Banking AI Data Access Platform',
    category: 'Banking',
    tagline: 'FAPI 2.0 compliant data access',
    description:
      'Fully FAPI 2.0 compliant — usable by fintechs and enterprises around the world.',
    image: '/img/project-grid/OpenBanking.jpg',
    href: '/products/ai/openbanking',
    external:
      'https://www.linkedin.com/pulse/open-banking-ai-data-access-platform-hamid-jahanzad/',
  },
  {
    id: 'ireal',
    name: 'iReal.Ai',
    category: 'Real Estate',
    tagline: 'Interactive & fast predictive real estate AI',
    description:
      'Predictive real-estate AI that turns market signals into fast, explainable valuations.',
    image: '/img/project-grid/ireal-thumb.jpg',
    href: '/products/ai/ireal',
  },
  {
    id: 'iehr',
    name: 'iEHR',
    category: 'Healthcare',
    tagline: 'A distributed healthcare platform',
    description:
      'Helps you deliver any healthcare product or service on one distributed record.',
    image: '/img/project-grid/iEHR.jpg',
    href: '/products/ai/iehr',
    external: 'https://www.iehr.ai/',
  },
  {
    id: 'golfcoach',
    name: 'AI Golf Coach',
    category: 'AI & ML',
    tagline: 'Inverse-kinematics recurrent neural network',
    description:
      'A non-intrusive AI system that adapts to your body\u2019s physics with three tiny sensors.',
    image: '/img/project-grid/golf-thumb.jpg',
    href: '/products/ai/golfcoach',
    external:
      'https://www.linkedin.com/pulse/ai-golf-coach-inverse-kinematics-recurrent-neural-network-jahanzad/',
  },
];

export const productCategories = [
  {
    label: 'Sentin8 Platform',
    description:
      'A post-quantum, zero-static-secret platform for regulated multi-vertical software.',
    href: '/products/sentin8-platform',
    icon: '\u{1F6E1}',
  },
  {
    label: 'Capital Markets',
    description:
      'The PRIME suite — exchanges, brokerages, trading, and smart order routing.',
    href: '/products/capital-markets',
    icon: '\u{1F4C8}',
  },
  {
    label: 'AI & Applied Intelligence',
    description:
      'Machine learning products for finance, real estate, healthcare, and sport.',
    href: '/products/ai',
    hrefAlt: '/products/capital-markets/sorprime',
    icon: '\u{1F9E0}',
  },
  {
    label: 'Banking',
    description:
      'Core ledger, payments, and open banking — Bank8 and the Open Banking AI Data Access Platform.',
    href: '/products/sentin8-platform/bank8',
    icon: '\u{1F3E6}',
  },
  {
    label: 'Commerce',
    description:
      'Billing and payments for platforms — merchants, checkout, recurring billing, and fraud screening with Bill8.',
    href: '/products/sentin8-platform/bill8',
    icon: '\u{1F6D2}',
  },
  {
    label: 'Hospitality',
    description:
      'Property management, POS, channel distribution, loyalty, and guest upsell — Hotel8.',
    href: '/products/sentin8-platform/hotel8',
    icon: '\u{1F3E8}',
  },
  {
    label: 'Healthcare',
    description:
      'Distributed care delivery and records — iEHR in production, Health8 in design.',
    href: '/products/ai/iehr',
    icon: '\u{1F3E5}',
  },
  {
    label: 'Real Estate',
    description:
      'Interactive, predictive valuations with iReal.Ai.',
    href: '/products/ai/ireal',
    icon: '\u{1F3E1}',
  },
  {
    label: 'Communication',
    description:
      'Modern email infrastructure — transfer engine, JMAP data core, and full-protocol access.',
    href: '/products/sentin8-platform/email8',
    icon: '\u{2709}\uFE0F',
  },
];