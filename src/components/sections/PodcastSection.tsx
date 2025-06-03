
import React from 'react';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const PodcastSection = () => {
  return (
    <div id="podcast" className="mb-16 bg-bfa-gray-light p-8 rounded-lg">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Listen to Our Podcast</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Exploring America's housing challenges and innovative solutions
        </p>
      </div>
      
      <div className="bg-white rounded-lg p-6 shadow-md">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/3">
            <div className="rounded-lg overflow-hidden aspect-square">
              <AspectRatio ratio={1}>
                <img src="/lovable-uploads/370b5102-86af-4d54-973f-dd3889dc8a32.png" alt="Podcast host" className="w-full h-full object-cover" />
              </AspectRatio>
            </div>
          </div>
          
          <div className="md:w-2/3">
            <h3 className="text-xl font-bold mb-2">Episode 1: America's Housing Crisis Explained</h3>
            <p className="text-gray-600 mb-4">
              In this inaugural episode, Kirun Sankaran helps us break down the complex factors driving America's housing shortage and explore how zoning reform can help communities address this growing challenge.
            </p>
            
            <div className="mb-4">
              <div className="flex justify-between text-sm text-gray-500">
              </div>
            </div>
            
            <div className="flex space-x-2">
              <Button asChild className="bg-bfa-blue hover:bg-bfa-blue-dark text-white">
                <a href="https://youtu.be/pw6R4h9RTLg" target="_blank" rel="noopener noreferrer">Play Episode</a>
              </Button>
              <Button variant="outline" className="border-bfa-blue text-bfa-blue hover:bg-bfa-blue hover:text-white">Subscribe</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PodcastSection;
