import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.png";
import {
  HomeIcon,
  InformationCircleIcon,
  BriefcaseIcon,
  NewspaperIcon,
  PhoneIcon,
  Squares2X2Icon,
  XMarkIcon,
  Bars3Icon
} from "@heroicons/react/24/outline";
import {
  HomeIcon as HomeIconSolid,
  InformationCircleIcon as InformationCircleIconSolid,
  BriefcaseIcon as BriefcaseIconSolid,
  NewspaperIcon as NewspaperIconSolid,
  PhoneIcon as PhoneIconSolid,
  Squares2X2Icon as Squares2X2IconSolid
} from "@heroicons/react/24/solid";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Check if mobile/tablet view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle scroll for glass effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update active item based on URL and scroll position
  useEffect(() => {
    const path = location.pathname;
    
    if (path === "/") {
      const sections = ["hero", "about", "services", "faqs"];
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveItem(entry.target.id);
            }
          });
        },
        { threshold: 0.3 }
      );

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) observer.observe(section);
      });

      return () => observer.disconnect();
    } else {
      setActiveItem(path);
    }
  }, [location.pathname]);

  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        setActiveItem(id);
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      setActiveItem(id);
    }
    setOpen(false);
  };

  // Bottom navigation items
  const bottomNavItems = [
    { 
      id: "hero", 
      label: "Home", 
      icon: activeItem === "hero" ? HomeIconSolid : HomeIcon,
      route: null,
      onClick: () => scrollToSection("hero")
    },
    { 
      id: "about", 
      label: "About", 
      icon: activeItem === "about" ? InformationCircleIconSolid : InformationCircleIcon,
      route: null,
      onClick: () => scrollToSection("about")
    },
    { 
      id: "services", 
      label: "Services", 
      icon: activeItem === "services" ? BriefcaseIconSolid : BriefcaseIcon,
      route: null,
      onClick: () => scrollToSection("services")
    },
    { 
      id: "menu", 
      label: "More", 
      icon: activeItem.includes("/") ? Squares2X2IconSolid : Squares2X2Icon,
      route: null,
      onClick: () => setOpen(!open)
    },
    { 
      id: "/contact", 
      label: "Contact", 
      icon: activeItem === "/contact" ? PhoneIconSolid : PhoneIcon,
      route: "/contact",
      onClick: () => {
        navigate("/contact");
        setActiveItem("/contact");
      }
    },
  ];

  return (
    <>
      {/* Desktop Header - Only shows on lg screens and above */}
      <header className={`w-full fixed top-0 z-50 transition-all duration-300 hidden lg:block ${scrolled ? 'glass-header' : 'bg-transparent'}`}>
        <nav className="w-full">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between h-20">
              {/* Logo */}
            <Link
  to="/"
  className="flex items-center z-20"
  onClick={() => {
    setActiveItem("hero");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }}
>
  <img
    src={logo}
    alt="Logo"
    className={`w-24 transition-all duration-300 ${
      scrolled ? "" : "brightness-0 invert"
    }`}
  />
</Link>


              {/* Desktop Menu */}
              <ul className="flex items-center gap-6 font-medium">
                {/* Home */}
                <li>
                  <button
                    className={`text-sm transition-colors duration-200 relative ${
                      scrolled ? 'text-gray-800' : 'text-white'
                    } ${
                      activeItem === "hero" 
                        ? 'text-orange-500 font-semibold' 
                        : 'hover:text-orange-500'
                    }`}
                    onClick={() => scrollToSection("hero")}
                  >
                    Home
                    {activeItem === "hero" && (
                      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-orange-500 rounded-full"></span>
                    )}
                  </button>
                </li>

                {/* About Us */}
                <li>
                  <button
                    className={`text-sm transition-colors duration-200 relative ${
                      scrolled ? 'text-gray-800' : 'text-white'
                    } ${
                      activeItem === "about" 
                        ? 'text-orange-500 font-semibold' 
                        : 'hover:text-orange-500'
                    }`}
                    onClick={() => scrollToSection("about")}
                  >
                    About Us
                    {activeItem === "about" && (
                      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-orange-500 rounded-full"></span>
                    )}
                  </button>
                </li>

                {/* Services */}
                <li>
                  <button
                    className={`text-sm transition-colors duration-200 relative ${
                      scrolled ? 'text-gray-800' : 'text-white'
                    } ${
                      activeItem === "services" 
                        ? 'text-orange-500 font-semibold' 
                        : 'hover:text-orange-500'
                    }`}
                    onClick={() => scrollToSection("services")}
                  >
                    Services
                    {activeItem === "services" && (
                      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-orange-500 rounded-full"></span>
                    )}
                  </button>
                </li>

                {/* Blog */}
                <li>
                  <Link 
                    to="/blog" 
                    className={`text-sm transition-colors duration-200 relative ${
                      scrolled ? 'text-gray-800' : 'text-white'
                    } ${
                      activeItem === "/blog" 
                        ? 'text-orange-500 font-semibold' 
                        : 'hover:text-orange-500'
                    }`}
                    onClick={() => setActiveItem("/blog")}
                  >
                    Blog
                    {activeItem === "/blog" && (
                      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-orange-500 rounded-full"></span>
                    )}
                  </Link>
                </li>

                {/* Pages Dropdown */}
                <li className="relative group">
                  <span className={`text-sm cursor-pointer transition-colors duration-200 relative ${
                    scrolled ? 'text-gray-800' : 'text-white'
                  } ${
                    activeItem === "/projects" || activeItem === "/project-single" || activeItem === "/team" || activeItem === "/image-gallery" || activeItem === "/pricing"
                      ? 'text-orange-500 font-semibold' 
                      : 'hover:text-orange-500'
                  }`}>
                    Pages
                    {(activeItem === "/projects" || activeItem === "/project-single" || activeItem === "/team" || activeItem === "/image-gallery" || activeItem === "/pricing") && (
                      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-orange-500 rounded-full"></span>
                    )}
                  </span>
                  <ul className="absolute left-0 top-full mt-2 w-48 bg-white/95 backdrop-blur-md shadow-lg rounded-lg border border-white/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-30">
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
                          className={`block px-3 py-2 text-xs transition-colors duration-200 ${
                            activeItem === link
                              ? 'bg-orange-50 text-orange-500 font-medium'
                              : 'text-gray-700 hover:bg-navy-50 hover:text-orange-500'
                          }`}
                          onClick={() => {
                            setActiveItem(link);
                            setOpen(false);
                          }}
                        >
                          {label}
                          {activeItem === link && (
                            <span className="ml-2 w-1.5 h-1.5 bg-orange-500 rounded-full inline-block"></span>
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>

                {/* Contact Us */}
                <li>
                  <Link 
                    to="/contact" 
                    className={`text-sm transition-colors duration-200 relative ${
                      scrolled ? 'text-gray-800' : 'text-white'
                    } ${
                      activeItem === "/contact" 
                        ? 'text-orange-500 font-semibold' 
                        : 'hover:text-orange-500'
                    }`}
                    onClick={() => setActiveItem("/contact")}
                  >
                    Contact Us
                    {activeItem === "/contact" && (
                      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-orange-500 rounded-full"></span>
                    )}
                  </Link>
                </li>
              </ul>

              {/* Get Started Button */}
              <div>
                <Link
                  to="/contact"
                  className={`px-5 py-2 text-sm rounded-full font-medium transition-all duration-300 ${
                    scrolled 
                      ? 'bg-orange-500 text-white hover:bg-orange-600 shadow-md' 
                      : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border border-white/30 hover:bg-orange-500 hover:border-orange-500'
                  } ${
                    activeItem === "/contact" ? 'ring-2 ring-orange-300 ring-offset-2' : ''
                  }`}
                  onClick={() => setActiveItem("/contact")}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile/Tablet Bottom Navigation - Shows on screens below lg */}
      {isMobile && (
        <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
          {/* Bottom Navigation Bar */}
          <div className="bg-white/95 backdrop-blur-lg border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
            <div className="flex items-center justify-around px-2 py-3">
              {bottomNavItems.map((item) => (
                <button
                  key={item.id}
                  onClick={item.onClick}
                  className={`flex flex-col items-center justify-center w-16 py-2 rounded-xl transition-all duration-200 ${
                    (activeItem === item.id || 
                     (item.id === "menu" && open) ||
                     (item.route && activeItem === item.route))
                      ? 'text-orange-500 bg-orange-50'
                      : 'text-gray-600 hover:text-orange-500 hover:bg-gray-50'
                  }`}
                >
                  <item.icon className="w-6 h-6 mb-1" />
                  <span className="text-xs font-medium">{item.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Menu Modal (for "More" button) */}
          <div className={`fixed inset-0 z-40 transition-all duration-300 ${open ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
            {/* Overlay */}
            <div 
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            
            {/* Menu Panel */}
            <div className={`absolute bottom-20 left-4 right-4 bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-200 transition-transform duration-300 ${open ? 'translate-y-0' : 'translate-y-10'}`}>
              <div className="p-4">
                {/* Close Button */}
                <div className="flex justify-end mb-4">
                  <button
                    onClick={() => setOpen(false)}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                  >
                    <XMarkIcon className="w-5 h-5 text-gray-600" />
                  </button>
                </div>

                {/* Menu Items */}
                <div className="space-y-2">
                  {/* Blog */}
                  <Link
                    to="/blog"
                    className={`flex items-center gap-3 p-3 rounded-lg transition-colors duration-200 ${
                      activeItem === "/blog"
                        ? 'bg-orange-50 text-orange-500'
                        : 'hover:bg-gray-100 text-gray-700'
                    }`}
                    onClick={() => {
                      setActiveItem("/blog");
                      setOpen(false);
                    }}
                  >
                    <NewspaperIcon className="w-5 h-5" />
                    <span className="font-medium">Blog</span>
                    {activeItem === "/blog" && (
                      <span className="ml-auto w-2 h-2 bg-orange-500 rounded-full"></span>
                    )}
                  </Link>

                  {/* Pages Section */}
                  <div className="pt-2">
                    <p className="text-sm font-semibold text-gray-500 mb-2 px-3">More Pages</p>
                    <div className="space-y-1">
                      {[
                        ["Projects", "/projects"],
                        ["Project Details", "/project-single"],
                        ["Our Team", "/team"],
                        ["Image Gallery", "/image-gallery"],
                        ["Pricing", "/pricing"],
                      ].map(([label, link]) => (
                        <Link
                          key={label}
                          to={link}
                          className={`flex items-center gap-3 p-3 rounded-lg transition-colors duration-200 ${
                            activeItem === link
                              ? 'bg-orange-50 text-orange-500'
                              : 'hover:bg-gray-100 text-gray-600'
                          }`}
                          onClick={() => {
                            setActiveItem(link);
                            setOpen(false);
                          }}
                        >
                          <span className="w-5 h-5 flex items-center justify-center">
                            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                          </span>
                          <span className="font-medium">{label}</span>
                          {activeItem === link && (
                            <span className="ml-auto w-2 h-2 bg-orange-500 rounded-full"></span>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Get Started Button */}
                  <div className="pt-4">
                    <Link
                      to="/contact"
                      className="block w-full text-center px-4 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
                      onClick={() => {
                        setActiveItem("/contact");
                        setOpen(false);
                      }}
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Top Bar - Only shows logo on mobile */}
      {isMobile && (
        <div className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'} lg:hidden`}>
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-center h-16">
              <Link to="/" className="flex items-center" onClick={() => setActiveItem("hero")}>
                <img 
                  src={logo} 
                  alt="Logo" 
                  className={`w-20 transition-all duration-300 ${scrolled ? '' : 'brightness-0 invert'}`}
                />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;