"use client";

import { useState, useRef, useEffect } from "react";
import { FaPlay } from "react-icons/fa";

const VideoSection = () => {
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Use Intersection Observer to detect when the section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !isVideoVisible) {
          // Slight delay for better user experience
          setTimeout(() => {
            setIsVideoVisible(true);
          }, 500);

          // Disconnect after triggering once
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5, // When 50% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, [isVideoVisible]);

  // Manual play button handler
  const handlePlayClick = () => {
    setIsVideoVisible(true);
  };

  return (
    <section ref={sectionRef} className="w-full pb-10 bg-white">
      <div className="container mx-auto px-4 max-w-6xl text-center">
        {/* Small accent line */}
        <div className="w-12 h-1 bg-[#dc8617] mx-auto mb-6"></div>

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl text-center  font-medium mb-4">
          Discover Petros Global
        </h2>

        {/* Subheading */}
        <p className="text-gray-600 font-normal text-center text-lg md:text-xl mb-12 max-w-3xl mx-auto">
          See how our integrated approach to creative, consulting, and real
          estate services delivers exceptional results for our clients.
        </p>

        {/* Video container with rounded corners */}
        <div className="relative w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-xl">
          <div className="aspect-video w-full relative">
            {!isVideoVisible ? (
              <>
                {/* Thumbnail with play button */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(https://img.youtube.com/vi/QVVU6Vs_uNk/maxresdefault.jpg)`,
                  }}
                >
                  {/* Dark overlay for better visibility */}
                  <div className="absolute inset-0 bg-black/30"></div>
                </div>

                {/* Play button overlay */}
                <button
                  onClick={handlePlayClick}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-[#dc8617] rounded-full flex items-center justify-center hover:bg-[#dc8617]/90 transition-colors z-20"
                  aria-label="Play video"
                >
                  <FaPlay className="h-8 w-8 text-white ml-2" />
                </button>
              </>
            ) : (
              /* YouTube iframe that autoplays when visible */
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/QVVU6Vs_uNk?autoplay=1&rel=0&modestbranding=1&controls=1&showinfo=0&mute=0"
                title="Petros Global Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
