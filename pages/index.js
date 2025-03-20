import React, { useState } from 'react';
import { Camera, ShoppingCart, User, LogIn, LogOut, Home, Image } from 'lucide-react';
import Head from 'next/head';

export default function HomePage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  
  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  
  const navigateToSignup = () => {
    window.location.href = '/auth/signup';
  };
  
  const navigateToLogin = () => {
    window.location.href = '/auth/login';
  };
  
  const navigateToGallery = () => {
    window.location.href = '/gallery';
  };
  
  const navigateToCart = () => {
    window.location.href = '/cart';
  };
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Head>
        <title>CaptureMe - Find Your Event Photos</title>
        <meta name="description" content="CaptureMe uses AI to match you with photos taken at events you've attended." />
      </Head>
      
      {/* Navigation Header */}
      <header className="bg-blue-600 text-white shadow-md">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => window.location.href = '/'}>
              <Camera size={24} />
              <h1 className="text-xl font-bold">CaptureMe</h1>
            </div>
            
            <nav className="flex items-center space-x-6">
              <button 
                className="flex items-center space-x-1 hover:text-blue-200" 
                onClick={() => window.location.href = '/'}
              >
                <Home size={20} />
                <span>Home</span>
              </button>
              
              {isLoggedIn && (
                <button 
                  className="flex items-center space-x-1 hover:text-blue-200" 
                  onClick={navigateToGallery}
                >
                  <Image size={20} />
                  <span>My Photos</span>
                </button>
              )}
              
              {isLoggedIn ? (
                <button 
                  className="flex items-center space-x-1 hover:text-blue-200" 
                  onClick={handleLogout}
                >
                  <LogOut size={20} />
                  <span>Logout</span>
                </button>
              ) : (
                <button 
                  className="flex items-center space-x-1 hover:text-blue-200" 
                  onClick={navigateToLogin}
                >
                  <LogIn size={20} />
                  <span>Login</span>
                </button>
              )}
              
              <button 
                className="flex items-center space-x-1 hover:text-blue-200" 
                onClick={navigateToCart}
              >
                <ShoppingCart size={20} />
                <span>Cart</span>
              </button>
            </nav>
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex flex-col space-y-12">
          {/* Hero Section */}
          <section className="text-center py-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Find Your Event Photos Instantly</h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              CaptureMe uses AI to match you with photos taken at events you've attended. 
              No more searching through hundreds of images!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button 
                className="bg-white text-blue-600 px-6 py-3 rounded-full font-bold hover:bg-blue-50 transition"
                onClick={navigateToSignup}
              >
                Create Account
              </button>
              <button 
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-bold hover:bg-white hover:bg-opacity-10 transition"
                onClick={navigateToLogin}
              >
                Sign In
              </button>
            </div>
          </section>
          
          {/* How It Works */}
          <section className="py-12">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <User size={32} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Create Your Profile</h3>
                <p className="text-gray-600">Sign up and scan your face to create a unique profile that helps us find your photos.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <Image size={32} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Browse Your Gallery</h3>
                <p className="text-gray-600">We use AI to match your face in event photos and create a personalized gallery.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <ShoppingCart size={32} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Purchase & Download</h3>
                <p className="text-gray-600">Buy the photos you love and download them instantly to your device.</p>
              </div>
            </div>
          </section>
          
          {/* Testimonials */}
          <section className="py-12 bg-gray-100 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">What Our Users Say</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="italic text-gray-600 mb-4">"CaptureMe made finding my photos from the music festival so easy! I was tagged in over 20 photos that I would have never found otherwise."</p>
                <p className="font-semibold">- Sarah J.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="italic text-gray-600 mb-4">"As a professional event photographer, CaptureMe has revolutionized how I deliver photos to attendees. More sales and happier customers!"</p>
                <p className="font-semibold">- Michael T., Event Photographer</p>
              </div>
            </div>
          </section>
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
