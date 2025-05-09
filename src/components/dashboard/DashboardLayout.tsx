import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { ToastContainer } from "react-toastify";

const DashboardLayout: React.FC = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState<boolean>(false);

  // Placeholder user data (replace with actual user data)
  const user = {
    name: "John Doe",
    picture: null, // Set to a URL (e.g., 'https://example.com/avatar.jpg') if available
  };

  // Generate initials if no picture is available
  const getInitials = (name: string) => {
    const names = name.split(" ");
    return names.length > 1
      ? `${names[0][0]}${names[1][0]}`
      : names[0].slice(0, 2);
  };

  useEffect(() => {
    gsap.to(".main-content-container", {
      marginLeft: isSidebarCollapsed ? 80 : 256,
      duration: 0.7,
      ease: "power4.inOut",
    });
  }, [isSidebarCollapsed]);

  const toggleCollapse = (): void => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className="flex min-h-screen bg-[#F5F6FA] text-[#1C2B4A]">
      <Sidebar
        isCollapsed={isSidebarCollapsed}
        toggleCollapse={toggleCollapse}
      />
      <div className="main-content-container flex-1 flex flex-col">
        <header className="header bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-10">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-bold text-[#1C2B4A]">Dashboard</h1>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              {user.picture ? (
                <img
                  src={user.picture}
                  alt={user.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-[#6C63FF] flex items-center justify-center text-white text-[16px] font-semibold">
                  {getInitials(user.name)}
                </div>
              )}
              <span className="text-[16px] font-medium text-[#1C2B4A]">
                {user.name}
              </span>
            </div>
          </div>
        </header>
        <main className="main-content flex-1 p-6">
          <Outlet />
        </main>
      </div>
      <ToastContainer />
    </div>
  );
};

export default DashboardLayout;
