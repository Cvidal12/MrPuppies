import React from 'react';
import { Link } from 'react-router-dom';
import { Puppy } from '../../types/types';
import { Heart, MapPin } from 'lucide-react';

interface PuppyCardProps {
  puppy: Puppy;
  featured?: boolean;
}

const PuppyCard: React.FC<PuppyCardProps> = ({ puppy, featured = false }) => {
  return (
    <div 
      className={`puppy-card group ${
        featured ? 'md:flex md:h-80' : ''
      }`}
    >
      <div className={`relative ${featured ? 'md:w-1/2' : 'h-56'}`}>
        <img 
          src={puppy.images[0]} 
          alt={`${puppy.name} - ${puppy.breed}`}
          className={`w-full h-full object-cover ${
            featured ? 'md:h-80' : ''
          }`}
        />
        <div className="absolute top-3 right-3">
          <button className="p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
            <Heart className="w-5 h-5 text-gray-700 hover:text-red-500 transition-colors" />
          </button>
        </div>
        {puppy.featured && !featured && (
          <div className="absolute top-3 left-3">
            <span className="px-3 py-1 bg-accent-600 text-white text-xs font-medium rounded-full">
              Featured
            </span>
          </div>
        )}
      </div>
      
      <div className={`p-6 ${featured ? 'md:w-1/2 md:p-8' : ''}`}>
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-bold text-xl">{puppy.name}</h3>
          <span className="font-medium text-primary-600">${puppy.adoptionFee}</span>
        </div>
        
        <p className="text-gray-600 mb-3">{puppy.breed}</p>
        
        <div className="flex items-center text-gray-500 mb-4">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-sm">{puppy.location}</span>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
            {puppy.age}
          </span>
          <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
            {puppy.gender}
          </span>
          <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
            {puppy.size}
          </span>
        </div>
        
        {featured ? (
          <>
            <p className="text-gray-700 mb-6 line-clamp-3">{puppy.description}</p>
            <Link to={`/puppies/${puppy.id}`} className="btn btn-primary">
              Meet {puppy.name}
            </Link>
          </>
        ) : (
          <Link to={`/puppies/${puppy.id}`} className="btn btn-outline w-full">
            View Details
          </Link>
        )}
      </div>
    </div>
  );
};

export default PuppyCard;