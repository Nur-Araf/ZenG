import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-t from-[#0A0F2C] to-[#1A2A6C] text-white py-24">
      {/* Infinite Animated Line */}
      <div
        className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#1DA1F2] via-[#6C63FF] via-[#0A0F2C] via-[#1A2A6C] to-[#1DA1F2] shadow-sm"
        style={{
          backgroundSize: "400% 100%",
          animation: "moveLine 10s linear infinite",
        }}
      ></div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Branding Section */}
          <div className="space-y-4">
            <div className="relative flex items-center text-4xl font-bold cursor-pointer group">
              <svg
                className="absolute -left-6 -top-4 w-12 h-12 z-0 group-hover:scale-110 transition-transform duration-500"
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
              <span className="relative z-10 text-[#1DA1F2] group-hover:text-white transition duration-300">
                ZenG
              </span>
            </div>
            <p className="text-gray-300 text-base">
              Supercharge Your Job Search
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1DA1F2] hover:scale-110 transition-transform duration-300"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-1.337-.026-3.06-1.867-3.06-1.867 0-2.153 1.459-2.153 2.968v5.696h-3v-11h2.882v1.504h.04c.401-.759 1.379-1.557 2.837-1.557 3.033 0 3.601 2 3.601 4.604v6.449z" />
                </svg>
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1DA1F2] hover:scale-110 transition-transform duration-300"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1DA1F2] hover:scale-110 transition-transform duration-300"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Product</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#features"
                  className="text-gray-300 hover:text-[#1DA1F2] transition-colors duration-300"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-gray-300 hover:text-[#1DA1F2] transition-colors duration-300"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#extension"
                  className="text-gray-300 hover:text-[#1DA1F2] transition-colors duration-300"
                >
                  Chrome Extension
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-[#1DA1F2] transition-colors duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  className="text-gray-300 hover:text-[#1DA1F2] transition-colors duration-300"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#careers"
                  className="text-gray-300 hover:text-[#1DA1F2] transition-colors duration-300"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Support Links & Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Support</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-[#1DA1F2] transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-gray-300 hover:text-[#1DA1F2] transition-colors duration-300"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#help"
                  className="text-gray-300 hover:text-[#1DA1F2] transition-colors duration-300"
                >
                  Help Center
                </a>
              </li>
            </ul>
            <div className="pt-4">
              <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-full bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1DA1F2]"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-[#1DA1F2] to-[#6C63FF] text-white font-medium rounded-full hover:opacity-90 transition-opacity duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm text-gray-300">
          <p>
            © 2025 ZenG. All rights reserved.{" "}
            <a
              href="#privacy"
              className="hover:text-[#1DA1F2] transition-colors duration-300"
            >
              Privacy Policy
            </a>{" "}
            |{" "}
            <a
              href="#terms"
              className="hover:text-[#1DA1F2] transition-colors duration-300"
            >
              Terms of Service
            </a>
          </p>
        </div>
      </div>

      {/* CSS for Infinite Line Animation */}
      <style>
        {`
          @keyframes moveLine {
            0% {
              background-position: 0% 0;
            }
            100% {
              background-position: 200% 0;
            }
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
