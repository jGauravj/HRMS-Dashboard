import { useState } from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { Outlet } from "react-router-dom";
import { X } from "lucide-react";

const ProtectedLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-background dark:bg-background relative">
      <div
        className={`
          ${isSidebarOpen ? "w-[200px]" : "w-0"} 
          transition-all duration-300 
          hidden md:block
          relative
          z-30
        `}
      >
        <Sidebar isOpen={isSidebarOpen} />
      </div>

      <div
        className={`
          fixed top-0 left-0 right-0 
          bg-background dark:bg-background
          shadow-md
          transition-transform duration-300 
          md:hidden
          z-40
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex justify-between items-center px-4 py-3 border-b border-border">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="p-1 rounded-full hover:bg-muted"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="max-h-[calc(100vh-60px)] overflow-y-auto">
          <Sidebar isOpen={isSidebarOpen} />
        </div>
      </div>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <main
        className={`
          flex-1 min-w-0 
          transition-all duration-300 
          ${isSidebarOpen ? "md:ml-0" : "ml-0"}
          w-full
        `}
      >
        <Navbar onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        <div className="h-[calc(100vh-60px)] overflow-auto">
          <div className="w-full max-w-full overflow-hidden">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProtectedLayout;
