
import React, { useState } from 'react';
import { ExternalLink, Mail, Calendar, Pen } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Link } from 'react-router-dom';

interface OrganizationProps {
  name: string;
  description: string;
  website: string;
}
const OrganizationCard: React.FC<OrganizationProps> = ({
  name,
  description,
  website
}) => {
  return <Card className="mb-4 hover:shadow-md transition-shadow">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg sm:text-xl">{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-3">{description}</p>
        <a href={website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-bfa-blue hover:text-bfa-blue-dark font-medium">
          Visit Website <ExternalLink size={16} className="ml-1" />
        </a>
      </CardContent>
    </Card>;
};
const JoinCoalition = () => {
  const [email, setEmail] = useState('');
  const [searchLocation, setSearchLocation] = useState('');
  const nationalOrganizations = [{
    name: "YIMBY Action",
    description: "A national network advocating for abundant, affordable housing through zoning reform.",
    website: "https://yimbyaction.org"
  }, {
    name: "Smart Growth America",
    description: "Provides technical assistance and advocates for zoning reforms that support smart growth and equitable development.",
    website: "https://smartgrowthamerica.org"
  }, {
    name: "National Zoning Atlas",
    description: "Offers tools and information to empower advocates in creating zoning changes within their communities.",
    website: "https://zoningatlas.org"
  }];
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

      {/* Get Involved Section */}
      <section className="py-12 bg-bfa-sand">
        <div className="container-wide">
          <h2 className="text-3xl font-bold mb-8 text-center">Get Involved</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            
            {/* Newsletter Signup */}
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Mail className="w-12 h-12 mx-auto mb-4 text-bfa-blue" />
                <h3 className="text-xl font-semibold mb-3">Sign Up for Our Monthly Newsletter</h3>
                <p className="text-gray-600 mb-4">Want to stay informed or share a zoning success or challenge from your community? Submit your story to our newsletter team.</p>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-bfa-blue hover:bg-bfa-blue-dark text-white">
                      Sign Up Here
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Subscribe to Our Newsletter</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <Input
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <Button className="w-full bg-bfa-blue hover:bg-bfa-blue-dark text-white">
                        Subscribe
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>

            {/* Townhall Events */}
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Calendar className="w-12 h-12 mx-auto mb-4 text-bfa-blue" />
                <h3 className="text-xl font-semibold mb-3">Attend a Build for America Townhall</h3>
                <p className="text-gray-600 mb-4">
                  Join our community discussions and learn about zoning reform initiatives in your area.
                </p>
                <Button className="bg-bfa-blue hover:bg-bfa-blue-dark text-white">
                  View Events
                </Button>
              </CardContent>
            </Card>

            {/* Letter to Editor */}
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Pen className="w-12 h-12 mx-auto mb-4 text-bfa-blue" />
                <h3 className="text-xl font-semibold mb-3">Write a Letter to the Editor</h3>
                <p className="text-gray-600 mb-4">Help shape public opinion by submitting a letter to your local newspaper. See our examples to get started.</p>
                <Button className="bg-bfa-blue hover:bg-bfa-blue-dark text-white">Download Examples</Button>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Coalition Description */}
      <section className="py-12 bg-white">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">The Build for America Coalition</h2>
            <p className="text-lg mb-6">Build for America works alongside a growing network of organizations advancing zoning reform to expand affordable housing nationwide. Our partners lead efforts to change local policy and unlock more housing options in their communities.</p>
            <p className="text-lg mb-6">By joining forces — locally and nationally — we amplify our voice, share strategies, and increase pressure on Congress to pass meaningful federal legislation. This coalition is more than a list of names — it's a shared commitment to real solutions, and a movement to ensure everyone has a place to call home.</p>
          </div>
        </div>
      </section>

      {/* Find Local Organizations */}
      <section className="py-12 bg-bfa-gray-light">
        <div className="container-wide">
          <h2 className="text-3xl font-bold mb-8 text-center">Find a Local Partner Organization Near You</h2>
          <div className="max-w-md mx-auto">
            <Input
              type="text"
              placeholder="Enter your city, state, or ZIP code"
              value={searchLocation}
              onChange={(e) => setSearchLocation(e.target.value)}
              className="text-center"
            />
          </div>
        </div>
      </section>

      {/* National Organizations */}
      <section className="py-12 bg-bfa-earth text-white">
        <div className="container-wide">
          <h2 className="text-3xl font-bold mb-8 text-white">Our National Partners</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nationalOrganizations.map((org) => (
              <Card key={org.name} className="mb-4 hover:shadow-md transition-shadow bg-white">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg sm:text-xl">{org.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-3">{org.description}</p>
                  <a
                    href={org.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-bfa-blue hover:text-bfa-blue-dark font-medium"
                  >
                    Visit Website <ExternalLink size={16} className="ml-1" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action - Grow Our Coalition */}
      <section className="py-12 bg-bfa-blue">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-6 text-white">Grow Our Coalition</h3>
            <p className="text-xl mb-6 text-white">
              Know an organization doing great zoning reform work? <Link to="/contact" className="text-bfa-sand hover:text-white font-semibold underline">Contact us</Link> to get them added.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};
export default JoinCoalition;
