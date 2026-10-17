/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  productsSidebar: [
    {
      type: 'category',
      label: 'Platform',
      link: {type: 'doc', id: 'sentin8-platform/index'},
      items: [
        'sentin8-platform/sentin8',
        'sentin8-platform/bank8',
        'sentin8-platform/exchange8',
        'sentin8-platform/trade8',
        'sentin8-platform/bill8',
        'sentin8-platform/email8',
        'sentin8-platform/hotel8',
        'sentin8-platform/health8',
      ],
    },
    {
      type: 'category',
      label: 'Capital Markets — PRIME Suite',
      link: {type: 'doc', id: 'capital-markets/index'},
      items: [
        'capital-markets/exchangeprime',
        'capital-markets/brokerprime',
        'capital-markets/traderprime',
      ],
    },
    {
      type: 'category',
      label: 'AI & Applied Intelligence',
      link: {type: 'doc', id: 'ai/index'},
      items: ['ai/sorprime', 'ai/openbanking', 'ai/ireal', 'ai/iehr', 'ai/golfcoach', 'ai/authprime'],
    },
  ],
};

export default sidebars;