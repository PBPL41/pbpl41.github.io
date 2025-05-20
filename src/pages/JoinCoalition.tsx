import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Link } from 'react-router-dom';

interface OrganizationProps {
  name: string;
  description: string;
  website: string;
}

const OrganizationCard: React.FC<OrganizationProps> = ({ name, description, website }) => {
  return (
    <Card className="mb-4 hover:shadow-md transition-shadow">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg sm:text-xl">{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-3">{description}</p>
        <a 
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-bfa-blue hover:text-bfa-blue-dark font-medium"
        >
          Visit Website <ExternalLink size={16} className="ml-1" />
        </a>
      </CardContent>
    </Card>
  );
};

const JoinCoalition = () => {
  const nationalOrganizations = [
    {
      name: "YIMBY Action",
      description: "A national network advocating for abundant, affordable housing through zoning reform.",
      website: "https://yimbyaction.org"
    },
    {
      name: "Smart Growth America",
      description: "Provides technical assistance and advocates for zoning reforms that support smart growth and equitable development.",
      website: "https://smartgrowthamerica.org"
    },
    {
      name: "National Zoning Atlas",
      description: "Offers tools and information to empower advocates in creating zoning changes within their communities.",
      website: "https://zoningatlas.org"
    }
  ];

  const regionalOrganizations = {
    "California": [
      {
        name: "California YIMBY",
        description: "A statewide organization advocating for pro-housing policies to address California's housing crisis.",
        website: "https://cayimby.org"
      }
    ],
    "Massachusetts": [
      {
        name: "Abundant Housing Massachusetts",
        description: "A pro-housing advocacy group focused on zoning reform to increase housing affordability and availability.",
        website: "https://abundanthousingma.org"
      }
    ],
    "New York": [
      {
        name: "Open New York",
        description: "A pro-housing advocacy organization focused on addressing New York's housing shortage by reforming zoning laws.",
        website: "https://opennewyork.org"
      }
    ],
    "Oregon": [
      {
        name: "1000 Friends of Oregon",
        description: "A coalition advocating for inclusive zoning and housing policies throughout Oregon.",
        website: "https://friends.org"
      }
    ],
    "Washington": [
      {
        name: "Seattle YIMBY",
        description: "A local advocacy group supporting zoning reform to create more housing and opportunity in Seattle.",
        website: "https://seattleyimby.org"
      }
    ]
  };

  return (
    <main className="bg-bfa-gray-light min-h-screen">
      {/* Hero Section */}
      <section className="bg-bfa-blue-dark text-white py-16 md:py-24">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Join the Coalition</h1>
            <p className="text-xl mb-8 opacity-90">
              Connect with the growing movement for zoning reform and equitable housing across America.
            </p>
          </div>
        </div>
      </section>

      {/* Coalition Description */}
      <section className="py-12 bg-white">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">The Housing Coalition</h2>
            <p className="text-lg mb-6">
              Build for America is proud to work alongside a diverse coalition of organizations 
              committed to creating more abundant, affordable housing through zoning reform. 
              These trusted partners are leading the way in advocating for policy changes 
              that create more housing options in communities across the country.
            </p>
            <p className="text-lg mb-6">
              By joining forces with these organizations, we amplify our collective impact 
              and accelerate the path toward housing equity and opportunity for all Americans.
            </p>
          </div>
        </div>
      </section>

      {/* National Organizations */}
      <section className="py-12 bg-bfa-gray-light">
        <div className="container-wide">
          <h2 className="text-3xl font-bold mb-8">National Organizations</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nationalOrganizations.map((org) => (
              <OrganizationCard 
                key={org.name}
                name={org.name}
                description={org.description}
                website={org.website}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Regional Organizations */}
      <section className="py-12 bg-white">
        <div className="container-wide">
          <h2 className="text-3xl font-bold mb-8">Regional Organizations</h2>
          
          <Accordion type="single" collapsible className="w-full">
            {Object.entries(regionalOrganizations).map(([region, orgs]) => (
              <AccordionItem key={region} value={region}>
                <AccordionTrigger className="text-xl font-semibold text-bfa-blue-dark">
                  {region}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid md:grid-cols-2 gap-6 pt-4">
                    {orgs.map((org) => (
                      <OrganizationCard 
                        key={org.name}
                        name={org.name}
                        description={org.description}
                        website={org.website}
                      />
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Call To Action - Replacing Testimonial */}
      <section className="py-12 bg-bfa-sand">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-6">Grow Our Coalition</h3>
            <p className="text-xl mb-6">
              Know an organization doing great zoning reform work? <Link to="/contact" className="text-bfa-blue-dark hover:text-bfa-blue font-semibold underline">Contact us</Link> to get them added.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default JoinCoalition;
