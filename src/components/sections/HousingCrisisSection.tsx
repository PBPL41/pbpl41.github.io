
import React from 'react';

const HousingCrisisSection = () => {
  return (
    <div className="mb-16">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="bg-bfa-gray-light rounded-lg overflow-hidden h-80">
          <img alt="Essential workers in community" className="w-full h-full object-cover" src="/lovable-uploads/6f2232ee-b924-475f-8b40-c6ebec3cb286.png" />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4 text-bfa-blue-dark">The Housing Crisis Is Undeniable</h2>
          <p className="text-lg mb-4">America's housing shortage is reshaping communities, pushing essential workers, young families, and seniors further from opportunity, stability, and belonging. This crisis isn't abstract — it's on every block where teachers, nurses, and service workers are commuting longer, paying more, and living with less.</p>
        </div>
      </div>
    </div>
  );
};

export default HousingCrisisSection;
