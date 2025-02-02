import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-6 text-center flex flex-col items-center space-y-4 md:flex-row md:justify-between md:px-12">
      <p className="text-sm">&copy; 2025 RunFest. All rights reserved.</p>
      <div className="flex space-x-4">
        <a
          href="#"
          className="text-white hover:text-gray-400 transition text-lg"
          aria-label="Facebook"
        >
          <FaFacebookF />
        </a>
        <a
          href="#"
          className="text-white hover:text-gray-400 transition text-lg"
          aria-label="Twitter"
        >
          <FaTwitter />
        </a>
        <a
          href="#"
          className="text-white hover:text-gray-400 transition text-lg"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="#"
          className="text-white hover:text-gray-400 transition text-lg"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
