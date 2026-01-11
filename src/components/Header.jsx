import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Header = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      // navigate to home first
      navigate("/");
      // wait for DOM to render
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100); 
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false); // close mobile menu
  };

  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow">
      <nav className="w-full">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-28">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img src={logo} alt="Logo" className="w-[125px]" />
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex items-center gap-8 text-gray-800 font-medium">
              <li>
                <button
                  className="hover:text-primary"
                  onClick={() => scrollToSection("hero")}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  className="hover:text-primary"
                  onClick={() => scrollToSection("about")}
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  className="hover:text-primary"
                  onClick={() => scrollToSection("services")}
                >
                  Services
                </button>
              </li>
              <li>
                <Link to="/blog" className="hover:text-primary">Blog</Link>
              </li>
              <li className="relative group">
                <span className="cursor-pointer hover:text-primary">Pages</span>
                <ul className="absolute left-0 top-full mt-3 w-56 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  {[
      
                    ["Projects", "/projects"],
                    ["Project Details", "/project-single"],
                    ["Our Team", "/team"],
                    ["Image Gallery", "/image-gallery"],
                    ["Pricing", "/pricing"], 
                    
                  ].map(([label, link]) => (
                    <li key={label}>
                      <Link
                        to={link}
                        className="block px-4 py-2 text-sm hover:bg-primary/10 hover:text-primary"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary">Contact Us</Link>
              </li>
            </ul>

            {/* Button */}
            <div className="hidden lg:block">
              <Link
                to="/contact"
                className="px-6 py-2 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden text-2xl"
              onClick={() => setOpen(!open)}
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="lg:hidden bg-white shadow">
            <ul className="flex flex-col p-4 gap-4 text-gray-800 font-medium">
              <li>
                <button onClick={() => scrollToSection("hero")}>Home</button>
              </li>
              <li>
                <button onClick={() => scrollToSection("about")}>About Us</button>
              </li>
              <li>
                <button onClick={() => scrollToSection("services")}>Services</button>
              </li>
              <li><Link to="/blog" onClick={() => setOpen(false)}>Blog</Link></li>
              <li><Link to="/ContactForm" onClick={() => setOpen(false)}>Contact Us</Link></li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
