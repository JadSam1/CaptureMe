import React, { useState } from 'react';
import { User, Check, Camera } from 'lucide-react';
import Head from 'next/head';
import Link from 'next/link';

export default function SignupPage() {
  const [step, setStep] = useState(1);
  const [faceScanned, setFaceScanned] = useState(false);
  
  const nextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      window.location.href = &apos;/auth/login&apos;;
    }
  };
  
  function renderStep() {
        switch (step) {
            case 1:
                return (
                    <div className="space-y-6">
                        <h3 className="text-xl font-semibold">Create Your Account</h3>
                        <div>
                            <label className="block text-gray-700 mb-2" htmlFor="name">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="John Doe"
                                required />
                        </div>

                        <div>
                            <label className="block text-gray-700 mb-2" htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="your@email.com"
                                required />
                        </div>

                        <div>
                            <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Choose a strong password"
                                required />
                        </div>

                        <div>
                            <label className="block text-gray-700 mb-2" htmlFor="confirm-password">Confirm Password</label>
                            <input
                                type="password"
                                id="confirm-password"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Confirm your password"
                                required />
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div className="space-y-6">
                        <h3 className="text-xl font-semibold">Scan Your Face</h3>
                        <p className="text-gray-600">
                            We'll use this to find you in event photos. Your face data is encrypted and securely stored.
                        </p>

                        <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                            {faceScanned ? (
                                <div className="text-center">
                                    <div className="bg-green-100 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4">
                                        <Check size={40} className="text-green-600" />
                                    </div>
                                    <p className="text-green-600 font-semibold">Face scan complete!</p>
                                </div>
                            ) : (
                                <div className="text-center">
                                    <Camera size={48} className="mx-auto mb-2 text-gray-400" />
                                    <p className="text-gray-500">Camera preview will appear here</p>
                                    <button
                                        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                                        onClick={() => setFaceScanned(true)}
                                    >
                                        Enable Camera
                                    </button>
                                </div>
                            )}
                        </div>

                        <div className="flex justify-between">
                            <button
                                className="text-gray-600 hover:underline"
                                onClick={() => setStep(1)}
                            >
                                Back
                            </button>
                            <button
                                className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-md hover:bg-blue-700 transition"
                                onClick={nextStep}
                                disabled={!faceScanned}
                            >
                                Continue
                            </button>
                        </div>
                    </div>
                );
            case 3:
                return (
                    <div className="space-y-6 text-center">
                        <div className="bg-green-100 w-20 h-20 mx-auto rounded-full flex items-center justify-center">
                            <Check size={40} className="text-green-600" />
                        </div>
                        <h3 className="text-xl font-semibold">All Set!</h3>
                        <p className="text-gray-600">
                            Your account has been created. You can now sign in to start using CaptureMe!
                        </p>
                        <button
                            className="w-full bg-blue-600 text-white font-semibold py-2 px-6 rounded-md hover:bg-blue-700 transition"
                            onClick={() => window.location.href = '/auth/login'}
                        >
                            Sign In
                        </button>
                    </div>
                );
            default:
                return null;
        }
    }
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <Head>
        <title>Create Account - CaptureMe</title>
      </Head>
      
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
        <div className="flex justify-center mb-6">
          <Link href="/">
            <a className="flex items-center space-x-2 text-blue-600">
              <User size={24} />
              <span className="text-2xl font-bold">CaptureMe</span>
            </a>
          </Link>
        </div>
        
        <h2 className="text-2xl font-bold text-center mb-6">Create Your CaptureMe Account</h2>
        
        <div className="mb-8">
          <div className="flex items-center">
            <div className={`flex items-center justify-center w-10 h-10 rounded-full ${step >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'}`}>
              1
            </div>
            <div className={`flex-1 h-1 mx-2 ${step >= 2 ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
            <div className={`flex items-center justify-center w-10 h-10 rounded-full ${step >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'}`}>
              2
            </div>
            <div className={`flex-1 h-1 mx-2 ${step >= 3 ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
            <div className={`flex items-center justify-center w-10 h-10 rounded-full ${step >= 3 ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'}`}>
              3
            </div>
          </div>
        </div>
        
        {renderStep()}
        
        {step === 1 && (
          <div className="mt-6">
            <button
              className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition"
              onClick={nextStep}
            >
              Continue
            </button>
            
            <p className="text-center mt-6 text-gray-600">
              Already have an account?{' '}
              <Link href="/auth/login">
                <a className="text-blue-600 hover:underline">Sign in</a>
              </Link>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
