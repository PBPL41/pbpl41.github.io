import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import TestimonialCard from '@/components/ui/TestimonialCard';
import CallToAction from '@/components/ui/CallToAction';
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
                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="Teacher working from home" className="w-full h-full object-cover" />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4 text-bfa-blue-dark">Meet Sarah</h2>
                <p className="text-lg mb-4">
                  Sarah is a third-grade teacher who has worked at Lincoln Elementary School for seven years. Despite her essential role educating the community's children, she can't afford to live in the district where she teaches.
                </p>
                <p className="mb-4">
                  Her 45-minute commute each way adds stress and reduces the time she can spend preparing for class or participating in after-school activities. When offered a position closer to her apartment, she had to make the difficult choice to leave the school she loves.
                </p>
                <p className="font-medium">
                  Sarah's story is not unique. Across America, essential workers are being priced out of the communities they serve due to a lack of affordable housing options.
                </p>
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
                <p className="text-4xl font-bold text-bfa-red mb-2">3.8M</p>
                <p className="text-gray-600">Housing unit shortage nationwide</p>
              </div>
              
              <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm text-center">
                <p className="text-4xl font-bold text-bfa-red mb-2">49%</p>
                <p className="text-gray-600">Of renters are cost-burdened</p>
              </div>
              
              <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm text-center">
                <p className="text-4xl font-bold text-bfa-red mb-2">79%</p>
                <p className="text-gray-600">Of metro areas with rising housing costs</p>
              </div>
              
              <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm text-center">
                <p className="text-4xl font-bold text-bfa-red mb-2">12M+</p>
                <p className="text-gray-600">Households spending 50%+ on housing</p>
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
                  <div className="bg-bfa-blue aspect-square rounded-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 8a6 6 0 0 0-6-6 6 6 0 0 0-6 6c0 7-3 9-3 9h18s-3-2-3-9"></path>
                      <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                    </svg>
                  </div>
                </div>
                
                <div className="md:w-2/3">
                  <h3 className="text-xl font-bold mb-2">Episode 1: America's Housing Crisis Explained</h3>
                  <p className="text-gray-600 mb-4">
                    In this inaugural episode, we break down the complex factors driving America's housing shortage and explore how zoning reform can help communities address this growing challenge.
                  </p>
                  
                  <div className="mb-4">
                    <div className="h-2 bg-gray-200 rounded-full mb-2">
                      <div className="h-2 bg-bfa-blue rounded-full" style={{
                      width: '30%'
                    }}></div>
                    </div>
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>8:23</span>
                      <span>28:45</span>
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

          {/* Testimonials */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Voices from the Community</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Hear directly from those affected by and working to solve the housing crisis
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <TestimonialCard quote="We've seen firsthand how zoning reform can revitalize neighborhoods while maintaining their character. It's not about destroying communities, but enhancing them with more options for everyone." name="Michael Chen" title="Urban Planning Director" organization="City of Portland" />
              
              <TestimonialCard quote="As a developer, the biggest obstacle we face is outdated zoning. With simple reforms, we could build 30% more housing at lower price points without any government subsidies." name="Alisha Washington" title="CEO" organization="Innovative Housing Solutions" />
              
              <TestimonialCard quote="Our firefighters, teachers, and healthcare workers shouldn't have to commute two hours to serve our community. Zoning reform means they can live where they work." name="Robert Hernandez" title="Mayor" organization="City of Lakewood" />
            </div>
          </div>

          {/* Impact Section */}
          <div className="bg-bfa-sand p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-bfa-blue-dark text-center">The Impact of Zoning Reform</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-bfa-blue">Housing Supply</h3>
                <p className="mb-4">
                  Studies show that targeted zoning reforms can increase housing production by 10-25% in high-demand areas within 5 years.
                </p>
                <div className="h-4 bg-gray-100 rounded-full">
                  <div className="h-4 bg-bfa-blue rounded-full" style={{
                  width: '75%'
                }}></div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-bfa-blue">Affordability</h3>
                <p className="mb-4">
                  When implemented effectively, zoning reforms can slow or stabilize housing cost growth by 5-15% compared to similar markets.
                </p>
                <div className="h-4 bg-gray-100 rounded-full">
                  <div className="h-4 bg-bfa-blue rounded-full" style={{
                  width: '60%'
                }}></div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-bfa-blue">Economic Growth</h3>
                <p className="mb-4">
                  Communities with diverse housing options see increased economic activity, with studies showing 1.5-2x the retail spending in mixed-use areas.
                </p>
                <div className="h-4 bg-gray-100 rounded-full">
                  <div className="h-4 bg-bfa-blue rounded-full" style={{
                  width: '85%'
                }}></div>
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
export default WhyItMatters;