import { useRouter } from 'next/router';
import React from 'react';
import Layout from '../../components/Layout';
import data from '../../utils/data';

const Productscreen = () => {
  const { query } = useRouter();
  const { slug } = query;
  const product = data.products.find((a) => a.slug == slug);

  if (!product) return <div>product not found!</div>;

  return (
    <Layout title={product.name}>
      <h1>{product.name} </h1>
    </Layout>
  );
};

export default Productscreen;
