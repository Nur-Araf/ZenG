import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom"; // Add useLocation

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation(); // Hook to track route changes

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setShowNavbar(currentY < lastScrollY || currentY < 10);
      setIsScrolled(currentY > 10);
      setLastScrollY(currentY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Update isScrolled when route changes
  useEffect(() => {
    // Force re-evaluation of scroll state on route change
    const currentY = window.scrollY;
    setIsScrolled(currentY > 10);
  }, [location.pathname]); // Trigger on route change

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  const navLinks = [
    { name: "Home", Link: "/" },
    { name: "Features", Link: "/features" },
    { name: "Pricing", Link: "/pricing" },
    { name: "Faq", Link: "/faq" },
  ];

  return (
    <nav>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: showNavbar ? 0 : -80 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 w-full z-50 backdrop-blur-md shadow-md"
        style={{
          background:
            location.pathname === "/" && !isScrolled
              ? "transparent"
              : "linear-gradient(120deg, #0A0F2C, #0F1A42)",
          borderBottom:
            location.pathname === "/" && !isScrolled
              ? "none"
              : "1px solid #334155",
        }}
      >
        {/* Rest of the navbar content remains unchanged */}
        <div className="max-w-full sm:max-w-3xl md:max-w-5xl lg:max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-3 flex items-center justify-center text-white text-[16px]">
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center text-xl font-bold cursor-pointer group">
              <svg
                className="w-8 h-8 mr-2 group-hover:scale-110 transition-transform duration-500"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="birdGradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#1DA1F2" />
                    <stop offset="100%" stopColor="#6C63FF" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#birdGradient)"
                  d="M24 8c5 8 12 10 18 12-3 4-10 8-18 6 3 4 6 8 10 10-6 0-11-1-16-5-4-3-7-8-8-12 5 1 9 0 14-3z"
                />
              </svg>
            <span className=" text-[#1DA1F2] group-hover:text-white transition duration-300">
              ZenG
              </span>
            </div>
            <div className="hidden md:flex gap-6">
              {navLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.Link}
                  className="relative group text-white"
                >
                  {link.name}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#6C63FF] group-hover:w-full transition-all duration-300 ease-out rounded-sm"></span>
                </a>
              ))}
            </div>
            <div className="hidden md:flex items-center gap-4">
              <Link
                to="/signin"
                className="border cursor-pointer border-[#1DA1F2] text-[#1DA1F2] px-4 py-1 rounded-md hover:bg-[#1DA1F2] hover:text-white transition duration-300"
              >
                Sign In
              </Link>
              <Link
                to="/register"
                className="bg-[#1DA1F2] cursor-pointer text-white px-4 py-1 rounded-md hover:bg-[#0A66C2] transition duration-300"
              >
                Sign Up
              </Link>
            </div>
            <div className="md:hidden">
              <button onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? (
                  <X className="text-white w-6 h-6" />
                ) : (
                  <Menu className="text-white w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed h-screen top-[55px] left-0 w-full bg-[#0F1A42] text-white text-[16px] z-40 shadow-md"
          >
            <div className="flex flex-col items-start px-6 py-6 gap-4">
              {navLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.Link}
                  onClick={() => setMenuOpen(false)}
                  className="relative group text-white hover:text-[#6C63FF] transition duration-300"
                >
                  {link.name}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#6C63FF] group-hover:w-full transition-all duration-300 ease-out rounded-sm"></span>
                </a>
              ))}
              <div className="flex flex-col gap-2 mt-4 w-full">
                <div className="flex gap-2">
                  <Link
                    to="/signin"
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="border w-fit border-[#1DA1F2] text-[#1DA1F2] px-3 py-2 rounded-md hover:bg-[#1DA1F2] hover:text-white transition duration-300 text-left"
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/register"
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="bg-[#1DA1F2] w-fit text-white px-3 py-2 rounded-md hover:bg-[#0A66C2] transition duration-300 text-left"
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
