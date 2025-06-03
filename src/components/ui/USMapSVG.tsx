
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import TestimonialCard from '@/components/ui/TestimonialCard';
import { MapPin } from 'lucide-react';

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  organization: string;
  image?: string;
  coordinates: [number, number]; // SVG coordinates [x, y]
}

interface USMapSVGProps {
  testimonials: Testimonial[];
}

const USMapSVG: React.FC<USMapSVGProps> = ({ testimonials }) => {
  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handlePinClick = (testimonial: Testimonial) => {
    setSelectedTestimonial(testimonial);
    setIsDialogOpen(true);
  };

  return (
    <>
      <div className="relative w-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <div className="mb-4">
          <p className="text-sm font-medium text-gray-700 text-center">Click on a pin to read their story</p>
        </div>
        
        <div className="relative">
          <svg
            viewBox="0 0 800 500"
            className="w-full h-auto"
            style={{ maxHeight: '400px' }}
          >
            {/* Simplified US Map Outline */}
            <path
              d="M 100 200 L 150 180 L 200 160 L 250 150 L 300 140 L 350 145 L 400 150 L 450 155 L 500 160 L 550 165 L 600 170 L 650 175 L 700 180 L 720 200 L 730 220 L 735 240 L 740 260 L 735 280 L 730 300 L 720 320 L 700 340 L 680 360 L 650 380 L 600 390 L 550 395 L 500 400 L 450 395 L 400 390 L 350 385 L 300 380 L 250 370 L 200 360 L 150 340 L 120 320 L 105 300 L 95 280 L 90 260 L 95 240 L 100 220 Z"
              fill="#f3f4f6"
              stroke="#d1d5db"
              strokeWidth="2"
            />
            
            {/* State boundaries (simplified) */}
            <g stroke="#e5e7eb" strokeWidth="1" fill="none">
              <line x1="200" y1="160" x2="200" y2="360" />
              <line x1="300" y1="140" x2="300" y2="380" />
              <line x1="400" y1="150" x2="400" y2="390" />
              <line x1="500" y1="160" x2="500" y2="400" />
              <line x1="600" y1="170" x2="600" y2="390" />
              <line x1="150" y1="250" x2="700" y2="250" />
              <line x1="120" y1="300" x2="720" y2="320" />
            </g>

            {/* Testimonial Pins */}
            {testimonials.map((testimonial, index) => (
              <g key={index}>
                <circle
                  cx={testimonial.coordinates[0]}
                  cy={testimonial.coordinates[1]}
                  r="8"
                  fill="#2563eb"
                  stroke="white"
                  strokeWidth="2"
                  className="cursor-pointer hover:fill-blue-700 transition-colors"
                  onClick={() => handlePinClick(testimonial)}
                />
                <circle
                  cx={testimonial.coordinates[0]}
                  cy={testimonial.coordinates[1]}
                  r="4"
                  fill="white"
                  className="cursor-pointer pointer-events-none"
                />
              </g>
            ))}
          </svg>
        </div>

        <div className="mt-4 text-center">
          <p className="text-xs text-gray-500">
            Interactive map showing testimonials from across the United States
          </p>
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Community Story</DialogTitle>
          </DialogHeader>
          {selectedTestimonial && (
            <TestimonialCard
              quote={selectedTestimonial.quote}
              name={selectedTestimonial.name}
              title={selectedTestimonial.title}
              organization={selectedTestimonial.organization}
              image={selectedTestimonial.image}
              imageSize="large"
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default USMapSVG;
