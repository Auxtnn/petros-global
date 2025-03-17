"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const sidebarRef = useRef(null);

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close sidebar when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        isOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navigationLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#" },
    { name: "Services", href: "#" },
    { name: "The Hampton", href: "/the-hamptons" },
    { name: "Contact Us", href: "#" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/85 backdrop-blur-md py-2 shadow-lg"
          : "bg-gradient-to-b from-black/70 to-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo with subtle animation */}
        <Link href="/" className="flex items-center z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative h-16 w-16 mr-2"
          >
            <Image
              src="/assets/logo1.png"
              alt="Petros Global Logo"
              fill
              className="object-contain"
              priority
            />
          </motion.div>
        </Link>

        {/* Desktop Navigation with elegant hover effects */}
        <nav className="hidden lg:flex items-center gap-8">
          {navigationLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-white text-sm font-medium relative group py-2"
            >
              <span>{link.name}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#dc8617] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-4 bg-[#dc8617] hover:bg-[#dc8617]/90 text-white px-6 py-2 rounded-full transition-all transform hover:scale-105 shadow-md"
          >
            Get in touch
          </Link>
        </nav>

        {/* Mobile menu button with animation */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="lg:hidden text-white z-10 bg-[#dc8617]/20 p-2 rounded-full backdrop-blur-sm"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </motion.button>
      </div>

      {/* Mobile Sidebar Navigation */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm lg:hidden z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              ref={sidebarRef}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-72 bg-gradient-to-b from-black to-gray-900 z-50 lg:hidden shadow-2xl"
            >
              <div className="flex flex-col h-full">
                {/* Logo area in sidebar */}
                <div className="p-5 border-b border-white/10 flex justify-between items-center">
                  <div className="relative h-12 w-12">
                    <Image
                      src="/assets/logo1.png"
                      alt="Petros Global Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-white hover:text-[#dc8617]"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Navigation links */}
                <div className="py-6 px-4 overflow-y-auto flex-1">
                  <nav className="flex flex-col space-y-1">
                    {navigationLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className="text-white py-3 px-4 rounded-lg hover:bg-white/10 transition-colors flex items-center"
                        onClick={() => setIsOpen(false)}
                      >
                        <span>{link.name}</span>
                        <ChevronRight
                          size={16}
                          className="ml-auto text-gray-400"
                        />
                      </Link>
                    ))}
                  </nav>
                </div>

                {/* CTA button at bottom */}
                <div className="p-4 border-t border-white/10 mt-auto">
                  <Link
                    href="/contact"
                    className="bg-[#dc8617] text-white py-3 rounded-lg flex items-center justify-center shadow-lg hover:bg-[#dc8617]/90 transition-all"
                    onClick={() => setIsOpen(false)}
                  >
                    Get in touch
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
