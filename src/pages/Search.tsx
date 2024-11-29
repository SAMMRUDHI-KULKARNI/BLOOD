import React, { useState } from 'react';
import type { Donor } from '../types/donor';

export function Search() {
  const [searchParams, setSearchParams] = useState({
    location: '',
    bloodType: ''
  });

  const [results, setResults] = useState<Donor[]>([]);

  const handleSearch = () => {
    const donors = JSON.parse(localStorage.getItem('donors') || '[]') as Donor[];
    const filtered = donors.filter((donor) => {
      const locationMatch = !searchParams.location || 
        (donor.address && donor.address.toLowerCase().includes(searchParams.location.toLowerCase()));
      const bloodTypeMatch = !searchParams.bloodType || donor.bloodType === searchParams.bloodType;
      return locationMatch && bloodTypeMatch;
    });
    setResults(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Find Blood Donors</h1>
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Location</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                value={searchParams.location}
                onChange={(e) => setSearchParams({...searchParams, location: e.target.value})}
                placeholder="Enter city or area"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Blood Type</label>
              <select
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                value={searchParams.bloodType}
                onChange={(e) => setSearchParams({...searchParams, bloodType: e.target.value})}
              >
                <option value="">All Types</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>
          </div>
          <button
            onClick={handleSearch}
            className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors"
          >
            Search Donors
          </button>
          
          <div className="mt-8">
            {results.length === 0 ? (
              <p className="text-center text-gray-500">No donors found matching your criteria</p>
            ) : (
              results.map((donor, index) => (
                <div key={index} className="border-b border-gray-200 py-4 hover:bg-gray-50">
                  <h3 className="font-bold text-lg text-gray-900">{donor.fullName}</h3>
                  <div className="mt-2 grid grid-cols-2 gap-4 text-sm text-gray-600">
                    <p>Blood Type: <span className="font-semibold text-red-600">{donor.bloodType}</span></p>
                    <p>Location: {donor.address}</p>
                    <p>Contact: {donor.phone}</p>
                    <p>Last Donation: {donor.lastDonation || 'Not available'}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}