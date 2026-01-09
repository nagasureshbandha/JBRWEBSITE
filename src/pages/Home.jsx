import React, { useEffect, useState } from "react";

const Home = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-4">Home Page</h1>

      <p className="text-gray-300 mb-6">
        React Hooks working correctly ✅
      </p>

      <button
        onClick={() => setCount(count + 1)}
        className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition"
      >
        Count: {count}
      </button>
    </div>
  );
};

export default Home;
