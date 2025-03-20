import React from 'react';
import { ShoppingCart, Camera, LogOut, Home, Image } from 'lucide-react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';  // Add this import

export default function GalleryPage() {  // Make sure this line exists!
  const router = useRouter();  // Add this line
  // Rest of your component code...
}

export default function GalleryPage() {
  // Mock photo data
  const photos = [
    { id: 1, event: "Summer Festival 2025", date: "Mar 15, 2025", price: 4.99 },
    { id: 2, event: "Summer Festival 2025", date: "Mar 15, 2025", price: 4.99 },
    { id: 3, event: "Summer Festival 2025", date: "Mar 15, 2025", price: 4.99 },
    { id: 4, event: "Tech Conference", date: "Mar 10, 2025", price: 5.99 },
    { id: 5, event: "Tech Conference", date: "Mar 10, 2025", price: 5.99 },
    { id: 6, event: "Beach Party", date: "Mar 5, 2025", price: 3.99 },
  ];
  
  const addToCart = (photo) => {
    // In a real app, you'd add to cart state or context
    alert(`Added "${photo.event}" photo to cart`);
  };
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Head>
        <title>Your Photos - CaptureMe</title>
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
        <h2 className="text-3xl font-bold mb-6">Your Photos</h2>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold">Recent Events</h3>
            <select className="border border-gray-300 rounded-md px-3 py-1">
              <option>All Events</option>
              <option>Summer Festival 2025</option>
              <option>Tech Conference</option>
              <option>Beach Party</option>
            </select>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {photos.map((photo) => (
              <div key={photo.id} className="bg-gray-100 rounded-lg overflow-hidden">
                <div className="relative h-48 bg-gray-300">
                  {/* Blurred preview */}
                  <div className="absolute inset-0 backdrop-blur-xl flex items-center justify-center">
                    <div className="w-full h-full bg-gray-300"></div>
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                      <ShoppingCart size={32} className="text-white" />
                    </div>
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-semibold">{photo.event}</h4>
                      <p className="text-sm text-gray-600">{photo.date}</p>
                    </div>
                    <span className="font-bold">${photo.price.toFixed(2)}</span>
                  </div>
                  
                  <button
                    className="w-full mt-2 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                    onClick={() => addToCart(photo)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
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
