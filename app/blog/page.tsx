import React from "react";

import { getPosts } from "@/sanity/lib/query";
import BlogMainPage from "../components/Blog";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default async function Blog() {
  const posts = (await getPosts("post")) || [];
  return (
    <div>
      <Navbar />
      <div className="">
        <BlogMainPage posts={posts} />
      </div>
      <Footer />
    </div>
  );
}
