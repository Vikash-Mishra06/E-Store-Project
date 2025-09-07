import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-10 mt-10">
      <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white">e-Store</h2>
          <p className="mt-3 text-sm">
            Your one-stop shop for the best products online. Fast delivery,
            secure checkout, and top-notch quality.
          </p>
        </div>

        {/* Quick Links */}
        <nav>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/shop" className="hover:text-white">Shop</a></li>
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </nav>

        {/* Customer Support */}
        <nav>
          <h3 className="text-lg font-semibold text-white mb-3">Customer Support</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">FAQs</a></li>
            <li><a href="#" className="hover:text-white">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
          </ul>
        </nav>

        {/* Newsletter */}
        <section>
          <h3 className="text-lg font-semibold text-white">
            Follow Us
          </h3>
          <div className="flex space-x-4 md:mt-0 text-xl mb-2">
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-white">
              <i className="ri-facebook-circle-fill"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-white">
              <i className="ri-twitter-fill"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-white">
              <i className="ri-instagram-fill"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Github" className="hover:text-white">
              <i className="ri-github-fill"></i>
            </a>
          </div>

          <h3 className="text-lg font-semibold text-white mb-3">
            Join Our Newsletter
          </h3>
          <form className="flex flex-col sm:flex-col gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 rounded-md bg-gray-800 text-sm text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700"
            >
              Submit
            </button>
          </form>
        </section>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 border-t border-gray-700 pt-2 flex flex-col md:flex-row justify-between items-center text-lg text-gray-400 ">
        <p>&copy; 2025 e-Store. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
