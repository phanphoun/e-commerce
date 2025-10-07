import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart, Star, ArrowRight, Truck, Shield, Award, Zap, Gift, Percent } from 'lucide-react';

const HomePage = () => {
  const featuredProducts = [
    {
      id: 1,
      name: 'Premium Wireless Headphones',
      price: 199,
      originalPrice: 299,
      rating: 4.5,
      reviews: 128,
      badge: 'Best Seller',
      badgeColor: 'from-emerald-500 to-teal-600',
      image: '/api/placeholder/300/300'
    },
    {
      id: 2,
      name: 'Smart Fitness Watch',
      price: 299,
      originalPrice: 399,
      rating: 4.2,
      reviews: 95,
      badge: 'New',
      badgeColor: 'from-blue-500 to-purple-600',
      image: '/api/placeholder/300/300'
    },
    {
      id: 3,
      name: 'Professional Camera Lens',
      price: 449,
      originalPrice: 599,
      rating: 4.8,
      reviews: 67,
      badge: 'Sale',
      badgeColor: 'from-rose-500 to-pink-600',
      image: '/api/placeholder/300/300'
    },
    {
      id: 4,
      name: 'Bluetooth Speaker',
      price: 79,
      originalPrice: 129,
      rating: 4.3,
      reviews: 203,
      badge: 'Popular',
      badgeColor: 'from-amber-500 to-orange-600',
      image: '/api/placeholder/300/300'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 py-20 lg:py-28">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-transparent to-black/10"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="hero-content text-white">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-white/20">
                <Zap className="h-4 w-4 mr-2" />
                New Collection Available
              </div>
              <h1 className="hero-title text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                Discover Amazing
                <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  Products
                </span>
              </h1>
              <p className="hero-subtitle text-xl lg:text-2xl mb-8 leading-relaxed text-white/90 max-w-xl">
                Shop the latest trends and find everything you need, from electronics to fashion,
                all in one convenient place with fast shipping and secure payments.
              </p>
              <div className="hero-actions flex flex-col sm:flex-row gap-4">
                <Link
                  to="/products"
                  className="group bg-white text-indigo-600 px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center"
                >
                  Shop Now
                  <ShoppingCart className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/about"
                  className="group border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-semibold text-lg backdrop-blur-sm hover:bg-white/10 hover:border-white/50 transition-all duration-300 flex items-center justify-center"
                >
                  Learn More
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            <div className="hero-image relative">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-pink-400 to-purple-400 rounded-3xl blur-lg opacity-30 animate-pulse">
                    <img
                      src="https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/838564/935880_609691.png"
                      alt="Hero"
                      className="relative w-full h-auto rounded-3xl shadow-2xl border border-white/20 backdrop-blur-sm"
                    />
                </div>
                
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                  <Gift className="h-10 w-10 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why Choose <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">iShare</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience shopping like never before with our premium services and customer-first approach
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group feature-card text-center p-8 rounded-3xl bg-gradient-to-br from-slate-50 to-gray-50 hover:from-indigo-50 hover:to-purple-50 border border-gray-100 hover:border-indigo-200 hover:shadow-xl transition-all duration-300">
              <div className="feature-icon mx-auto mb-6 w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Truck className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Free Shipping</h3>
              <p className="text-gray-600 leading-relaxed">Free delivery on orders over $50 with express shipping options</p>
            </div>

            <div className="group feature-card text-center p-8 rounded-3xl bg-gradient-to-br from-slate-50 to-gray-50 hover:from-emerald-50 hover:to-teal-50 border border-gray-100 hover:border-emerald-200 hover:shadow-xl transition-all duration-300">
              <div className="feature-icon mx-auto mb-6 w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Secure Payment</h3>
              <p className="text-gray-600 leading-relaxed">100% secure payment processing with SSL encryption</p>
            </div>

            <div className="group feature-card text-center p-8 rounded-3xl bg-gradient-to-br from-slate-50 to-gray-50 hover:from-amber-50 hover:to-orange-50 border border-gray-100 hover:border-amber-200 hover:shadow-xl transition-all duration-300">
              <div className="feature-icon mx-auto mb-6 w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Award className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Best Prices</h3>
              <p className="text-gray-600 leading-relaxed">Competitive prices guaranteed with price match policy</p>
            </div>

            <div className="group feature-card text-center p-8 rounded-3xl bg-gradient-to-br from-slate-50 to-gray-50 hover:from-rose-50 hover:to-pink-50 border border-gray-100 hover:border-rose-200 hover:shadow-xl transition-all duration-300">
              <div className="feature-icon mx-auto mb-6 w-20 h-20 bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Percent className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Best Deals</h3>
              <p className="text-gray-600 leading-relaxed">Exclusive discounts and flash sales for our members</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-slate-100">
        <div className="container mx-auto px-4">
          <div className="section-header text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-medium rounded-full mb-4">
              <Star className="h-4 w-4 mr-2" />
              Featured Collection
            </div>
            <h2 className="section-title text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Handpicked <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Products</span>
            </h2>
            <p className="section-subtitle text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover our carefully curated selection of premium products that combine quality, style, and innovation
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <div
                key={product.id}
                className="group product-card bg-white rounded-3xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 animate-pulse"></div>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="relative w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`product-badge absolute top-4 left-4 px-3 py-1.5 text-xs font-bold rounded-full bg-gradient-to-r ${product.badgeColor} text-white shadow-lg`}>
                    {product.badge}
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-300">
                      <Heart className="h-5 w-5 text-gray-700 hover:text-red-500 transition-colors" />
                    </button>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6">
                  <h3 className="product-title font-bold text-lg mb-3 text-gray-900 group-hover:text-indigo-600 transition-colors line-clamp-2">
                    {product.name}
                  </h3>

                  <div className="flex items-center mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-500 font-medium">({product.reviews})</span>
                  </div>

                  <div className="product-price mb-4">
                    <span className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                      ${product.price}
                    </span>
                    <span className="ml-2 text-lg text-gray-400 line-through">${product.originalPrice}</span>
                    <span className="ml-2 px-2 py-1 bg-gradient-to-r from-rose-500 to-pink-500 text-white text-xs font-bold rounded-full">
                      Save ${product.originalPrice - product.price}
                    </span>
                  </div>

                  <div className="product-actions flex gap-3">
                    <button className="btn flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-4 rounded-2xl font-semibold hover:from-indigo-700 hover:to-purple-700 hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </button>
                    <Link
                      to={`/products/${product.id}`}
                      className="btn flex-1 border-2 border-gray-200 text-gray-700 py-3 px-4 rounded-2xl font-semibold hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-600 transition-all duration-300 flex items-center justify-center"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              to="/products"
              className="group bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center"
            >
              View All Products
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-white/20">
              <Gift className="h-4 w-4 mr-2 text-yellow-300" />
              Stay in the Loop
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Get Exclusive <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">Offers</span>
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
              Subscribe to our newsletter and be the first to know about new products, exclusive deals, and special offers delivered to your inbox.
            </p>

            <div className="max-w-lg mx-auto">
              <div className="flex flex-col sm:flex-row gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-2 border border-white/20">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 bg-transparent text-white placeholder-white/60 focus:outline-none text-lg"
                />
                <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:from-yellow-300 hover:to-orange-400 hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center">
                  Subscribe
                  <ArrowRight className="h-5 w-5 ml-2" />
                </button>
              </div>
              <p className="text-white/60 text-sm mt-4">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
