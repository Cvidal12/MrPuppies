import React, { useState } from 'react';
import { Puppy } from '../../types/types';
import { CreditCard, Lock } from 'lucide-react';

interface PaymentFormProps {
  puppy: Puppy;
  onSubmit: () => void;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ puppy, onSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    adoptionFee:'',
    billingAddress: '',
    agreeToTerms: false,
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    
    let formattedValue = value;
    
    // Format card number with spaces
    if (name === 'cardNumber') {
      formattedValue = value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();
    }
    
    // Format expiry date with slash
    if (name === 'expiryDate') {
      formattedValue = value.replace(/\//g, '');
      if (formattedValue.length > 2) {
        formattedValue = formattedValue.substring(0, 2) + '/' + formattedValue.substring(2, 4);
      }
    }
    
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : formattedValue,
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
    Adoption Fee: ${puppy.adoptionFee}
    First Name: ${formData.firstName}
    Last Name: ${formData.lastName}
    Phone: ${formData.phone}
    Address: ${formData.billingAddress}
    `;
    const phone = "237671753121";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, '_blank');
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First Name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone Number is required';   
    if (!formData.billingAddress.trim()) newErrors.billingAddress = 'Billing address is required';
    if (!formData.agreeToTerms) newErrors.agreeToTerms = 'You must agree to the terms';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // In a real app, we would submit the payment to the server
      console.log('Payment data:', formData);
      openWhatsAppWithFormData();
      onSubmit();
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Payment Information</h2>
        <div className="flex items-center text-primary-600">
          <Lock className="w-4 h-4 mr-1" />
          <span className="text-sm font-medium">Secure Payment</span>
        </div>
      </div>
      
      <div className="bg-secondary-50 border border-secondary-200 rounded-lg p-4 mb-6">
        <div className="flex justify-between mb-2">
          <span className="text-gray-700">Adoption Fee for {puppy.name}</span>
          <span className="font-medium">${puppy.adoptionFee}.00</span>
        </div>
        <div className="flex justify-between border-t border-secondary-200 pt-2 font-bold">
          <span>Total</span>
          <span>${puppy.adoptionFee}.00</span>
        </div>
      </div>        
        <div>
          <label htmlFor="billingAddress" className="block text-sm font-medium text-gray-700 mb-1">
            Billing Address *
          </label>
          <input
            type="text"
            id="billingAddress"
            name="billingAddress"
            value={formData.billingAddress}
            onChange={handleChange}
            placeholder="123 Main St, City, State, ZIP"
            className={`input ${errors.billingAddress ? 'border-red-500' : ''}`}
          />
          {errors.billingAddress && (
            <p className="mt-1 text-red-500 text-sm">{errors.billingAddress}</p>
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
              I agree to the payment terms and conditions *
            </label>
            <p className="text-gray-500">
              By checking this box, you authorize the charge of ${puppy.adoptionFee}.
            </p>
            {errors.agreeToTerms && (
              <p className="mt-1 text-red-500 text-sm">{errors.agreeToTerms}</p>
            )}
          </div>
        </div>
        
        <div className="mt-8">
          <button onClick={openWhatsAppWithFormData}
            type="submit"
            className="btn btn-primary w-full"
          >
           Pay ${puppy.adoptionFee}.00
          </button>
          <p className="text-center text-xs text-gray-500 mt-4">
            Your payment information is encrypted and secure.
          </p>
        </div>
    </div>
  );
};

export default PaymentForm;