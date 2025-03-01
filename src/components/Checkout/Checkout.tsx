"use client"
import { Trash2 } from 'lucide-react';
import { useState } from 'react';

function Checkout() {
  // Sample product data with state
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Double Dutch 50 Stems of Tulips',
      price: 120,
      flowerType: 'Daffodils',
      occasionType: 'Anniversary',
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1589123053646-4e8c4c8f7a0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      id: 2,
      name: 'Double Dutch 50 Stems of Tulips',
      price: 120,
      flowerType: 'Daffodils',
      occasionType: 'Anniversary',
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1589123053646-4e8c4c8f7a0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      id: 3,
      name: 'Double Dutch 50 Stems of Tulips',
      price: 120,
      flowerType: 'Daffodils',
      occasionType: 'Anniversary',
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1589123053646-4e8c4c8f7a0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    }
  ]);

  // Calculate total price
  const totalPrice = products.reduce((sum, product) => sum + product.price * product.quantity, 0);

  // Function to increase quantity
  const increaseQuantity = (id: number) => {
    setProducts(products.map(product => 
      product.id === id ? { ...product, quantity: product.quantity + 1 } : product
    ));
  };

  // Function to decrease quantity
  const decreaseQuantity = (id: number) => {
    setProducts(products.map(product => 
      product.id === id && product.quantity > 1 
        ? { ...product, quantity: product.quantity - 1 } 
        : product
    ));
  };

  // Function to remove product
  const removeProduct = (id: number) => {
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className=" mx-auto">
        <h1 className="text-3xl font-semibold text-gray-900 mb-8">Your Shopping Cart</h1>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-medium text-gray-900 mb-6">Total Add your Product</h2>
            
            {/* Table Header */}
            <div className="hidden md:grid md:grid-cols-6 text-sm font-medium text-gray-500 mb-3 pb-3 border-b">
              <div className="col-span-2">Product</div>
              <div className="text-center">Price</div>
              <div className="text-center">Quantity</div>
              <div className="text-center">Total Price</div>
              <div className="text-center">Action</div>
            </div>
            
            {/* Product List */}
            {products.length > 0 ? (
              <div className="space-y-6 md:space-y-3">
                {products.map((product) => (
                  <div key={product.id} className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-6 items-center py-3 border-b border-gray-100">
                    {/* Product Image and Details (spans 2 columns on md+) */}
                    <div className="col-span-2 flex space-x-4">
                      <div className="flex-shrink-0 w-20 h-20 bg-gray-100 rounded-md overflow-hidden">
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
                        <div className="mt-1 text-xs text-gray-500">
                          <p>Flower Type: {product.flowerType}</p>
                          <p>Occasion: {product.occasionType}</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Price */}
                    <div className="text-center">
                      <span className="text-sm font-medium text-gray-900">${product.price}</span>
                    </div>
                    
                    {/* Quantity */}
                    <div className="flex justify-center">
                      <div className="flex items-center border border-gray-300 rounded-md">
                        <button 
                          className="px-3 py-1 text-gray-600 hover:bg-gray-100 transition-colors"
                          onClick={() => decreaseQuantity(product.id)}
                          disabled={product.quantity <= 1}
                        >
                          -
                        </button>
                        <span className="px-3 py-1 text-sm">{product.quantity}</span>
                        <button 
                          className="px-3 py-1 text-gray-600 hover:bg-gray-100 transition-colors"
                          onClick={() => increaseQuantity(product.id)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    
                    {/* Total Price */}
                    <div className="text-center">
                      <span className="text-sm font-medium text-gray-900">${product.price * product.quantity}</span>
                    </div>
                    
                    {/* Action */}
                    <div className="flex justify-center">
                      <button 
                        className="text-red-500 hover:text-red-700 transition-colors"
                        onClick={() => removeProduct(product.id)}
                        aria-label="Remove item"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-8 text-center">
                <p className="text-gray-500">Your cart is empty</p>
              </div>
            )}
          </div>
          
          {/* Cart Summary and Actions */}
          <div className="bg-gray-50 px-6 py-4">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-medium text-gray-900">Total:</span>
              <span className="text-xl font-semibold text-gray-900">${totalPrice}</span>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:justify-end space-y-2 sm:space-y-0 sm:space-x-3">
              <button 
                className="px-6 py-2 border border-pink-300 rounded-md text-sm font-medium text-pink-700 hover:bg-pink-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition-colors"
              >
                Continue Shopping
              </button>
              <button 
                className="px-6 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pink-500 hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition-colors"
                disabled={products.length === 0}
              >
                Check Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;