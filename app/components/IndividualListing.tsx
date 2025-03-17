// components/PropertyImageCarousel.tsx
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import type { PropertyImage } from "../types";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type Props = {
  images: PropertyImage[];
};

export const PropertyImageCarousel = ({ images }: Props) => {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        className="h-full rounded-lg"
      >
        {images.map((image, index) => (
          <SwiperSlide key={`${image.id}-${index}`}>
            <div className="relative w-full h-full">
              <Image
                src={image.url}
                alt={`Property image ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0} // Only prioritize loading the first image
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export const AgentContact = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center space-x-4 mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-800">The Hamptons </h3>
          <p className="text-gray-600">Estate</p>
        </div>
      </div>
      <div className="space-y-3">
        <button
          className="w-full bg-primar text-white py-3 rounded-md hover:bg-primar/80 transition-colors duration-300"
          onClick={() => (window.location.href = "/contact")}
        >
          Contact Us
        </button>
        <a
          href="tel:+971509106300"
          className="block w-full text-center bg-gray-800 text-white py-3 rounded-md hover:bg-gray-700 transition-colors duration-300"
        >
          Call +2348104511579
        </a>
        <a
          href="mailto:petrosglobalenterprises@gmail.com"
          className="block w-full text-center border border-gray-300 py-3 rounded-md hover:bg-gray-50 transition-colors duration-300"
        >
          Email Us
        </a>
      </div>
    </div>
  );
};

interface PropertyMapProps {
  address: string;
}
