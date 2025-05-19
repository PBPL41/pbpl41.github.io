
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import TestimonialCard from '@/components/ui/TestimonialCard';
import CallToAction from '@/components/ui/CallToAction';
import { Card } from '@/components/ui/card';

const WhyItMatters = () => {
  return <main>
      {/* Hero Section */}
      <section className="bg-bfa-earth text-white py-16">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Why It Matters</h1>
            <p className="text-xl">
              The housing crisis affects millions of Americans, from essential workers to young families to seniors on fixed incomes.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          {/* Human Story */}
          <div className="mb-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-bfa-gray-light rounded-lg overflow-hidden h-80">
                <img alt="Teacher working from home" className="w-full h-full object-cover" src="/lovable-uploads/867536c5-50cf-4c0f-8fdf-7e1f645524b4.png" />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4 text-bfa-blue-dark">The Housing Crisis Is Undeniable</h2>
                <p className="text-lg mb-4">America's housing shortage is reshaping communities, pushing essential workers, young families, and seniors further from opportunity, stability, and belonging. This crisis isn't abstract — it's on every block where teachers, nurses, and service workers are commuting longer, paying more, and living with less.</p>
                
                
              </div>
            </div>
          </div>

          {/* Housing Data */}
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

          {/* Podcast Section */}
          <div className="mb-16 bg-bfa-gray-light p-8 rounded-lg">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Listen to Our Podcast</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Exploring America's housing challenges and innovative solutions
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  {/* Image Upload Area - Changed from blue div to an image placeholder */}
                  <div className="bg-bfa-gray rounded-lg aspect-square flex items-center justify-center border-2 border-dashed border-gray-300">
                    <div className="text-center p-4">
                      <p className="text-sm text-gray-500">Upload podcast cover image</p>
                      <p className="text-xs text-gray-400 mt-1">(Square image recommended)</p>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-2/3">
                  <h3 className="text-xl font-bold mb-2">Episode 1: America's Housing Crisis Explained</h3>
                  <p className="text-gray-600 mb-4">
                    In this inaugural episode, we break down the complex factors driving America's housing shortage and explore how zoning reform can help communities address this growing challenge.
                  </p>
                  
                  <div className="mb-4">
                    
                    <div className="flex justify-between text-sm text-gray-500">
                      
                      
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button className="bg-bfa-blue hover:bg-bfa-blue-dark text-white">Play Episode</Button>
                    <Button variant="outline" className="border-bfa-blue text-bfa-blue hover:bg-bfa-blue hover:text-white">Subscribe</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials - First Row */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Voices from Your Communities</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">What does your mayor have to say about zoning reform?</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              <TestimonialCard quote="We've seen firsthand how zoning reform can revitalize neighborhoods while maintaining their character. It's not about destroying communities, but enhancing them with more options for everyone." name="Michael Chen" title="Urban Planning Director" organization="City of Portland" />
              
              <TestimonialCard quote="As a developer, the biggest obstacle we face is outdated zoning. With simple reforms, we could build 30% more housing at lower price points without any government subsidies." name="Alisha Washington" title="CEO" organization="Innovative Housing Solutions" />
              
              <TestimonialCard quote="Our firefighters, teachers, and healthcare workers shouldn't have to commute two hours to serve our community. Zoning reform means they can live where they work." name="Robert Hernandez" title="Mayor" organization="City of Lakewood" />
            </div>
            
            {/* Added Second Row of Testimonials */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <TestimonialCard quote="Zoning reform has allowed our town to grow responsibly. We've seen young families return and local businesses thrive with the increased foot traffic." name="Jennifer Patel" title="City Council Member" organization="Riverview Township" />
              
              <TestimonialCard quote="The housing shortage affects our economic competitiveness. We can't attract top talent if they have nowhere affordable to live within a reasonable commute." name="David Wilson" title="Economic Development Director" organization="Metro Chamber of Commerce" />
              
              <TestimonialCard quote="As a nurse, I couldn't afford to live near the hospital where I work. Thanks to new housing options from zoning changes, my commute went from 45 minutes to just 10." name="Sarah Johnson" title="Healthcare Worker" organization="Community Memorial Hospital" />
            </div>
          </div>

          {/* Impact Section */}
          <div className="bg-bfa-sand p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-bfa-blue-dark text-center">The Impact of Zoning Reform</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-bfa-blue">Housing Supply</h3>
                <p className="mb-4">Zoning reforms can increase housing units by 9-13% after 10 years.</p>
              </div>
              
              {/* Changed Affordability box to accept an image */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <h3 className="text-xl font-bold p-6 pb-2 text-bfa-blue">Affordability</h3>
                <div className="px-6 pb-6">
                  <div className="bg-bfa-gray-light rounded-md overflow-hidden h-40 border border-gray-200">
                    <div className="w-full h-full flex items-center justify-center text-gray-500">
                      <p className="text-sm">Upload affordability impact image</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-bfa-blue">Economic Growth</h3>
                <p className="mb-4">Studies estimate that restrictive zoning reduced U.S. GDP growth by more than 50% from 1964 to 2009.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CallToAction title="Join the Movement for Housing Opportunity" subtitle="Add your voice to the growing coalition supporting zoning reform" buttonText="Join the Coalition" buttonLink="/coalition" />
    </main>;
};
export default WhyItMatters;
