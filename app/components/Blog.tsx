// blog.tsx
import React from "react";
import { FiClock, FiInbox } from "react-icons/fi";
import Link from "next/link";

import type { postsType } from "../types";
import Image from "next/image";

interface BlogPageProps {
  posts: postsType[];
}

const BlogMainPage: React.FC<BlogPageProps> = ({ posts }) => {
  const formatDate = (date: string) => {
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return formattedDate;
  };

  const truncateBody = (body: string, maxLength = 145) => {
    if (!body || body.length <= maxLength) return body;
    return body.slice(0, maxLength).concat("..."); // Truncate and add ellipsis
  };

  return (
    <section
      className={`max-w-screen-xl bg-white ${posts.length > 0 ? "md:py-20 py-20 mt-10" : "flex items-center justify-center min-h-96"}`}
    >
      {posts.length > 0 ? (
        <div className="mx-auto lg:w-11/12 px-4">
          <div className="flex justify-center mb-4 mx-auto">
            <h1 className="text-2xl lg:text-3xl max-md:max-w-full font-bold text-gray-800">
              Explore our Blog and recent Updates
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
            {posts.map((post: any) => (
              <div
                key={post._id}
                className="rounded  overflow-hidden shadow-lg flex flex-col h-full"
              >
                {/* Image */}
                <div className="relative h-48 w-full">
                  <Link href={`/blog/${post.currentSlug}`}>
                    <Image
                      className="w-full h-full object-cover"
                      src={post.image}
                      alt="blog-image"
                      width={300}
                      height={300}
                      priority
                    />
                    <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                  </Link>
                </div>

                {/* Content */}
                <div className="px-4 py-4 flex-grow flex flex-col">
                  <Link
                    href={`/blog/${post.currentSlug}`}
                    className="font-medium text-primary text-lg hover:text-primary transition duration-500 ease-in-out inline-block mb-2"
                  >
                    {post.title}
                  </Link>
                  <div className="text-gray-800 text-sm flex-grow">
                    {post.body && truncateBody(post.body[0].children[0].text)}
                  </div>
                </div>

                {/* Footer */}
                <div className="px-4 py-3 flex flex-row items-center justify-between bg-gray-100">
                  <span className="py-1 text-base font-regular text-gray-900 mr-1 flex flex-row items-center">
                    <FiClock className="h-5 mr-1" />
                    <span>{formatDate(post.publishedAt)}</span>
                  </span>
                  <Link href={`/blog/${post.currentSlug}`}>
                    <span className="py-1 text-base font-regular text-gray-800 hover:text-primary mr-1 flex flex-row items-center">
                      Read more
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center text-gray-800 text-center space-y-4">
          <FiInbox className="text-6xl text-gray-500" />
          <p className="text-lg font-medium">No available posts yet</p>
        </div>
      )}
    </section>
  );
};

export default BlogMainPage;
