import React, { useState, useEffect } from "react";
import AppRoutes from "./routes/AppRoutes";
import Loading from "./helpers/Loading";
import ScrollToTop from "./helpers/ScrollToTop";

const App = () => {
  const [loading, setLoading] = useState(true);

  // Example: fake loading for 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Scroll to top on route change */}
      <ScrollToTop />

      {/* Loading spinner */}
      {loading && <Loading />}

      {/* Main app content */}
      {!loading && <AppRoutes />}
    </>
  );
};

export default App;
