import { NavLink } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  FileText,
  PieChart,
  Settings,
  Building2,
  CircleDollarSign,
  User2,
  Package
} from "lucide-react";
import "./modern-sidebar.css";
import { Sheet, SheetContent } from "@/components/ui/sheet";

interface SidebarProps {
  open?: boolean;
  setOpen?: (open: boolean) => void;
  isMobile?: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ open, setOpen, isMobile }) => {
  const { currentUser } = useAuth();

  if (!currentUser) return null;

  const navItems = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
      roles: ["facility", "finance", "ceo", "accountant", "office_assistant"],
    },
    {
      title: "Demands",
      href: "/demands",
      icon: FileText,
      roles: ["facility", "finance", "ceo", "accountant", "office_assistant"],
    },
    {
      title: "Stock Management",
      href: "/stock",
      icon: Package,
      roles: ["facility", "ceo", "office_assistant"],
    },
    {
      title: "Reports",
      href: "/reports",
      icon: PieChart,
      roles: ["facility", "finance", "ceo", "accountant"],
    },
    {
      title: "Maintenance Records",
      href: "/maintenance",
      icon: Building2,
      roles: ["facility", "ceo", "office_assistant"],
    },
    {
      title: "Finance",
      href: "/finance",
      icon: CircleDollarSign,
      roles: ["finance", "ceo", "accountant"],
    },
    {
      title: "Profile",
      href: "/profile",
      icon: User2,
      roles: ["facility", "finance", "ceo", "accountant", "office_assistant"],
    },
    {
      title: "Settings",
      href: "/settings",
      icon: Settings,
      roles: ["facility", "finance", "ceo", "accountant", "office_assistant"],
    },
  ];

  // Filter nav items based on user role
  const filteredNavItems = navItems.filter(item => 
    item.roles.includes(currentUser.role as string)
  );

  // Get role-specific subtitle
  const getRoleSubtitle = () => {
    switch (currentUser?.role) {
      case "facility":
        return "Facility Manager";
      case "finance":
        return "Finance Officer";
      case "ceo":
        return "Chief Executive";
      case "accountant":
        return "Accountant";
      case "office_assistant":
        return "Office Assistant";
      default:
        return "User";
    }
  };

  const sidebarContent = (
    <div className="h-full w-64 flex-col modern-sidebar">
      <div className="modern-sidebar-header">
        <div className="flex items-center justify-center">
          <img
            src="/icons/OT logo.png"
            alt="Operational Tracker Logo"
            className="modern-sidebar-logo"
          />
        </div>
      </div>
      <nav className="modern-sidebar-nav">
        {filteredNavItems.map((item) => (
          <NavLink
            key={item.href}
            to={item.href}
            className={({ isActive }) =>
              cn(
                "modern-nav-item",
                isActive && "active"
              )
            }
            onClick={() => isMobile && setOpen && setOpen(false)}
          >
            <item.icon className="modern-nav-icon" />
            <span className="modern-nav-text">{item.title}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );

  if (isMobile && open !== undefined && setOpen) {
    return (
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left" className="p-0 w-64 bg-[#0077B6]">
          {sidebarContent}
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <div className="hidden md:flex h-full w-64 flex-col modern-sidebar">
      {sidebarContent}
    </div>
  );
};

export default Sidebar;
