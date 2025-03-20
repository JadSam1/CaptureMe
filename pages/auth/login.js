import React from 'react';
import { LogIn } from 'lucide-react';
import Head from 'next/head';
import Link from 'next/link';

export default function LoginPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you'd handle authentication here
    window.location.href = '/gallery';
  };
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <Head>
        <title>Sign In - CaptureMe</title>
      </Head>
      
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
        <div className="flex justify-center mb-6">
          <Link href="/">
            <a className="flex items-center space-x-2 text-blue-600">
              <LogIn size={24} />
              <span className="text-2xl font-bold">CaptureMe</span>
            </a>
          </Link>
        </div>
        
        <h2 className="text-2xl font-bold text-center mb-6">Sign In to CaptureMe</h2>
        
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="email">Email Address</label>
            <input 
              type="email" 
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="your@email.com"
              required
            />
          </div>
          
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••"
              required
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input type="checkbox" id="remember" className="h-4 w-4 text-blue-600" />
              <label htmlFor="remember" className="ml-2 text-sm text-gray-600">Remember me</label>
            </div>
            
            <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
          </div>
          
          <button 
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition"
          >
            Sign In
          </button>
        </form>
        
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>
          
          <div className="mt-6 grid grid-cols-3 gap-3">
            <button className="flex justify-center py-2 px-4 border border-gray-300 rounded-md hover:bg-gray-50">
              Google
            </button>
            <button className="flex justify-center py-2 px-4 border border-gray-300 rounded-md hover:bg-gray-50">
              Apple
            </button>
            <button className="flex justify-center py-2 px-4 border border-gray-300 rounded-md hover:bg-gray-50">
              Facebook
            </button>
          </div>
        </div>
        
        <p className="text-center mt-8 text-gray-600">
          Don't have an account?{' '}
          <Link href="/auth/signup">
            <a className="text-blue-600 hover:underline">Sign up</a>
          </Link>
        </p>
      </div>
    </div>
  );
}