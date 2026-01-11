  import { useState, useEffect } from "react";
import AppRoutes from "./routes/AppRoutes";
import Loading from "./helpers/Loading";
import ScrollToTop from "./helpers/ScrollToTop";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./pages/contactus"; // ✅ Import Contact
import ContactForm from "./pages/contactus";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [showContact, setShowContact] = useState(false); // toggle Contact screen

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
            <AppRoutes /> {/* Routing handles Contact page */}
          </main>

          <Footer />
        </>
      )}
    </>
  );
};

export default App;
