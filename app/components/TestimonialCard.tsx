import * as React from "react";
import { TestimonialCardProps } from "../types";

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  description,
  authorName,
}) => {
  return (
    <div className="flex flex-col items-start p-6 mx-auto w-full tracking-normal bg-white border border-solid border-zinc-300 max-md:px-5 max-md:mt-8">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a715b3c2bc2f3b9332a3351ba087b015c4f512b58ecb817c770c57c6d18bdb9a?placeholderIfAbsent=true&apiKey=0b485936f214445abefe43ed619ece08"
        alt=""
        className="object-contain aspect-[1.23] w-[42px]"
      />
      <div className="mt-6 text-lg font-semibold leading-7 text-slate-800 w-[265px]">
        {quote}
      </div>
      <div className="self-stretch mt-4 text-base leading-6 text-slate-800">
        {description}
      </div>
      <div className="flex gap-3.5 mt-6 tracking-wide">
        <div className="flex flex-col">
          <div className="text-base font-semibold leading-loose text-primary">
            {authorName}
          </div>
        </div>
      </div>
    </div>
  );
};
