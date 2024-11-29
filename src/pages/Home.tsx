import React from 'react';
import { Heart } from 'lucide-react';

export function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative overflow-hidden bg-red-600 text-white py-24">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&q=80"
            alt="Blood Donation Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="marquee-container overflow-hidden">
            <div className="animate-marquee whitespace-nowrap text-4xl font-bold">
              One Click Apart From Saving A Life
            </div>
          </div>
          <h1 className="text-6xl font-bold mt-12 mb-6">रक्तADAHAAR</h1>
          <p className="text-xl max-w-2xl">
            Playing a vital role in connecting blood donors with those in need. 
            We maintain a comprehensive database of donors and their blood types, 
            making it easier to find the right match when every second counts.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <Heart className="h-12 w-12 text-red-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Save Lives</h3>
            <p>Your donation can save up to three lives. Join our mission to make a difference.</p>
          </div>
          {/* Add more feature cards */}
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center">The Donation Process</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <img
              src="https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&q=80"
              alt="Blood Donation Process"
              className="rounded-lg shadow-lg"
            />
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Simple Steps to Save Lives</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">1</span>
                  Register as a donor
                </li>
                {/* Add more steps */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}