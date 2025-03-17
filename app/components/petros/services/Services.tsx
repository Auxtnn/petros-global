"use client";

import React from "react";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import {
  FaPaintBrush,
  FaLightbulb,
  FaChartLine,
  FaBuilding,
  FaUsers,
  FaHome,
  FaCity,
  FaHandshake,
  FaArrowRight,
} from "react-icons/fa";
import Link from "next/link";

import { WordPullUpDemo } from "../word-pull-up";

const services = [
  {
    icon: <FaPaintBrush size={24} />,
    title: "Brand Development",
    description:
      "Creating distinctive brand identities that resonate with target audiences and drive business growth.",
    href: "#",
  },
  {
    icon: <FaLightbulb size={24} />,
    title: "Digital Marketing",
    description:
      "Strategic campaigns that engage audiences across platforms and deliver measurable results.",
    href: "#",
  },
  {
    icon: <FaChartLine size={24} />,
    title: "Strategic Planning",
    description:
      "Comprehensive business strategy development to navigate challenges and capitalize on opportunities.",
    href: "#",
  },
  {
    icon: <FaUsers size={24} />,
    title: "Organizational Development",
    description:
      "Enhancing team performance and corporate culture to drive sustainable business growth.",
    href: "#",
  },
  {
    icon: <FaHome size={24} />,
    title: "Property Development",
    description:
      "End-to-end management of real estate development projects through The Hampton division.",
    href: "#",
  },
  {
    icon: <FaHandshake size={24} />,
    title: "Investment Consulting",
    description:
      "Expert guidance on real estate investments to maximize returns and minimize risk.",
    href: "#",
  },
];

const ServiceCard = ({ service }) => (
  <div className="bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 p-6 flex flex-col md:flex-row items-start gap-4 group">
    <div className="flex-shrink-0">
      <div className="w-12 h-12 rounded-lg flex items-center justify-center text-[#dc8617] transition-colors duration-300">
        {service.icon}
      </div>
    </div>
    <div className="flex-grow space-y-2">
      <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
      <p className="text-gray-600 leading-relaxed">{service.description}</p>
      <Link
        href={service.href}
        className="inline-flex items-center text-[#dc8617] hover:text-[#dc8617]/80 font-medium mt-2 group-hover:translate-x-1 transition-transform duration-300"
      >
        Learn More
        <FaArrowRight className="ml-2 text-sm" />
      </Link>
    </div>
  </div>
);

const Services = () => {
  return (
    <Element name="services" className="py-10 bg-white">
      <div className="container mx-auto px-4 lg:w-11/12">
        <div className="md:text-center mb-16">
          <WordPullUpDemo />
          <p className="max-w-2xl mx-auto text-base lg:text-lg text-gray-600 mt-6">
            At Petros Global, we deliver integrated services across creative
            design, management consulting, and real estate to transform your
            vision into reality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </Element>
  );
};

export default Services;
