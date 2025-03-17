import React from "react";
import Alllistings from "../components/AllListings";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default async function Listing() {
  return (
    <div>
      <Navbar />
      <div className="md:pt-20 pt-10">
        <Alllistings />
      </div>
      <Footer />
    </div>
  );
}
