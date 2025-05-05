"use client";

import { motion } from "framer-motion";
import { Briefcase, Zap, Inbox } from "lucide-react";

const benefits = [
  {
    icon: <Briefcase size={32} className="text-[#6C63FF]" />,
    title: "Apply Smarter, Not Harder",
    description:
      "Say goodbye to repetitive job forms. ZenG auto-fills your info across platforms, slashing application time by 70%—so you focus on landing your dream job.",
  },
  {
    icon: <Zap size={32} className="text-[#1DA1F2]" />,
    title: "Lightning-Fast Applications",
    description:
      "Be the first in line. ZenG’s one-click apply sends your profile to recruiters instantly on LinkedIn, Indeed, and more, boosting your visibility.",
  },
  {
    icon: <Inbox size={32} className="text-[#1C2B4A]" />,
    title: "Your Dream Job, Delivered",
    description:
      "No more endless job board scrolling. ZenG sends tailored alerts for jobs that match your skills, ensuring you never miss the perfect opportunity.",
  },
];

const HelpsSection = () => {
  return (
    <section className="py-24 px-6 sm:px-12 lg:px-24 bg-gradient-to-b from-gray-200 to-white dark:from-[#0E0F1A] dark:to-[#1C1F2E] text-gray-900 dark:text-white">
      <div className="max-w-6xl mx-auto text-center">
        <span className="inline-block px-4 py-1.5 bg-[#1DA1F2]/10 text-[#1DA1F2] text-sm font-semibold rounded-full border border-[#1DA1F2]/30 backdrop-blur-sm shadow-sm mb-4">
          HOW IT HELPS
        </span>

        <h2 className="text-4xl sm:text-[36px] font-extrabold mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1DA1F2] to-[#6C63FF]">
            {" "}
            How ZenG
          </span>{" "}
          <span className="text-black dark:text-white">Powers Your Win</span>
        </h2>
        <p className="text-sm md:text-[16px] text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
          ZenG is your ultimate job search ally, streamlining applications and
          putting you ahead of the competition with less effort.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {benefits.map((benefit, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: idx * 0.25, ease: "easeOut" }}
            viewport={{ once: true }}
            className="group relative bg-white dark:bg-[#1C1F2E] p-8 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700 hover:border-[#1DA1F2]/50 hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer z-20"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#1DA1F2]/10 to-[#6C63FF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative mb-6">{benefit.icon}</div>
            <h3 className="text-[20px] font-bold mb-4 group-hover:text-[#1DA1F2] transition-colors duration-200">
              {benefit.title}
            </h3>
            <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              {benefit.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HelpsSection;
