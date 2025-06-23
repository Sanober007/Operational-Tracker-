import React from 'react';
import { Eye, Check, X, MessageCircle } from "lucide-react";
import { CustomIcon } from './CustomIcon';

// Configuration object to easily switch between Lucide icons and custom PNG icons
export const iconConfig = {
  // Set to true to use custom PNG icons, false to use Lucide icons
  useCustomIcons: {
    view: true,       // ENABLED: Using custom gradient icon for view button
    query: false,     // Set to true to use custom query icon
    approve: false,   // Set to true to use custom approve icon
    reject: false,    // Set to true to use custom reject icon
  },
  
  // Custom icon paths
  customIconPaths: {
    view: '/icons/gradient-icon.svg',     // Using demo gradient icon (replace with your PNG)
    query: '/icons/query-icon.png',       // Add your query icon here
    approve: '/icons/approve-icon.png',   // Add your approve icon here
    reject: '/icons/reject-icon.png',     // Add your reject icon here
  }
};

// Icon components that automatically switch between Lucide and custom icons
export const ViewIconComponent: React.FC<{ className?: string }> = ({ className = "h-4 w-4" }) => {
  if (iconConfig.useCustomIcons.view) {
    return (
      <CustomIcon
        src={iconConfig.customIconPaths.view}
        alt="View"
        className={className}
        size={16}
      />
    );
  }
  return <Eye className={className} />;
};

export const QueryIconComponent: React.FC<{ className?: string }> = ({ className = "h-4 w-4" }) => {
  if (iconConfig.useCustomIcons.query) {
    return (
      <CustomIcon
        src={iconConfig.customIconPaths.query}
        alt="Query"
        className={className}
        size={16}
      />
    );
  }
  return <MessageCircle className={className} />;
};

export const ApproveIconComponent: React.FC<{ className?: string }> = ({ className = "h-4 w-4" }) => {
  if (iconConfig.useCustomIcons.approve) {
    return (
      <CustomIcon
        src={iconConfig.customIconPaths.approve}
        alt="Approve"
        className={className}
        size={16}
      />
    );
  }
  return <Check className={className} />;
};

export const RejectIconComponent: React.FC<{ className?: string }> = ({ className = "h-4 w-4" }) => {
  if (iconConfig.useCustomIcons.reject) {
    return (
      <CustomIcon
        src={iconConfig.customIconPaths.reject}
        alt="Reject"
        className={className}
        size={16}
      />
    );
  }
  return <X className={className} />;
};

// Helper function to update icon configuration
export const updateIconConfig = (iconType: keyof typeof iconConfig.useCustomIcons, useCustom: boolean) => {
  iconConfig.useCustomIcons[iconType] = useCustom;
};

// Helper function to update custom icon paths
export const updateIconPath = (iconType: keyof typeof iconConfig.customIconPaths, path: string) => {
  iconConfig.customIconPaths[iconType] = path;
};
