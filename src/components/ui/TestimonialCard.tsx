import React from 'react';
interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  organization: string;
  image?: string;
}
const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  name,
  title,
  organization,
  image
}) => {
  return <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
      
      <p className="mb-6 italic text-gray-700 text-base text-left">{quote}</p>
      
      <div className="flex items-center">
        {image && <div className="mr-4">
            <img src={image} alt={`${name}`} className="w-12 h-12 rounded-full object-cover" />
          </div>}
        <div>
          <p className="font-semibold text-gray-900">{name}</p>
          <p className="text-sm text-gray-600">{title}{organization && `, ${organization}`}</p>
        </div>
      </div>
    </div>;
};
export default TestimonialCard;