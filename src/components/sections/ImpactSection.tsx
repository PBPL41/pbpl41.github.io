
import React from 'react';
import FeatureCard from '@/components/ui/FeatureCard';

const ImpactSection = () => {
  return (
    <div className="bg-bfa-sand p-6 md:p-8 rounded-lg">
      <h2 className="text-3xl font-bold mb-6 text-bfa-blue-dark text-center">The Impact of Zoning Reform</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <FeatureCard title="Housing Supply" description="Zoning reforms can increase housing units by 9-13% after 10 years." className="p-0 h-full flex flex-col" />
        
        <FeatureCard title="Affordability" className="p-0 h-full flex flex-col overflow-hidden md:col-span-2 lg:col-span-1" contentClassName="flex-grow">
          <div className="h-auto md:h-64 lg:h-56 overflow-hidden">
            <img src="/lovable-uploads/cac904b2-9a17-473a-b79b-fc0b053caf38.png" alt="Chart showing rent growth is slower in jurisdictions that have allowed more housing" className="w-full h-full object-contain rounded-md" />
          </div>
        </FeatureCard>
        
        <FeatureCard title="Economic Growth" description="Studies estimate that restrictive zoning reduced U.S. GDP growth by more than 50% from 1964 to 2009." className="p-0 h-full flex flex-col" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
        </div>
      </div>
    </div>
  );
};

export default ImpactSection;
