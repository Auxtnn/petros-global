import React from "react";
import { FaSearch, FaCalendarCheck, FaHandshake } from "react-icons/fa"; // React Icons

type Props = {
  color: string;
  title: string;
  icon: React.ReactNode; // Changing from src to icon for React Icons
  msg: string;
};

const RegisterItemCard = ({ title, icon, msg }: Props) => {
  return (
    <div className="flex flex-col justify-center items-center p-6 border rounded-lg shadow hover:scale-95 transition-transform duration-300 ease-in-out">
      <div className="mb-4 flex justify-center items-center text-center">
        <div className="p-4 rounded-full">{icon}</div>
      </div>

      <p className="text-2xl font-semibold text-center mb-2 text-gray-800">
        {title}
      </p>
      <p className="text-center text-gray-600">{msg}</p>
    </div>
  );
};

export default RegisterItemCard;
