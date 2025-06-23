import React from "react";
import { useAuth } from "@/context/AuthContext";
import "./header.css";
import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Pencil } from "lucide-react";
import { PanelLeft } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const LOGO_KEY = "custom_app_logo";
const DEFAULT_LOGO = "/icons/OT logo.png";

interface HeaderProps {
  sidebarOpen?: boolean;
  setSidebarOpen?: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ sidebarOpen, setSidebarOpen }) => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [logoDialogOpen, setLogoDialogOpen] = React.useState(false);
  const [logoPreview, setLogoPreview] = React.useState<string | null>(null);
  const [logoFile, setLogoFile] = React.useState<File | null>(null);
  const [logoUrl, setLogoUrl] = React.useState<string>(() => {
    return localStorage.getItem(LOGO_KEY) || DEFAULT_LOGO;
  });

  const isMobile = useIsMobile();

  // Load logo from localStorage on mount
  React.useEffect(() => {
    const stored = localStorage.getItem(LOGO_KEY);
    if (stored) setLogoUrl(stored);
    else setLogoUrl(DEFAULT_LOGO);
  }, []);

  const handleLogoClick = () => setLogoDialogOpen(true);

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    // Validate type
    const allowed = ["image/png", "image/jpeg", "image/jpg", "image/svg+xml"];
    if (!allowed.includes(file.type)) {
      toast.error("Only PNG, JPG, JPEG, or SVG images are allowed.");
      return;
    }
    // Validate size
    if (file.size > 2 * 1024 * 1024) {
      toast.error("Max file size is 2MB.");
      return;
    }
    setLogoFile(file);
    const reader = new FileReader();
    reader.onload = (ev) => setLogoPreview(ev.target?.result as string);
    reader.readAsDataURL(file);
  };

  const handleLogoSave = () => {
    if (!logoPreview) return;
    localStorage.setItem(LOGO_KEY, logoPreview);
    setLogoUrl(logoPreview);
    setLogoDialogOpen(false);
    toast.success("Logo updated!");
  };

  const handleLogoRemove = () => {
    localStorage.removeItem(LOGO_KEY);
    setLogoUrl(DEFAULT_LOGO);
    setLogoPreview(null);
    setLogoFile(null);
    setLogoDialogOpen(false);
    toast.success("Logo reset to default.");
  };

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

  return (
    <header className="modern-header header-animate relative z-10 mx-4 mt-4 mb-2">
      <div className="px-6 py-4 flex items-center justify-between">
        {/* Left-aligned: Burger, Logo, App title and subtitle */}
        <div className="flex items-center space-x-3">
          {/* Hamburger icon for mobile and web responsive */}
          {isMobile && setSidebarOpen && (
            <button
              className="mr-2 p-2 rounded-md hover:bg-white/20 focus:bg-white/30 focus:outline-none"
              aria-label="Open sidebar"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <PanelLeft className="w-7 h-7 text-white" />
            </button>
          )}
          <div className="relative group cursor-pointer" onClick={handleLogoClick} title="Edit Logo">
            <img
              src={logoUrl}
              alt="Operational Tracker Logo"
              className="header-logo"
              style={{ border: "2px solid #fff", background: "#fff" }}
            />
            <span className="absolute bottom-0 right-0 bg-blue-500 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <Pencil className="w-4 h-4 text-white" />
            </span>
          </div>
          <Dialog open={logoDialogOpen} onOpenChange={setLogoDialogOpen}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Update Logo</DialogTitle>
              </DialogHeader>
              <div className="flex flex-col items-center gap-4 py-2">
                <label htmlFor="logo-upload" className="w-full flex flex-col items-center cursor-pointer">
                  <Input
                    id="logo-upload"
                    type="file"
                    accept=".png,.jpg,.jpeg,.svg"
                    className="hidden"
                    onChange={handleLogoChange}
                  />
                  <Button asChild variant="outline" className="mb-2">
                    <span>Choose Image</span>
                  </Button>
                </label>
                {(logoPreview || logoUrl) && (
                  <img
                    src={logoPreview || logoUrl}
                    alt="Logo Preview"
                    className="rounded-lg border shadow w-24 h-24 object-contain bg-white"
                  />
                )}
              </div>
              <DialogFooter className="flex justify-between">
                <Button variant="destructive" onClick={handleLogoRemove} type="button">
                  Reset to Default
                </Button>
                <Button onClick={handleLogoSave} disabled={!logoPreview} type="button">
                  Save
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <div className="flex flex-col space-y-1">
            <h1 className="header-title">
              Operational Tracker
            </h1>
            <p className="header-subtitle">
              {getRoleSubtitle()}
            </p>
          </div>
        </div>
        {/* Right-aligned: Logout button */}
        <div className="flex items-center">
          <AlertDialog open={open} onOpenChange={setOpen}>
            <AlertDialogTrigger asChild>
              <Button
                variant="ghost"
                className="flex items-center text-white hover:bg-white/10 focus:bg-white/20"
                aria-label="Logout"
              >
                <LogOut className="mr-2" /> Logout
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Log out</AlertDialogTitle>
                <AlertDialogDescription>
                  Are you sure you want to log out?
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  onClick={() => {
                    logout();
                    navigate("/login", { replace: true });
                  }}
                >
                  Log out
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </header>
  );
};

export default Header;
