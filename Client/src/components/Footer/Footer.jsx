import { useContext } from "react";
import UserContext from "../../context/UserContext";

const Footer = () => {
  const { loggedIn } = useContext(UserContext);

  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Branding Section */}
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h2 className="text-2xl font-bold text-white">ShopNest</h2>
            <p className="mt-2 text-gray-400">Your one-stop shop for all your needs.</p>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h3 className="text-xl font-semibold text-white">Quick Links</h3>
            <ul className="mt-2">
              <li><a href="/shop" className="hover:text-white">Shop</a></li>
              <li><a href="/about" className="hover:text-white">About Us</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
              <li><a href="/faq" className="hover:text-white">FAQ</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h3 className="text-xl font-semibold text-white">Customer Service</h3>
            <ul className="mt-2">
              <li><a href="/support" className="hover:text-white">Support</a></li>
              <li><a href="/returns" className="hover:text-white">Returns</a></li>
              <li><a href="/shipping" className="hover:text-white">Shipping</a></li>
              <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h3 className="text-xl font-semibold text-white">Follow Us</h3>
            <div className="mt-2 flex space-x-4">
              <a href="https://facebook.com" className="hover:text-white">
                <i className="fab fa-facebook-f"></i> Facebook
              </a>
              <a href="https://twitter.com" className="hover:text-white">
                <i className="fab fa-twitter"></i> Twitter
              </a>
              <a href="https://instagram.com" className="hover:text-white">
                <i className="fab fa-instagram"></i> Instagram
              </a>
              <a href="https://linkedin.com" className="hover:text-white">
                <i className="fab fa-linkedin-in"></i> LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-500">
          &copy; 2024 ShopNest. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
