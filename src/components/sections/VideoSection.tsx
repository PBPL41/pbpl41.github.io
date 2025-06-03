
import React from 'react';
import YouTubeEmbed from '@/components/ui/YouTubeEmbed';

const VideoSection = () => {
  return (
    <div className="mb-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Watch: The Housing Crisis Explained</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          A clear explanation of how we got here and what we can do about it
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <YouTubeEmbed videoId="0Flsg_mzG-M" title="Housing Crisis Explained" start={34} end={357} />
      </div>
    </div>
  );
};

export default VideoSection;
