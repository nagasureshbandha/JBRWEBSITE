import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";
import logo from "../assets/images/logo.png"; // ✅ your logo

const FooterTop = () => {
  return (
    <div className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-12 gap-6">

          {/* About Footer */}
          <div className="col-span-12 lg:col-span-8 md:col-span-6">
            <div>

              {/* Logo */}
              <img
                src={logo}
                alt="Company Logo"
                className="w-40 mb-6"
              />

              <p className="mb-6 max-w-xl leading-relaxed">
                Our commitment to excellence & client satisfaction drives us to
                deliver results that elevate brands and foster growth.
              </p>

              <ul className="flex gap-4">
                <li>
                  <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-primary hover:text-white transition">
                    <FaFacebookF />
                  </a>
                </li>
                <li>
                  <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-primary hover:text-white transition">
                    <FaXTwitter />
                  </a>
                </li>
                <li>
                  <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-primary hover:text-white transition">
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-primary hover:text-white transition">
                    <FaYoutube />
                  </a>
                </li>
              </ul>

            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-6 lg:col-span-2 md:col-span-3">
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li><Link to="/" className="hover:text-primary">Home</Link></li>
                <li><Link to="/about" className="hover:text-primary">About Us</Link></li>
                <li><Link to="/services" className="hover:text-primary">Services</Link></li>
                <li><Link to="/blog" className="hover:text-primary">Blog</Link></li>
              </ul>
            </div>
          </div>

          {/* Our Services */}
          <div className="col-span-6 lg:col-span-2 md:col-span-3">
            <div>
              <h3 className="text-white font-semibold mb-4">Our Services</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/service-website" className="hover:text-primary">
                    Website & App Development
                  </Link>
                </li>
                <li>
                  <Link to="/service-seo" className="hover:text-primary">
                    SEO
                  </Link>
                </li>
                <li>
                  <Link to="/service-aiagency" className="hover:text-primary">
                    AI Agency
                  </Link>
                </li>
                <li>
                  <Link to="/service-medical" className="hover:text-primary">
                    Medical Billing / Coding
                  </Link>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FooterTop;
