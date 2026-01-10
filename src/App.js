import { useState, useEffect } from "react";
import AppRoutes from "./routes/AppRoutes";
import Loading from "./helpers/Loading";
import ScrollToTop from "./helpers/ScrollToTop";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <ScrollToTop />

      {loading ? (
        <Loading />
      ) : (
        <>
          <Header />

          <main className="min-h-screen">
            <AppRoutes />
          </main>

          <Footer />
        </>
      )}
    </>
  );
};

export default App;
