import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import logo from "../assets/logowhite.png";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-6 md:px-12 flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
      <div className="flex flex-col items-center md:items-start space-y-4 text-center md:text-left md:w-[60%]">
        <img src={logo} alt="Logo" className="w-24 md:w-32" />
        <p className="text-sm md:text-base">
          Campus Connect is a platform that brings students, faculty, and alumni
          together to create a strong and collaborative community.
        </p>
      </div>

      <div className="flex flex-col items-center md:items-start space-y-4">
        <div className="flex space-x-4 md:pt-8">
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

        <div>
          <p className="text-sm mt-4 md:mt-0 text-center md:text-left">
            &copy; 2025 Campus Connect. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
