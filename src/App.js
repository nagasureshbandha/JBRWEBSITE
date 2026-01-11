import { useState, useEffect } from "react";
import AppRoutes from "./routes/AppRoutes";
import Loading from "./helpers/Loading";
import ScrollToTop from "./helpers/ScrollToTop";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import { Toaster } from "react-hot-toast";
const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    
    // Disable right-click context menu
    const disableRightClick = (e) => {
      e.preventDefault();
      return false;
    };

    // Add event listener for context menu (right-click)
    document.addEventListener('contextmenu', disableRightClick);
    
    // Optional: Disable keyboard shortcuts for right-click (Shift+F10, Ctrl+Shift+I, etc.)
    const disableDevToolsShortcut = (e) => {
      // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
      if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J')) ||
        (e.ctrlKey && e.key === 'u') ||
        (e.ctrlKey && e.key === 'U')
      ) {
        e.preventDefault();
        return false;
      }
    };

    // Add event listener for keyboard shortcuts
    document.addEventListener('keydown', disableDevToolsShortcut);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('contextmenu', disableRightClick);
      document.removeEventListener('keydown', disableDevToolsShortcut);
    };
  }, []);

  return (
    <>
      <Toaster position="center" />
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

          {/* ✅ WhatsApp Floating Button */}
          <WhatsAppFloat />
        </>
      )}
    </>
  );
};

export default App;