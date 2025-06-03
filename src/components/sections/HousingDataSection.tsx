
import React from 'react';

const HousingDataSection = () => {
  return (
    <div className="mb-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">The Housing Crisis By The Numbers</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          The data tells a clear story about America's housing challenges
        </p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm text-center">
          <p className="text-4xl font-bold text-bfa-red mb-2">3.7M</p>
          <p className="text-gray-600">Unit housing shortage nationwide</p>
        </div>
        
        <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm text-center">
          <p className="text-4xl font-bold text-bfa-red mb-2">50%</p>
          <p className="text-gray-600">Of renters are cost-burdened</p>
        </div>
        
        <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm text-center">
          <p className="text-4xl font-bold text-bfa-red mb-2">76%</p>
          <p className="text-gray-600">Of Americans believe housing affordability is a growing problem</p>
        </div>
        
        <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm text-center">
          <p className="text-4xl font-bold text-bfa-red mb-2">12M+</p>
          <p className="text-gray-600">Households spend more than half of their income on housing</p>
        </div>
      </div>
    </div>
  );
};

export default HousingDataSection;
