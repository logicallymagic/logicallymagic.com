# logically MAGIC — Products in the 5th Dimension

The official website of **logically MAGIC Inc**, built with
[Docusaurus 3](https://docusaurus.io/). Replaces the legacy static site
(previously `index.html` + jQuery/SCSS — still available in git history).

- **Hero animation**: the signature 3D sphere from the original site,
  faithfully ported to Canvas 2D (`src/components/HeroAnimation`) — no
  WebGL, no three.js dependency.
- **Products**: the former "Ventures" — now product pages under
  `/products` (docs plugin), with business-focused elaboration for each:
  Sentin8 platform verticals, the PRIME capital-markets suite, and applied
  AI products.

## Development

```bash
npm install       # install dependencies
npm start         # dev server with hot reload → http://localhost:3000
```

## Production

```bash
npm run build     # static site → ./build
npm run serve     # serve the build locally
```

## Deploy

The site publishes automatically to **GitHub Pages** via the
[`deploy.yml`](.github/workflows/deploy.yml) workflow on every push to
`master`.

- **Pages URL**: https://logicallymagic.github.io/logicallymagic.com/
  (preview host — assets are built for the custom domain, so it may show a
  Docusaurus baseUrl notice; the custom domain below is the real target)
- **Custom domain**: the build carries `static/CNAME`
  (`www.logicallymagic.com`). Once the domain is attached in repo
  Settings → Pages, GitHub serves the site there with HTTPS.

Manual fallback (publishes `./build` to the `gh-pages` branch):

```bash
npm run build
npm run deploy
```

### Attaching the custom domain

The domain currently points elsewhere (Vercel). To cut over to GitHub
Pages, in your DNS provider:

1. Apex `logicallymagic.com` — A records:
   `185.199.108.153`, `185.199.109.153`, `185.199.110.153`,
   `185.199.111.153`
2. `www.logicallymagic.com` — CNAME → `logicallymagic.github.io`
3. In the repo: Settings → Pages → Custom domain → `www.logicallymagic.com`,
   then enable **Enforce HTTPS** once the certificate is issued.

The site stays on Vercel until DNS changes propagate — nothing goes
offline during setup.

## Structure

```
docusaurus.config.js   Site config (navbar, footer, metadata, sitemap)
sidebars.js            Products sidebar (Platform / Capital Markets / AI)
docs/                  Product pages (route base: /products)
  sentin8-platform/    Sentin8 + Bank8, Exchange8, Trade8, Bill8, Email8,
                       Hotel8, Health8
  capital-markets/     exchangePRIME, brokerPRIME, traderPRIME
  ai/                  sorPRIME, Open Banking, iReal.Ai, iEHR, AI Golf
                       Coach, authPRIME
src/
  components/          HeroAnimation (Canvas 2D), ProductCard
  css/custom.css       Modern UI theme (light, editorial)
  data/products.js     Central product catalogue
  pages/               Home, Products index, Services, About, Contact
static/img/            Logos, favicons, product & partner imagery
```

## Contact

hello@logicallymagic.com