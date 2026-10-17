import React from 'react';
import Link from '@docusaurus/Link';

export default function ProductCard({product}) {
  const inner = (
    <>
      <img
        className="product-card__image"
        src={product.image}
        alt={product.name}
        loading="lazy"
      />
      <div className="product-card__body">
        <span className="product-card__tag">{product.category}</span>
        <h3 className="product-card__title">{product.name}</h3>
        <p className="product-card__desc">{product.description}</p>
        <span className="product-card__link">
          Explore {product.name} &rarr;
        </span>
      </div>
    </>
  );

  return (
    <Link to={product.href} className="product-card">
      {inner}
    </Link>
  );
}