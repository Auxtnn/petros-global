"use client";

import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
} from "react-share";
import toast from "react-hot-toast";

interface ShareButtonsProps {
  postUrl: string;
  postTitle: string;
  postImage: string;
}

const ShareButtons: React.FC<ShareButtonsProps> = ({
  postUrl,
  postTitle,
  postImage,
}) => {
  const handleCopyLink = () => {
    navigator.clipboard.writeText(postUrl);
    toast.success("Link copied to clipboard!");
  };

  return (
    <div className="flex gap-4 mt-6 flex-col md:flex-row ">
      <h3 className="text-lg font-bold">Share this post:</h3>
      <div className="flex gap-4">
        <FacebookShareButton
          url={postUrl}
          quote={postTitle}
          hashtag="#RealEstateProperties"
        >
          <FaFacebook className="text-2xl text-primary hover:text-primary/20" />
        </FacebookShareButton>

        <TwitterShareButton
          url={postUrl}
          title={postTitle}
          via="RealEstateProperties"
          hashtags={["RealEstate", "Properties"]}
        >
          <FaTwitter className="text-2xl text-primary hover:text-primary/20" />
        </TwitterShareButton>

        <LinkedinShareButton
          url={postUrl}
          title={postTitle}
          summary={postTitle}
          source={postImage}
        >
          <FaLinkedin className="text-2xl text-primary hover:text-primary/20" />
        </LinkedinShareButton>

        <WhatsappShareButton url={postUrl} title={postTitle}>
          <FaWhatsapp className="text-2xl text-green-500 hover:text-green-600" />
        </WhatsappShareButton>
      </div>

      <button
        onClick={handleCopyLink}
        className="text-lg text-gray-600 hover:underline"
      >
        Copy Link
      </button>
    </div>
  );
};

export default ShareButtons;
