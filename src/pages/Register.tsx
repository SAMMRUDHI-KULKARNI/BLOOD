import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PersonalInfoForm } from '../components/forms/PersonalInfoForm';
import { HealthScreeningForm } from '../components/forms/HealthScreeningForm';
import { EmergencyContactForm } from '../components/forms/EmergencyContactForm';
import type { Donor } from '../types/donor';

export function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<Partial<Donor>>({
    fullName: '',
    dateOfBirth: '',
    gender: '',
    phone: '',
    email: '',
    address: '',
    bloodType: '',
    emergencyContact: {
      name: '',
      phone: '',
      relationship: '',
    },
    healthScreening: {
      lastDonation: '',
      recentIllness: false,
      medications: false,
      recentTravel: false,
      chronicConditions: false,
    },
  });

  const handleChange = (field: string, value: any) => {
    setFormData((prev) => {
      const newData = { ...prev };
      const fields = field.split('.');
      let current: any = newData;
      
      for (let i = 0; i < fields.length - 1; i++) {
        if (!current[fields[i]]) {
          current[fields[i]] = {};
        }
        current = current[fields[i]];
      }
      current[fields[fields.length - 1]] = value;
      
      return newData;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const donors = JSON.parse(localStorage.getItem('donors') || '[]');
    donors.push(formData);
    localStorage.setItem('donors', JSON.stringify(donors));
    navigate('/thank-you');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Donor Registration</h1>
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <div className="space-y-8">
            <PersonalInfoForm formData={formData} onChange={handleChange} />
            <HealthScreeningForm formData={formData} onChange={handleChange} />
            <EmergencyContactForm formData={formData} onChange={handleChange} />
            
            <button
              type="submit"
              className="w-full bg-red-600 text-white py-3 px-4 rounded-md hover:bg-red-700 transition-colors"
            >
              Register as Donor
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}