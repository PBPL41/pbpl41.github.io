
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import TestimonialCard from '@/components/ui/TestimonialCard';

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  organization: string;
  image?: string;
  coordinates: [number, number];
}

interface TestimonialsMapProps {
  testimonials: Testimonial[];
}

const TestimonialsMap: React.FC<TestimonialsMapProps> = ({ testimonials }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [mapboxToken, setMapboxToken] = useState('');
  const [showTokenInput, setShowTokenInput] = useState(true);

  const initializeMap = () => {
    if (!mapContainer.current || !mapboxToken) return;

    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [-98.5795, 39.8283], // Center of US
      zoom: 3.5,
      pitch: 0,
    });

    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    map.current.on('load', () => {
      // Add markers for each testimonial
      testimonials.forEach((testimonial) => {
        const marker = new mapboxgl.Marker({
          color: '#2563eb', // bfa-blue color
          scale: 1.2
        })
          .setLngLat(testimonial.coordinates)
          .addTo(map.current!);

        marker.getElement().addEventListener('click', () => {
          setSelectedTestimonial(testimonial);
          setIsDialogOpen(true);
        });

        marker.getElement().style.cursor = 'pointer';
      });
    });
  };

  useEffect(() => {
    if (mapboxToken) {
      initializeMap();
    }

    return () => {
      map.current?.remove();
    };
  }, [mapboxToken]);

  const handleTokenSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowTokenInput(false);
  };

  if (showTokenInput) {
    return (
      <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 max-w-md mx-auto">
        <h3 className="text-lg font-semibold mb-4">Mapbox Configuration Required</h3>
        <p className="text-sm text-gray-600 mb-4">
          To display the interactive map, please enter your Mapbox public token. 
          You can get one from <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">mapbox.com</a>.
        </p>
        <form onSubmit={handleTokenSubmit}>
          <input
            type="text"
            placeholder="Enter your Mapbox public token"
            value={mapboxToken}
            onChange={(e) => setMapboxToken(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-4"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
          >
            Load Map
          </button>
        </form>
      </div>
    );
  }

  return (
    <>
      <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg">
        <div ref={mapContainer} className="absolute inset-0" />
        <div className="absolute top-4 left-4 bg-white px-3 py-2 rounded shadow-md">
          <p className="text-sm font-medium text-gray-700">Click on a pin to read their story</p>
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

export default TestimonialsMap;
