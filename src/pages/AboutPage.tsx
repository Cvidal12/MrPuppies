import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, PawPrint, Shield, Users } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-24 pb-16 px-4 fade-in">
      <div className="container mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About MrPuppy</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're dedicated to finding loving forever homes for puppies in need. Our mission is to connect these adorable companions with families who will cherish them for life.
          </p>
        </div>
        
        {/* Our Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-700 mb-4">
              MrPuppy was founded in 2020 by a group of animal lovers who saw the need for a more thoughtful and caring approach to puppy adoption. What started as a small rescue operation has grown into a trusted platform connecting puppies with loving families across the country.
            </p>
            <p className="text-gray-700 mb-4">
              We believe that every puppy deserves a loving home where they can thrive and grow. Our team works tirelessly to ensure that each adoption is a perfect match, creating lasting bonds between puppies and their new families.
            </p>
            <p className="text-gray-700">
              Over the years, we've helped thousands of puppies find their forever homes, and we're committed to continuing this important work for years to come.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img 
              src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg" 
              alt="Puppy with new owner" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Our Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="bg-primary-100 p-4 rounded-full">
                  <Heart className="w-8 h-8 text-primary-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4">Compassion</h3>
              <p className="text-gray-600">
                We treat every puppy with love and kindness, ensuring they receive the care they need while they wait for their forever homes.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="bg-primary-100 p-4 rounded-full">
                  <Shield className="w-8 h-8 text-primary-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4">Integrity</h3>
              <p className="text-gray-600">
                We're transparent about each puppy's health, temperament, and needs, helping families make informed adoption decisions.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="bg-primary-100 p-4 rounded-full">
                  <PawPrint className="w-8 h-8 text-primary-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4">Responsibility</h3>
              <p className="text-gray-600">
                We carefully screen all potential adopters to ensure our puppies go to loving, responsible homes where they'll thrive.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="bg-primary-100 p-4 rounded-full">
                  <Users className="w-8 h-8 text-primary-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4">Community</h3>
              <p className="text-gray-600">
                We foster a supportive community of adopters, sharing resources and stories to help everyone succeed in their adoption journey.
              </p>
            </div>
          </div>
        </div>
        
        {/* Team Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg" 
                alt="Team Member - Michael Johnson" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Michael Johnson</h3>
                <p className="text-primary-600 mb-4">Founder & Director</p>
                <p className="text-gray-600">
                  Michael's love for animals led him to create PuppyHaven after years of volunteer work at local shelters.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg" 
                alt="Team Member - Sarah Williams" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Sarah Williams</h3>
                <p className="text-primary-600 mb-4">Adoption Specialist</p>
                <p className="text-gray-600">
                  With a background in animal behavior, Sarah ensures each puppy finds the perfect match for their personality.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" 
                alt="Team Member - David Chen" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">David Chen</h3>
                <p className="text-primary-600 mb-4">Veterinary Coordinator</p>
                <p className="text-gray-600">
                  David oversees all health checks and ensures every puppy is healthy and ready for their new home.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Testimonials */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Happy Families</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <img 
                  src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg" 
                  alt="Testimonial - Emily & Max" 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold">Emily & Max</h4>
                  <p className="text-gray-500">San Francisco, CA</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Adopting Bella was the best decision we ever made. The process was smooth, and the MrPuppy team was incredibly helpful. Bella has brought so much joy to our family!"
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <img 
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg" 
                  alt="Testimonial - The Martinez Family" 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold">The Martinez Family</h4>
                  <p className="text-gray-500">Chicago, IL</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "We adopted Cooper last year, and he's been the perfect addition to our family. The adoption process was thorough but straightforward, and we appreciated knowing that MrPuppy cares so much about their puppies."
              </p>
            </div>
          </div>
        </div>
        
        {/* CTA */}
        <div className="bg-primary-900 text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Find Your New Best Friend?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Browse our available puppies and start your adoption journey today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/puppies" className="btn bg-white text-primary-800 hover:bg-gray-100">
              View Available Puppies
            </Link>
            <Link to="/contact" className="btn btn-outline border-white text-white hover:bg-white/10">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;