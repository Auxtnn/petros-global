import React from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaFacebookF,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-primar" />,
      text: "No.1 Engr S.I Okafor Avenue,Y-junction,Okpuno, Awka, Nigeria",
    },
    {
      icon: <FaPhone className="text-primar" />,
      text: "+2348104511579",
    },
    {
      icon: <FaEnvelope className="text-primar" />,
      text: "petrosglobalenterprises@gmail.com",
    },
  ];

  return (
    <footer className="relative w-full bg-neutral-50">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#b99867]/20 via-primar to-[#b99867]/20" />

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-4">
              <Image
                alt="Smart Folks Real Estate"
                src="/assets/logo2.png"
                width={60}
                height={60}
                className="rounded-full shadow-lg"
                unoptimized
              />
              <h3 className="text-xl font-bold text-gray-900">
                The Hamptons
                <br />
                <span className="text-primar">Estate</span>
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed max-w-md">
              Your premier destination for lands, luxury real estate in Nigeria.
              With years of expertise and dedication, we transform your property
              aspirations into reality.
            </p>
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-gray-600"
                >
                  {item.icon}
                  <span className="text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-gray-900">Quick Links</h4>
            <ul className="space-y-4">
              {[
                "Listings",
                "About Us",
                "Services",
                "Contact",
                "Blog",
                "Testimonials",
              ].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase()}`}>
                    <span className="text-gray-600 hover:text-primar transition-colors duration-300 cursor-pointer">
                      {item}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-gray-900">
              Stay Updated
            </h4>
            <p className="text-gray-600 text-sm">
              Subscribe to our newsletter for exclusive property updates and
              market insights.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-primar transition-colors"
              />
              <button className="w-full px-4 py-3 bg-primar text-white rounded-lg hover:bg-primar transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} The Hamptons Estate. All Rights
              Reserved.
            </p>
            <div className="flex gap-6">
              {[
                {
                  icon: <FaFacebookF />,
                  href: "https://web.facebook.com/TheHamptonsNigeria",
                },
                {
                  icon: <FaInstagram />,
                  href: "https://web.facebook.com/TheHamptonsNigeria",
                },
                {
                  icon: <FaLinkedin />,
                  href: "https://web.facebook.com/TheHamptonsNigeria",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primar transition-colors duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Button */}
      <div className="fixed right-6 bottom-8 shadow-lg rounded-full">
        <Link
          href="https://wa.link/2mj4lq"
          target="_blank"
          className="block p-3 bg-white rounded-full border-2 border-primar hover:scale-105 transition-transform duration-300"
        >
          <IoLogoWhatsapp className="text-primar text-3xl" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
