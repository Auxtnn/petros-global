import React from "react";
import { FaSearch, FaCalendarCheck, FaHandshake } from "react-icons/fa";
import RegisterItemCard from "./RegisterItemCard";

type Props = {};

const RegisteringMethods = (props: Props) => {
  return (
    <div className="md:flex md:justify-center pt-10 md:items-center md:flex-col md:mb-">
      <div className="mx-auto lg:w-11/12 px-4">
        {/* Register Item Cards */}
        <div className="grid md:grid-cols-3 gap-8 md:my-3 mx-auto">
          <RegisterItemCard
            title="Browse Properties"
            color="#58BF52"
            icon={<FaSearch size={32} color="#58BF52" />}
            msg="Search through available properties and find your ideal match."
          />
          <RegisterItemCard
            title="Schedule a Visit"
            color="#FF791A"
            icon={<FaCalendarCheck size={32} color="#FF791A" />}
            msg="Set up a convenient time to visit the property and explore it firsthand."
          />
          <RegisterItemCard
            title="Finalize Your Purchase"
            color="#3741B5"
            icon={<FaHandshake size={32} color="#3741B5" />}
            msg="Complete your purchase and get ready to move into your new home."
          />
        </div>
      </div>
    </div>
  );
};

export default RegisteringMethods;
