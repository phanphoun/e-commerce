import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetailPage = () => {
  const { id } = useParams();

  return (
    <div className="container py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-200 rounded-lg h-96"></div>
        <div>
          <h1 className="text-3xl font-bold mb-4">Product {id}</h1>
          <p className="text-gray-600 mb-4">Detailed product description goes here</p>
          <div className="text-2xl font-bold text-primary-blue mb-6">$199.99</div>
          <button className="bg-primary-blue text-white px-6 py-3 rounded-lg hover:bg-primary-blue-hover transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
