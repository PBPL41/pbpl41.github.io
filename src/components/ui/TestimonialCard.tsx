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
      
      <p className="mb-6 italic text-gray-700 text-base text-center">{quote}</p>
      
      
    </div>;
};
export default TestimonialCard;