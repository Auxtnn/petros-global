"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa";
import { TestimonialData } from "../types";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const testimonialData: TestimonialData[] = [
  {
    id: 1,
    quote: "Exceptional property investment guidance.",
    description:
      "The Hampton team helped me identify a prime investment opportunity in the commercial district. Their market analysis was thorough, and they guided me through the entire acquisition process. Their attention to detail and knowledge of market trends proved invaluable for maximizing my investment return.",
    authorName: "Chijioke Nwosu",
  },

  {
    id: 2,
    quote: "Professional and transparent service.",
    description:
      "Working with The Hampton was an outstanding experience from start to finish. Their professionalism, market expertise, and dedication to client satisfaction truly set them apart in the real estate industry. I particularly appreciated their transparent approach to property valuation and their commitment to finding solutions that aligned perfectly with my investment goals.",
    authorName: "Adanna Okafor",
  },
  {
    id: 3,
    quote: "Long-term partnership that delivers.",
    description:
      "I've been working with The Hampton team for over five years, and they've consistently provided exceptional service. From property acquisition to management and eventual sale, they've demonstrated remarkable attention to detail and market insight. Their proactive approach to property management has maximized my returns while minimizing the typical headaches of real estate investment.",
    authorName: "Ikenna Obieze",
  },
  {
    id: 4,
    quote: "Strategic guidance for portfolio growth.",
    description:
      "The Hampton's approach to real estate investment is truly strategic. They took time to understand my financial goals and risk tolerance before recommending appropriate properties. Their team provided comprehensive market analysis and projections that helped me make informed decisions. What impressed me most was their ongoing support and willingness to adapt strategies as market conditions evolved.",
    authorName: "Oluchi Ezeibe",
  },
];

const TestimonialCard = ({ description, authorName }) => {
  return (
    <div className="h-[350px] flex flex-col bg-white rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="flex-1 p-8">
        <span className="inline-block text-primar/80 mb-6">
          <FaQuoteLeft className="w-8 h-8" />
        </span>
        <div className="space-y-1">
          <p className="text-gray-600 leading-relaxed line-clamp-6">
            {description}
          </p>
        </div>
      </div>
      <div className="p-8 pt-0">
        <div className="pt-6 border-t border-gray-100">
          <p className="font-semibold text-primar">{authorName}</p>
        </div>
      </div>
    </div>
  );
};

export const TestimonialSection = () => {
  return (
    <section
      className="py-10 px-4 bg-gradient-to-b from-slate-50 to-white"
      id="testimonials"
    >
      <div className=" lg:w-11/12 mx-auto">
        <div className="md:text-center mb-12">
          <h2 className="lg:text-4xl text-2xl font-bold text-gray-900 mb-4">
            What People Say About Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover why our clients trust and recommend our services
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
              centeredSlides: false,
            },
          }}
          className="[&_.swiper-pagination-bullet]:w-2.5 [&_.swiper-pagination-bullet]:h-2.5 [&_.swiper-pagination-bullet]:bg-slate-300 
                     [&_.swiper-pagination-bullet-active]:bg-primar [&_.swiper-pagination-bullet-active]:w-6 
                     [&_.swiper-button-next]:text-primar [&_.swiper-button-next]:bg-white [&_.swiper-button-next]:w-10 [&_.swiper-button-next]:h-10 [&_.swiper-button-next]:rounded-full [&_.swiper-button-next]:shadow-md
                     [&_.swiper-button-prev]:text-primar [&_.swiper-button-prev]:bg-white [&_.swiper-button-prev]:w-10 [&_.swiper-button-prev]:h-10 [&_.swiper-button-prev]:rounded-full [&_.swiper-button-prev]:shadow-md
                     [&_.swiper-button-next::after]:text-lg [&_.swiper-button-prev::after]:text-lg !pb-16"
        >
          {testimonialData.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="h-auto">
              <TestimonialCard
                quote={testimonial.quote}
                description={testimonial.description}
                authorName={testimonial.authorName}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialSection;
