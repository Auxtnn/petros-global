import React from "react";

import { ReactNode } from "react";

interface ServiceData {
  icon: ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceData> = ({ icon, title, description }) => {
  return (
    <div className="flex gap-6 mt-6">
      <div>{icon}</div>
      <div className="flex flex-col grow shrink-0 basis-0 w-fit">
        <h3 className="self-start text-2xl font-bold text-gray-800">{title}</h3>
        <p className="mt-3.5 text-base leading-7 text-zinc-600">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
