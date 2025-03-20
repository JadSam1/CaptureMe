import React, { useState } from 'react';
import { ShoppingCart, Camera, LogOut, Home, Image, X } from 'lucide-react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';  // Add this import

export default function CartPage() {  // Make sure this line exists!
  const router = useRouter();  // Add this line
  // Rest of your component code...
}

export default function CartPage() {
  // Mock cart data
  const [cartItems, setCartItems] = useState([
    { id: 1, event: "Summer Festival 2025", date: "Mar 15, 2025", price: 4.99 },
    { id: 4, event: "Tech Conference", date: "Mar 10, 2025", price: 5.99 }
  ]);
  
  // Calculate total
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);
  
  const removeFromCart = (photoId) => {
    setCartItems(cartItems.filter(item => item.id !== photoId));
  };
  
  const handleCheckout = () => {
    alert('Proceeding to Stripe Checkout...');
    // In a real app, you would redirect to Stripe
  };
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Head>
        <title>Your Cart - CaptureMe</title>
      </Head>
      
      {/* Navigation Header */}
      <header className="bg-blue-600 text-white shadow-md">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2 cursor-pointer">
              <Link href="/">
                <a className="flex items-center space-x-2">
                  <Camera size={24} />
                  <h1 className="text-xl font-bold">CaptureMe</h1>
                </a>
              </Link>
            </div>
            
            <nav className="flex items-center space-x-6">
              <Link href="/">
                <a className="flex items-center space-x-1 hover:text-blue-200">
                  <Home size={20} />
                  <span>Home</span>
                </a>
              </Link>
              
              <Link href="/gallery">
                <a className="flex items-center space-x-1 hover:text-blue-200">
                  <Image size={20} />
                  <span>My Photos</span>
                </a>
              </Link>
              
              <Link href="/">
                <a className="flex items-center space-x-1 hover:text-blue-200">
                  <LogOut size={20} />
                  <span>Logout</span>
                </a>
              </Link>
              
              <Link href="/cart">
                <a className="flex items-center space-x-1 hover:text-blue-200">
                  <ShoppingCart size={20} />
                  <span>Cart</span>
                </a>
              </Link>
            </nav>
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-6">Your Cart</h2>
        
        {cartItems.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <ShoppingCart size={48} className="mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Your cart is empty</h3>
            <p className="text-gray-600 mb-4">Looks like you haven't added any photos to your cart yet.</p>
            <Link href="/gallery">
              <a className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
                Browse Photos
              </a>
            </Link>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
              
              <div className="divide-y">
                {cartItems.map((item) => (
                  <div key={item.id} className="py-4 flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="bg-gray-200 w-16 h-16 rounded overflow-hidden mr-4"></div>
                      <div>
                        <h4 className="font-semibold">{item.event}</h4>
                        <p className="text-sm text-gray-600">{item.date}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <span className="font-bold mr-4">${item.price.toFixed(2)}</span>
                      <button 
                        className="text-red-600 hover:text-red-800"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <X size={20} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="border-t mt-6 pt-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-semibold">Subtotal</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between items-center mb-6">
                  <span className="font-semibold">Total</span>
                  <span className="text-xl font-bold">${total.toFixed(2)}</span>
                </div>
                
                <button 
                  className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition flex items-center justify-center"
                  onClick={handleCheckout}
                >
                  <span>Proceed to Checkout</span>
                </button>
                
                <div className="mt-4 flex justify-center space-x-2">
                  <span className="bg-gray-200 px-2 py-1 rounded text-xs">Visa</span>
                  <span className="bg-gray-200 px-2 py-1 rounded text-xs">Mastercard</span>
                  <span className="bg-gray-200 px-2 py-1 rounded text-xs">Apple Pay</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>&copy; 2025 CaptureMe. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-300">Privacy Policy</a>
              <a href="#" className="hover:text-blue-300">Terms of Service</a>
              <a href="#" className="hover:text-blue-300">Contact Us</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
