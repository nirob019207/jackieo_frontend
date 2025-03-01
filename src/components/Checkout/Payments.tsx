import Image from 'next/image';
import { useState } from 'react';
import { z } from 'zod';

// Define the validation schema using Zod
const billingSchema = z.object({
  firstName: z.string().min(2, { message: "First name must be at least 2 characters" }),
  lastName: z.string().min(2, { message: "Last name must be at least 2 characters" }),
  city: z.string().min(2, { message: "City is required" }),
  state: z.string().min(2, { message: "State is required" }),
  zipCode: z.string().min(5, { message: "Zip code must be at least 5 characters" }),
  phoneNumber: z.string().min(10, { message: "Please enter a valid phone number" }),
  address: z.string().min(5, { message: "Address is required" }),
  email: z.string().email({ message: "Please enter a valid email address" })
});

// Type for form errors
type FormErrors = {
  [key: string]: string[];
};

function Payments() {
  // Sample product data
  const [products] = useState([
    {
      id: 1,
      name: 'Double Dutch 50 Stems of Tulips',
      price: 120,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1589123053646-4e8c4c8f7a0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      id: 2,
      name: 'Double Dutch 50 Stems of Tulips',
      price: 120,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1589123053646-4e8c4c8f7a0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      id: 3,
      name: 'Double Dutch 50 Stems of Tulips',
      price: 120,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1589123053646-4e8c4c8f7a0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      id: 4,
      name: 'Double Dutch 50 Stems of Tulips',
      price: 120,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1589123053646-4e8c4c8f7a0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    }
  ]);

  // Billing information state
  const [billingInfo, setBillingInfo] = useState({
    firstName: 'London',
    lastName: 'California',
    city: 'London',
    state: 'California',
    zipCode: '123456',
    phoneNumber: '(123) 456-7890',
    address: '',
    email: 'john@example.com'
  });

  // Form errors state
  const [errors, setErrors] = useState<FormErrors>({});

  // Payment method state
  const [paymentMethod, setPaymentMethod] = useState('stripe');

  // Calculate totals
  const cartSubtotal = products.reduce((sum, product) => sum + product.price * product.quantity, 0);
  const deliveryCharge = 0;
  const total = cartSubtotal + deliveryCharge;

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBillingInfo({
      ...billingInfo,
      [name]: value
    });
    
    // Clear error for this field when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: []
      });
    }
  };

  // Handle payment method selection
  const handlePaymentMethodChange = (method: string) => {
    setPaymentMethod(method);
  };

  // Handle order placement with validation
  const handlePlaceOrder = () => {
    try {
      // Validate the form data
      billingSchema.parse(billingInfo);
      
      // If validation passes, log the form data to console
      console.log('Form data:', billingInfo);
      console.log('Payment method:', paymentMethod);
      console.log('Order total:', total);
      
      // Show success message
      alert('Order placed successfully!');
      
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Format and set errors
        const formattedErrors: FormErrors = {};
        
        error.errors.forEach((err) => {
          const field = err.path[0] as string;
          if (!formattedErrors[field]) {
            formattedErrors[field] = [];
          }
          formattedErrors[field].push(err.message);
        });
        
        setErrors(formattedErrors);
        console.error('Validation errors:', formattedErrors);
      }
    }
  };

  // Helper function to check if a field has an error
  const hasError = (field: string) => {
    return errors[field] && errors[field].length > 0;
  };

  return (
    <div className="min-h-screen bg-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Order Summary Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Order</h2>
            
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-3 text-left text-sm font-medium text-gray-500">Product</th>
                    <th className="py-3 text-left text-sm font-medium text-gray-500">Product Name</th>
                    <th className="py-3 text-center text-sm font-medium text-gray-500">Quantity</th>
                    <th className="py-3 text-right text-sm font-medium text-gray-500">Total Price</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product.id} className="border-b border-gray-200">
                      <td className="py-4">
                        <div className="h-16 w-16 overflow-hidden rounded-md">
                          <Image
                            src={product.image} 
                            alt={product.name} 
                            width={100}
                            height={100}
                            className="h-full w-full object-cover"
                          />
                        </div>
                      </td>
                      <td className="py-4 text-sm text-gray-900">{product.name}</td>
                      <td className="py-4 text-center text-sm text-gray-900">{product.quantity}</td>
                      <td className="py-4 text-right text-sm font-medium text-gray-900">${product.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Payment Method</h3>
              <div className="flex space-x-4">
                <div 
                  className={`border rounded-md p-4 flex items-center cursor-pointer ${paymentMethod === 'stripe' ? 'border-pink-500' : 'border-gray-300'}`}
                  onClick={() => handlePaymentMethodChange('stripe')}
                >
                  <input
                    type="radio"
                    id="stripe"
                    name="paymentMethod"
                    checked={paymentMethod === 'stripe'}
                    onChange={() => handlePaymentMethodChange('stripe')}
                    className="h-4 w-4 text-pink-500 focus:ring-pink-500"
                  />
                  <label htmlFor="stripe" className="ml-2 text-indigo-600 font-medium cursor-pointer">
                    stripe
                  </label>
                </div>
                <div 
                  className={`border rounded-md p-4 flex items-center cursor-pointer ${paymentMethod === 'mastercard' ? 'border-pink-500' : 'border-gray-300'}`}
                  onClick={() => handlePaymentMethodChange('mastercard')}
                >
                  <input
                    type="radio"
                    id="mastercard"
                    name="paymentMethod"
                    checked={paymentMethod === 'mastercard'}
                    onChange={() => handlePaymentMethodChange('mastercard')}
                    className="h-4 w-4 text-pink-500 focus:ring-pink-500"
                  />
                  <label htmlFor="mastercard" className="ml-2 cursor-pointer">
                    <div className="flex items-center">
                      <span className="text-yellow-500 text-2xl mr-1">●</span>
                      <span className="text-red-500 text-2xl">●</span>
                    </div>
                  </label>
                </div>
                <div 
                  className={`border rounded-md p-4 flex items-center cursor-pointer ${paymentMethod === 'visa' ? 'border-pink-500' : 'border-gray-300'}`}
                  onClick={() => handlePaymentMethodChange('visa')}
                >
                  <input
                    type="radio"
                    id="visa"
                    name="paymentMethod"
                    checked={paymentMethod === 'visa'}
                    onChange={() => handlePaymentMethodChange('visa')}
                    className="h-4 w-4 text-pink-500 focus:ring-pink-500"
                  />
                  <label htmlFor="visa" className="ml-2 text-blue-800 font-bold cursor-pointer">
                    VISA
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Billing Information Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Billing Address</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                  First Name*
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={billingInfo.firstName}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border ${hasError('firstName') ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500`}
                />
                {hasError('firstName') && (
                  <p className="mt-1 text-sm text-red-500">{errors.firstName?.[0]}</p>
                )}
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name*
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={billingInfo.lastName}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border ${hasError('lastName') ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500`}
                />
                {hasError('lastName') && (
                  <p className="mt-1 text-sm text-red-500">{errors.lastName?.[0]}</p>
                )}
              </div>
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                  City*
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={billingInfo.city}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border ${hasError('city') ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500`}
                />
                {hasError('city') && (
                  <p className="mt-1 text-sm text-red-500">{errors.city?.[0]}</p>
                )}
              </div>
              <div>
                <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                  State*
                </label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={billingInfo.state}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border ${hasError('state') ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500`}
                />
                {hasError('state') && (
                  <p className="mt-1 text-sm text-red-500">{errors.state?.[0]}</p>
                )}
              </div>
              <div>
                <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">
                  Zip Code*
                </label>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  value={billingInfo.zipCode}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border ${hasError('zipCode') ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500`}
                />
                {hasError('zipCode') && (
                  <p className="mt-1 text-sm text-red-500">{errors.zipCode?.[0]}</p>
                )}
              </div>
              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number*
                </label>
                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={billingInfo.phoneNumber}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border ${hasError('phoneNumber') ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500`}
                />
                {hasError('phoneNumber') && (
                  <p className="mt-1 text-sm text-red-500">{errors.phoneNumber?.[0]}</p>
                )}
              </div>
              <div className="md:col-span-2">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                  Address*
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={billingInfo.address}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border ${hasError('address') ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500`}
                />
                {hasError('address') && (
                  <p className="mt-1 text-sm text-red-500">{errors.address?.[0]}</p>
                )}
              </div>
              <div className="md:col-span-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={billingInfo.email}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border ${hasError('email') ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500`}
                />
                {hasError('email') && (
                  <p className="mt-1 text-sm text-red-500">{errors.email?.[0]}</p>
                )}
              </div>
            </div>

            {/* Order Summary */}
            <div className="mt-8 border-t border-gray-200 pt-6">
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-600">Cart Subtotal:</span>
                <span className="text-sm font-medium text-gray-900">${cartSubtotal}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-600">Delivery Charge:</span>
                <span className="text-sm font-medium text-gray-900">${deliveryCharge}</span>
              </div>
              <div className="flex justify-between mb-6">
                <span className="text-base font-medium text-gray-900">Total:</span>
                <span className="text-base font-bold text-gray-900">${total}</span>
              </div>

              <button
                onClick={handlePlaceOrder}
                className="w-full bg-pink-500 text-white py-3 px-4 rounded-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 transition-colors"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payments;