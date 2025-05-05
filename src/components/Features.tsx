import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  const pipeRef = useRef(null);
  const waterRef = useRef(null);
  const platformRefs = useRef([]);

  useEffect(() => {
    const pipePath = pipeRef.current;
    const waterPath = waterRef.current;
    const platforms = platformRefs.current;

    // Animate water flow with slight pauses at platforms
    gsap.to(waterPath, {
      strokeDashoffset: 0,
      ease: "none",
      scrollTrigger: {
        trigger: pipeRef.current,
        start: "top 20%",
        end: "bottom 80%",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          // Pause water briefly at each platform (1/6 increments)
          const pausePoints = [0.16, 0.33, 0.5, 0.66, 0.83];
          pausePoints.forEach((point) => {
            if (Math.abs(progress - point) < 0.02) {
              gsap.to(waterPath, {
                strokeDashoffset: gsap.getProperty(
                  waterPath,
                  "strokeDashoffset"
                ),
                duration: 0.5,
              });
            }
          });
        },
      },
    });

    // Animate platforms
    platforms.forEach((platform) => {
      gsap.fromTo(
        platform,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: platform,
            start: "top 80%",
            end: "top 40%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Cleanup ScrollTriggers on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="relative py-24 min-h-screen bg-gradient-to-t from-gray-200 to-white">
      <div className="z-0 absolute -left-[20%] top-[20%] h-[500px] w-[500px] translate-x-1/4 rounded-full opacity-30 blur-[100px] bg-gradient-to-t from-[#6C63FF] to-[#1DA1F2] lg:tap-1/2 lg:translate-y-1/2"></div>
      <div className="max-w-6xl mx-auto text-center z-20">
        {/* Tagline */}
        <span className="inline-block px-4 py-1.5 bg-[#1DA1F2]/10 text-[#1DA1F2] text-sm font-semibold rounded-full border border-[#1DA1F2]/30 backdrop-blur-sm shadow-sm mb-4">
          POWERED FOR PRODUCTIVITY
        </span>

        {/* Section Title */}
        <h2 className="text-4xl sm:text-[36px] font-extrabold mb-4">
          How{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1DA1F2] to-[#6C63FF]">
            ZenG Empowers
          </span>{" "}
          <span className="text-black dark:text-white">Your </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1DA1F2] to-[#6C63FF]">
            Job Hunt
          </span>{" "}
        </h2>

        {/* Description */}
        <p className="text-sm md:text-[16px] text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
          From tracking job applications to generating tailored cover letters —
          ZenG makes every step smoother, smarter, and faster. Our platform
          seamlessly integrates with LinkedIn, Indeed, and other portals to
          maximize your chances of landing the right opportunity.
        </p>
      </div>

      {/* SVG Pipe and Water */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-12">
        <svg
          width="100%"
          height="1200"
          viewBox="0 0 100 1200"
          preserveAspectRatio="none"
        >
          {/* Pipe Path (More Rounded) */}
          <path
            ref={pipeRef}
            d="M50,0 C50,150 10,250 50,350 C90,450 10,550 50,650 C90,750 10,850 50,950 C90,1050 50,1100 50,1200"
            fill="none"
            stroke="#2C3E50"
            strokeWidth="10"
            strokeLinecap="round"
          />
          {/* Water Path */}
          <path
            ref={waterRef}
            d="M50,0 C50,150 10,250 50,350 C90,450 10,550 50,650 C90,750 10,850 50,950 C90,1050 50,1100 50,1200"
            fill="none"
            stroke="url(#waterGradient)"
            strokeWidth="8"
            strokeDasharray="1200"
            strokeDashoffset="1200"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient
              id="waterGradient"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop
                offset="0%"
                style={{ stopColor: "#4FC3F7", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#0288D1", stopOpacity: 1 }}
              />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Platforms */}
      <div className="relative z-10 max-w-5xl mx-auto space-y-16">
        {/* Platform 1 */}
        <div
          ref={(el) => (platformRefs.current[0] = el)}
          className="flex items-center justify-between px-4"
        >
          <div className="w-5/12 bg-gradient-to-r from-[#0A0F2C] to-[#0A66C2] text-white p-6 rounded-xl shadow-lg flex items-start space-x-4">
            <svg
              className="w-12 h-12"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div>
              <h3 className="text-2xl font-bold">Job Tracking</h3>
              <p className="mt-2 text-sm">
                Seamlessly track job applications on LinkedIn and Indeed.
                Monitor application statuses, set reminders for follow-ups, and
                stay organized with a centralized dashboard.
              </p>
            </div>
          </div>
          <div className="w-2/12 text-center">
            <div className="w-5 h-5 bg-blue-600 rounded-full mx-auto"></div>
          </div>
          <div className="w-5/12"></div>
        </div>

        {/* Platform 2 */}
        <div
          ref={(el) => (platformRefs.current[1] = el)}
          className="flex items-center justify-between px-4"
        >
          <div className="w-5/12"></div>
          <div className="w-2/12 text-center">
            <div className="w-5 h-5 bg-blue-600 rounded-full mx-auto"></div>
          </div>
          <div className="w-5/12 bg-gradient-to-r from-[#0A0F2C] to-[#0A66C2] text-white p-6 rounded-xl shadow-lg flex items-start space-x-4">
            <svg
              className="w-12 h-12"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            <div>
              <h3 className="text-2xl font-bold">Cover Letter Generator</h3>
              <p className="mt-2 text-sm">
                Generate tailored cover letters in seconds. Input job details,
                and our AI crafts professional, job-specific letters to boost
                your application’s impact.
              </p>
            </div>
          </div>
        </div>

        {/* Platform 3 */}
        <div
          ref={(el) => (platformRefs.current[2] = el)}
          className="flex items-center justify-between px-4"
        >
          <div className="w-5/12 bg-gradient-to-r from-[#0A0F2C] to-[#0A66C2] text-white p-6 rounded-xl shadow-lg flex items-start space-x-4">
            <svg
              className="w-12 h-12"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
            <div>
              <h3 className="text-2xl font-bold">Resume Optimization</h3>
              <p className="mt-2 text-sm">
                Enhance your resume with AI-driven suggestions. Align your
                skills and experience with job descriptions to stand out on
                LinkedIn and Indeed.
              </p>
            </div>
          </div>
          <div className="w-2/12 text-center">
            <div className="w-5 h-5 bg-blue-600 rounded-full mx-auto"></div>
          </div>
          <div className="w-5/12"></div>
        </div>

        {/* Platform 4 */}
        <div
          ref={(el) => (platformRefs.current[3] = el)}
          className="flex items-center justify-between px-4"
        >
          <div className="w-5/12"></div>
          <div className="w-2/12 text-center">
            <div className="w-5 h-5 bg-blue-600 rounded-full mx-auto"></div>
          </div>
          <div className="w-5/12 bg-gradient-to-r from-[#0A0F2C] to-[#0A66C2] text-white p-6 rounded-xl shadow-lg flex items-start space-x-4">
            <svg
              className="w-12 h-12"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <div>
              <h3 className="text-2xl font-bold">Application Insights</h3>
              <p className="mt-2 text-sm">
                Gain insights into application trends and success rates. Analyze
                your job search performance to refine strategies and improve
                outcomes.
              </p>
            </div>
          </div>
        </div>

        {/* Platform 5 */}
        <div
          ref={(el) => (platformRefs.current[4] = el)}
          className="flex items-center justify-between px-4"
        >
          <div className="w-5/12 bg-gradient-to-r from-[#0A0F2C] to-[#0A66C2] text-white p-6 rounded-xl shadow-lg flex items-start space-x-4">
            <svg
              className="w-12 h-12"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 005.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <div>
              <h3 className="text-2xl font-bold">Network Assistant</h3>
              <p className="mt-2 text-sm">
                Automate LinkedIn connection requests and follow-ups. Build a
                robust professional network effortlessly with personalized
                messaging suggestions.
              </p>
            </div>
          </div>
          <div className="w-2/12 text-center">
            <div className="w-5 h-5 bg-blue-600 rounded-full mx-auto"></div>
          </div>
          <div className="w-5/12"></div>
        </div>

        {/* Platform 6 */}
        <div
          ref={(el) => (platformRefs.current[5] = el)}
          className="flex items-center justify-between px-4"
        >
          <div className="w-5/12"></div>
          <div className="w-2/12 text-center">
            <div className="w-5 h-5 bg-blue-600 rounded-full mx-auto"></div>
          </div>
          <div className="w-5/12 bg-gradient-to-r from-[#0A0F2C] to-[#0A66C2] text-white p-6 rounded-xl shadow-lg flex items-start space-x-4">
            <svg
              className="w-12 h-12"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <div>
              <h3 className="text-2xl font-bold">Job Alerts</h3>
              <p className="mt-2 text-sm">
                Receive real-time alerts for new job postings. Customize
                preferences to get notified about opportunities on LinkedIn and
                Indeed that match your goals.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="z-0 absolute right-32 -top-[30%] h-[500px] w-[500px] translate-x-1/4 rounded-full opacity-30 blur-[100px] bg-gradient-to-t from-[#6C63FF] to-[#1DA1F2] lg:tap-1/2 lg:translate-y-1/2"></div>
      <div className="z-0 absolute bottom-12 left-[55%] h-[500px] w-[500px] translate-x-1/4 rounded-full opacity-30 blur-[100px] bg-gradient-to-t from-[#6C63FF] to-[#1DA1F2] lg:tap-1/2 lg:translate-y-1/2"></div>
    </div>
  );
};

export default Features;
