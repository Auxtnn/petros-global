import * as React from "react";

interface AdvantageCardProps {
  icon: string;
  title: string;
  description: string;
}

export const AdvantageCard: React.FC<AdvantageCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow items-start p-5 w-full tracking-wide bg-neutral-100 max-md:mt-8">
        <img
          loading="lazy"
          src={icon}
          alt={`${title} icon`}
          className="object-contain aspect-square w-[54px]"
        />
        <div className="mt-4 text-3xl font-bold leading-none text-teal-900">
          {title}
        </div>
        <div className="self-stretch mt-4 text-base leading-7 text-slate-500">
          {description}
        </div>
      </div>
    </div>
  );
};
