import React from 'react';
import Layout from '@theme/Layout';

export default function Services() {
  const services = [
    {
      icon: '\u{1F3AF}',
      title: 'Concept & Strategy',
      text: 'We turn ambiguous goals into a concrete product thesis: market sizing, competitive analysis, and a phased roadmap your board can rally behind.',
    },
    {
      icon: '\u{1F4D0}',
      title: 'Architecture & Platform Design',
      text: 'Event-sourced cores, CQRS, message-driven microservices, zero-static-secret security — blueprints that take days instead of weeks.',
    },
    {
      icon: '\u{1F916}',
      title: 'AI & Machine Learning',
      text: 'From best-execution models to predictive valuations — practical ML that ships to production, not slideware.',
    },
    {
      icon: '\u{1F6E1}\uFE0F',
      title: 'Regulated Fintech Delivery',
      text: 'FAPI 2.0, ISO 20022, post-quantum readiness. We build for auditors and regulators from day one.',
    },
    {
      icon: '\u26A1',
      title: 'Performance Engineering',
      text: 'Sub-microsecond paths for trading systems; elastic, self-healing infrastructure for everything else.',
    },
    {
      icon: '\u{1F464}',
      title: 'Leadership & Change',
      text: 'We bring change, vision, and leadership to complex technology initiatives — expanding market share and enhancing revenues.',
    },
  ];

  return (
    <Layout
      title="Services"
      description="Machine learning, automation, and consulting services for startups and institutions — concept and strategy, architecture, AI, and regulated fintech delivery."
    >
      <main>
        <section className="lm-hero" style={{minHeight: 'auto', padding: '72px 24px 32px'}}>
          <div className="lm-hero__inner">
            <p className="lm-hero__kicker">Services</p>
            <h1 className="lm-hero__title" style={{fontSize: 'clamp(2rem, 4.5vw, 3rem)'}}>
              We are responsible for all kinds of weird and wonderful stuff
            </h1>
            <p className="lm-hero__lead">
              We specialize in machine learning and automation, providing
              consulting services to startups and institutions, bringing
              change, vision and leadership to complex technology initiatives
              in order to expand market share and enhance revenues.
            </p>
          </div>
        </section>

        <section className="lm-section" style={{paddingTop: 24}}>
          <div className="container">
            <div className="feature-grid">
              {services.map((s) => (
                <div className="feature" key={s.title}>
                  <div className="feature__icon">{s.icon}</div>
                  <h3 className="feature__title">{s.title}</h3>
                  <p className="feature__text">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="lm-section lm-section--alt">
          <div className="container">
            <div className="lm-section__head">
              <span className="lm-section__eyebrow">Engagement Models</span>
              <h2 className="lm-section__title">How we work with you</h2>
            </div>
            <div className="card-grid">
              <div className="product-card">
                <div className="product-card__body">
                  <span className="product-card__tag">Advisory</span>
                  <h3 className="product-card__title">Fractional CTO</h3>
                  <p className="product-card__desc">
                    Senior technology leadership on a part-time basis —
                    architecture reviews, hiring, and roadmap stewardship.
                  </p>
                </div>
              </div>
              <div className="product-card">
                <div className="product-card__body">
                  <span className="product-card__tag">Build</span>
                  <h3 className="product-card__title">Product Delivery</h3>
                  <p className="product-card__desc">
                    We design, build, and ship your product end-to-end using
                    the same engineering DNA as our own portfolio.
                  </p>
                </div>
              </div>
              <div className="product-card">
                <div className="product-card__body">
                  <span className="product-card__tag">Rescue</span>
                  <h3 className="product-card__title">Modernization</h3>
                  <p className="product-card__desc">
                    Legacy system rescue and migration — event sourcing,
                    microservices, and cloud-native re-platforming.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-band">
          <div className="container">
            <h2>Have a hard problem?</h2>
            <p>
              The weirder and more wonderful, the better. Tell us about it.
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