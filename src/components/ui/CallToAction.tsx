
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface CallToActionProps {
  title: string;
  subtitle?: string;
  buttonText: string;
  buttonLink: string;
  variant?: 'primary' | 'secondary';
}

const CallToAction: React.FC<CallToActionProps> = ({
  title,
  subtitle,
  buttonText,
  buttonLink,
  variant = 'primary'
}) => {
  const bgColor = variant === 'primary' ? 'bg-bfa-blue' : 'bg-bfa-earth';

  return (
    <div className={`${bgColor} text-white py-16 md:py-24`}>
      <div className="container-wide text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        {subtitle && <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-90">{subtitle}</p>}
        <Button asChild className="bg-white text-bfa-blue-dark hover:bg-bfa-sand hover:text-bfa-blue-dark transition-colors font-medium px-8 py-6 text-lg">
          <Link to={buttonLink}>{buttonText}</Link>
        </Button>
      </div>
    </div>
  );
};

export default CallToAction;
