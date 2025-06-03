
import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative bg-bfa-earth text-white py-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Modern apartment buildings" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-bfa-earth opacity-80"></div>
      </div>
      <div className="container-wide relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Why It Matters</h1>
          <p className="text-xl">
            The housing crisis affects millions of Americans, from essential workers to young families to seniors on fixed incomes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
