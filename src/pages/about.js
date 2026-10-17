import React from 'react';
import Layout from '@theme/Layout';

export default function About() {
  return (
    <Layout
      title="About"
      description="logically MAGIC Inc — machine learning and automation, consulting for startups and institutions, bringing change, vision and leadership to complex technology initiatives."
    >
      <main>
        <section className="lm-hero" style={{minHeight: 'auto', padding: '72px 24px 32px'}}>
          <div className="lm-hero__inner">
            <p className="lm-hero__kicker">About Us</p>
            <h1 className="lm-hero__title" style={{fontSize: 'clamp(2rem, 4.5vw, 3rem)'}}>
              Magic in the making
            </h1>
            <p className="lm-hero__lead">
              logically MAGIC Inc builds products in the 5th dimension —
              where rigorous engineering meets unreasonable ambition.
            </p>
          </div>
        </section>

        <section className="lm-section" style={{paddingTop: 24}}>
          <div className="container">
            <div className="row">
              <div className="col col--7">
                <h2 className="lm-section__title" style={{textAlign: 'left'}}>
                  Who we are
                </h2>
                <p className="lm-section__lead" style={{marginBottom: 18}}>
                  We are responsible for all kinds of weird and wonderful
                  stuff. We specialize in machine learning and automation,
                  providing consulting services to startups and institutions,
                  bringing change, vision and leadership to complex technology
                  initiatives in order to expand market share and enhance
                  revenues.
                </p>
                <p className="lm-section__lead">
                  Our product families — the Sentin8 platform, the PRIME
                  capital markets suite, and our applied AI products — all
                  share one engineering DNA: event-sourced correctness,
                  measurable latency budgets, and security models designed for
                  a post-quantum world.
                </p>
              </div>
              <div className="col col--5">
                <div className="feature">
                  <div className="feature__icon">{'\u{1F30D}'}</div>
                  <h3 className="feature__title">Toronto-based, globally delivered</h3>
                  <p className="feature__text">
                    We serve clients across North America in finance, real
                    estate, healthcare, and technology.
                  </p>
                </div>
                <div className="feature" style={{marginTop: 18}}>
                  <div className="feature__icon">{'\u{1F52E}'}</div>
                  <h3 className="feature__title">Research-driven</h3>
                  <p className="feature__text">
                    Our published work — from self-healing elastic
                    architectures to RNN golf biomechanics — becomes product.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="lm-section lm-section--alt">
          <div className="container">
            <div className="lm-section__head">
              <span className="lm-section__eyebrow">Selected Clients</span>
              <h2 className="lm-section__title">Finance &amp; Capital Markets</h2>
            </div>
            <div className="logo-strip">
              {[
                'td-logo.png',
                'cibc-logo.png',
                'buckzy-logo.png',
                'procom-logo.png',
                'tradepro-logo.png',
                'nexxus-logo.png',
              ].map((f) => (
                <div className="logo-strip__item" key={f}>
                  <img src={`/img/partners/${f}`} alt="Client" loading="lazy" />
                </div>
              ))}
            </div>

            <div className="lm-section__head" style={{marginTop: 48}}>
              <h2 className="lm-section__title">Real estate</h2>
            </div>
            <div className="logo-strip">
              {['treb-logo.png', 'royal-lepage-logo.png', 'ireal-logo.png'].map((f) => (
                <div className="logo-strip__item" key={f}>
                  <img src={`/img/partners/${f}`} alt="Client" loading="lazy" />
                </div>
              ))}
            </div>

            <div className="lm-section__head" style={{marginTop: 48}}>
              <h2 className="lm-section__title">Healthcare</h2>
            </div>
            <div className="logo-strip">
              {['iEHR.png', 'iClinic.png', 'iPatient.png'].map((f) => (
                <div className="logo-strip__item" key={f}>
                  <img src={`/img/partners/${f}`} alt="Client" loading="lazy" />
                </div>
              ))}
            </div>

            <div className="lm-section__head" style={{marginTop: 48}}>
              <h2 className="lm-section__title">Technology partners</h2>
            </div>
            <div className="logo-strip">
              {['microsoft-logo.png', 'google-logo.png', 'aws-logo.png'].map((f) => (
                <div className="logo-strip__item" key={f}>
                  <img src={`/img/partners/${f}`} alt="Client" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="lm-section">
          <div className="container">
            <div className="lm-callout" style={{textAlign: 'center', padding: '28px'}}>
              <p className="lm-callout__title" style={{fontSize: '1.15rem'}}>
                Want to be on that list?
              </p>
              <p>
                Send us an e-mail over at{' '}
                <a href="mailto:hello@logicallymagic.com">hello@logicallymagic.com</a>
              </p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}