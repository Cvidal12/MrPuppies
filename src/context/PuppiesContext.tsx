import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Puppy } from '../types/types';
import { puppiesData } from '../data/puppiesData';

interface PuppiesContextType {
  puppies: Puppy[];
  featuredPuppies: Puppy[];
  getPuppyById: (id: string) => Puppy | undefined;
  filterPuppies: (filters: { breed?: string; age?: string; location?: string }) => Puppy[];
}

const PuppiesContext = createContext<PuppiesContextType | undefined>(undefined);

export const PuppiesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [puppies, setPuppies] = useState<Puppy[]>([]);
  const [featuredPuppies, setFeaturedPuppies] = useState<Puppy[]>([]);

  useEffect(() => {
    // In a real app, this would fetch from an API
    setPuppies(puppiesData);
    setFeaturedPuppies(puppiesData.filter(puppy => puppy.featured));
  }, []);

  const getPuppyById = (id: string) => {
    return puppies.find(puppy => puppy.id === id);
  };

  const filterPuppies = (filters: { breed?: string; age?: string; location?: string }) => {
    return puppies.filter(puppy => {
      let match = true;
      
      if (filters.breed && filters.breed !== 'all') {
        match = match && puppy.breed.toLowerCase().includes(filters.breed.toLowerCase());
      }
      
      if (filters.age && filters.age !== 'all') {
        match = match && puppy.age === filters.age;
      }
      
      if (filters.location && filters.location !== 'all') {
        match = match && puppy.location.toLowerCase().includes(filters.location.toLowerCase());
      }
      
      return match;
    });
  };

  return (
    <PuppiesContext.Provider value={{ puppies, featuredPuppies, getPuppyById, filterPuppies }}>
      {children}
    </PuppiesContext.Provider>
  );
};

export const usePuppies = () => {
  const context = useContext(PuppiesContext);
  if (context === undefined) {
    throw new Error('usePuppies must be used within a PuppiesProvider');
  }
  return context;
};