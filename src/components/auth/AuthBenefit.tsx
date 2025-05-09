import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const AuthBenefits: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Animate entrance of elements
    gsap.fromTo(
      container.querySelectorAll(".animate-item"),
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.3,
      }
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full bg-gradient-to-br from-[#0A0F2C] to-[#1DA1F2] text-white p-6 md:p-12 xl:p-24 lg:p-14 flex flex-col justify-between rounded-2xl shadow-lg overflow-hidden"
    >
      <div>
        <h1 className="text-2xl md:text-3xl font-bold mb-4 animate-item">
          Elevate Your Job Application Journey
        </h1>
        <p className="text-base md:text-lg mb-8 text-white/90 animate-item">
          Join thousands of job seekers who trust ApplyZen to streamline their
          applications and land their dream roles.
        </p>
        <div className="space-y-6">
          <div className="flex items-start animate-item">
            <div className="flex-shrink-0 bg-[#6C63FF] p-2 rounded-lg mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01m-.01 4h.01"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-base md:text-lg">
                Effortless Applications
              </h3>
              <p className="text-white/80 text-sm md:text-[14.5px]">
                Submit job applications quickly with pre-filled forms and
                templates.
              </p>
            </div>
          </div>
          <div className="flex items-start animate-item">
            <div className="flex-shrink-0 bg-[#6C63FF] p-2 rounded-lg mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-base md:text-lg">
                Secure Profile Management
              </h3>
              <p className="text-white/80 text-sm md:text-[14.5px]">
                Store resumes, cover letters, and personal info safely in one
                place.
              </p>
            </div>
          </div>
          <div className="flex items-start animate-item">
            <div className="flex-shrink-0 bg-[#6C63FF] p-2 rounded-lg mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-base md:text-lg">
                Progress Tracking
              </h3>
              <p className="text-white/80 text-sm md:text-[14.5px]">
                Monitor application statuses and interview schedules in
                real-time.
              </p>
            </div>
          </div>
          <div className="flex items-start animate-item">
            <div className="flex-shrink-0 bg-[#6C63FF] p-2 rounded-lg mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-base md:text-lg">
                Smart Reminders
              </h3>
              <p className="text-white/80 text-sm md:text-[14.5px]">
                Automate follow-ups and never miss a deadline or opportunity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthBenefits;
