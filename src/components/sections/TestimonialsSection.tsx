
import React from 'react';
import TestimonialCard from '@/components/ui/TestimonialCard';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const TestimonialsSection = () => {
  const testimonials = [{
    quote: "Zoning should reflect the shared vision of our future growth. It should fit together the pieces of where we are now, where we're trying to go, and how we get there. We plan to transform Boston's zoning code into one that enables Boston to be a family-first, thriving city that is bustling with innovation.",
    name: "Mayor Wu's Planning Department",
    title: "City of Boston",
    organization: "MA"
  }, {
    quote: "The shortage of affordable housing hurts everyone. Not just the homeless, but everyone from the elderly on fixed incomes to young people who want to live and raise their children in the city where they grew up, and the firemen, teachers and nurses we all depend on who can't afford to live where they work.",
    name: "Paul Krekorian",
    title: "Former Council President",
    organization: "Los Angeles City Council, CA"
  }, {
    quote: "For too long, restrictive, outdated zoning has held our city and our neighborhoods back. To address the city's decades-long housing crisis and make New York City the best place to raise a family, we must take bold, transformational action to build more homes in transit-rich areas near New Yorkers' jobs and services.",
    name: "Eric Adams",
    title: "Mayor",
    organization: "New York City, NY"
  }, {
    quote: "I'm very glad to have another opportunity to vote for more housing options in our city. I look forward to continuing conversations about how we can address our housing shortage and ensure that Portland is a place where people from all different backgrounds have the opportunity to live.",
    name: "Ted Wheeler",
    title: "Former Mayor",
    organization: "Portland, OR"
  }, {
    quote: "San Francisco should be a city with space for more families, more workers, and more dreams. Our administration wants to build enough housing for the next generation of San Franciscans, so that kids who grow up here have the same opportunity to raise their own children here. For too long, San Francisco has made it easier to block new homes than to build them. And while our needs have changed since the 1970s, much of our zoning hasn't.",
    name: "Daniel Lurie",
    title: "Mayor",
    organization: "San Francisco, CA"
  }, {
    quote: "To bring down costs, support current residents, and prepare for future growth, Seattle needs more housing and more housing choices – it's that simple.",
    name: "Bruce Harrell",
    title: "Mayor",
    organization: "Seattle, WA"
  }, {
    quote: "Let's call it what it is. It's not zoning. It's about keeping people out, and it's been a tactic used in our municipalities to preserve the status quo and exclude those who can't afford to buy into the existing system.",
    name: "Joe Alexander",
    title: "State Representative",
    organization: "Goffstown, NH"
  }, {
    quote: "Some communities, especially in southern New Hampshire, have used every trick they can come up with to discourage building. Every single inspection, every permit, every hearing, every redraft, every appeal, every impact fee, every meeting, every single delay, and every single penny a builder needs to put towards a project must be recouped through the sale of the property.",
    name: "Keith Murphy",
    title: "State Senator",
    organization: "Manchester, NH"
  }, {
    quote: "We need to change the status quo. That means updating our zoning laws to allow for more housing options, so that San Diegans of all income levels can afford to live in our city.",
    name: "Kevin Faulconer",
    title: "Former Mayor",
    organization: "San Diego, CA"
  }];

  return (
    <div className="mb-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Hear From Your Elected Officials</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">What does your city government have to say about zoning reform?</p>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <Carousel opts={{
        loop: true
      }} className="w-full">
          <CarouselContent>
            {testimonials.map((testimonial, index) => <CarouselItem key={index}>
                <div className="p-4">
                  <TestimonialCard quote={testimonial.quote} name={testimonial.name} title={testimonial.title} organization={testimonial.organization} />
                </div>
              </CarouselItem>)}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default TestimonialsSection;
