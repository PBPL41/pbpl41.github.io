
import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  icon?: ReactNode;
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
  contentClassName?: string;
  fullWidth?: boolean;
  showLogo?: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon, 
  title, 
  description, 
  children,
  className,
  contentClassName,
  fullWidth = false,
  showLogo = false
}) => {
  return (
    <div className={cn(
      "bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100",
      fullWidth ? "col-span-full md:col-span-2 lg:col-span-1" : "",
      className
    )}>
      {showLogo && (
        <div className="flex justify-center pt-4">
          <img 
            src="/lovable-uploads/8d635ce6-d8ff-49b6-b9db-4e616cd26640.png" 
            alt="Build for America Logo" 
            className="h-8 w-auto mb-2"
          />
        </div>
      )}
      <div className="p-4">
        {icon && <div className="mb-4 text-bfa-blue">{icon}</div>}
        <h3 className="text-xl font-bold mb-2 text-bfa-blue">{title}</h3>
        <div className={cn("", contentClassName)}>
          {description && <p className="text-gray-600 mb-4">{description}</p>}
          {children}
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
