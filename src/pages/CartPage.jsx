import React from 'react';

const CartPage = () => {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="text-gray-600">Your cart is empty</p>
      </div>
    </div>
  );
};

export default CartPage;
