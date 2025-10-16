import { useAuth } from "@/context/AuthContext";
import { Button } from "./ui/button";
import { LogOut, Moon, Settings, Sidebar, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ModeToggle from "./ModeToggle";

const Navbar = ({ onToggleSidebar }) => {
  const { user, logout } = useAuth();

  return (
    <div>
      <div className="p-4 flex justify-between items-center border-b ">
        <div className="flex items-center gap-2">
          <Button onClick={onToggleSidebar} size="sm" variant="outline">
            <Sidebar />
          </Button>
          <h1 className="text-base font-medium">Welcome, {user?.name}</h1>
        </div>
        <div className="flex items-center gap-3">
          <ModeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" sideOffset={10}>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings />
                Setting
              </DropdownMenuItem>
              <DropdownMenuItem onClick={logout} variant="destructive">
                <LogOut />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
