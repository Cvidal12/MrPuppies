import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { usePuppies } from '../context/PuppiesContext';
import { Heart, Calendar, MapPin, CheckCircle2, XCircle, ArrowLeft, ArrowRight } from 'lucide-react';

const PuppyDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { getPuppyById } = usePuppies();
  const puppy = getPuppyById(id || '');
  
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isImageGalleryOpen, setIsImageGalleryOpen] = useState(false);
  
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  if (!puppy) {
    return (
      <div className="pt-24 pb-16 px-4 fade-in">
        <div className="container mx-auto text-center py-16">
          <h2 className="text-2xl font-bold mb-4">Puppy Not Found</h2>
          <p className="text-gray-600 mb-8">
            We couldn't find the puppy you're looking for.
          </p>
          <Link to="/puppies" className="btn btn-primary">
            View All Puppies
          </Link>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % puppy.images.length);
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + puppy.images.length) % puppy.images.length);
  };

  const openImageGallery = (index: number) => {
    setSelectedImageIndex(index);
    setIsImageGalleryOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeImageGallery = () => {
    setIsImageGalleryOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="pt-24 pb-16 px-4 fade-in">
      <div className="container mx-auto">
        <div className="mb-8">
          <Link to="/puppies" className="inline-flex items-center text-gray-600 hover:text-primary-600 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Puppies
          </Link>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Puppy Images */}
          <div>
            <div className="relative overflow-hidden rounded-xl mb-4 cursor-pointer" onClick={() => openImageGallery(selectedImageIndex)}>
              <img 
                src={puppy.images[selectedImageIndex]} 
                alt={puppy.name} 
                className="w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
              />
              
              {puppy.images.length > 1 && (
                <>
                  <button 
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 hover:bg-white transition-colors"
                    onClick={(e) => { e.stopPropagation(); prevImage(); }}
                  >
                    <ArrowLeft className="w-5 h-5 text-gray-800" />
                  </button>
                  <button 
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 hover:bg-white transition-colors"
                    onClick={(e) => { e.stopPropagation(); nextImage(); }}
                  >
                    <ArrowRight className="w-5 h-5 text-gray-800" />
                  </button>
                </>
              )}
            </div>
            
            {puppy.images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {puppy.images.map((image, index) => (
                  <div 
                    key={index}
                    className={`overflow-hidden rounded-lg cursor-pointer ${
                      index === selectedImageIndex ? 'ring-2 ring-primary-600' : ''
                    }`}
                    onClick={() => setSelectedImageIndex(index)}
                  >
                    <img 
                      src={image} 
                      alt={`${puppy.name} - Image ${index + 1}`}
                      className="w-full h-20 object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Puppy Details */}
          <div>
            <div className="flex justify-between items-start mb-4">
              <h1 className="text-3xl md:text-4xl font-bold">{puppy.name}</h1>
              <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                <Heart className="w-6 h-6 text-gray-700 hover:text-red-500 transition-colors" />
              </button>
            </div>
            
            <div className="flex items-center mb-6">
              <span className="text-2xl font-bold text-primary-600 mr-4">${puppy.adoptionFee}</span>
              <span className="text-gray-600 mr-4">{puppy.breed}</span>
              <span className="flex items-center text-gray-500">
                <MapPin className="w-4 h-4 mr-1" />
                {puppy.location}
              </span>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-sm text-gray-500 mb-1">Age</p>
                <p className="font-medium">{puppy.age}</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-sm text-gray-500 mb-1">Gender</p>
                <p className="font-medium">{puppy.gender}</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-sm text-gray-500 mb-1">Size</p>
                <p className="font-medium">{puppy.size}</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-sm text-gray-500 mb-1">Color</p>
                <p className="font-medium">{puppy.color}</p>
              </div>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-3">About {puppy.name}</h2>
              <p className="text-gray-700 mb-4">{puppy.description}</p>
              
              <h3 className="font-bold mb-2">Personality Traits:</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {puppy.personality.map((trait, index) => (
                  <span key={index} className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">
                    {trait}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-3">Health Information</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <li className="flex items-center">
                  {puppy.healthInfo.vaccinated ? (
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-500 mr-2" />
                  )}
                  <span>Vaccinated</span>
                </li>
                <li className="flex items-center">
                  {puppy.healthInfo.microchipped ? (
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-500 mr-2" />
                  )}
                  <span>Microchipped</span>
                </li>
                <li className="flex items-center">
                  {puppy.healthInfo.neutered ? (
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-500 mr-2" />
                  )}
                  <span>Spayed/Neutered</span>
                </li>
                <li className="flex items-center">
                  {puppy.healthInfo.healthCertificate ? (
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-500 mr-2" />
                  )}
                  <span>Health Certificate</span>
                </li>
              </ul>
            </div>
            
            <div className="flex items-center text-gray-600 mb-8">
              <Calendar className="w-5 h-5 mr-2" />
              <span>Available from {puppy.availableDate}</span>
            </div>
            
            <Link to={`/adopt/${puppy.id}`} className="btn btn-primary w-full md:w-auto md:px-12">
              Adopt {puppy.name}
            </Link>
          </div>
        </div>
      </div>
      
      {/* Full-screen Image Gallery */}
      {isImageGalleryOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <button 
            className="absolute top-4 right-4 text-white bg-black/20 p-2 rounded-full hover:bg-black/40 transition-colors"
            onClick={closeImageGallery}
          >
            <XCircle className="w-6 h-6" />
          </button>
          
          <div className="relative w-full max-w-5xl">
            <img 
              src={puppy.images[selectedImageIndex]} 
              alt={puppy.name} 
              className="w-full h-auto max-h-[80vh] object-contain"
            />
            
            {puppy.images.length > 1 && (
              <>
                <button 
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/20 rounded-full p-3 hover:bg-black/40 transition-colors"
                  onClick={prevImage}
                >
                  <ArrowLeft className="w-6 h-6 text-white" />
                </button>
                <button 
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/20 rounded-full p-3 hover:bg-black/40 transition-colors"
                  onClick={nextImage}
                >
                  <ArrowRight className="w-6 h-6 text-white" />
                </button>
              </>
            )}
            
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {puppy.images.map((_, index) => (
                <button 
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    index === selectedImageIndex ? 'bg-white' : 'bg-white/40'
                  }`}
                  onClick={() => setSelectedImageIndex(index)}
                ></button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PuppyDetailPage;