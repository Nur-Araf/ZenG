import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Chrome, Info } from "lucide-react";

const HeroSection = () => {
  const titles = [
    "Boost Your Career with ZenG",
    "Stand Out on LinkedIn",
    "Ace Your Indeed Applications",
    "Elevate Your Job Search",
  ];

  const [currentTitle, setCurrentTitle] = useState(0);

  // Cycle through titles every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [titles.length]);

  // Animation variants for title
  const titleVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.8 } },
  };

  // Animation for network nodes
  const nodeVariants = {
    animate: {
      scale: [1, 1, 1],
      opacity: [0.6, 1.2, 0.6],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // Animation for labels
  const labelVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.5 } },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0F2C]">
      <div className="z-0 absolute -left-[20%] top-[10%] h-[500px] w-[500px] translate-x-1/4 rounded-full opacity-30 blur-[100px]  bg-[#6C63FF] lg:tap-1/2 lg:translate-y-1/2"></div>
      {/* Background Layers */}
      <div className="absolute inset-0 z-0">
        {/* Gradient Overlay */}
        <div
          className="absolute inset-0 opacity-80"
          style={{
            background: "linear-gradient(135deg, #0A0F2C 0%, #0F1A42 100%)",
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Text Content - Left Side */}
          <div className="md:w-1/2 text-left">
            <div
              className="inline-block px-4 py-1.5 bg-[#1C2B4A]/50  text-xs font-medium tracking-wide rounded-full border border-[#1DA1F2]/30 text-[#1DA1F2] shadow-sm backdrop-blur-sm mb-4"
              style={{ opacity: 1, transform: "none" }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1DA1F2] to-[#6C63FF]">
                {" "}
                ZenG
              </span>{" "}
              <span className="text-white">Find Your Dream Job</span>
            </div>

            <div className="min-h-[4rem] sm:min-h-[5rem] md:min-h-[6rem]">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={currentTitle}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white"
                  variants={titleVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  {titles[currentTitle].split("ZenG").map((part, index) =>
                    index === 1 ? (
                      <span
                        key={index}
                        className="bg-clip-text text-transparent"
                        style={{
                          backgroundImage:
                            "linear-gradient(90deg, #1DA1F2, #6C63FF)",
                        }}
                      >
                        ZenG
                      </span>
                    ) : (
                      part
                    )
                  )}
                </motion.h1>
              </AnimatePresence>
            </div>
            <motion.p
              className="text-base sm:text-lg md:text-xl mb-8 max-w-lg opacity-90 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Supercharge your LinkedIn and Indeed profiles with our AI-powered
              browser extension for job seekers.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <button className="bg-[#1DA1F2] cursor-pointer text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-[#0A66C2] transition duration-300 flex items-center gap-2">
                <Chrome size={20} />
                Add to Chrome
              </button>
              <button className="border cursor-pointer border-[#1DA1F2] text-[#1DA1F2] px-6 py-3 rounded-md text-lg font-medium hover:bg-[#1DA1F2] hover:text-white transition duration-300 flex items-center gap-2">
                <Info size={20} />
                Learn More
              </button>
            </motion.div>
          </div>

          {/* Extension Mockup and Animation - Right Side */}
          <div className="md:w-1/2 mt-8 md:mt-0 hidden md:flex flex-col items-center">
            <div className="relative w-full max-w-md">
              {/* Card */}
              <motion.div
                className="bg-[#1C2B4A] p-6 rounded-lg shadow-xl w-full z-0"
                style={{ border: "1px solid #334155" }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              >
                {/* Mockup Header */}
                <div className="flex items-center gap-2 mb-4">
                  <svg
                    className="w-8 h-8"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient
                        id="birdGradient"
                        x1="0"
                        y1="0"
                        x2="1"
                        y2="1"
                      >
                        <stop offset="0%" stopColor="#1DA1F2" />
                        <stop offset="100%" stopColor="#6C63FF" />
                      </linearGradient>
                    </defs>
                    <path
                      fill="url(#birdGradient)"
                      d="M24 8c5 8 12 10 18 12-3 4-10 8-18 6 3 4 6 8 10 10-6 0-11-1-16-5-4-3-7-8-8-12 5 1 9 0 14-3z"
                    />
                  </svg>
                  <span className="text-xl font-bold text-white">ZenG</span>
                </div>

                {/* Mockup Content */}
                <div className="space-y-4">
                  <motion.div
                    className="bg-[#0F1A42] p-3 rounded-md"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-[#1DA1F2] font-medium">
                      Optimize LinkedIn Profile
                    </p>
                    <p className="text-sm text-white opacity-80">
                      AI-powered suggestions to enhance your headline and
                      summary.
                    </p>
                  </motion.div>
                  <motion.div
                    className="bg-[#0F1A42] p-3 rounded-md"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-[#6C63FF] font-medium">
                      Indeed Resume Builder
                    </p>
                    <p className="text-sm text-white opacity-80">
                      Craft a standout resume with real-time tips.
                    </p>
                  </motion.div>
                  <motion.button
                    className="w-full bg-gradient-to-r from-[#1DA1F2] to-[#6C63FF] text-white py-2 rounded-md"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.3 }}
                  >
                    Analyze Now
                  </motion.button>
                </div>
              </motion.div>

              {/* Animated Dots */}
              {/* Top-Left Dot */}
              <motion.div
                className="absolute -top-2 -left-2 w-5 h-5 bg-[#1DA1F2] rounded-full"
                variants={nodeVariants}
                animate="animate"
              >
                <motion.span
                  className="absolute tracking-widest -top-8 left-1/2 transform -translate-x-1/2 text-xs text-white opacity-80"
                  variants={labelVariants}
                  initial="initial"
                  animate="animate"
                >
                  Connect
                </motion.span>
              </motion.div>

              {/* Top-Right Dot */}
              <motion.div
                className="absolute tracking-widest -top-2 -right-2 w-5 h-5 bg-[#6C63FF] rounded-full"
                variants={nodeVariants}
                animate="animate"
                transition={{ delay: 0.5 }}
              >
                <motion.span
                  className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs text-white opacity-80"
                  variants={labelVariants}
                  initial="initial"
                  animate="animate"
                >
                  Grow
                </motion.span>
              </motion.div>

              {/* Bottom-Left Dot */}
              <motion.div
                className="absolute tracking-widest -bottom-2 -left-2 w-5 h-5 bg-[#1C2B4A] rounded-full"
                variants={nodeVariants}
                animate="animate"
                transition={{ delay: 1 }}
              >
                <motion.span
                  className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-white opacity-80"
                  variants={labelVariants}
                  initial="initial"
                  animate="animate"
                >
                  Succeed
                </motion.span>
              </motion.div>

              {/* Bottom-Right Dot */}
              <motion.div
                className="absolute tracking-widest -bottom-2 -right-2 w-5 h-5 bg-[#1DA1F2] rounded-full"
                variants={nodeVariants}
                animate="animate"
                transition={{ delay: 1.5 }}
              >
                <motion.span
                  className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-white opacity-80"
                  variants={labelVariants}
                  initial="initial"
                  animate="animate"
                >
                  Network
                </motion.span>
              </motion.div>

              {/* Connecting Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
                {/* Top Line */}
                <motion.line
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                  stroke="#1DA1F2"
                  strokeWidth="6"
                  strokeOpacity="0.5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                {/* Right Line */}
                <motion.line
                  x1="100%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                  stroke="#6C63FF"
                  strokeWidth="6"
                  strokeOpacity="0.5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                />
                {/* Bottom Line */}
                <motion.line
                  x1="100%"
                  y1="100%"
                  x2="0%"
                  y2="100%"
                  stroke="#1DA1F2"
                  strokeWidth="6"
                  strokeOpacity="0.5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />
                {/* Left Line */}
                <motion.line
                  x1="0%"
                  y1="100%"
                  x2="0%"
                  y2="0%"
                  stroke="#6C63FF"
                  strokeWidth="6"
                  strokeOpacity="0.5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.5,
                  }}
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Foreground Accent */}
      <div
        className="absolute bottom-0 left-0 w-full h-24 opacity-50"
        style={{
          background: "linear-gradient(to top, #0F1A42, transparent)",
        }}
      ></div>
      <div className="z-0 absolute right-42 -top-[10%] h-[460px] w-[500px] rounded-full opacity-20 bg-[#6C63FF] blur-[150px] lg:tap-1/2 lg:translate-y-1/2"></div>
    </section>
  );
};

export default HeroSection;
