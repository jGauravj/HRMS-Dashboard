import {
  LayoutDashboardIcon,
  Users,
  Clock,
  Calendar,
  Wallet,
  Building,
  Settings,
  User,
  MoreVertical,
  LogOut,
} from "lucide-react";
import { Button } from "./ui/button";
import { Link, useLocation } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useAuth } from "@/context/AuthContext";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Sidebar = ({ isOpen }) => {
  const location = useLocation();
  const { user, logout } = useAuth();

  const tabs = [
    { name: "Dashboard", path: "/dashboard", icon: LayoutDashboardIcon },
    { name: "Employees", path: "/dashboard/employees", icon: Users },
    { name: "Attendance", path: "/dashboard/attendance", icon: Clock },
    { name: "Leave", path: "/dashboard/leave", icon: Calendar },
    { name: "Payroll", path: "/dashboard/payroll", icon: Wallet },
    { name: "Departments", path: "/dashboard/departments", icon: Building },
    { name: "Settings", path: "/dashboard/settings", icon: Settings },
  ];

  return (
    <aside
      className={`h-screen transition-all duration-300 overflow-hidden border-r ${
        isOpen ? "w-[200px]" : "w-0"
      }`}
    >
      <div
        className={`h-full flex flex-col ${
          isOpen ? "flex" : "hidden"
        } transition-all duration-300`}
      >
        {/* Scrollable top section */}
        <div className="flex-1 overflow-y-auto px-4">
          {/* Logo Section */}
          <div className="flex items-center gap-2 mt-5">
            <LayoutDashboardIcon />
            <h1 className="text-lg font-semibold">HRMS</h1>
          </div>

          {/* Tabs Section */}
          <div className="mt-12 flex flex-col gap-2 pb-4">
            {tabs.map(({ name, path, icon: Icon }) => (
              <Link key={path} to={path}>
                <Button
                  variant={location.pathname === path ? "default" : "ghost"}
                  size="sm"
                  className="w-full justify-start gap-2 font-normal"
                >
                  <Icon className="w-4 h-4" />
                  {name}
                </Button>
              </Link>
            ))}
          </div>
        </div>

        {/* Fixed Bottom Profile Section */}
        <div className="border-t p-4 sticky bottom-0 bg-background">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <span className="text-sm font-medium">{user?.name}</span>
                <span className="text-xs text-muted-foreground">
                  {user?.email}
                </span>
              </div>
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="p-2 hover:bg-secondary dark:hover:bg-primary dark:hover:text-background transition-colors cursor-pointer duration-200 rounded-lg">
                  <MoreVertical size="18" />
                </button>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end" sideOffset={10}>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  Setting
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={logout}
                  className="text-red-600 focus:text-red-600"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
