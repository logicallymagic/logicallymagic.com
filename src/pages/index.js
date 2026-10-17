import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import HeroAnimation from '@site/src/components/HeroAnimation';
import ProductCard from '@site/src/components/ProductCard';
import {products, productCategories} from '@site/src/data/products';

const stats = [
  {value: '8', label: 'Sentin8 verticals'},
  {value: '4', label: 'PRIME capital markets products'},
  {value: '5', label: 'AI-driven products'},
  {value: '3', label: 'Industries transformed'},
];

const highlights = [
  {
    icon: '\u{1F512}',
    title: 'Post-quantum security',
    text: 'Sentin8 eliminates static secrets and delivers live authorization with mandatory tenant isolation.',
  },
  {
    icon: '\u26A1',
    title: 'Ultra-low latency',
    text: 'Sub-microsecond connectivity for HFT and algorithmic trading, proven in production exchanges.',
  },
  {
    icon: '\u{1F9E0}',
    title: 'AI at the core',
    text: 'Machine learning drives best execution, liquidity prediction, valuations, and motion analysis.',
  },
  {
    icon: '\u{1F3D7}\uFE0F',
    title: 'Built to scale',
    text: 'Self-healing, elastic, event-sourced architectures that grow with your business.',
  },
];

export default function Home() {
  return (
    <Layout
      title="Products in the 5th Dimension"
      description="logically MAGIC builds Sentin8, the post-quantum multi-vertical platform, and the PRIME suite for capital markets — AI-driven products for banking, trading, hospitality, and healthcare."
    >
      <header className="lm-hero">
        <HeroAnimation className="lm-hero__canvas" />
        <div className="lm-hero__inner">
          <p className="lm-hero__kicker">Magic in the Making</p>
          <h1 className="lm-hero__title">
            Products in the 5<sup>th</sup> Dimension
          </h1>
          <p className="lm-hero__lead">
            We are responsible for all kinds of weird and wonderful stuff —
            machine learning and automation for startups and institutions,
            bringing change, vision, and leadership to complex technology
            initiatives to expand market share and enhance revenues.
          </p>
          <div className="lm-hero__actions">
            <Link className="button button--primary button--lg" to="/products">
              Explore Products
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="/services"
              style={{background: 'transparent', borderColor: 'rgba(31, 36, 48, 0.35)', color: 'var(--lm-text)'}}
            >
              Our Services
            </Link>
          </div>
        </div>
        <a className="lm-hero__down" href="#why">
          Scroll
        </a>
      </header>

      <main>
        <section id="why" className="lm-section">
          <div className="container">
            <div className="lm-section__head">
              <span className="lm-section__eyebrow">Why logically MAGIC</span>
              <h2 className="lm-section__title">
                Engineering that compounds
              </h2>
              <p className="lm-section__lead">
                Every product we build shares the same DNA: rigorous
                engineering, measurable business outcomes, and an obsession
                with resilience.
              </p>
            </div>
            <div className="feature-grid">
              {highlights.map((h) => (
                <div className="feature" key={h.title}>
                  <div className="feature__icon">{h.icon}</div>
                  <h3 className="feature__title">{h.title}</h3>
                  <p className="feature__text">{h.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="lm-section lm-section--alt">
          <div className="container">
            <div className="lm-section__head">
              <span className="lm-section__eyebrow">The Numbers</span>
              <h2 className="lm-section__title">One platform, many industries</h2>
            </div>
            <ul className="stats-band">
              {stats.map((s) => (
                <li className="stats-band__item" key={s.label}>
                  <div className="stats-band__value">{s.value}</div>
                  <div className="stats-band__label">{s.label}</div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="lm-section">
          <div className="container">
            <div className="lm-section__head">
              <span className="lm-section__eyebrow">Product Families</span>
              <h2 className="lm-section__title">Three families, one DNA</h2>
              <p className="lm-section__lead">
                From the Sentin8 platform to the PRIME capital markets suite to
                applied AI — each family solves a different class of problem
                with the same engineering rigour.
              </p>
            </div>
            <div className="card-grid">
              {productCategories.map((c) => (
                <Link to={c.href} className="product-card" key={c.label}>
                  <div className="product-card__body">
                    <div className="feature__icon">{c.icon}</div>
                    <h3 className="product-card__title">{c.label}</h3>
                    <p className="product-card__desc">{c.description}</p>
                    <span className="product-card__link">Learn more &rarr;</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="lm-section lm-section--alt">
          <div className="container">
            <div className="lm-section__head">
              <span className="lm-section__eyebrow">All Products</span>
              <h2 className="lm-section__title">The full portfolio</h2>
            </div>
            <div className="card-grid">
              {products.map((p) => (
                <ProductCard product={p} key={p.id} />
              ))}
            </div>
          </div>
        </section>

        <section className="lm-section">
          <div className="container">
            <div className="lm-section__head">
              <span className="lm-section__eyebrow">Trusted By</span>
              <h2 className="lm-section__title">Institutions &amp; partners</h2>
            </div>
            <div className="logo-strip">
              {[
                'td-logo.png',
                'cibc-logo.png',
                'buckzy-logo.png',
                'procom-logo.png',
                'tradepro-logo.png',
                'nexxus-logo.png',
                'treb-logo.png',
                'royal-lepage-logo.png',
                'ireal-logo.png',
                'microsoft-logo.png',
                'google-logo.png',
                'aws-logo.png',
              ].map((f) => (
                <div className="logo-strip__item" key={f}>
                  <img src={`/img/partners/${f}`} alt="Client" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-band">
          <div className="container">
            <h2>Want to work with us?</h2>
            <p>
              Bring us your hardest problem — we will bring the change, vision,
              and leadership to solve it.
            </p>
            <a className="button button--lg" href="mailto:hello@logicallymagic.com">
              hello@logicallymagic.com
            </a>
          </div>
        </section>
      </main>
    </Layout>
  );
}