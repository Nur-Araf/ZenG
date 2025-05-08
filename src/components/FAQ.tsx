import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Define types
interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqRefs = useRef<HTMLDivElement[]>([]);
  const underlineRefs = useRef<HTMLDivElement[]>([]);
  const lineRef = useRef<HTMLDivElement | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    // Animate FAQ cards
    faqRefs.current.forEach((faq) => {
      if (!faq) return;
      gsap.fromTo(
        faq,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: faq,
            start: "top 80%",
            end: "top 40%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Animate underlines
    underlineRefs.current.forEach((underline) => {
      if (!underline) return;
      gsap.fromTo(
        underline,
        { scaleX: 0, transformOrigin: "left" },
        {
          scaleX: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: underline,
            start: "top 80%",
            end: "top 60%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Animate header line
    if (lineRef.current) {
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
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const faqs: FAQItem[] = [
    {
      question: "What is ZenG?",
      answer:
        "ZenG is a web and Chrome extension tool designed to streamline your job search. It offers features like job tracking, AI-powered cover letter generation, resume optimization, and network automation for platforms like LinkedIn and Indeed.",
    },
    {
      question: "How does the cover letter generator work?",
      answer:
        "The cover letter generator uses AI to create tailored cover letters based on job details you provide. Simply input the job description and your skills, and ZenG crafts a professional, job-specific letter in seconds.",
    },
    {
      question: "Is there a free plan available?",
      answer:
        "Yes, ZenG offers a free plan that includes basic job tracking, up to 3 cover letters per month, and basic job alerts. For more details on pricing, visit https://x.ai/grok.",
    },
    {
      question: "Can I use ZenG on both LinkedIn and Indeed?",
      answer:
        "Absolutely! ZenG integrates seamlessly with LinkedIn and Indeed, allowing you to track applications, automate networking, and receive job alerts across both platforms.",
    },
    {
      question: "What is included in the Pro plan?",
      answer:
        "The Pro plan includes advanced job tracking, unlimited cover letters, resume optimization, and application insights to enhance your job search. Check https://x.ai/grok for pricing details.",
    },
    {
      question: "How do I contact support for the Enterprise plan?",
      answer:
        "For Enterprise plan inquiries, including custom pricing and priority support, please contact our sales team via the form at https://x.ai/grok or through the app’s support page.",
    },
  ];

  return (
    <div className="relative  bg-gradient-to-b from-gray-200 to-white py-24">
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center">
        <span className="inline-block px-4 py-1.5 bg-[#1DA1F2]/10 text-[#1DA1F2] text-sm font-semibold rounded-full border border-[#1DA1F2]/30 backdrop-blur-sm shadow-sm mb-4">
          FREQUENTLY ASKED QUESTIONS
        </span>
        <h2 className="text-4xl sm:text-[36px] font-extrabold mb-2">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1DA1F2] to-[#6C63FF]">
            Got Questions?
          </span>{" "}
          <span className="text-black ">We’ve Got Answers</span>
        </h2>
        <p className="text-sm md:text-[16px] text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
          Find answers to common questions about using ZenG to supercharge your
          job search on LinkedIn and Indeed.
        </p>
      </div>

      {/* FAQ List */}
      <div className="max-w-3xl mx-auto px-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            ref={(el) => {
              faqRefs.current[index] = el!;
            }}
            className="mb-4 bg-white rounded-xl shadow-md transition-all duration-300 hover:shadow-lg"
          >
            <button
              className="w-full flex justify-between items-center p-4 text-left focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <div>
                <span className="text-lg font-semibold text-gray-800 inline-block">
                  {faq.question}
                </span>
                <div
                  ref={(el) => {
                    underlineRefs.current[index] = el!;
                  }}
                  className="h-1 bg-[#1DA1F2] mt-1"
                ></div>
              </div>
              <svg
                className={`w-5 h-5 text-gray-600 transform transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? "max-h-96" : "max-h-0"
              }`}
            >
              <div className="p-4 pt-0 text-gray-600 text-base">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
