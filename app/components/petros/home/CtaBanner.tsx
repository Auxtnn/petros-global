"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTABanner = () => {
  return (
    <section className="relative py-10 overflow-hidden">
      {/* Background with light shade of primary color */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-[#F4C98A] mx-auto md:m-20 m-4 rounded-lg py-16"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="px-4 lg:w-11/12 mx-auto text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 mb-8"
          >
            Ready to elevate your business with our integrated approach?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-gray-700 mb-8"
          >
            From creative solutions to strategic consulting and real estate
            opportunities, partner with Petros Global to transform your vision
            into reality.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center bg-[#dc8617] hover:text-[#dc8617] text-white border border-[#dc8617] px-8 py-3 rounded-md font-semibold hover:bg-transparent transition-colors"
            >
              Start a Conversation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CTABanner;
