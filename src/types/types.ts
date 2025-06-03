export interface Puppy {
  id: string;
  name: string;
  breed: string;
  age: string;
  gender: 'Male' | 'Female';
  size: 'Small' | 'Medium' | 'Large';
  color: string;
  images: string[];
  description: string;
  personality: string[];
  healthInfo: {
    vaccinated: boolean;
    microchipped: boolean;
    neutered: boolean;
    healthCertificate: boolean;
  };
  adoptionFee: number;
  location: string;
  featured: boolean;
  availableDate: string;
}

export interface AdoptionForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  housingType: string;
  hasYard: boolean;
  otherPets: string;
  experience: string;
  whyAdopt: string;
  agreeToTerms: boolean;
}

export interface PaymentDetails {
  puppyId: string;
  adoptionFee: number;
  paymentMethod: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  nameOnCard: string;
  billingAddress: string;
  agreeToTerms: boolean;
}