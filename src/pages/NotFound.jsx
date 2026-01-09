import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <h1 className="text-5xl font-bold mb-4">404</h1>

      <p className="text-gray-400 mb-6">
        Page not found
      </p>

      <button
        onClick={() => navigate("/")}
        className="px-5 py-2 bg-blue-600 rounded hover:bg-blue-700 transition"
      >
        Go Home
      </button>
    </div>
  );
};

export default NotFound;
