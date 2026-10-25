import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'logically MAGIC',
  tagline: 'Ideas in the 5th Dimension',
  favicon: 'img/favicons/favicon-32x32.png',

  url: 'https://www.logicallymagic.com',
  baseUrl: '/',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onDuplicateRoutes: 'throw',

  organizationName: 'logicallymagic',
  projectName: 'logicallymagic.com',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  stylesheets: [
    {
      href: 'https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&family=Rock+Salt&display=swap',
      rel: 'stylesheet',
    },
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/products',
          sidebarPath: './sidebars.js',
          docItemComponent: '@theme/DocItem',
          showLastUpdateTime: false,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.8,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      metadata: [
        {name: 'author', content: 'logically MAGIC Inc'},
        {
          name: 'description',
          content:
            'logically MAGIC | Ideas in the 5th Dimension — creators of Sentin8, the post-quantum multi-vertical platform, and the PRIME suite for capital markets.',
        },
        {
          name: 'keywords',
          content:
            'capital markets, blockchain, ai, machine learning, sentin8, banking, hospitality, exchange, trading, billing, email, open banking',
        },
      ],
      navbar: {
        title: '',
        logo: {
          src: 'img/logo.svg',
          srcDark: 'img/logo-light.svg',
          href: '/',
          target: '_self',
        },
        items: [
          {label: 'Products', to: '/products', position: 'left'},
          {label: 'Services', to: '/services', position: 'left'},
          {label: 'About', to: '/about', position: 'left'},
          {label: 'Contact', to: '/contact', position: 'left'},
          {
            href: 'mailto:hello@logicallymagic.com',
            position: 'right',
            className: 'navbar-cta',
            label: 'hello@logicallymagic.com',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Products',
            items: [
              {label: 'Sentin8 Platform', to: '/products/sentin8-platform/sentin8'},
              {label: 'Capital Markets', to: '/products/capital-markets'},
              {label: 'AI & ML', to: '/products/ai/sorprime'},
            ],
          },
          {
            title: 'Services',
            items: [
              {label: 'Consulting', to: '/services'},
              {label: 'About', to: '/about'},
            ],
          },
          {
            title: 'More',
            items: [
              {label: 'Contact', to: '/contact'},
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} logically MAGIC Inc.`,
      },
      prism: {
        theme: prismThemes.oneDark,
        darkTheme: prismThemes.oneDark,
      },
    }),
};

export default config;