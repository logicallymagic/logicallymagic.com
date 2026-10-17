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

The previous static site was deployed with:

```bash
gsutil rsync -R <site> gs://www.logicallymagic.com
```

For the Docusaurus build, deploy the generated `build/` directory to the
same bucket:

```bash
gsutil rsync -R build gs://www.logicallymagic.com
```

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