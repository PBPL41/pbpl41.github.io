import React from 'react';
import { Link } from 'react-router-dom';
import { Home as HomeIcon, FileText, Radio, MapPin, Building, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CallToAction from '@/components/ui/CallToAction';
import FeatureCard from '@/components/ui/FeatureCard';

const Home = () => {
  return <main>
      {/* Hero Section with Background Image */}
      <section className="relative bg-gradient-to-br from-bfa-blue to-bfa-blue-dark text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/lovable-uploads/89127695-96ee-40dc-8e9f-bc5043c02213.png" 
            alt="Build for America Banner - Community neighborhood with diverse housing" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-bfa-blue/80 to-bfa-blue-dark/80"></div>
        </div>
        <div className="container-wide py-16 md:py-24 min-h-[60vh] flex flex-col justify-center relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
              Build for America
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl mb-8 font-heading font-medium">More homes. Stronger communities.</p>
            <p className="text-lg opacity-90 mb-8 max-w-2xl">
              A federal competitive grant program incentivizing local zoning reform to create more housing and address America's affordability crisis.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-bfa-blue-dark hover:bg-bfa-sand hover:text-bfa-blue-dark">
                <Link to="/about-policy">Read the Policy</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white bg-transparent hover:bg-white/20">
                <Link to="/coalition">Join the Coalition</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-16 bg-bfa-gray-light">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Building a Better Housing Future</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Our proposal creates a path to more affordable housing in communities across America through smart zoning reform.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard icon={<Building size={36} />} title="More Housing" description="Enable diverse housing types to meet growing demand in high-opportunity areas." />
            <FeatureCard icon={<Users size={36} />} title="Inclusive Communities" description="Create affordable options for essential workers, families, and seniors in their communities." />
            <FeatureCard icon={<MapPin size={36} />} title="Local Control" description="Maintain local authority while incentivizing modern zoning best practices." />
            <FeatureCard icon={<HomeIcon size={36} />} title="Strong Neighborhoods" description="Revitalize communities with mixed-use development and sustainable growth." />
          </div>
        </div>
      </section>

      {/* Call to Action Buttons */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore the Campaign</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Learn more about our initiative and find resources to support zoning reform in your community.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/about-policy" className="bg-bfa-blue text-white p-6 rounded-lg shadow-md text-center hover:bg-bfa-blue-dark transition-colors">
              <FileText size={36} className="mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Read the Policy</h3>
              <p className="text-sm opacity-80">Understand the details of our proposed legislation</p>
            </Link>
            
            <Link to="/media" className="bg-bfa-red text-white p-6 rounded-lg shadow-md text-center hover:brightness-95 transition-colors">
              <Radio size={36} className="mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Listen to the Podcast</h3>
              <p className="text-sm opacity-80">Hear experts discuss housing solutions</p>
            </Link>
            
            <Link to="/coalition" className="bg-bfa-earth text-white p-6 rounded-lg shadow-md text-center hover:brightness-95 transition-colors">
              <Users size={36} className="mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Join the Coalition</h3>
              <p className="text-sm opacity-80">Support organizations endorsing zoning reform</p>
            </Link>
            
            <Link to="/maps" className="bg-bfa-blue-dark text-white p-6 rounded-lg shadow-md text-center hover:brightness-110 transition-colors">
              <MapPin size={36} className="mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Explore Zoning in Your Community</h3>
              <p className="text-sm opacity-80">See how zoning reform impacts communities</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Key Issue Highlight with Enhanced Visuals */}
      <section className="py-16 bg-bfa-sand">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-bfa-blue-dark">America's Housing Crisis</h2>
              <p className="text-lg mb-4">Over 12 million American households now spend more than half their income on housing, forcing difficult choices between rent and other necessities.</p>
              <p className="text-lg mb-6">
                The housing shortage drives up costs, pushing essential workers like teachers, firefighters, and healthcare providers out of the communities they serve.
              </p>
              <Button asChild className="bg-bfa-blue hover:bg-bfa-blue-dark text-white">
                <Link to="/why-it-matters">Learn Why It Matters</Link>
              </Button>
              
              {/* Additional Visual Element */}
              <div className="mt-8 bg-white rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Housing affordability data visualization" 
                  className="w-full h-32 object-cover"
                />
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold mb-4 text-bfa-blue">Housing by the Numbers</h3>
              
              <div className="space-y-6">
                <div className="border-b pb-4">
                  <p className="text-4xl font-bold text-bfa-red">3.7M</p>
                  <p className="text-gray-600">Unit housing shortage nationwide</p>
                </div>
                <div className="border-b pb-4">
                  <p className="text-4xl font-bold text-bfa-red">50%</p>
                  <p className="text-gray-600">Of renters are cost-burdened</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-bfa-red">76%</p>
                  <p className="text-gray-600">Of Americans believe housing affordability is a growing problem</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CallToAction title="Join the Movement for Housing Opportunity" subtitle="Add your voice to the growing coalition supporting zoning reform" buttonText="Join the Coalition" buttonLink="/coalition" />
    </main>;
};
export default Home;
