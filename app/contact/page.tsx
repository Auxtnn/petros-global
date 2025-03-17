import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import ContactForm from "../components/Contact";

export default function Contact() {
  return (
    <div>
      <Navbar />
      <div className="">
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
}
