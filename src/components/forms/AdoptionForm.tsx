import React, { useState } from 'react';
import { Puppy } from '../../types/types';
import { CheckCircle2 } from 'lucide-react';

interface AdoptionFormProps {
  puppy: Puppy;
  onSubmit: () => void;
}

const AdoptionForm: React.FC<AdoptionFormProps> = ({ puppy, onSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    housingType: 'house',
    hasYard: false,
    otherPets: '',
    experience: '',
    whyAdopt: '',
    agreeToTerms: false,
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    });
    
    // Clear the error for this field when the user changes it
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

    const openWhatsAppWithFormData = () => {

    const message = `
    Puppy: ${puppy.name}
    Breed: ${puppy.breed}
    Age: ${puppy.age}
    Gender: ${puppy.gender}
    Color: ${puppy.color}
    Adoption Fee: ${puppy.adoptionFee}

    Adopt By

    First Name: ${formData.firstName}
    Last Name: ${formData.lastName}
    Email: ${formData.email}
    Street Address: ${formData.address}
    City: ${formData.city}
    State: ${formData.state}
    Zip Code: ${formData.zip}
    Phone: ${formData.phone}
    `;
    const phone = "237671753121";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, '_blank');
  };


  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.state.trim()) newErrors.state = 'State is required';
    if (!formData.zip.trim()) newErrors.zip = 'ZIP code is required';
    if (!formData.whyAdopt.trim()) newErrors.whyAdopt = 'Please tell us why you want to adopt this puppy';
    if (!formData.agreeToTerms) newErrors.agreeToTerms = 'You must agree to the terms';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // In a real app, we would submit the form data to the server
      console.log('Form data:', formData);
      openWhatsAppWithFormData();
      onSubmit();
    } else {
      // Scroll to the first error
      const firstErrorField = Object.keys(errors)[0];
      if (firstErrorField) {
        const errorElement = document.querySelector(`[name="${firstErrorField}"]`);
        if (errorElement) {
          errorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
      <h2 className="text-2xl font-bold mb-6">Adoption Application for {puppy.name}</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
              First Name *
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className={`input ${errors.firstName ? 'border-red-500' : ''}`}
            />
            {errors.firstName && (
              <p className="mt-1 text-red-500 text-sm">{errors.firstName}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
              Last Name *
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className={`input ${errors.lastName ? 'border-red-500' : ''}`}
            />
            {errors.lastName && (
              <p className="mt-1 text-red-500 text-sm">{errors.lastName}</p>
            )}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`input ${errors.email ? 'border-red-500' : ''}`}
            />
            {errors.email && (
              <p className="mt-1 text-red-500 text-sm">{errors.email}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`input ${errors.phone ? 'border-red-500' : ''}`}
            />
            {errors.phone && (
              <p className="mt-1 text-red-500 text-sm">{errors.phone}</p>
            )}
          </div>
        </div>
        
        <div>
          <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
            Street Address *
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className={`input ${errors.address ? 'border-red-500' : ''}`}
          />
          {errors.address && (
            <p className="mt-1 text-red-500 text-sm">{errors.address}</p>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
              City *
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className={`input ${errors.city ? 'border-red-500' : ''}`}
            />
            {errors.city && (
              <p className="mt-1 text-red-500 text-sm">{errors.city}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
              State *
            </label>
            <input
              type="text"
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className={`input ${errors.state ? 'border-red-500' : ''}`}
            />
            {errors.state && (
              <p className="mt-1 text-red-500 text-sm">{errors.state}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="zip" className="block text-sm font-medium text-gray-700 mb-1">
              ZIP Code *
            </label>
            <input
              type="text"
              id="zip"
              name="zip"
              value={formData.zip}
              onChange={handleChange}
              className={`input ${errors.zip ? 'border-red-500' : ''}`}
            />
            {errors.zip && (
              <p className="mt-1 text-red-500 text-sm">{errors.zip}</p>
            )}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="housingType" className="block text-sm font-medium text-gray-700 mb-1">
              Housing Type
            </label>
            <select
              id="housingType"
              name="housingType"
              value={formData.housingType}
              onChange={handleChange}
              className="input"
            >
              <option value="house">House</option>
              <option value="apartment">Apartment</option>
              <option value="condo">Condo</option>
              <option value="mobile">Mobile Home</option>
              <option value="other">Other</option>
            </select>
          </div>
          
          <div className="flex items-center">
            <input
              type="checkbox"
              id="hasYard"
              name="hasYard"
              checked={formData.hasYard}
              onChange={handleChange}
              className="h-5 w-5 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
            />
            <label htmlFor="hasYard" className="ml-2 block text-sm text-gray-700">
              Do you have a fenced yard?
            </label>
          </div>
        </div>
        
        <div>
          <label htmlFor="otherPets" className="block text-sm font-medium text-gray-700 mb-1">
            Do you currently have other pets? If yes, please describe.
          </label>
          <textarea
            id="otherPets"
            name="otherPets"
            rows={3}
            value={formData.otherPets}
            onChange={handleChange}
            className="input"
          />
        </div>
        
        <div>
          <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
            Please describe your experience with dogs.
          </label>
          <textarea
            id="experience"
            name="experience"
            rows={3}
            value={formData.experience}
            onChange={handleChange}
            className="input"
          />
        </div>
        
        <div>
          <label htmlFor="whyAdopt" className="block text-sm font-medium text-gray-700 mb-1">
            Why do you want to adopt {puppy.name}? *
          </label>
          <textarea
            id="whyAdopt"
            name="whyAdopt"
            rows={4}
            value={formData.whyAdopt}
            onChange={handleChange}
            className={`input ${errors.whyAdopt ? 'border-red-500' : ''}`}
          />
          {errors.whyAdopt && (
            <p className="mt-1 text-red-500 text-sm">{errors.whyAdopt}</p>
          )}
        </div>
        
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id="agreeToTerms"
              name="agreeToTerms"
              type="checkbox"
              checked={formData.agreeToTerms}
              onChange={handleChange}
              className="h-5 w-5 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="agreeToTerms" className={`font-medium ${errors.agreeToTerms ? 'text-red-500' : 'text-gray-700'}`}>
              I agree to the adoption terms and conditions *
            </label>
            <p className="text-gray-500">
              By checking this box, you agree to our{' '}
              <a href="#" className="text-primary-600 hover:text-primary-500">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="#" className="text-primary-600 hover:text-primary-500">
                Privacy Policy
              </a>
              .
            </p>
            {errors.agreeToTerms && (
              <p className="mt-1 text-red-500 text-sm">{errors.agreeToTerms}</p>
            )}
          </div>
        </div>
        
        <div className="bg-gray-50 -mx-8 px-8 py-4 mt-8 border-t">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-gray-500">
                Adoption fee: <span className="font-medium text-gray-900">${puppy.adoptionFee}</span>
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Payment will be collected in the next step
              </p>
            </div>
            <button onClick={openWhatsAppWithFormData}
              type="submit"
              className="btn btn-primary"
            >
              Pay ${puppy.adoptionFee}.00
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AdoptionForm;