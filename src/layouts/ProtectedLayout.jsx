import { useState } from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { Outlet } from "react-router-dom";

const ProtectedLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-background dark:bg-background">
      {/* Sidebar fix */}
      <Sidebar isOpen={isSidebarOpen} />

      {/* Main content section */}
      <main
        className={`flex-1 transition-all duration-300 ${
          isSidebarOpen ? "" : "ml-0"
        }`}
      >
        <Navbar onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        <div className="h-[calc(100vh-60px)] overflow-y-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default ProtectedLayout;
