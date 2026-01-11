import React, { useState } from "react";
import { PlayIcon } from "@heroicons/react/24/solid";
import {
  UserIcon,
  BuildingOfficeIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/outline";

const HeroSlide = ({ slide }) => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="relative h-full">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${slide.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 lg:px-12 ml-2">
          <div className="max-w-2xl">
            {/* Subtitle */}
            <span className="inline-block mb-4 px-4 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm font-medium">
              {slide.subtitle}
            </span>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
              {slide.title}
            </h1>

            {/* Description */}
            <p className="text-base md:text-lg text-gray-200 mb-8 leading-relaxed">
              {slide.description}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 mb-10">
              <button className="px-7 py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition">
                Free Consultation
              </button>

              <button
                onClick={() => setShowVideo(true)}
                className="flex items-center gap-3 text-white hover:text-gray-200 transition"
              >
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <PlayIcon className="w-5 h-5 ml-0.5" />
                </div>
                <span className="font-medium">Watch Overview</span>
              </button>
            </div>

            {/* Footer Icons */}
            <div className="grid grid-cols-3 gap-4 text-white/90">
              <div className="flex items-center gap-2">
                <UserIcon className="w-5 h-5" />
                <span className="text-sm font-medium">Individuals</span>
              </div>

              <div className="flex items-center gap-2">
                <BuildingOfficeIcon className="w-5 h-5" />
                <span className="text-sm font-medium">Businesses</span>
              </div>

              <div className="flex items-center gap-2">
                <BuildingLibraryIcon className="w-5 h-5" />
                <span className="text-sm font-medium">Enterprise</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setShowVideo(false)}
        >
          <div
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowVideo(false)}
              className="absolute -top-10 right-0 text-white text-sm"
            >
              ✕ Close
            </button>
            <div className="relative pt-[56.25%]">
              <iframe
                src="https://www.youtube.com/embed/Y-x0efG1seA?autoplay=1"
                className="absolute inset-0 w-full h-full rounded-lg"
                allowFullScreen
                title="JBR Overview"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSlide;
