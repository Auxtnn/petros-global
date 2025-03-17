"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaArrowRight,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <footer className="bg-black text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-4"
          >
            <div className="flex items-center">
              <div className="relative h-20 w-20 mr-2">
                <Image
                  src="/assets/logo1.png"
                  alt="Petros Global Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <p className="text-gray-400 text-sm mt-4">
              Delivering exceptional creative, consulting, and real estate
              services that transform your vision into reality.
            </p>

            <div className="flex space-x-4 pt-2">
              <a
                href="https://www.facebook.com/https://web.facebook.com/Petrosglobalenterprises"
                aria-label="Facebook"
                target="_blank"
                className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#dc8617] transition-colors"
              >
                <FaFacebookF size={14} />
              </a>
              <a
                href="https://x.com/PetrosGlobalng?s=09"
                aria-label="Twitter"
                target="_blank"
                className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#dc8617] transition-colors"
              >
                <FaTwitter size={14} />
              </a>
              <a
                href="https://www.linkedin.com/in/petros-global-2a7885247"
                aria-label="LinkedIn"
                target="_blank"
                className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#dc8617] transition-colors"
              >
                <FaLinkedinIn size={14} />
              </a>
              <a
                href="https://www.instagram.com/petrosglobal/"
                aria-label="Instagram"
                target="_blank"
                className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#dc8617] transition-colors"
              >
                <FaInstagram size={14} />
              </a>
              <a
                href="https://www.youtube.com/@petrosglobalenterprises"
                aria-label="Youtube"
                target="_blank"
                className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#dc8617] transition-colors"
              >
                <FaYoutube size={14} />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-4"
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-4 relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-[#dc8617]"></span>
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors inline-flex items-center group"
                >
                  <FaArrowRight className="mr-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors inline-flex items-center group"
                >
                  <FaArrowRight className="mr-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                  Creative Agency
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors inline-flex items-center group"
                >
                  <FaArrowRight className="mr-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                  Management Consulting
                </Link>
              </li>
              <li>
                <Link
                  href="/the-hamptons"
                  className="text-gray-400 hover:text-white transition-colors inline-flex items-center group"
                >
                  <FaArrowRight className="mr-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                  The Hampton
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors inline-flex items-center group"
                >
                  <FaArrowRight className="mr-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                  Our Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors inline-flex items-center group"
                >
                  <FaArrowRight className="mr-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                  Contact Us
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-4"
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4 relative inline-block">
              Contact Us
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-[#dc8617]"></span>
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-[#dc8617] mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-400">
                  No.1 Engr. S I Okafor Avenue, <br />
                  Y-junction, <br />
                  Okpuno, Awka, Nigeria
                </span>
              </div>
              <div className="flex items-center">
                <FaPhone className="text-[#dc8617] mr-3 flex-shrink-0" />
                <a
                  href="tel:+2348104511579"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  +2348104511579
                </a>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-[#dc8617] mr-3 flex-shrink-0" />
                <a
                  href="mailto:info@petrosglobal.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  info@petrosglobal.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-4"
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-4 relative inline-block">
              Newsletter
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-[#dc8617]"></span>
            </h3>
            <p className="text-gray-400 text-sm">
              Subscribe to our newsletter to receive updates and insights from
              our team.
            </p>
            <form className="mt-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="bg-gray-800 text-gray-200 px-4 py-2 rounded-l-md w-full focus:outline-none focus:ring-1 focus:ring-[#dc8617]"
                  required
                />
                <button
                  type="submit"
                  className="bg-[#dc8617] text-white px-4 py-2 rounded-r-md hover:bg-[#dc8617]/90 transition-colors"
                >
                  <FaArrowRight />
                </button>
              </div>
            </form>
            <p className="text-gray-500 text-xs mt-2">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </motion.div>
        </div>

        {/* Copyright Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Petros Global. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="#"
              className="text-gray-500 hover:text-gray-400 text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-gray-500 hover:text-gray-400 text-sm"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-gray-500 hover:text-gray-400 text-sm"
            >
              Cookies
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
