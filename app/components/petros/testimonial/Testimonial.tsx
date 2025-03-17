"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <section className="py-10">
      <div className="mx-auto md:w-11/12 px-4">
        <div className="md:mb-12  mb-8 md:text-center">
          <h2 className="text-3xl md:text-5xl text-center font-medium">
            What Our Clients Say
          </h2>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          spaceBetween={20}
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          className=""
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="group bg-white border pb-10 border-solid border-gray-300 rounded-xl p-6 transition-all duration-500 hover:border-[#dc8617] hover:shadow-sm h-[300px] flex flex-col justify-between">
                <div>
                  <p className="text-base text-gray-600 leading-6 transition-all duration-500 group-hover:text-gray-800 line-clamp-6 overflow-hidden">
                    {testimonial.content}
                  </p>
                </div>
                <div className="flex items-center gap-5 border-t border-solid border-gray-200 pt-5">
                  <img
                    className="rounded-full h-10 w-10 object-cover"
                    src="/assets/profile.jpg"
                    alt="avatar"
                  />
                  <div>
                    <h5 className="text-gray-900 font-medium mb-1">
                      {testimonial.name}
                    </h5>
                    <span className="text-sm text-gray-500">
                      {testimonial.location}
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

// Testimonials data
const testimonials = [
  {
    content:
      "Petros Global completely transformed our brand identity. Their creative team truly understood our vision and translated it into a compelling visual language that resonated with our target audience. The results exceeded our expectations and have significantly improved our market positioning.",
    name: "Sarah Johnson",
    location: "Marketing Director, Horizon Tech",
  },
  {
    content:
      "Working with the consulting team at Petros Global was a game-changer for our business. They identified operational inefficiencies we had overlooked and implemented strategic solutions that reduced our overhead costs by nearly 30% while improving productivity across all departments.",
    name: "Michael Chen",
    location: "CEO, Nexus Innovations",
  },
  {
    content:
      "The Hampton's real estate expertise was instrumental in our property investment strategy. Their market analysis and property selection helped us acquire high-performing assets that have consistently delivered returns above market average. Truly exceptional service.",
    name: "Alexandra Rodriguez",
    location: "Investment Director, Atlas Capital",
  },
  {
    content:
      "Our digital transformation project with Petros Global delivered beyond expectations. Their integrated approach combining design, user experience, and marketing strategy increased our online conversions dramatically and improved our customer retention rates.",
    name: "James Wilson",
    location: "Digital Strategy Lead, Vertex Solutions",
  },
  {
    content:
      "The strategic planning workshop led by Petros Global's consulting team helped us navigate a challenging market transition. Their insights and structured approach gave us clarity and confidence to execute our growth plan with precision and purpose.",
    name: "Diana Miller",
    location: "Operations Director, Summit Enterprises",
  },
];

export default Testimonials;
