import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { usePuppies } from '../context/PuppiesContext';
import AdoptionForm from '../components/forms/AdoptionForm';

const AdoptionPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getPuppyById } = usePuppies();
  const puppy = getPuppyById(id || '');

  const handleFormSubmit = () => {
    // In a real app, this would submit the form to the server
    // and then redirect to the payment page upon success
    navigate(`/payment/${id}`);
  };

  if (!puppy) {
    return (
      <div className="pt-24 pb-16 px-4 fade-in">
        <div className="container mx-auto text-center py-16">
          <h2 className="text-2xl font-bold mb-4">Puppy Not Found</h2>
          <p className="text-gray-600 mb-8">
            We couldn't find the puppy you're looking for.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16 px-4 fade-in">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Adopt {puppy.name}</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're excited that you're interested in adopting {puppy.name}! Please complete the application form below to begin the adoption process.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <AdoptionForm puppy={puppy} onSubmit={handleFormSubmit} />
          </div>
          
          <div>
            <div className="sticky top-24 bg-white rounded-xl shadow-md overflow-hidden">
              <img 
                src={puppy.images[0]} 
                alt={puppy.name} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">{puppy.name}</h3>
                <p className="text-gray-600 mb-4">{puppy.breed} · {puppy.age} · {puppy.gender}</p>
                
                <div className="flex justify-between items-center py-4 border-t border-gray-100">
                  <span className="text-gray-700">Adoption Fee</span>
                  <span className="font-bold text-primary-600">${puppy.adoptionFee}</span>
                </div>
                
                <div className="text-sm text-gray-500 mt-4">
                  <p className="mb-2">
                    <strong>Note:</strong> Completing this application does not guarantee adoption.
                  </p>
                  <p>
                    We review all applications thoroughly to ensure the best match between puppies and their new families.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdoptionPage;