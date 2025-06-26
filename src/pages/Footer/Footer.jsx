import React from "react";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content py-10">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        {/* About */}
        <div>
          <h2 className="text-xl font-bold mb-2">🌿 Potropollob</h2>
          <p className="text-sm">
            Your smart companion for discovering, tracking, and caring for plants. 
            Built to help you grow a greener world.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="/" className="link link-hover">Home</a></li>
            <li><a href="/services" className="link link-hover">Services</a></li>
            <li><a href="/about" className="link link-hover">About</a></li>
            <li><a href="/support" className="link link-hover">Support</a></li>
          </ul>
        </div>

        {/* Social & Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Connect with Us</h3>
          <div className="flex gap-4 mb-2">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebookF className="text-xl hover:text-blue-600" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedinIn className="text-xl hover:text-blue-500" />
            </a>
            <a href="https://github.com/nazmulrahat786" target="_blank" rel="noreferrer">
              <FaGithub className="text-xl hover:text-gray-700" />
            </a>
          </div>
          <p className="text-sm">📍 Dhaka, Bangladesh</p>
          <p className="text-sm">✉️ nazmulrahat786@gmail.com</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center mt-10 text-sm text-gray-500">
        © {new Date().getFullYear()} Potropollob. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
