import React from 'react';
import Layout from '@theme/Layout';

export default function Contact() {
  return (
    <Layout
      title="Contact"
      description="Contact logically MAGIC — send us an e-mail at hello@logicallymagic.com"
    >
      <main>
        <section className="lm-hero" style={{minHeight: 'auto', padding: '72px 24px 32px'}}>
          <div className="lm-hero__inner">
            <p className="lm-hero__kicker">Contact</p>
            <h1 className="lm-hero__title" style={{fontSize: 'clamp(2rem, 4.5vw, 3rem)'}}>
              Let&apos;s make some magic
            </h1>
            <p className="lm-hero__lead">
              Whether you want to work with us, partner up, or just say hello —
              we read every e-mail.
            </p>
          </div>
        </section>

        <section className="lm-section" style={{paddingTop: 24}}>
          <div className="container">
            <div className="card-grid">
              <div className="product-card">
                <div className="product-card__body">
                  <span className="product-card__tag">E-mail</span>
                  <h3 className="product-card__title">General inquiries</h3>
                  <p className="product-card__desc">
                    <a href="mailto:hello@logicallymagic.com">hello@logicallymagic.com</a>
                  </p>
                </div>
              </div>
              <div className="product-card">
                <div className="product-card__body">
                  <span className="product-card__tag">Social</span>
                  <h3 className="product-card__title">Follow along</h3>
                  <p className="product-card__desc">
                    <a href="https://www.linkedin.com/company/logically-magic" target="_blank" rel="noopener noreferrer">
                      LinkedIn
                    </a>
                    {' · '}
                    <a href="https://twitter.com/logicallyMAGIC" target="_blank" rel="noopener noreferrer">
                      X / Twitter
                    </a>
                  </p>
                </div>
              </div>
              <div className="product-card">
                <div className="product-card__body">
                  <span className="product-card__tag">Products</span>
                  <h3 className="product-card__title">Product websites</h3>
                  <p className="product-card__desc">
                    <a href="https://sentin8.dev/" target="_blank" rel="noopener noreferrer">sentin8.dev</a>
                    {' · '}
                    <a href="https://bank8.dev/" target="_blank" rel="noopener noreferrer">bank8.dev</a>
                    {' · '}
                    <a href="https://exchange8.dev/" target="_blank" rel="noopener noreferrer">exchange8.dev</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}