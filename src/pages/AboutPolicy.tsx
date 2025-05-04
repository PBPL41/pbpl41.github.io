import React from 'react';
import { Link } from 'react-router-dom';
import { Download, FileText, Building, Home, Clock, Car } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ResourceCard from '@/components/ui/ResourceCard';
import CallToAction from '@/components/ui/CallToAction';
const AboutPolicy = () => {
  return <main>
      {/* Hero Section */}
      <section className="bg-bfa-blue text-white py-16">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About the Policy</h1>
            <p className="text-xl">
              Build for America is a competitive federal grant program that incentivizes local governments to implement zoning reforms that increase housing supply and affordability.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4 text-bfa-blue-dark">Policy Overview</h2>
                <p className="text-lg mb-4">Build for America establishes a competitive grant program administered by the U.S. Department of Housing and Urban Development (HUD) to reward localities that reform outdated zoning policies to enable more housing development.</p>
                <p className="mb-4">
                  The program provides funding directly to local governments that successfully implement zoning reforms aligned with increasing housing supply, creating more affordable options, and building inclusive communities.
                </p>
                <p>
                  This market-based approach respects local control while creating powerful incentives for communities to modernize their approach to housing development.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-bfa-blue-dark">How It Works</h3>
                <div className="bg-bfa-gray-light p-6 rounded-lg mb-6">
                  <ol className="space-y-4 list-decimal list-inside">
                    <li className="pl-2"><span className="font-bold">Local governments apply</span> for grant funding with specific zoning reform proposals</li>
                    <li className="pl-2"><span className="font-bold">HUD evaluates applications</span> based on potential for increased housing supply and affordability</li>
                    <li className="pl-2"><span className="font-bold">Selected communities receive funding</span> to implement their reforms</li>
                    <li className="pl-2"><span className="font-bold">Localities track outcomes</span> using standardized metrics on housing production and affordability</li>
                    <li className="pl-2"><span className="font-bold">Data is shared</span> to identify best practices and inform future policy</li>
                  </ol>
                </div>
                <p className="mb-4">
                  The program creates a virtuous cycle: as more communities adopt proven reforms, housing supply increases, affordability improves, and successful models can be replicated nationwide.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-bfa-blue-dark">Legislative Framework</h3>
                <p className="mb-4">
                  The Build for America Act would establish this program through bipartisan cooperation in Congress, with support from both urban and rural representatives who recognize the nationwide housing challenges facing their constituents.
                </p>
                <p className="mb-4">
                  The program would be authorized for an initial five-year period, with the potential for reauthorization based on demonstrated outcomes and continued need.
                </p>
                <p>
                  The legislation includes robust reporting requirements and transparency measures to ensure that taxpayer dollars are effectively used to increase housing supply and improve affordability.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-bfa-blue-dark">Key Zoning Reforms</h3>
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
                    <div className="text-bfa-blue mb-3">
                      <Home size={32} />
                    </div>
                    <h4 className="text-xl font-bold mb-2">Accessory Dwelling Units</h4>
                    <p className="text-gray-600">
                      Allowing homeowners to build additional housing units on their property, such as garage apartments or backyard cottages.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
                    <div className="text-bfa-blue mb-3">
                      <Building size={32} />
                    </div>
                    <h4 className="text-xl font-bold mb-2">Missing Middle Housing</h4>
                    <p className="text-gray-600">
                      Permitting duplexes, triplexes, townhomes, and small apartment buildings in areas previously restricted to single-family homes.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
                    <div className="text-bfa-blue mb-3">
                      <Clock size={32} />
                    </div>
                    <h4 className="text-xl font-bold mb-2">Expedited Approvals</h4>
                    <p className="text-gray-600">
                      Streamlining permitting processes for housing developments that meet affordability criteria or other community goals.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
                    <div className="text-bfa-blue mb-3">
                      <Car size={32} />
                    </div>
                    <h4 className="text-xl font-bold mb-2">Reduced Parking Requirements</h4>
                    <p className="text-gray-600">
                      Eliminating or reducing mandatory minimum parking spaces, especially near transit, to lower development costs.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-bfa-gray-light p-6 rounded-lg sticky top-24">
                <h3 className="text-xl font-bold mb-4 text-bfa-blue-dark">Resources</h3>
                <div className="space-y-4">
                  <a href="#" className="flex items-center p-4 bg-white rounded border border-gray-200 hover:shadow-md transition-shadow">
                    <FileText className="text-bfa-blue mr-3" size={24} />
                    <div>
                      <p className="font-bold">Dear Colleague Letter</p>
                      <p className="text-sm text-gray-600">For Congressional staff</p>
                    </div>
                    <Download className="ml-auto text-gray-500" size={18} />
                  </a>
                  
                  <a href="#" className="flex items-center p-4 bg-white rounded border border-gray-200 hover:shadow-md transition-shadow">
                    <FileText className="text-bfa-blue mr-3" size={24} />
                    <div>
                      <p className="font-bold">One-Page Summary</p>
                      <p className="text-sm text-gray-600">Policy brief for stakeholders</p>
                    </div>
                    <Download className="ml-auto text-gray-500" size={18} />
                  </a>
                  
                  <a href="#" className="flex items-center p-4 bg-white rounded border border-gray-200 hover:shadow-md transition-shadow">
                    <FileText className="text-bfa-blue mr-3" size={24} />
                    <div>
                      <p className="font-bold">FAQ for Planners</p>
                      <p className="text-sm text-gray-600">Common questions answered</p>
                    </div>
                    <Download className="ml-auto text-gray-500" size={18} />
                  </a>
                  
                  <a href="#" className="flex items-center p-4 bg-white rounded border border-gray-200 hover:shadow-md transition-shadow">
                    <FileText className="text-bfa-blue mr-3" size={24} />
                    <div>
                      <p className="font-bold">Full Policy Memo</p>
                      <p className="text-sm text-gray-600">Complete proposal details</p>
                    </div>
                    <Download className="ml-auto text-gray-500" size={18} />
                  </a>
                </div>

                <div className="mt-8">
                  <Button asChild className="w-full bg-bfa-blue hover:bg-bfa-blue-dark text-white">
                    <Link to="/coalition">Support This Policy</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CallToAction title="See the Impact in Your Community" subtitle="Explore our interactive maps to visualize how zoning reform can transform housing options" buttonText="View Interactive Maps" buttonLink="/maps" variant="secondary" />
    </main>;
};
export default AboutPolicy;