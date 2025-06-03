import React, { useState } from 'react';
import { Search, Filter, X } from 'lucide-react';

interface PuppyFiltersProps {
  onFilterChange: (filters: { breed?: string; age?: string; location?: string }) => void;
}

const PuppyFilters: React.FC<PuppyFiltersProps> = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    breed: 'all',
    age: 'all',
    location: 'all',
  });
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    const newFilters = { ...filters, [name]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const resetFilters = () => {
    const newFilters = { breed: 'all', age: 'all', location: 'all' };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const toggleFilters = () => {
    setIsFiltersOpen(!isFiltersOpen);
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-4 mb-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
        <h3 className="text-lg font-medium mb-2 md:mb-0">Find Your Perfect Puppy</h3>
        <div className="flex items-center">
          <button 
            onClick={toggleFilters}
            className="md:hidden flex items-center space-x-2 text-gray-700"
          >
            <Filter className="w-5 h-5" />
            <span>Filters</span>
          </button>
          <button 
            onClick={resetFilters}
            className="ml-4 text-primary-600 text-sm font-medium hover:text-primary-700"
          >
            Reset Filters
          </button>
        </div>
      </div>

      <div className={`md:block ${isFiltersOpen ? 'block' : 'hidden'}`}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <select
              name="breed"
              value={filters.breed}
              onChange={handleFilterChange}
              className="input appearance-none"
            >
              <option value="all">All Breeds</option>
              <option value="golden">Golden Retriever</option>
              <option value="labrador">Labrador Retriever</option>
              <option value="french bulldog">French Bulldog</option>
              <option value="siberian husky">Siberian Husky</option>
              <option value="beagle">Beagle</option>
              <option value="poodle">Poodle</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          <div className="relative">
            <select
              name="age"
              value={filters.age}
              onChange={handleFilterChange}
              className="input appearance-none"
            >
              <option value="all">All Ages</option>
              <option value="1 months">1 Months</option>
              <option value="2 months">2 Months</option>
              <option value="3 months">3 Months</option>
              <option value="4 months">4 Months</option>
              <option value="5 months">5 Months</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          <div className="relative">
            <select
              name="location"
              value={filters.location}
              onChange={handleFilterChange}
              className="input appearance-none"
            >
              <option value="all">All Locations</option>
              <option value="san francisco">San Francisco, CA</option>
              <option value="los angeles">Los Angeles, CA</option>
              <option value="new york">New York, NY</option>
              <option value="chicago">Chicago, IL</option>
              <option value="denver">Denver, CO</option>
              <option value="seattle">Seattle, WA</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          <button className="btn btn-primary flex items-center justify-center">
            <Search className="w-4 h-4 mr-2" />
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default PuppyFilters;