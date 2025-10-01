import React from 'react';
import { useParams } from 'react-router-dom';

const ProductListPage = () => {
  const { category } = useParams();

  const categoryTitles = {
    'new-arrivals': 'New Arrivals',
    'best-sellers': 'Best Sellers',
    'limited-edition': 'Limited Edition',
    'gift-ideas': 'Gift Ideas',
    'sale': 'Sale Items'
  };

  const title = categoryTitles[category] || 'Products';

  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold mb-8">{title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[...Array(8)].map((_, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
            <h3 className="font-semibold text-lg mb-2">Product {index + 1}</h3>
            <p className="text-gray-600 mb-4">Product description goes here</p>
            <div className="flex justify-between items-center">
              <span className="text-xl font-bold text-primary-blue">$99.99</span>
              <button className="bg-primary-blue text-white px-4 py-2 rounded-lg hover:bg-primary-blue-hover transition">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListPage;
