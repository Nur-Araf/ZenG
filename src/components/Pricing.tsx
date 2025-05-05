import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const Pricing = () => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const lineRef = useRef(null);

  useEffect(() => {
    // Animate pricing cards
    cardRefs.current.forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "top 40%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Animate header line
    gsap.fromTo(
      lineRef.current,
      { scaleX: 0, transformOrigin: "left" },
      {
        scaleX: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: lineRef.current,
          start: "top 90%",
          end: "top 70%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Cleanup ScrollTriggers on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-t from-gray-200 to-white py-24">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto text-center">
        <span className="inline-block px-4 py-1.5 bg-[#1DA1F2]/10 text-[#1DA1F2] text-sm font-semibold rounded-full border border-[#1DA1F2]/30 backdrop-blur-sm shadow-sm mb-4">
          PRICING PLANS
        </span>
        <h2 className="text-4xl sm:text-[36px] font-extrabold mb-2">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1DA1F2] to-[#6C63FF]">
            Choose Your ZenG
          </span>{" "}
          <span className="text-black dark:text-white">Plan</span>
        </h2>
        <p className="text-sm md:text-[16px] text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
          Select the perfect plan to supercharge your job search with ZenG’s
          powerful tools for LinkedIn and Indeed.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {/* Free Plan */}
        <motion.div
          ref={(el) => {cardRefs.current[0] = el;}}
          className="relative cursor-pointer p-6 bg-white rounded-xl shadow-md transition-all duration-300 hover:shadow-lg"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 12px 20px rgba(0, 0, 0, 0.15)",
          }}
        >
          <div className="absolute top-0 left-0 h-full w-1.5 bg-[#1DA1F2] rounded-l-xl"></div>
          <h3 className="text-2xl font-extrabold text-gray-800 mb-2">Free</h3>
          <div ref={lineRef} className="w-24 h-1 bg-[#1DA1F2] mb-6"></div>
          <div className="flex items-baseline mb-1">
            <span className="text-4xl font-extrabold text-gray-900">$0</span>
            <span className="text-sm font-medium text-gray-600 ml-2">
              /month
            </span>
          </div>
          <p className="text-gray-600 text-base mb-2">
            Perfect for trying out ZenG
          </p>
          <ul className="space-y-4 mb-8 min-h-[160px]">
            <li className="flex items-start text-base">
              <svg
                className="mt-0.5 mr-2 text-[#10B981]"
                width="18"
                height="18"
                viewBox="0 0 512 512"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" />
              </svg>
              <span className="text-gray-700">Basic job tracking</span>
            </li>
            <li className="flex items-start text-base">
              <svg
                className="mt-0.5 mr-2 text-[#10B981]"
                width="18"
                height="18"
                viewBox="0 0 512 512"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" />
              </svg>
              <span className="text-gray-700">3 cover letters/month</span>
            </li>
            <li className="flex items-start text-base">
              <svg
                className="mt-0.5 mr-2 text-[#10B981]"
                width="18"
                height="18"
                viewBox="0 0 512 512"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" />
              </svg>
              <span className="text-gray-700">Basic job alerts</span>
            </li>
            <li className="flex items-start text-base">
              <svg
                className="mt-0.5 mr-2 text-[#D1D5DB]"
                width="18"
                height="18"
                viewBox="0 0 512 512"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200z" />
              </svg>
              <span className="text-gray-400">No advanced features</span>
            </li>
          </ul>
          <button className="w-full py-2.5 px-4 rounded-full bg-gradient-to-r from-[#1DA1F2] to-[#6C63FF] text-white font-medium transition-all flex items-center justify-center group shadow-sm hover:opacity-90 cursor-pointer">
            Start Free
            <svg
              className="ml-2 transform group-hover:translate-x-1 transition-transform"
              width="12"
              height="12"
              viewBox="0 0 448 512"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" />
            </svg>
          </button>
        </motion.div>

        {/* Pro Plan (Highlighted) */}
        <motion.div
          ref={(el) => {cardRefs.current[1] = el}}
          className="p-6 cursor-pointer relative bg-white rounded-xl shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg border-r-2 border-t-2 border-b-2 border-[#1DA1F2]"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 12px 20px rgba(0, 0, 0, 0.15)",
          }}
        >
          <div className="absolute top-0 left-0 h-full w-1.5 bg-[#6C63FF] rounded-l-xl"></div>
          <h3 className="text-2xl font-extrabold text-gray-800 mb-2">Pro</h3>
          <div ref={lineRef} className="w-24 h-1 bg-[#1DA1F2] mb-2"></div>
          <div className="flex items-baseline mb-1">
            <span className="text-4xl font-extrabold text-gray-900">$10</span>
            <span className="text-sm font-medium text-gray-600 ml-2">
              /month
            </span>
          </div>
          <p className="text-gray-600 text-base mb-6">
            Ideal for serious job seekers
          </p>
          <ul className="space-y-4 mb-8 min-h-[160px]">
            <li className="flex items-start text-base">
              <svg
                className="mt-0.5 mr-2 text-[#10B981]"
                width="18"
                height="18"
                viewBox="0 0 512 512"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" />
              </svg>
              <span className="text-gray-700">Advanced job tracking</span>
            </li>
            <li className="flex items-start text-base">
              <svg
                className="mt-0.5 mr-2 text-[#10B981]"
                width="18"
                height="18"
                viewBox="0 0 512 512"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" />
              </svg>
              <span className="text-gray-700">Unlimited cover letters</span>
            </li>
            <li className="flex items-start text-base">
              <svg
                className="mt-0.5 mr-2 text-[#10B981]"
                width="18"
                height="18"
                viewBox="0 0 512 512"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" />
              </svg>
              <span className="text-gray-700">Resume optimization</span>
            </li>
            <li className="flex items-start text-base">
              <svg
                className="mt-0.5 mr-2 text-[#10B981]"
                width="18"
                height="18"
                viewBox="0 0 512 512"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" />
              </svg>
              <span className="text-gray-700">Application insights</span>
            </li>
          </ul>
          <button className="w-full py-2.5 px-4 rounded-full bg-gradient-to-r from-[#1DA1F2] to-[#6C63FF] text-white font-medium transition-all flex items-center justify-center group shadow-sm hover:opacity-90 cursor-pointer">
            Choose Pro
            <svg
              className="ml-2 transform group-hover:translate-x-1 transition-transform"
              width="12"
              height="12"
              viewBox="0 0 448 512"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" />
            </svg>
          </button>
        </motion.div>

        {/* Enterprise Plan */}
        <motion.div
          ref={(el) => {cardRefs.current[2] = el}}
          className="p-6 cursor-pointer relative bg-white rounded-xl shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 12px 20px rgba(0, 0, 0, 0.15)",
          }}
        >
          <div className="absolute top-0 left-0 h-full w-1.5 bg-[#0A0F2C] rounded-l-xl"></div>
          <h3 className="text-2xl font-extrabold text-gray-800 mb-2">
            Enterprise
          </h3>
          <div ref={lineRef} className="w-36 h-1 bg-[#1DA1F2] mb-2"></div>
          <div className="flex items-baseline mb-1">
            <span className="text-2xl font-extrabold text-gray-900">
              Contact Us
            </span>
          </div>
          <p className="text-gray-600 text-base mb-6">
            Custom solutions for teams
          </p>
          <ul className="space-y-4 mb-8 min-h-[160px]">
            <li className="flex items-start text-base">
              <svg
                className="mt-0.5 mr-2 text-[#10B981]"
                width="18"
                height="18"
                viewBox="0 0 512 512"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" />
              </svg>
              <span className="text-gray-700">All Pro features</span>
            </li>
            <li className="flex items-start text-base">
              <svg
                className="mt-0.5 mr-2 text-[#10B981]"
                width="18"
                height="18"
                viewBox="0 0 512 512"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" />
              </svg>
              <span className="text-gray-700">Network assistant</span>
            </li>
            <li className="flex items-start text-base">
              <svg
                className="mt-0.5 mr-2 text-[#10B981]"
                width="18"
                height="18"
                viewBox="0 0 512 512"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" />
              </svg>
              <span className="text-gray-700">Priority support</span>
            </li>
            <li className="flex items-start text-base">
              <svg
                className="mt-0.5 mr-2 text-[#10B981]"
                width="18"
                height="18"
                viewBox="0 0 512 512"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" />
              </svg>
              <span className="text-gray-700">Team collaboration tools</span>
            </li>
          </ul>
          <button className="w-full py-2.5 px-4 rounded-full bg-gradient-to-r from-[#1DA1F2] to-[#6C63FF] text-white font-medium transition-all flex items-center justify-center group shadow-sm hover:opacity-90 cursor-pointer">
            Contact Sales
            <svg
              className="ml-2 transform group-hover:translate-x-1 transition-transform"
              width="12"
              height="12"
              viewBox="0 0 448 512"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" />
            </svg>
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Pricing;
