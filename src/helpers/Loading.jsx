import React from "react";
import logo from "../assets/images/whitelogo.png"; // Your logo path

const Loading = () => {
  return (
    <div
      className="fixed inset-0 flex flex-col items-center justify-center z-50"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.9)" }} // darker navy-blue with 90% opacity
    >
      {/* Spinner wrapper */}
      <div className="relative w-28 h-28">
        {/* Spinning border */}
        <div className="absolute inset-0 rounded-full border-4 border-blue-900 border-t-orange-500 animate-spin"></div>

        {/* Centered logo with pulse and stronger glow */}
        <img
          src={logo}
          alt="Loading Logo"
          className="absolute inset-0 m-auto w-14 h-14 rounded-full
                     animate-pulse
                     drop-shadow-[0_0_15px_rgba(249,115,22,0.85)]"
        />
      </div>
    </div>
  );
};

export default Loading;
