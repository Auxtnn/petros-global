import React from "react";
import { FiClock, FiInbox, FiMapPin, FiHome } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
const dummyProperties = [
  {
    _id: "1",
    title: "Executive Office Complex in Victoria Island",
    category: "commercial",
    status: "sale",
    image: "/assets/img-5.png",
    description: [
      {
        children: [
          {
            text: "Premium Grade A office complex in the heart of Victoria Island business district. Features modern design, open floor plans, and state-of-the-art facilities. Includes dedicated parking, 24/7 security, backup power systems, and high-speed internet infrastructure ideal for multinational corporations.",
          },
        ],
      },
    ],
    location: {
      city: "Victoria Island",
      address: "Adeola Odeku Street, Victoria Island, Lagos",
    },
    price: 950000000,
    priceUnit: "total",
    currentSlug: "executive-office-complex-victoria-island",
  },
  {
    _id: "2",
    title: "Luxury Residential Development in Ikoyi",
    category: "villa",
    status: "sale",
    image: "/assets/img-5.png",
    description: [
      {
        children: [
          {
            text: "Exclusive 5-bedroom luxury villa with contemporary architecture, located in a gated community in Ikoyi. Features private garden, swimming pool, smart home technology, home theater, wine cellar, and staff quarters. Designed with premium imported materials and energy-efficient systems.",
          },
        ],
      },
    ],
    location: {
      city: "Ikoyi",
      address: "Banana Island, Ikoyi, Lagos",
    },
    price: 1200000000,
    priceUnit: "total",
    currentSlug: "luxury-villa-banana-island",
  },
  {
    _id: "3",
    title: "Mixed-Use Development Opportunity in Lekki",
    category: "commercial",
    status: "lease",
    image: "/assets/img-5.png",
    description: [
      {
        children: [
          {
            text: "Strategic investment opportunity in the rapidly growing Lekki Free Trade Zone. This mixed-use development site offers excellent potential for retail, office, and residential components. Includes approved development plans, environmental impact assessment, and all necessary permits.",
          },
        ],
      },
    ],
    location: {
      city: "Lekki",
      address: "Lekki Free Trade Zone, Lagos",
    },
    price: 85000000,
    priceUnit: "year",
    currentSlug: "lekki-development-opportunity",
  },
];

interface PropertyPageProps {
  properties?: any[]; // Making properties optional since we're using dummy data
}

const Alllistings: React.FC<PropertyPageProps> = ({
  properties = dummyProperties,
}) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <section className="w-full pb-16 pt-16">
      <div className="lg:w-11/12 mx-auto px-4">
        {properties.length > 0 ? (
          <div>
            {/* Title Section */}
            {/* Title Section */}
            <div className="md:text-center mb-10 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Premium Investment Properties
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Explore The Hampton's exclusive portfolio of high-yield
                commercial and residential investment opportunities across
                Nigeria's most dynamic markets
              </p>
            </div>

            {/* Property Listings */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {properties.map((post) => (
                <div
                  key={post._id}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                >
                  {/* Property Image */}
                  <div className="relative w-full h-64">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span
                        className={`px-4 py-2 rounded-full text-sm font-medium ${
                          post.status === "rent"
                            ? "bg-blue-500 text-white"
                            : post.status === "sale"
                              ? "bg-primar text-white"
                              : "bg-yellow-500 text-white"
                        }`}
                      >
                        {post.status === "sale"
                          ? "For Sale"
                          : post.status === "rent"
                            ? "For Rent"
                            : "For Lease"}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-2">
                      <FiHome className="text-primar" />
                      <span className="text-sm text-gray-600 capitalize">
                        {post.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 line-clamp-1">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 text-sm line-clamp-2">
                      {post.description
                        .map((block: any) =>
                          block.children
                            .map((child: any) => child.text)
                            .join("")
                        )
                        .join(" ")}
                    </p>

                    <div className="flex items-start gap-2">
                      <FiMapPin className="text-primar mt-1" />
                      <div>
                        <p className="font-medium text-gray-900">
                          {post.location.city}
                        </p>
                        <p className="text-sm text-gray-600 line-clamp-1">
                          {post.location.address}
                        </p>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-100">
                      <div className="flex justify-between items-center mb-4">
                        <p className="text-xl font-bold text-primar">
                          {formatPrice(post.price)}
                          <span className="text-sm text-gray-500 ml-1">
                            {post.priceUnit === "year"
                              ? "Per Year"
                              : post.priceUnit === "month"
                                ? "Per Month"
                                : ""}
                          </span>
                        </p>
                      </div>

                      <Link href={`/listings/${post.currentSlug}`}>
                        <button className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-primar transition-colors duration-300">
                          View Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center min-h-[400px] text-center space-y-4">
            <FiInbox className="text-6xl text-primar" />
            <p className="text-xl font-medium text-gray-900">
              No properties available
            </p>
            <p className="text-gray-600">
              Please check back later for new listings
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Alllistings;
