import React from 'react';
import { Link } from 'react-router-dom';
import { usePuppies } from '../context/PuppiesContext';
import PuppyCard from '../components/puppies/PuppyCard';
import { Search, Heart, ShieldCheck, PawPrint, ArrowRight } from 'lucide-react';

const HomePage: React.FC = () => {
  const { featuredPuppies } = usePuppies();

  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-primary-700/70 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg)' }}
        ></div>
        <div className="relative z-20 flex items-center justify-center h-full px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Find Your Perfect Puppy Companion
            </h1>
            <p className="text-xl text-white mb-8">
              We connect loving families with adorable puppies looking for their forever homes.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/puppies" className="btn bg-white text-primary-600 hover:bg-gray-100">
                View Available Puppies
              </Link>
              <Link to="/about" className="btn btn-outline border-white text-white hover:bg-white/10">
                Learn More
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10"></div>
      </section>

      {/* Featured Puppies */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Featured Puppies</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These adorable puppies are looking for their forever homes. Each one has been lovingly cared for and is ready to join a new family.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {featuredPuppies.slice(0, 2).map((puppy) => (
              <PuppyCard key={puppy.id} puppy={puppy} featured={true} />
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/puppies" className="btn btn-primary">
              View All Puppies
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How Our Adoption Process Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We've made adopting a puppy simple and straightforward. Here's how our process works:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-md text-center relative hover:shadow-lg transition-shadow">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-primary-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold">
                1
              </div>
              <div className="h-16 flex items-center justify-center mb-4">
                <Search className="w-12 h-12 text-primary-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">Find Your Puppy</h3>
              <p className="text-gray-600">
                Browse our available puppies and find the perfect match for your family and lifestyle.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md text-center relative hover:shadow-lg transition-shadow">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-primary-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold">
                2
              </div>
              <div className="h-16 flex items-center justify-center mb-4">
                <Heart className="w-12 h-12 text-primary-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">Apply to Adopt</h3>
              <p className="text-gray-600">
                Complete our adoption application form to help us understand your home environment.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md text-center relative hover:shadow-lg transition-shadow">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-primary-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold">
                3
              </div>
              <div className="h-16 flex items-center justify-center mb-4">
                <PawPrint className="w-12 h-12 text-primary-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">Welcome Home</h3>
              <p className="text-gray-600">
                Once approved, pay the adoption fee and welcome your new family member home!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose MrPuppy?</h2>
              <p className="text-gray-600 mb-8">
                We're dedicated to finding loving homes for our puppies. Our comprehensive adoption process ensures that every puppy finds the perfect match.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <ShieldCheck className="h-6 w-6 text-primary-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold mb-2">Health Guaranteed</h3>
                    <p className="text-gray-600">
                      All of our puppies come with health certificates, up-to-date vaccinations, and microchipping.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Heart className="h-6 w-6 text-primary-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold mb-2">Careful Screening</h3>
                    <p className="text-gray-600">
                      We carefully screen all potential adopters to ensure our puppies go to loving, responsible homes.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <PawPrint className="h-6 w-6 text-primary-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold mb-2">Lifetime Support</h3>
                    <p className="text-gray-600">
                      We provide ongoing support and resources to help you and your new puppy thrive together.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link to="/about" className="inline-flex items-center font-medium text-primary-600 hover:text-primary-700">
                  Learn more about us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-lg">
                <img 
                  src="https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg" 
                  alt="Happy puppy" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="overflow-hidden rounded-lg">
                <img 
                  src="https://images.pexels.com/photos/1485637/pexels-photo-1485637.jpeg" 
                  alt="Puppy with family" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="overflow-hidden rounded-lg">
                <img 
                  src="https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg" 
                  alt="Cute puppy" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="overflow-hidden rounded-lg">
                <img 
                  src="https://images.pexels.com/photos/1490908/pexels-photo-1490908.jpeg" 
                  alt="Playful puppy" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary-900 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Find Your New Best Friend?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Browse our available puppies and start your adoption journey today.
          </p>
          <Link to="/puppies" className="btn bg-white text-primary-800 hover:bg-gray-100">
            Find Your Perfect Puppy
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;