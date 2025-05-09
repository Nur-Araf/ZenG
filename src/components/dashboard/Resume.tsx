import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import {
  Upload,
  Download,
  FileText,
  CheckCircle,
  FileSearch,
  Star,
} from "lucide-react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Resume = () => {
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [processedResumeUrl, setProcessedResumeUrl] = useState<string | null>(
    null
  );
  const [isProcessing, setIsProcessing] = useState(false);
  const resumeRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [progress, setProgress] = useState(0);
  const toastId = useRef<string | number | null>(null);

  // GSAP animations for component entrance and file upload
  useEffect(() => {
    if (resumeRef.current) {
      gsap.fromTo(
        resumeRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power4.out" }
      );
    }
  }, []);

  useEffect(() => {
    if (resumeFile) {
      gsap.fromTo(
        ".file-preview",
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" }
      );
      toastId.current = toast.success("Resume uploaded successfully!", {
        position: "top-right",
        autoClose: 3000,
        theme: "colored",
        style: { backgroundColor: "#6C63FF", color: "white" },
      });
    }
  }, [resumeFile]);

  // Simulate processing progress
  useEffect(() => {
    if (isProcessing) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 10;
        });
      }, 200);
      return () => clearInterval(interval);
    }
  }, [isProcessing]);

  // Handle file upload
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (
      file &&
      (file.type === "application/pdf" || file.type.includes("msword"))
    ) {
      setResumeFile(file);
    } else {
      toastId.current = toast.error("Please upload a PDF or Word document.", {
        position: "top-right",
        autoClose: 3000,
        theme: "colored",
        style: { backgroundColor: "#1C2B4A", color: "white" },
      });
    }
  };

  // Simulate resume processing with fake API
  const processResume = async () => {
    if (!resumeFile) {
      toastId.current = toast.error("Please upload a resume.", {
        position: "top-right",
        autoClose: 3000,
        theme: "colored",
        style: { backgroundColor: "#1C2B4A", color: "white" },
      });
      return;
    }

    setIsProcessing(true);
    setProgress(0);

    // Log resume details
    console.log("Sending resume to API:", {
      name: resumeFile.name,
      size: resumeFile.size,
      type: resumeFile.type,
    });

    try {
      // Simulate API call with Axios
      const response = await axios
        .post(
          "https://fake-api.example.com/process-resume",
          { resume: resumeFile },
          {
            headers: { "Content-Type": "multipart/form-data" },
            timeout: 2000,
          }
        )
        .catch(() => {
          // Simulate successful response
          return {
            data: { processedResume: resumeFile },
          };
        });

      toastId.current = toast.info("Processing resume...", {
        position: "top-right",
        autoClose: 2000,
        theme: "colored",
        style: { backgroundColor: "#1DA1F2", color: "white" },
      });
      console.log("API response:", response.data);

      // Simulate delay for processing
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const mockProcessedResume = new Blob([resumeFile], {
        type: resumeFile.type,
      });
      const url = URL.createObjectURL(mockProcessedResume);
      setProcessedResumeUrl(url);
      setIsProcessing(false);

      toastId.current = toast.success("Resume processed successfully!", {
        position: "top-right",
        autoClose: 3000,
        theme: "colored",
        style: { backgroundColor: "#6C63FF", color: "white" },
      });
    } catch (error) {
      console.error("Error processing resume:", error);
      toastId.current = toast.error(
        "Failed to process resume. Please try again.",
        {
          position: "top-right",
          autoClose: 3000,
          theme: "colored",
          style: { backgroundColor: "#1C2B4A", color: "white" },
        }
      );
      setIsProcessing(false);
    }
  };

  // Trigger file input click
  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#1C2B4A]/10 flex flex-col items-center p-4 sm:p-8">
      <ToastContainer limit={1} />
      <div ref={resumeRef} className="w-full max-w-5xl flex flex-col gap-8">
        {/* Hero Section */}
        <motion.div
          className="text-center py-12 bg-gradient-to-r from-[#1C2B4A] to-[#6C63FF] rounded-xl shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Smart Resume Tailoring
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
            Optimize your resume with AI-driven parsing to match job
            requirements and boost ATS compatibility.
          </p>
        </motion.div>

        {/* Features Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <motion.div
            className="p-6 bg-white rounded-lg shadow-md flex flex-col items-center text-center"
            whileHover={{ scale: 1.05 }}
          >
            <FileSearch className="w-12 h-12 text-[#6C63FF] mb-4" />
            <h3 className="text-xl font-semibold text-[#1C2B4A]">
              Keyword Optimization
            </h3>
            <p className="text-[#1C2B4A]/80 mt-2">
              Automatically align your resume with job-specific keywords.
            </p>
          </motion.div>
          <motion.div
            className="p-6 bg-white rounded-lg shadow-md flex flex-col items-center text-center"
            whileHover={{ scale: 1.05 }}
          >
            <CheckCircle className="w-12 h-12 text-[#6C63FF] mb-4" />
            <h3 className="text-xl font-semibold text-[#1C2B4A]">
              ATS Compatibility
            </h3>
            <p className="text-[#1C2B4A]/80 mt-2">
              Ensure your resume passes Applicant Tracking Systems with ease.
            </p>
          </motion.div>
          <motion.div
            className="p-6 bg-white rounded-lg shadow-md flex flex-col items-center text-center"
            whileHover={{ scale: 1.05 }}
          >
            <Star className="w-12 h-12 text-[#6C63FF] mb-4" />
            <h3 className="text-xl font-semibold text-[#1C2B4A]">
              Professional Formatting
            </h3>
            <p className="text-[#1C2B4A]/80 mt-2">
              Enhance your resume with clean, professional layouts.
            </p>
          </motion.div>
        </div>

        {/* Upload Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-[#1C2B4A] mb-6">
            Upload Your Resume
          </h2>
          <div
            className="border-2 border-dashed border-[#6C63FF] rounded-lg p-8 text-center cursor-pointer hover:bg-[#6C63FF]/10 transition-colors"
            onClick={triggerFileInput}
          >
            <FileText className="mx-auto text-[#6C63FF] w-16 h-16" />
            <p className="mt-4 text-lg text-[#1C2B4A] font-medium">
              {resumeFile
                ? resumeFile.name
                : "Drag & Drop or Click to Upload Resume (PDF/Word)"}
            </p>
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
            />
          </div>
          {resumeFile && (
            <div className="file-preview mt-4 p-4 bg-[#1C2B4A]/5 rounded-lg flex items-center gap-4">
              <FileText className="w-8 h-8 text-[#6C63FF]" />
              <p className="text-[#1C2B4A]">{resumeFile.name}</p>
            </div>
          )}
        </div>

        {/* Process Button and Progress Bar */}
        <div className="flex flex-col items-center gap-4">
          <motion.button
            className={`flex items-center justify-center gap-2 py-3 px-8 rounded-lg text-white font-medium transition-colors ${
              isProcessing
                ? "bg-[#1C2B4A] cursor-not-allowed"
                : "bg-[#6C63FF] hover:bg-[#1DA1F2]"
            }`}
            onClick={processResume}
            disabled={isProcessing}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Upload className="w-5 h-5" />
            {isProcessing ? "Processing..." : "Tailor Resume"}
          </motion.button>
          {isProcessing && (
            <div className="w-full max-w-md">
              <div className="bg-[#1C2B4A]/10 rounded-full h-2.5">
                <motion.div
                  className="bg-[#6C63FF] h-2.5 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.2 }}
                />
              </div>
              <p className="text-center text-[#1C2B4A] mt-2">
                Processing: {progress}%
              </p>
            </div>
          )}
        </div>

        {/* Download Section */}
        {processedResumeUrl && (
          <div className="bg-[#1C2B4A] rounded-lg p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold text-white">
                Your Tailored Resume is Ready!
              </h2>
              <p className="text-white/90 mt-2">
                Download your optimized resume, crafted to stand out to
                recruiters.
              </p>
            </div>
            <motion.a
              href={processedResumeUrl}
              download="Tailored_Resume.pdf"
              className="flex items-center gap-2 py-3 px-6 bg-[#1DA1F2] text-white rounded-lg hover:bg-[#6C63FF] transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-5 h-5" />
              Download Resume
            </motion.a>
          </div>
        )}

        {/* Tips Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-[#1C2B4A] mb-6">
            Resume Optimization Tips
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-[#1C2B4A]/80">
            <li>
              Use action verbs like "developed," "managed," or "optimized" to
              describe your achievements.
            </li>
            <li>
              Keep your resume concise, ideally one page, unless you have
              extensive experience.
            </li>
            <li>
              Include measurable results, such as "increased sales by 20%" or
              "reduced errors by 15%."
            </li>
            <li>
              Tailor your resume for each job by incorporating relevant keywords
              from the job description.
            </li>
            <li>
              Ensure your contact information is up-to-date and professional.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resume;
