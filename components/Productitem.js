/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

const Productitem = ({ product }) => {
  return (
    <div className="card">
      <Link href={`/product/${product.slug}`}>
        <a>
          <img
            src={product.image}
            alt={product.name}
            className="rounded shadow"
          />
        </a>
      </Link>
    </div>
  );
};

export default Productitem;
