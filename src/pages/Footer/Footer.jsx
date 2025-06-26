
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"; // Adjust the path if needed

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content py-10 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Logo & About */}
        <div>
          <Link to="/" className="flex items-center gap-2 mb-3">
            <img src={logo} alt="Potropollob Logo" className="w-10 h-10" />
            <span className="text-xl font-bold">🌿 Potropollob</span>
          </Link>
          <p className="text-sm leading-relaxed">
            Your smart companion for discovering, tracking, and caring for
            plants. Built to help you grow a greener world.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="link link-hover">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="link link-hover">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/support" className="link link-hover">
                Support
              </Link>
            </li>
          </ul>
        </div>

        {/* Social & Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Connect with Us</h3>
          <div className="flex gap-4 mb-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF className="text-xl hover:text-blue-600" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="text-xl hover:text-blue-500" />
            </a>
            <a
              href="https://github.com/nazmulrahat786"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub className="text-xl hover:text-gray-700" />
            </a>
          </div>
          <div className="flex items-center gap-2 text-sm mb-1">
            <FaMapMarkerAlt className="text-base" />
            <span>Dhaka, Bangladesh</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <FaEnvelope className="text-base" />
            <span>nazmulrahat786@gmail.com</span>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center mt-10 text-sm text-gray-500 px-2">
        © {new Date().getFullYear()} Potropollob. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
