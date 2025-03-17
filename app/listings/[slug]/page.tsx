// app/properties/[slug]/page.tsx
"use client";

import React from "react";
import Image from "next/image";
import {
  PropertyImageCarousel,
  AgentContact,
} from "@/app/components/IndividualListing";
import { FiClock, FiInbox, FiMapPin, FiHome } from "react-icons/fi";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

interface PropertyImage {
  id: string;
  url: string;
}

interface Property {
  currentSlug: string;
  title: string;
  location: {
    category: string;
    city: string;
    address: string;
  };
  price: number;
  priceUnit: string;
  status: string;
  images: PropertyImage[];
  details: {
    bedrooms: number;
    bathrooms: number;
    toilets: number;
    area: number;
    furnished: boolean;
  };
  description: Array<{
    children: Array<{
      text: string;
    }>;
  }>;
  features: string[];
  image: string;
}

// Property data function
const getDummyProperty = (slug: string): Property | null => {
  const properties: Record<string, Property> = {
    "executive-office-complex-victoria-island": {
      currentSlug: "executive-office-complex-victoria-island",
      title: "Executive Office Complex in Victoria Island",
      location: {
        category: "Commercial",
        city: "Victoria Island",
        address: "Adeola Odeku Street, Victoria Island, Lagos",
        coordinates: {
          lat: 6.4281,
          lng: 3.4267,
        },
      },
      price: 950000000,
      priceUnit: "total",
      status: "sale",
      images: [
        {
          id: "img1",
          url: "/assets/aprt2.jpg",
        },
        {
          id: "img2",
          url: "/assets/img-4.png",
        },
        {
          id: "img3",
          url: "/assets/img-3.png",
        },
      ],
      details: {
        bedrooms: 0,
        bathrooms: 12,
        toilets: 16,
        area: 2800,
        furnished: true,
      },
      description: [
        {
          children: [
            {
              text: "This premium Grade A office complex represents a rare investment opportunity in Victoria Island's prime business district. The property features modern architectural design with floor-to-ceiling windows offering panoramic city views. With 4 floors of flexible office space, the building includes a grand reception area, executive boardrooms, open-plan workspaces, and private offices. The property is equipped with high-speed fiber connectivity, smart building management systems, backup power generation, and central air conditioning. Security features include 24/7 monitoring, access control systems, and secure underground parking for 45 vehicles. The strategic location provides excellent accessibility to major financial institutions, luxury hotels, and retail establishments, making it ideal for multinational corporations, financial services firms, or as a prestigious headquarters.",
            },
          ],
        },
      ],
      features: [
        "Smart Building Systems,Underground Parking,24/7 Security,Backup Power,High-Speed Connectivity,Central Air Conditioning,Executive Boardrooms,Elevator Access,Reception Area,Flexible Floor Plans",
      ],
      image: "/assets/aprt2.jpg",
    },
    "luxury-villa-banana-island": {
      currentSlug: "luxury-villa-banana-island",
      title: "Luxury Residential Development in Ikoyi",
      location: {
        category: "Residential",
        city: "Ikoyi",
        address: "Banana Island, Ikoyi, Lagos",
        coordinates: {
          lat: 6.4281,
          lng: 3.4267,
        },
      },
      price: 1200000000,
      priceUnit: "total",
      status: "sale",
      images: [
        {
          id: "img1",
          url: "/assets/aprt2.jpg",
        },
        {
          id: "img2",
          url: "/assets/img-4.png",
        },
        {
          id: "img3",
          url: "/assets/img-3.png",
        },
      ],
      details: {
        bedrooms: 5,
        bathrooms: 6,
        toilets: 7,
        area: 1200,
        furnished: true,
      },
      description: [
        {
          children: [
            {
              text: "This exceptional 5-bedroom villa in Banana Island represents the pinnacle of luxury living in Lagos. Set within a secure gated community, the property combines contemporary architecture with premium finishes throughout. The grand entrance leads to expansive living areas with double-height ceilings and floor-to-ceiling windows that flood the space with natural light. The property features a state-of-the-art kitchen with imported appliances, a formal dining room, home office, and entertainment areas including a home theater and games room. All bedrooms are en-suite with walk-in closets, while the master suite includes a private terrace with views over the landscaped gardens. Outdoor amenities include an infinity pool, covered terrace with outdoor kitchen, and manicured gardens. Additional features include smart home automation, staff quarters, backup power systems, water treatment, and a 4-car garage. This property offers both luxury living and excellent investment potential in one of Lagos's most prestigious addresses.",
            },
          ],
        },
      ],
      features: [
        "Swimming Pool,Smart Home System,Home Theater,Walk-in Closets,Staff Quarters,Backup Power,Water Treatment,4-Car Garage,Security System,Landscaped Gardens",
      ],
      image: "/assets/aprt2.jpg",
    },
    "lekki-development-opportunity": {
      currentSlug: "lekki-development-opportunity",
      title: "Mixed-Use Development Opportunity in Lekki",
      location: {
        category: "Commercial",
        city: "Lekki",
        address: "Lekki Free Trade Zone, Lagos",
        coordinates: {
          lat: 6.4698,
          lng: 3.5852,
        },
      },
      price: 85000000,
      priceUnit: "year",
      status: "lease",
      images: [
        {
          id: "img1",
          url: "/assets/aprt2.jpg",
        },
        {
          id: "img2",
          url: "/assets/img-4.png",
        },
        {
          id: "img3",
          url: "/assets/img-3.png",
        },
      ],
      details: {
        bedrooms: 0,
        bathrooms: 0,
        toilets: 0,
        area: 10000,
        furnished: false,
      },
      description: [
        {
          children: [
            {
              text: "This exceptional development opportunity in the rapidly expanding Lekki Free Trade Zone represents a strategic investment in one of Nigeria's fastest-growing commercial corridors. The property offers 10,000 square meters of prime land with approved development plans for a mixed-use project incorporating retail, office, and residential components. All necessary permits and environmental impact assessments are in place, allowing for immediate development commencement. The site benefits from excellent infrastructure connections, including newly constructed roads, water supply, and power distribution networks. The strategic location capitalizes on proximity to the new Lekki Deep Sea Port, Dangote Refinery, and proposed international airport, positioning this development to serve the growing commercial and residential needs of the area. The Hampton offers flexible leasing terms with options for joint venture partnerships, making this an ideal opportunity for developers, investment funds, or corporations seeking to establish a significant presence in this high-growth zone.",
            },
          ],
        },
      ],
      features: [
        "Development-Ready Land,Approved Plans,Strategic Location,Infrastructure Access,High Growth Area,Mixed-Use Zoning,Joint Venture Potential,Proximity to Deep Sea Port,Investment Opportunity,Flexible Terms",
      ],
      image: "/assets/aprt2.jpg",
    },
  };

  return properties[slug] || null;
};

export default function PropertyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = React.use(params);
  const property = getDummyProperty(resolvedParams.slug);

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <FiInbox className="text-6xl text-[#b99867] mx-auto" />
          <h2 className="text-2xl font-bold text-gray-900">
            Property Not Found
          </h2>
          <p className="text-gray-600">
            The property you're looking for doesn't exist or has been removed.
          </p>
        </div>
      </div>
    );
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen pt-20 mt-10 pb-10">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Property Header */}
          <div className="mb-12">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              {property.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-gray-600">
              <span className="flex items-center gap-2">
                <FiHome className="text-primar" />
                {property.location.category}
              </span>
              <span>•</span>
              <span className="flex items-center gap-2">
                <FiMapPin className="text-primar" />
                {property.location.city}
              </span>
              <span>•</span>
              <span className="text-primar font-semibold">
                {formatPrice(property.price)}
                <span className="text-sm text-gray-500 ml-1">
                  {property.priceUnit === "total"
                    ? ""
                    : `Per ${property.priceUnit}`}
                </span>
              </span>

              <div
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  property.status === "sale"
                    ? "bg-primar text-white"
                    : property.status === "rent"
                      ? "bg-blue-500 text-white"
                      : "bg-yellow-500 text-white"
                }`}
              >
                {property.status === "sale"
                  ? "For Sale"
                  : property.status === "rent"
                    ? "For Rent"
                    : "For Lease"}
              </div>
            </div>
          </div>

          {/* Image Carousel */}
          <PropertyImageCarousel images={property.images} />

          {/* Property Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Quick Info */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 bg-white rounded-xl shadow-sm">
                {Object.entries({
                  Bedrooms: property.details?.bedrooms,
                  Bathrooms: property.details?.bathrooms,
                  "Plot Area": `${property.details?.area} Sqm`,
                  Status: property.details?.furnished
                    ? "Furnished"
                    : "Unfurnished",
                }).map(([label, value]) => (
                  <div key={label} className="text-center">
                    <p className="text-gray-500 text-sm mb-1">{label}</p>
                    <p className="text-xl font-semibold text-gray-900">
                      {value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Description */}
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Description
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {property.description
                    .map((block) =>
                      block.children.map((child) => child.text).join("")
                    )
                    .join(" ")}
                </p>
              </div>

              {/* Features */}
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Property Features
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {property.features[0]
                    .split(",")
                    .map((feature: string, idx: number) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 p-3 bg-neutral-50 rounded-lg"
                      >
                        <span className="text-[#b99867]">•</span>
                        <span className="text-gray-700">{feature.trim()}</span>
                      </div>
                    ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <AgentContact />
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
