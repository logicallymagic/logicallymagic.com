import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import HeroAnimation from '@site/src/components/HeroAnimation';
import ProductCard from '@site/src/components/ProductCard';
import {products, productCategories} from '@site/src/data/products';

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
      title="Ideas in the 5th Dimension"
      description="logically MAGIC builds Sentin8, the post-quantum multi-vertical platform, and the PRIME suite for capital markets — AI-driven products for banking, trading, hospitality, and healthcare."
    >
      <header className="lm-hero">
        <HeroAnimation className="lm-hero__canvas" />
        <div className="lm-hero__inner">
          <p className="lm-hero__kicker">Magic in the Making</p>
          <h1 className="lm-hero__title">
            Ideas in the 5<sup>th</sup> Dimension
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
              <span className="lm-section__eyebrow">Open Source</span>
              <h2 className="lm-section__title">Committed to the open community</h2>
              <p className="lm-section__lead">
                We build in the open. Across our organizations we design and
                maintain 95+ repositories — sharing our code, our
                architectures, and our design docs openly. From the Sentin8
                platform's design decisions to full product source, we
                believe knowledge compounds when it's shared.
              </p>
            </div>
            <div className="feature-grid">
              <div className="feature">
                <div className="feature__icon">{'\u{1F4DA}'}</div>
                <h3 className="feature__title">95+ repositories</h3>
                <p className="feature__text">
                  Actively designed and maintained across our organizations —
                  platform verticals, SDKs, tooling, and reference designs.
                </p>
              </div>
              <div className="feature">
                <div className="feature__icon">{'\u{1F4D6}'}</div>
                <h3 className="feature__title">Design in the open</h3>
                <p className="feature__text">
                  Our architecture and design documents live next to the
                  code — event-sourcing blueprints, tenancy models, and the
                  reasoning behind every major decision.
                </p>
              </div>
              <div className="feature">
                <div className="feature__icon">{'\u{1F527}'}</div>
                <h3 className="feature__title">Code you can read</h3>
                <p className="feature__text">
                  From the platform SDKs to complete verticals — the same
                  engineering that powers our products is available to study,
                  use, and build on.
                </p>
              </div>
              <div className="feature">
                <div className="feature__icon">{'\u{1F91D}'}</div>
                <h3 className="feature__title">Built together</h3>
                <p className="feature__text">
                  We contribute upstream, publish what we learn, and help the
                  next builder start further ahead than we did.
                </p>
              </div>
            </div>

          </div>
        </section>

        <section className="lm-section">
          <div className="container">
            <div className="lm-section__head">
              <span className="lm-section__eyebrow">Product Families</span>
              <h2 className="lm-section__title">One platform, every industry</h2>
              <p className="lm-section__lead">
                From the Sentin8 platform to the PRIME capital markets suite —
                and the verticals it powers across banking, commerce,
                hospitality, healthcare, and beyond. One DNA everywhere:
                rigorous engineering, measurable outcomes.
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
                'iEHR.png',
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