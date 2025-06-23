import React from "react";
import { ModernTableDemo } from "../components/ui/ModernTableDemo";

const TableDemoPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8">
        <ModernTableDemo />
      </div>
    </div>
  );
};

export default TableDemoPage;
