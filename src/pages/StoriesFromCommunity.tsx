
import React from 'react';
import TestimonialCard from '@/components/ui/TestimonialCard';
import CallToAction from '@/components/ui/CallToAction';

const StoriesFromCommunity = () => {
  const individualTestimonials = [
    {
      quote: "Finding an affordable place to live close to the hospital felt impossible for years. After Boise allowed more townhomes and duplexes, I finally moved into my own place just a 10-minute walk away. It's made balancing shifts and family life so much easier.",
      name: "Amy D.",
      title: "Nurse",
      organization: "Boise, ID",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face"
    },
    {
      quote: "When the city relaxed some of the zoning rules downtown, foot traffic increased, and I was able to expand my coffee shop. More people live and work here now, which means better business—and it genuinely feels like a community again.",
      name: "Carlos R.",
      title: "Small Business Owner",
      organization: "Grand Rapids, MI",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    },
    {
      quote: "After retirement, I didn't want a big house with upkeep. Gainesville's zoning changes allowed smaller homes near downtown, and now I live closer to shops, parks, and friends. It's exactly the retirement I'd hoped for.",
      name: "Pam W.",
      title: "Retired Teacher",
      organization: "Gainesville, FL",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face"
    },
    {
      quote: "I love Seattle, but it was getting way too expensive. After the city changed zoning to let more apartments and condos get built, I was finally able to buy a place near my job. I never thought homeownership would be possible for me this close to the city.",
      name: "Greg S.",
      title: "Software Developer",
      organization: "Seattle, WA",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    },
    {
      quote: "We wanted our kids to grow up close to good schools and safe parks, but single-family homes were completely out of reach. When Missoula began permitting small duplexes and cottage homes, we found a neighborhood we could actually afford. My kids now ride bikes to school every day.",
      name: "Jasmine B.",
      title: "Mom of Three",
      organization: "Missoula, MT",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b172?w=400&h=400&fit=crop&crop=face"
    }
  ];

  const partnerTestimonials = [
    {
      organization: "American Planning Association (APA)",
      quote: "We've seen that communities really thrive when they're supported, not forced, into zoning reform. Competitive federal grants encourage local planners and residents to come together, innovate, and design neighborhoods that everyone can afford and enjoy."
    },
    {
      organization: "National Association of Home Builders (NAHB)",
      quote: "When zoning processes get simpler and faster, we can build more efficiently and keep costs down. Federal incentive grants help communities remove red tape, which means we can deliver affordable homes to families who need them, quicker."
    },
    {
      organization: "Habitat for Humanity",
      quote: "Too often, zoning regulations stall or stop our projects from getting off the ground. Federal grants that reward communities for reforming zoning mean we can spend less time battling regulations and more time building homes for families in need."
    },
    {
      organization: "Urban Land Institute (ULI)",
      quote: "Federal incentive grants help communities reimagine what's possible, leading to smarter, more creative development. This means builders can work alongside residents to create neighborhoods that actually reflect what people want—affordable homes close to jobs, transit, and schools."
    },
    {
      organization: "Up for Growth",
      quote: "Communities that have already adopted zoning reform show us what's possible—more homes, more affordability, and real improvements in people's lives. Federal grants supporting local reforms mean more towns and cities can follow their lead, creating thriving neighborhoods that work for everyone."
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-bfa-blue text-white py-16">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Stories from the Community</h1>
            <p className="text-xl md:text-2xl mb-4 font-semibold">Real voices. Real impact.</p>
            <p className="text-lg opacity-90">
              Across the country, zoning reform is helping people find homes, grow businesses, and build stronger communities. These are their stories.
            </p>
          </div>
        </div>
      </section>

      {/* Individual Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="space-y-8">
            {individualTestimonials.map((testimonial, index) => (
              <div key={index} className="max-w-4xl mx-auto">
                <TestimonialCard
                  quote={testimonial.quote}
                  name={testimonial.name}
                  title={testimonial.title}
                  organization={testimonial.organization}
                  image={testimonial.image}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Organizations Section */}
      <section className="py-16 bg-bfa-gray-light">
        <div className="container-wide">
          <h2 className="text-3xl font-bold mb-12 text-center text-bfa-blue-dark">What Our Partners Are Saying</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
            {partnerTestimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
                <blockquote className="text-lg italic text-gray-700 mb-4">
                  "{testimonial.quote}"
                </blockquote>
                <cite className="text-bfa-blue font-semibold text-base not-italic">
                  — {testimonial.organization}
                </cite>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction 
        title="Share Your Story" 
        subtitle="Have a story about how zoning reform has impacted your community? We'd love to hear from you." 
        buttonText="Contact Us" 
        buttonLink="/contact" 
      />
    </main>
  );
};

export default StoriesFromCommunity;
