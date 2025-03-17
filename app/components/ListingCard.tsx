import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  src: string;
  title: string;
  msg: string;
  amount: string;
  propertyType: "Rent" | "Sell" | "Lease";
};

const ListingCard = ({ src, title, msg, amount, propertyType }: Props) => {
  return (
    <div className="w-full md:max-w-sm mx-auto rounded-lg shadow-md hover:scale-95 transition-transform duration-300 ease-in-out border">
      {/* Property Image */}
      <div className="relative w-full h-48 md:h-56">
        <Image
          src={src}
          alt={title}
          fill
          className="object-cover rounded-t-lg"
        />
      </div>

      {/* Card Content */}
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-700 line-clamp-1">
          {title}
        </h2>
        <p className="text-sm text-gray-500 my-2 line-clamp-2">{msg}</p>

        {/* Amount and Type of Property */}
        <div className="flex justify-between items-center my-4">
          <p className="text-lg font-bold text-gray-800">{amount}</p>
          <span
            className={`px-3 py-1 rounded-lg text-white text-sm ${
              propertyType === "Rent"
                ? "bg-blue-500"
                : propertyType === "Sell"
                  ? "bg-green-500"
                  : "bg-yellow-500"
            }`}
          >
            {propertyType}
          </span>
        </div>

        {/* View Property Button */}
        <Link href="" className="block">
          <button className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-700">
            View Property
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ListingCard;
