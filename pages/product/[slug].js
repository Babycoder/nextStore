import { useRouter } from 'next/router';
import React from 'react';
import Layout from '../../components/Layout';
import data from '../../utils/data';
import Link from 'next/link';
import Image from 'next/image';

const Productscreen = () => {
  const { query } = useRouter();
  const { slug } = query;
  const product = data.products.find((a) => a.slug == slug);

  if (!product) return <div>product not found!</div>;

  return (
    <Layout title={product.name}>
      <div className="p-2">
        <Link href="/"> back to home page</Link>
      </div>
      <div className="grid md:grid-cols-4 md:gap-3">
        <div className="md:col-span-2">
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
          ></Image>
        </div>
        <div>
          <ul>
            <li>
              <h1 className="text-lg"> {product.name} </h1>
            </li>
            <li>Category: {product.category}</li>
            <li>Brand: {product.brand}</li>
            <li>
              {product.rating} of {product.numReviews} reviews.
            </li>
            <li>Description: {product.description}</li>
          </ul>
        </div>
        <div className="card h-fit p-5 mr-4">
          <div className=" mb-2 flex justify-between">
            <h1>Price</h1>
            <h2>${product.price}</h2>
          </div>
          <div className="mb-2 flex justify-between">
            <h1>Status</h1>
            <h2>{product.countInStock ? 'In stock' : 'Unvailable'}</h2>
          </div>
          <button className='primary-button w-full'>Add to cart</button>
        </div>
      </div>
    </Layout>
  );
};

export default Productscreen;
