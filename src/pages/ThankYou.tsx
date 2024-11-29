import React from 'react';
import { Heart } from 'lucide-react';

export function ThankYou() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <Heart className="h-16 w-16 text-red-600 mx-auto mb-6" />
        <h1 className="text-4xl font-bold mb-6">Thank You for Your Life-Saving Donation!</h1>
        <p className="text-lg mb-8">
          Your generous donation today is a gift of hope for those in need. You've made a difference 
          in the lives of many, and we couldn't be more grateful for your selflessness.
        </p>
        
        <div className="bg-red-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4">What's Next?</h2>
          <ul className="text-left space-y-4">
            <li className="flex items-start">
              <span className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-1">1</span>
              <div>
                <strong>Stay Safe:</strong> Make sure to rest and hydrate. Your well-being is important to us.
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-1">2</span>
              <div>
                <strong>Track Your Impact:</strong> We'll notify you once your donation has been used to help someone in need.
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-1">3</span>
              <div>
                <strong>Spread the Word:</strong> Encourage others to join you in giving the gift of life.
              </div>
            </li>
          </ul>
        </div>
        
        <p className="text-xl font-bold text-red-600">You are a true hero!</p>
      </div>
    </div>
  );
}