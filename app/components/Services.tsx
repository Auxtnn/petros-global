"use client";

import React, { useState } from "react";
import { HiOutlineHome } from "react-icons/hi";
import { FaRegHandshake, FaKey, FaChartLine, FaBuilding } from "react-icons/fa";
import { MdOutlineRealEstateAgent } from "react-icons/md";

const Features: React.FC = () => {
  const features = [
    {
      icon: <HiOutlineHome />,
      title: "Property Sales & Rentals",
      text: "Helping you find the perfect property to buy, sell, or rent with ease.",
    },
    {
      icon: <FaRegHandshake />,
      title: "Real Estate Consulting",
      text: "Providing expert advice for your real estate investments and transactions.",
    },
    {
      icon: <FaKey />,
      title: "Leasing Services",
      text: "Offering tailored leasing solutions for residential and commercial properties.",
    },
    {
      icon: <FaChartLine />,
      title: "Market Analysis",
      text: "Delivering in-depth market insights to help you make informed decisions.",
    },
    {
      icon: <MdOutlineRealEstateAgent />,
      title: "Agent Representation",
      text: "Representing your interests in buying, selling, or leasing properties.",
    },
    {
      icon: <FaBuilding />,
      title: "Commercial Property Management",
      text: "Managing commercial spaces to maximize efficiency and profitability.",
    },
  ];

  interface FeaturesCardProps {
    icon: React.ReactNode;
    title: string;
    text: string;
  }

  const FeaturesCard: React.FC<FeaturesCardProps> = ({ icon, title, text }) => {
    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => setIsHover(true);
    const handleMouseLeave = () => setIsHover(false);

    return (
      <div
        className="flex flex-col items-stretch"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={`${
            isHover ? "bg-primar" : ""
          } shadow-lg flex flex-col w-full py-10 rounded-2xl items-start px-4`}
        >
          <div className={`text-3xl ${isHover ? "text-white" : "text-primar"}`}>
            {icon}
          </div>
          <div
            className={`${
              isHover ? "text-white" : ""
            } text-base font-bold tracking-wider mt-4`}
          >
            {title}
          </div>
          <div
            className={`${
              isHover ? "text-white" : ""
            } text-sm leading-6 capitalize mt-2`}
          >
            {text}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      className="flex flex-col pb-16 px-4 mx-auto max-w-screen-xl lg:w-11/12"
      id="services"
    >
      <h1 className=" md:text-center text-2xl lg:text-4xl font-bold text-gray-800">
        Our Services
      </h1>
      <p className="text-opacity-80 m-auto md:text-center text-sm tracking-wider max-w-[550px] mt-4 max-md:max-w-full">
        Whether you’re buying, selling, renting, or leasing, we provide
        comprehensive services tailored to your unique needs.
      </p>
      <div className="w-full mt-6">
        <div className="grid grid-cols-3 gap-5 max-md:grid-cols-1 max-md:gap-6">
          {features.map((item, key) => (
            <FeaturesCard
              key={key}
              icon={item.icon}
              title={item.title}
              text={item.text}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
