
import React from 'react';
import CallToAction from '@/components/ui/CallToAction';
import HeroSection from '@/components/sections/HeroSection';
import HousingCrisisSection from '@/components/sections/HousingCrisisSection';
import VideoSection from '@/components/sections/VideoSection';
import HousingDataSection from '@/components/sections/HousingDataSection';
import PodcastSection from '@/components/sections/PodcastSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ImpactSection from '@/components/sections/ImpactSection';

const WhyItMatters = () => {
  return (
    <main>
      <HeroSection />

      <section className="py-16 bg-white">
        <div className="container-wide">
          <HousingCrisisSection />
          <VideoSection />
          <HousingDataSection />
          <PodcastSection />
          <TestimonialsSection />
          <ImpactSection />
        </div>
      </section>

      <CallToAction title="Join the Movement for Housing Opportunity" subtitle="Add your voice to the growing coalition supporting zoning reform" buttonText="Join the Coalition" buttonLink="/coalition" />
    </main>
  );
};

export default WhyItMatters;
