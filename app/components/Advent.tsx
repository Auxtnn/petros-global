import * as React from "react";
import {
  FaHome,
  FaShieldAlt,
  FaCrown,
  FaMoneyBillWave,
  FaMapMarkedAlt,
  FaCalendarCheck,
} from "react-icons/fa";

interface AdvantageCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const AdvantageCard: React.FC<AdvantageCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col items-center bg-white p-6 shadow-md rounded-lg transition-transform transform hover:scale-105">
      <div className="text-emerald-500 text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">
        {title}
      </h3>
      <p className="text-gray-600 text-center text-sm">{description}</p>
    </div>
  );
};

const advantagesData: AdvantageCardProps[] = [
  {
    icon: <FaHome />,
    title: "Modern Homes",
    description:
      "Discover a range of contemporary homes designed to provide comfort and style, located in serene neighborhoods.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Enhanced Security",
    description:
      "Your safety is our priority. Gated communities, CCTV surveillance, and secure access ensure peace of mind.",
  },
  {
    icon: <FaCrown />,
    title: "Luxury Living",
    description:
      "Experience premium living with top-notch amenities, beautiful interiors, and exclusive community features.",
  },
  {
    icon: <FaMoneyBillWave />,
    title: "Competitive Pricing",
    description:
      "Get the best value for your investment with properties priced competitively in prime locations.",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Prime Locations",
    description:
      "Strategically located properties close to essential services, schools, and business hubs for convenience.",
  },
  {
    icon: <FaCalendarCheck />,
    title: "Effortless Scheduling",
    description:
      "Book viewings and manage your property visits seamlessly with our user-friendly scheduling tools.",
  },
];

export const AdvantagesSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center bg-gray-100 py-16 px-6">
      {/* Header Section */}
      <div className="text-center max-w-3xl mb-12">
        <div className="text-emerald-500 text-sm font-medium tracking-wide uppercase mb-2">
          Our Advantage
        </div>
        <h2 className="text-teal-900 text-4xl md:text-5xl font-bold leading-tight">
          Benefits of Choosing Our Properties
        </h2>
        <p className="mt-4 text-gray-600 text-lg">
          Explore how our services and properties are designed to meet your
          needs and exceed your expectations.
        </p>
      </div>

      {/* Advantage Cards Section */}
      <div className="grid gap-8 w-full max-w-screen-lg grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {advantagesData.map((advantage, index) => (
          <AdvantageCard key={index} {...advantage} />
        ))}
      </div>
    </div>
  );
};
