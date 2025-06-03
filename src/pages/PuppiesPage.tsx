import React, { useState, useEffect } from 'react';
import { usePuppies } from '../context/PuppiesContext';
import PuppyFilters from '../components/puppies/PuppyFilters';
import PuppyGrid from '../components/puppies/PuppyGrid';
import { Puppy } from '../types/types';

const PuppiesPage: React.FC = () => {
  const { puppies, filterPuppies } = usePuppies();
  const [filteredPuppies, setFilteredPuppies] = useState<Puppy[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setFilteredPuppies(puppies);
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [puppies]);
  
  const handleFilterChange = (filters: { breed?: string; age?: string; location?: string }) => {
    setIsLoading(true);
    
    // Simulate filter processing delay
    setTimeout(() => {
      const filtered = filterPuppies(filters);
      setFilteredPuppies(filtered);
      setIsLoading(false);
    }, 300);
  };

  return (
    <div className="pt-24 pb-16 px-4 fade-in">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Available Puppies</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse our adorable puppies looking for their forever homes. Use the filters to find the perfect match for your family.
          </p>
        </div>
        
        <PuppyFilters onFilterChange={handleFilterChange} />
        
        {isLoading ? (
          <div className="flex justify-center items-center py-16">
            <div className="relative w-16 h-16">
              <div className="absolute top-0 left-0 w-full h-full border-4 border-primary-200 rounded-full"></div>
              <div className="absolute top-0 left-0 w-full h-full border-4 border-primary-600 rounded-full border-t-transparent animate-spin"></div>
            </div>
          </div>
        ) : (
          <PuppyGrid puppies={filteredPuppies} />
        )}
      </div>
    </div>
  );
};

export default PuppiesPage;