import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { useForm } from '@formspree/react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [state, handleSubmit] = useForm("manjqovk");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      const result = await handleSubmit(e);
      if (result?.status === 'success') {
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
      }
    }
  };

  return (
    <div className="pt-24 pb-16 px-4 fade-in">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about adoption or want to learn more about MrPuppy? We're here to help!
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {/* Visit Us */}
          <div className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow">
            <div className="flex justify-center mb-4">
              <div className="bg-primary-100 p-4 rounded-full">
                <MapPin className="w-8 h-8 text-primary-600" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4">Visit Us</h3>
            <p className="text-gray-600">
              123 Puppy Lane<br />
              San Francisco, CA 94103
            </p>
            <p className="text-gray-500 mt-2">
              Mon–Fri: 9am–6pm<br />
              Weekends: 10am–4pm
            </p>
          </div>

          {/* Call Us */}
          <div className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow">
            <div className="flex justify-center mb-4">
              <div className="bg-primary-100 p-4 rounded-full">
                <Phone className="w-8 h-8 text-primary-600" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4">Call Us</h3>
            <p className="text-gray-600 mb-2">
              General Inquiries:<br />
              <a href="tel:+15551234567" className="text-primary-600 hover:text-primary-700">
                (555) 123-4567
              </a>
            </p>
            <p className="text-gray-600">
              Adoption Support:<br />
              <a href="tel:+15557891234" className="text-primary-600 hover:text-primary-700">
                (555) 789-1234
              </a>
            </p>
          </div>

          {/* Email Us */}
          <div className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow">
            <div className="flex justify-center mb-4">
              <div className="bg-primary-100 p-4 rounded-full">
                <Mail className="w-8 h-8 text-primary-600" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4">Email Us</h3>
            <p className="text-gray-600 mb-2">
              General Inquiries:<br />
              <a href="mailto:MrPuppy12@gmail.com" className="text-primary-600 hover:text-primary-700">
                MrPuppy12@gmail.com
              </a>
            </p>
            <p className="text-gray-600">
              Adoption Support:<br />
              <a href="mailto:adopt@mrpuppy.com" className="text-primary-600 hover:text-primary-700">
                adopt@mrpuppy.com
              </a>
            </p>
          </div>
        </div>

        {/* Form & Map Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-8">Send Us a Message</h2>

            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-xl">
                <h3 className="font-bold text-xl mb-2">Thank You!</h3>
                <p>Your message has been sent successfully. We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`input ${errors.name ? 'border-red-500' : ''}`}
                  />
                  {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`input ${errors.email ? 'border-red-500' : ''}`}
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="input"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`input appearance-none ${errors.subject ? 'border-red-500' : ''}`}
                  >
                    <option value="">Select a subject</option>
                    <option value="adoption">Adoption Inquiry</option>
                    <option value="donation">Donation Information</option>
                    <option value="volunteer">Volunteer Opportunities</option>
                    <option value="support">Adoption Support</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.subject && <p className="text-red-500 text-sm">{errors.subject}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={`input ${errors.message ? 'border-red-500' : ''}`}
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="btn btn-primary flex items-center"
                  disabled={state.submitting}
                >
                  <Send className="w-4 h-4 mr-2" />
                  {state.submitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>

          {/* Map Placeholder */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Visit Our Center</h2>
            <div className="overflow-hidden rounded-xl shadow-md h-96 bg-gray-200 flex items-center justify-center">
              <p className="text-gray-600">Map would be displayed here</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gray-50 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
            <div>
              <h3 className="font-bold text-xl mb-2">How does the adoption process work?</h3>
              <p className="text-gray-600">Our adoption process includes browsing available puppies, submitting an application, a review by our team, and finally welcoming your new puppy home after payment of the adoption fee.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-2">What is included in the adoption fee?</h3>
              <p className="text-gray-600">The fee covers vaccinations, microchipping, spay/neuter (if applicable), and care costs for the puppy.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-2">Can I meet the puppy before adopting?</h3>
              <p className="text-gray-600">Yes, we encourage you to visit our center. Please contact us to schedule an appointment.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-2">Do you offer post-adoption support?</h3>
              <p className="text-gray-600">Absolutely! We provide ongoing support, resources, and advice to help you and your new puppy adjust to life together.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
