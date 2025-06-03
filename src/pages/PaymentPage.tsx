import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { usePuppies } from '../context/PuppiesContext';
import PaymentForm from '../components/forms/PaymentForm';
import { CheckCircle2 } from 'lucide-react';

const PaymentPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getPuppyById } = usePuppies();
  const puppy = getPuppyById(id || '');
  
  const [isPaymentComplete, setIsPaymentComplete] = useState(false);

  const handlePaymentSubmit = () => {
    // In a real app, this would process the payment via Stripe or another payment processor
    setIsPaymentComplete(true);
    
    // In a production app, we would redirect to a success page or dashboard
    setTimeout(() => {
      navigate('/');
    }, 5000);
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

  if (isPaymentComplete) {
    return (
      <div className="pt-24 pb-16 px-4 fade-in">
        <div className="container mx-auto max-w-md">
          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <div className="flex justify-center mb-6">
              <div className="rounded-full bg-green-100 p-3">
                <CheckCircle2 className="w-12 h-12 text-green-600" />
              </div>
            </div>
            
            <h2 className="text-2xl font-bold mb-4">Payment Successful!</h2>
            <p className="text-gray-600 mb-6">
              Thank you for adopting {puppy.name}! We've received your payment of ${puppy.adoptionFee}.
            </p>
            <p className="text-gray-600 mb-8">
              You will receive an email confirmation shortly with next steps for bringing {puppy.name} home.
            </p>
            
            <div className="animate-pulse text-sm text-gray-500">
              Redirecting to homepage in a few seconds...
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16 px-4 fade-in">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Complete Your Adoption</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            You're almost done! Complete the payment to finalize your adoption of {puppy.name}.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <PaymentForm puppy={puppy} onSubmit={handlePaymentSubmit} />
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
                
                <div className="py-4 border-t border-gray-100">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700">Adoption Fee</span>
                    <span className="font-medium">${puppy.adoptionFee}.00</span>
                  </div>
                  <div className="flex justify-between items-center font-bold">
                    <span>Total</span>
                    <span className="text-primary-600">${puppy.adoptionFee}.00</span>
                  </div>
                </div>
                
                <div className="text-sm text-gray-500 mt-4">
                  <p>
                    Your adoption fee covers vaccinations, microchipping, health check, and helps us continue our rescue work.
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

export default PaymentPage;