import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import ProductCard from '@site/src/components/ProductCard';
import {products} from '@site/src/data/products';

export default function ProductsIndex() {
  return (
    <Layout
      title="Products"
      description="The logically MAGIC product portfolio — Sentin8 platform, PRIME capital markets suite, and applied AI products."
    >
      <main>
        <section className="lm-hero" style={{minHeight: 'auto', padding: '72px 24px 32px'}}>
          <div className="lm-hero__inner">
            <p className="lm-hero__kicker">Ideas in the 5th Dimension</p>
            <h1 className="lm-hero__title" style={{fontSize: 'clamp(2rem, 4.5vw, 3rem)'}}>
              Our product portfolio
            </h1>
            <p className="lm-hero__lead">
              Every product starts with a hard business problem and ends with
              measurable outcomes — post-quantum security, ultra-low latency,
              and machine learning where it moves the needle.
            </p>
          </div>
        </section>

        <section className="lm-section" style={{paddingTop: 24}}>
          <div className="container">
            <div className="card-grid">
              {products.map((p) => (
                <ProductCard product={p} key={p.id} />
              ))}
            </div>
            <div className="lm-callout" style={{marginTop: 40}}>
              <p className="lm-callout__title">Looking for something specific?</p>
              <p>
                Browse by family:{' '}
                <Link to="/products/sentin8-platform">Sentin8 Platform</Link> ·{' '}
                <Link to="/products/capital-markets">Capital Markets</Link> ·{' '}
                <Link to="/products/ai">AI &amp; Applied Intelligence</Link>
              </p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}