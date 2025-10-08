import React from 'react';

/**
 * CartPage is a functional component that displays the contents of a user's cart.
 * It currently takes no props, but it will be updated to accept a cartItems array from state or context.
 * @returns {JSX.Element} The contents of the user's cart.
 */
function CartPage() {
  const cartItems = [
    {
      id: 1,
      name: 'Product 1',
      price: 10.99,
      image: 'https://i1.adis.ws/i/canon/ecom-camera-dept-dslr-19-800-as?w=940&bg=white&fmt=webp&qlt=80&sm=aspect&aspect=1:1',
      quantity: 2,
    },
    {
      id: 2,
      name: 'Product 2',
      price: 9.99,
      image: 'https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/25814128/247460_CES_2025_MSI_Titan_18_Dragon_Edition_ADiBenedetto_0010.jpg?quality=90&strip=all&crop=0,0,100,100',
      quantity: 1,
    },
    {
      id: 3,
      name: 'Product 3',
      price: 19.99,
      image: 'https://www.edmunds.com/assets/m/cs/blt6636dd2dd43fe180/66cd18ecd97a0cd40d54fdc5/2026_bugatti_tourbillon_front_1600.jpg',
      quantity: 3,
    },
  ];

  const CartItem = ({ item }) => (
    <div key={item.id} className="bg-white rounded-lg shadow-md p-6">
      <img src={item.image} alt={item.name} className="w-full" />
      <h3 className="" id='product-name'>{item.name}</h3>
      <div className="" id="product-price">$ {item.price.toLocaleString()}</div>
      <div className="flex justify-between items-center">
        <span className="" id="product-quantity">Quantity: {item.quantity}</span>
        <button className="bg-primary-blue text-white px-4 py-2 rounded-lg hover:bg-primary-blue-hover transition">
          Remove from Cart
        </button>
      </div>
    </div>
  );

  return (
    <>
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cartItems.map(item => <CartItem key={item.id} item={item} />)}
      </div>
    </>
  );
}export default CartPage;