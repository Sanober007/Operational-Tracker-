import React from 'react';
import { cn } from '@/lib/utils';

interface CustomIconProps {
  src: string;
  alt: string;
  className?: string;
  size?: number;
  width?: number;
  height?: number;
}

export const CustomIcon: React.FC<CustomIconProps> = ({
  src,
  alt,
  className,
  size = 16,
  width,
  height,
}) => {
  const iconWidth = width || size;
  const iconHeight = height || size;

  return (
    <img
      src={src}
      alt={alt}
      width={iconWidth}
      height={iconHeight}
      className={cn(
        "inline-block object-contain",
        "transition-all duration-200 ease-in-out",
        className
      )}
      style={{
        width: `${iconWidth}px`,
        height: `${iconHeight}px`,
        imageRendering: 'crisp-edges',
        WebkitImageRendering: 'crisp-edges',
        MozImageRendering: 'crisp-edges',
      }}
    />
  );
};

// Predefined icon components for common use cases
export const ViewIcon: React.FC<Omit<CustomIconProps, 'src' | 'alt'>> = (props) => (
  <CustomIcon
    src="/icons/view-icon.png"
    alt="View"
    {...props}
  />
);

export const QueryIcon: React.FC<Omit<CustomIconProps, 'src' | 'alt'>> = (props) => (
  <CustomIcon
    src="/icons/query-icon.png"
    alt="Query"
    {...props}
  />
);

export const ApproveIcon: React.FC<Omit<CustomIconProps, 'src' | 'alt'>> = (props) => (
  <CustomIcon
    src="/icons/approve-icon.png"
    alt="Approve"
    {...props}
  />
);

export const RejectIcon: React.FC<Omit<CustomIconProps, 'src' | 'alt'>> = (props) => (
  <CustomIcon
    src="/icons/reject-icon.png"
    alt="Reject"
    {...props}
  />
);

export const GradientIcon: React.FC<Omit<CustomIconProps, 'src' | 'alt'>> = (props) => (
  <CustomIcon
    src="/icons/gradient-icon.png"
    alt="Action"
    {...props}
  />
);

export default CustomIcon;
