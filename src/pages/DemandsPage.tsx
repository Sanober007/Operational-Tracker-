
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import DemandList from "@/components/demands/DemandList";
import { ModernPageLayout } from "@/components/ui/ModernPageLayout";

const DemandsPage = () => {
  const { currentUser } = useAuth();

  return (
    <ModernPageLayout
      title="Demands"
      description="View and manage all submitted facility demands"
      action={
        currentUser?.role === "facility" ? (
          <Button asChild className="modern-btn modern-btn-primary">
            <Link to="/demands/new">
              <Plus className="mr-2 h-4 w-4" />
              New Demand
            </Link>
          </Button>
        ) : undefined
      }
    >
      <DemandList />
    </ModernPageLayout>
  );
};

export default DemandsPage;