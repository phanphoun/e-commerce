import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, CreditCard, Truck, Shield, RotateCcw } from 'lucide-react';
import logo from '../../assets/logo.svg';

const Footer = () => {
  const footerLinks = {
    Shop: [
      { name: 'New Arrivals', href: '/new-arrivals' },
      { name: 'Best Sellers', href: '/best-sellers' },
      { name: 'Limited Edition', href: '/limited-edition' },
      { name: 'Gift Ideas', href: '/gift-ideas' },
      { name: 'Sale', href: '/sale' },
    ],
    Help: [
      { name: 'Customer Service', href: '/help' },
      { name: 'Track Order', href: '/track-order' },
      { name: 'Shipping Info', href: '/shipping' },
      { name: 'Returns', href: '/returns' },
      { name: 'Size Guide', href: '/size-guide' },
    ],
    About: [
      { name: 'About Us', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Press', href: '/press' },
      { name: 'Sustainability', href: '/sustainability' },
      { name: 'Investors', href: '/investors' },
    ],
    Legal: [
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'Accessibility', href: '/accessibility' },
      { name: 'Compliance', href: '/compliance' },
    ],
  };

  const features = [
    { icon: Truck, title: 'Free Shipping', description: 'On orders over $50' },
    { icon: Shield, title: 'Secure Payment', description: '100% secure transactions' },
    { icon: RotateCcw, title: 'Easy Returns', description: '30-day return policy' },
    { icon: CreditCard, title: 'Flexible Payment', description: 'Multiple payment options' },
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/ishare', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com/ishare', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com/ishare', label: 'Instagram' },
    { icon: Youtube, href: 'https://youtube.com/ishare', label: 'YouTube' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Features Section */}
      <div className="bg-gray-800 py-8">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <feature.icon className="h-8 w-8 text-primary-blue" />
                <div>
                  <h3 className="font-semibold text-white">{feature.title}</h3>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <img src={logo} alt="iShare E-Commerce" className="h-12 w-auto" />
            </Link>
            <p className="text-gray-400 mb-6 max-w-sm">
              Your trusted destination for quality products. Discover amazing deals and exclusive collections curated just for you.
            </p>
            
            {/* Newsletter */}
            <div className="mb-6">
              <h3 className="font-semibold text-white mb-3">Stay Updated</h3>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-primary-blue text-white"
                />
                <button className="bg-primary-blue hover:bg-primary-blue-hover px-4 py-2 rounded-r-lg transition">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="bg-gray-800 hover:bg-primary-blue p-2 rounded-lg transition"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-white mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-white transition"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Info */}
      <div className="border-t border-gray-800">
        <div className="container py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-primary-blue" />
              <div>
                <p className="text-sm text-gray-400">Email Us</p>
                <p className="text-white">support@ishare.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-primary-blue" />
              <div>
                <p className="text-sm text-gray-400">Call Us</p>
                <p className="text-white">1-800-ISHARE-1</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-primary-blue" />
              <div>
                <p className="text-sm text-gray-400">Visit Us</p>
                <p className="text-white">123 Commerce St, City, State 12345</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black py-4">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 iShare E-Commerce. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-white transition">Privacy</Link>
              <Link to="/terms" className="text-gray-400 hover:text-white transition">Terms</Link>
              <Link to="/cookies" className="text-gray-400 hover:text-white transition">Cookies</Link>
              <Link to="/accessibility" className="text-gray-400 hover:text-white transition">Accessibility</Link>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>Secured by</span>
              <span className="text-white">SSL</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
