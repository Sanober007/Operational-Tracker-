import React from 'react';
import { cn } from '@/lib/utils';
import './modern-cards.css';

interface ModernPageLayoutProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;
  action?: React.ReactNode;
}

export const ModernPageLayout: React.FC<ModernPageLayoutProps> = ({
  children,
  className,
  title,
  description,
  action
}) => {
  return (
    <div className={cn("space-y-6 animate-slide-in", className)}>
      {(title || action) && (
        <div className="modern-page-header">
          <div className="flex-1">
            {title && (
              <h1 className="modern-page-title">{title}</h1>
            )}
            {description && (
              <p className="text-gray-600 mt-1 text-sm">{description}</p>
            )}
          </div>
          {action && (
            <div className="flex-shrink-0 ml-4">
              {action}
            </div>
          )}
        </div>
      )}
      {children}
    </div>
  );
};

interface ModernCardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;
  headerAction?: React.ReactNode;
}

export const ModernCard: React.FC<ModernCardProps> = ({
  children,
  className,
  title,
  description,
  headerAction
}) => {
  return (
    <div className={cn("modern-card", className)}>
      {(title || description || headerAction) && (
        <div className="modern-card-header">
          <div className="flex items-center justify-between">
            <div>
              {title && <h3 className="modern-card-title">{title}</h3>}
              {description && <p className="modern-card-description">{description}</p>}
            </div>
            {headerAction && (
              <div className="flex-shrink-0">
                {headerAction}
              </div>
            )}
          </div>
        </div>
      )}
      <div className="modern-card-content">
        {children}
      </div>
    </div>
  );
};

interface ModernFilterSectionProps {
  children: React.ReactNode;
  className?: string;
}

export const ModernFilterSection: React.FC<ModernFilterSectionProps> = ({
  children,
  className
}) => {
  return (
    <div className={cn("filter-section", className)}>
      {children}
    </div>
  );
};

export default ModernPageLayout;
