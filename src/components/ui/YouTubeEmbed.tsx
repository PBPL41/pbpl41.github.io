
import React from 'react';

interface YouTubeEmbedProps {
  videoId: string;
  title: string;
  start?: number;
  end?: number;
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ videoId, title, start, end }) => {
  // Build the embed URL with optional start and end parameters
  let embedUrl = `https://www.youtube.com/embed/${videoId}?rel=0`;
  
  // Add start time if provided
  if (start) {
    embedUrl += `&start=${start}`;
  }
  
  // Add end time if provided
  if (end) {
    embedUrl += `&end=${end}`;
  }

  return (
    <div className="aspect-w-16 aspect-h-9 w-full overflow-hidden rounded-lg shadow-lg">
      <iframe 
        src={embedUrl}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
        style={{ aspectRatio: '16/9' }}
      />
    </div>
  );
};

export default YouTubeEmbed;
