import { useEffect } from "react";
import { gsap } from "gsap";
import {
  Home,
  LogOut,
  ChevronRight,
  ChevronLeft,
  Upload,
  FilesIcon,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";
import { toast } from "react-toastify";
import { api } from "../../store/interceptor";

interface SidebarProps {
  isCollapsed: boolean;
  toggleCollapse: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isCollapsed, toggleCollapse }) => {
  useEffect(() => {
    gsap.to(".sidebar", {
      width: isCollapsed ? 80 : 256,
      duration: 0.7,
      ease: "power4.inOut",
    });
    gsap.to(".sidebar-content", {
      opacity: isCollapsed ? 0 : 1,
      duration: 0.4,
      ease: "power4.inOut",
    });
  }, [isCollapsed]);
  const navigate = useNavigate();
  const { clearAuth, refreshToken } = useAuthStore();

  const handleLogout = async () => {
    try {
      if (!refreshToken) {
        throw new Error("No refresh token available");
      }
      await api.post("/logout", { refresh_token: refreshToken });
      localStorage.removeItem("refreshToken");
      clearAuth();
      toast.success("Logged out successfully!");
      navigate("/signin");
    } catch (error) {
      console.error("Logout failed:", error);
      toast.error("Logout failed. Please try again.");
    }
  };

  return (
    <aside
      className={`sidebar fixed w-64 bg-[#1C2B4A] text-white flex flex-col h-screen z-30 font-inter ${
        isCollapsed ? "w-28 p-2" : "w-64 p-6"
      }`}
    >
      <div className="flex justify-between items-center mb-8 relative">
        <div
          className={`flex items-center text-xl font-bold cursor-pointer group sidebar-content ${
            isCollapsed ? "hidden" : "block"
          }`}
        >
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
          <span className="text-[24px] font-bold text-[#6C63FF] group-hover:text-white transition duration-300">
            ApplyZen
          </span>
        </div>
        <button
          className={`text-white absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer rounded-full p-2 hover:text-[#6C63FF] transition duration-300 ${
            isCollapsed ? "mt-8" : ""
          }`}
          onClick={toggleCollapse}
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {isCollapsed ? <ChevronRight size={24} /> : <ChevronLeft size={24} />}
        </button>
      </div>
      <nav className="flex-1 flex flex-col justify-center">
        <ul className="space-y-2">
          <li>
            <NavLink
              to="/dashboard"
              end
              className={({ isActive }) =>
                `flex items-center ${
                  isCollapsed
                    ? "justify-center py-3 px-3"
                    : "space-x-3 py-3 px-3"
                } text-[18px] rounded-md transition-all duration-300 hover:bg-[#6C63FF]/20 hover:text-[#1DA1F2] hover:scale-105 ${
                  isActive ? "bg-[#6C63FF]/30 text-[#1DA1F2]" : ""
                }`
              }
            >
              <Home size={24} className="min-w-[20px] min-h-[20px]" />
              <span
                className={`sidebar-content ${
                  isCollapsed ? "hidden" : "block"
                }`}
              >
                Home
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/resume"
              className={({ isActive }) =>
                `flex items-center ${
                  isCollapsed
                    ? "justify-center py-3 px-3"
                    : "space-x-3 py-3 px-3"
                } text-[18px] rounded-md transition-all duration-300 hover:bg-[#6C63FF]/20 hover:text-[#1DA1F2] hover:scale-105 ${
                  isActive ? "bg-[#6C63FF]/30 text-[#1DA1F2]" : ""
                }`
              }
            >
              <Upload size={24} className="min-w-[20px] min-h-[20px]" />
              <span
                className={`sidebar-content ${
                  isCollapsed ? "hidden" : "block"
                }`}
              >
                Upload Resume
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/cover-letter"
              className={({ isActive }) =>
                `flex items-center ${
                  isCollapsed
                    ? "justify-center py-3 px-3"
                    : "space-x-3 py-3 px-3"
                } text-[18px] rounded-md transition-all duration-300 hover:bg-[#6C63FF]/20 hover:text-[#1DA1F2] hover:scale-105 ${
                  isActive ? "bg-[#6C63FF]/30 text-[#1DA1F2]" : ""
                }`
              }
            >
              <FilesIcon size={24} className="min-w-[20px] min-h-[20px]" />
              <span
                className={`sidebar-content ${
                  isCollapsed ? "hidden" : "block truncate max-w-[160px]"
                }`}
              >
                Cover Letter Generator
              </span>
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="mt-auto">
        <button
          className={`flex items-center ${
            isCollapsed ? "justify-center py-3 px-3" : "space-x-3 py-3 px-3"
          } text-[18px] w-full rounded-md transition-all duration-300 hover:bg-[#6C63FF]/20 hover:text-[#1DA1F2] hover:scale-105 cursor-pointer`}
          onClick={handleLogout} // Replace with actual logout logic
          aria-label="Logout"
        >
          <LogOut size={24} className="min-w-[20px] min-h-[20px]" />
          <span
            className={`sidebar-content ${isCollapsed ? "hidden" : "block"}`}
          >
            Logout
          </span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
