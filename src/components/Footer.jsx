// Footer.jsx
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaArrowUp } from "react-icons/fa";
import logowhite from "../assets/images/whitelogo.png";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-[#0a1128] to-[#081344]">
      {/* White box layer effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-16 h-16 bg-white rounded-lg transform rotate-12"></div>
        <div className="absolute top-1/4 right-20 w-12 h-12 bg-white rounded-lg transform -rotate-6"></div>
        <div className="absolute bottom-1/3 left-1/4 w-20 h-8 bg-white rounded-full"></div>
        <div className="absolute bottom-20 right-1/3 w-10 h-10 bg-white rounded-lg transform rotate-45"></div>
      </div>

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 lg:py-8 relative z-10">
        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 mb-6 lg:mb-8">
          {/* Description Section */}
          <div className="lg:col-span-8 md:col-span-6">
            <div className="space-y-3">
              <p className="text-gray-300 leading-relaxed text-sm max-w-xl">
                Our commitment to excellence & client satisfaction drives us to deliver results that elevate brands and foster growth.
              </p>
              
              {/* Social Icons */}
              <div className="flex gap-2">
                <a href="#" className="text-orange-500 hover:text-orange-400 transition-all duration-300 hover:scale-110 p-2 bg-white/5 rounded-lg">
                  <FaFacebookF size={16} />
                </a>
                <a href="#" className="text-orange-500 hover:text-orange-400 transition-all duration-300 hover:scale-110 p-2 bg-white/5 rounded-lg">
                  <FaTwitter size={16} />
                </a>
                <a href="#" className="text-orange-500 hover:text-orange-400 transition-all duration-300 hover:scale-110 p-2 bg-white/5 rounded-lg">
                  <FaInstagram size={16} />
                </a>
                <a href="#" className="text-orange-500 hover:text-orange-400 transition-all duration-300 hover:scale-110 p-2 bg-white/5 rounded-lg">
                  <FaYoutube size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="lg:col-span-2 md:col-span-3">
            <div className="space-y-2">
              <h3 className="text-orange-500 font-semibold text-sm tracking-wide uppercase">Quick Links</h3>
              <ul className="space-y-1">
                <li><Link to="/" className="text-gray-300 hover:text-orange-500 transition-colors duration-300 text-sm">Home</Link></li>
                <li><Link to="/about" className="text-gray-300 hover:text-orange-500 transition-colors duration-300 text-sm">About Us</Link></li>
                <li><Link to="/services" className="text-gray-300 hover:text-orange-500 transition-colors duration-300 text-sm">Services</Link></li>
                <li><Link to="/blog" className="text-gray-300 hover:text-orange-500 transition-colors duration-300 text-sm">Blog</Link></li>
              </ul>
            </div>
          </div>

          {/* Our Services Section */}
          <div className="lg:col-span-2 md:col-span-3">
            <div className="space-y-2">
              <h3 className="text-orange-500 font-semibold text-sm tracking-wide uppercase">Our Services</h3>
              <ul className="space-y-1">
                <li><Link to="/website-app" className="text-gray-300 hover:text-orange-500 transition-colors duration-300 text-sm">Website & App Development</Link></li>
                <li><Link to="/seo" className="text-gray-300 hover:text-orange-500 transition-colors duration-300 text-sm">SEO</Link></li>
                <li><Link to="/ai-agency" className="text-gray-300 hover:text-orange-500 transition-colors duration-300 text-sm">AI Agency</Link></li>
                <li><Link to="/medical-billing" className="text-gray-300 hover:text-orange-500 transition-colors duration-300 text-sm">Medical Billing / Coding</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Middle Section with Logo and Privacy Links */}
        <div className="py-4 border-t border-gray-700/30 border-b border-gray-700/30 mb-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            {/* Logo */}
            <img
              src={logowhite}
              alt="JBR Digital Solutions"
              className="w-28 md:w-32"
            />

            {/* Privacy Policy Links */}
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              <Link to="/terms" className="text-gray-400 hover:text-orange-500 transition-colors duration-300 uppercase text-xs tracking-wider">Term Of Use</Link>
              <Link to="/privacy" className="text-gray-400 hover:text-orange-500 transition-colors duration-300 uppercase text-xs tracking-wider">Privacy Policy</Link>
              <Link to="/security" className="text-gray-400 hover:text-orange-500 transition-colors duration-300 uppercase text-xs tracking-wider">Security</Link>
            </div>
          </div>
        </div>

        {/* Bottom Copyright and Go to Top */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          {/* Copyright text */}
          <div className="text-gray-400 text-xs text-center md:text-left">
            <p>Copyright © 2025 JBR Digital Solutions All Rights Reserved.</p>
          </div>

          {/* Go to top button */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex items-center gap-1.5 text-gray-300 hover:text-orange-500 transition-colors duration-300"
            aria-label="Go to top"
          >
            <span className="text-xs uppercase tracking-wider">Go To Top</span>
            <div className="bg-orange-500 group-hover:bg-orange-400 text-white w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow">
              <FaArrowUp size={10} />
            </div>
          </button>
        </div>
      </div>

      {/* Floating white boxes in background */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent"></div>
    </footer>
  );
};

export default Footer;