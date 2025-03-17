"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaTags } from "react-icons/fa";
import Link from "next/link";

// Portfolio data
const portfolioItems = [
  {
    id: 1,
    title: "Sunrise Corporate Rebrand",
    category: "Creative Agency",
    tags: ["Branding", "Design", "Digital Marketing"],
    description:
      "Complete brand transformation for a multinational technology firm, including new visual identity, messaging platform, and digital presence.",
    image: "/assets/branding.jpg",
    link: "#",
  },
  {
    id: 2,
    title: "Nexus Operations Restructuring",
    category: "Management Consulting",
    tags: ["Strategic Planning", "Operational Efficiency"],
    description:
      "Strategic overhaul of business operations for a manufacturing company, resulting in 35% cost reduction and improved workflow efficiency.",
    image: "/assets/planning.jpg",
    link: "#",
  },
  {
    id: 3,
    title: "The Crescent Development",
    category: "The Hampton",
    tags: ["Real Estate", "Property Development"],
    description:
      "Luxury mixed-use development featuring residential units and commercial spaces in a prime urban location.",
    image: "/assets/img7.jpg",
    link: "#",
  },
  {
    id: 4,
    title: "Vertex Digital Experience",
    category: "Creative Agency",
    tags: ["UX Design", "Web Development"],
    description:
      "Award-winning digital platform redesign that increased user engagement by 78% and conversion rates by 42%.",
    image: "/assets/coding.jpg",
    link: "#",
  },
  {
    id: 5,
    title: "Atlas Growth Strategy",
    category: "Management Consulting",
    tags: ["Market Analysis", "Growth Planning"],
    description:
      "Comprehensive market analysis and five-year growth strategy for a financial services firm entering new market segments.",
    image: "/assets/analysis.jpg",
    link: "#",
  },
  {
    id: 6,
    title: "Parkview Investment Portfolio",
    category: "The Hampton",
    tags: ["Real Estate", "Investment"],
    description:
      "Curated portfolio of high-yield commercial properties with strategic renovation and leasing management.",
    image: "/assets/img5.jpg",
    link: "#",
  },
];

// Filter categories
const categories = [
  "All",
  "Creative Agency",
  "Management Consulting",
  "The Hampton",
];

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredItem, setHoveredItem] = useState(null);
  const containerRef = useRef(null);

  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4 lg:w-11/12">
        <div className="text-center mb-16">
          <div className="w-12 h-1 bg-[#dc8617]  mx-auto mb-6"></div>
          <h2 className="text-3xl md:text-5xl text-center font-medium mb-4">
            Our Portfolio
          </h2>
          <p className="max-w-2xl mx-auto text-center text-gray-600 text-lg">
            Explore our selected projects showcasing excellence across creative
            design, strategic consulting, and real estate development
          </p>

          {/* Filter tabs */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-[#dc8617] text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio grid with masonry-like layout */}
        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredItems.map((item) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              key={item.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Project image with overlay */}
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-in-out"
                  style={{
                    transform:
                      hoveredItem === item.id ? "scale(1.05)" : "scale(1)",
                  }}
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-300 ${
                    hoveredItem === item.id ? "opacity-100" : "opacity-70"
                  }`}
                >
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-block px-3 py-1 text-xs font-medium text-white bg-[#dc8617] rounded-full">
                      {item.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Project details */}
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 mb-4 flex-grow">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex items-center gap-2 flex-wrap mb-4">
                  <FaTags className="text-gray-400 text-sm" />
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link to case study */}
                <Link
                  href={item.link}
                  className="inline-flex items-center text-[#dc8617] font-medium hover:underline"
                >
                  View Case Study
                  <FaExternalLinkAlt className="ml-2 text-xs" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all projects button */}
        <div className="text-center mt-12">
          <Link
            href="#"
            className="inline-flex items-center px-6 py-3 border border-[#dc8617] text-[#dc8617] hover:bg-[#dc8617] hover:text-white rounded-full transition-colors duration-300"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
