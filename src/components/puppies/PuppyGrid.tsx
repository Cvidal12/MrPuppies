import React from 'react';
import { Puppy } from '../../types/types';
import PuppyCard from './PuppyCard';

interface PuppyGridProps {
  puppies: Puppy[];
  title?: string;
}

const PuppyGrid: React.FC<PuppyGridProps> = ({ puppies, title }) => {
  if (puppies.length === 0) {
    return (
      <div className="text-center py-16">
        <h3 className="text-xl font-medium text-gray-700">No puppies found</h3>
        <p className="text-gray-500 mt-2">Try adjusting your search filters</p>
      </div>
    );
  }

  return (
    <div className="py-8">
      {title && (
        <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {puppies.map((puppy) => (
          <PuppyCard key={puppy.id} puppy={puppy} />
        ))}
      </div>
    </div>
  );
};

export default PuppyGrid;