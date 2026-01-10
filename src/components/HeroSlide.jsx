import React, { useState } from 'react';
import { PlayIcon } from '@heroicons/react/24/solid';
import { UserIcon, BuildingOfficeIcon, BuildingLibraryIcon } from '@heroicons/react/24/outline';

const HeroSlide = ({ slide }) => {
  const [showVideo, setShowVideo] = useState(false);

  const handleVideoPlay = () => {
    setShowVideo(true);
  };

  return (
    <div className="relative h-full">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${slide.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Subtitle */}
            <div className="mb-4 animate-fade-in-up">
              <span className="inline-block px-4 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">
                {slide.subtitle}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-up animation-delay-200">
              {slide.title}
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl animate-fade-in-up animation-delay-400">
              {slide.description}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-12 animate-fade-in-up animation-delay-600">
              {/* Free Consultation Button */}
              <button className="group relative px-8 py-4 bg-primary text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:bg-secondary hover:shadow-lg hover:shadow-primary/30">
                <span className="relative z-10">Get a free consultation</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>

              {/* Video Play Button */}
              <button
                onClick={handleVideoPlay}
                className="group flex items-center gap-3 text-white hover:text-gray-200 transition-colors duration-300"
              >
                <div className="relative">
                  <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                    <PlayIcon className="w-6 h-6 text-white ml-1" />
                  </div>
                  <div className="absolute inset-0 border-2 border-white/30 rounded-full animate-ping group-hover:animate-none" />
                </div>
                <span className="font-medium">Watch video</span>
              </button>
            </div>

            {/* Footer Icons */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-fade-in-up animation-delay-800">
              <div className="flex items-center gap-3 text-white/90">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                  <UserIcon className="w-5 h-5" />
                </div>
                <span className="font-medium">Individuals</span>
              </div>
              
              <div className="flex items-center gap-3 text-white/90">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                  <BuildingOfficeIcon className="w-5 h-5" />
                </div>
                <span className="font-medium">Scaling Companies</span>
              </div>
              
              <div className="flex items-center gap-3 text-white/90">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                  <BuildingLibraryIcon className="w-5 h-5" />
                </div>
                <span className="font-medium">Enterprise</span>
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
              className="absolute -top-12 right-0 text-white hover:text-gray-300"
            >
              ✕ Close
            </button>
            <div className="relative pt-[56.25%]">
              <iframe
                src={`https://www.youtube.com/embed/Y-x0efG1seA?autoplay=1`}
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="JBR Digital Solutions Video"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSlide;