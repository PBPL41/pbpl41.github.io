
import React from 'react';
import { Link } from 'react-router-dom';
import { Download, ExternalLink } from 'lucide-react';

interface ResourceCardProps {
  title: string;
  description: string;
  type: 'pdf' | 'link' | 'podcast' | 'video';
  url: string;
  imageUrl?: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ title, description, type, url, imageUrl }) => {
  const getIcon = () => {
    switch (type) {
      case 'pdf':
        return <Download size={20} />;
      case 'link':
      case 'podcast':
      case 'video':
        return <ExternalLink size={20} />;
      default:
        return <ExternalLink size={20} />;
    }
  };

  const getTypeLabel = () => {
    switch (type) {
      case 'pdf':
        return 'PDF Document';
      case 'link':
        return 'External Link';
      case 'podcast':
        return 'Podcast';
      case 'video':
        return 'Video';
      default:
        return 'Resource';
    }
  };

  return (
    <div className="bg-white border border-gray-100 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      {imageUrl && (
        <div className="h-40 overflow-hidden">
          <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center mb-2">
          <span className="inline-block bg-bfa-sand text-bfa-blue-dark text-xs px-2 py-1 rounded mr-2">
            {getTypeLabel()}
          </span>
        </div>
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <a 
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-bfa-blue hover:text-bfa-blue-dark font-medium text-sm"
        >
          {type === 'pdf' ? 'Download' : 'View Resource'}
          <span className="ml-1">{getIcon()}</span>
        </a>
      </div>
    </div>
  );
};

export default ResourceCard;
