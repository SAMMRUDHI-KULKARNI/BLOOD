import React from 'react';
import { FormField } from './FormField';

interface PersonalInfoFormProps {
  formData: any;
  onChange: (field: string, value: string) => void;
}

export function PersonalInfoForm({ formData, onChange }: PersonalInfoFormProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Personal Information</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <FormField
          label="Full Name"
          type="text"
          value={formData.fullName}
          onChange={(value) => onChange('fullName', value)}
          required
        />
        <FormField
          label="Date of Birth"
          type="date"
          value={formData.dateOfBirth}
          onChange={(value) => onChange('dateOfBirth', value)}
          required
        />
        <FormField
          label="Gender"
          type="select"
          value={formData.gender}
          onChange={(value) => onChange('gender', value)}
          options={[
            { value: 'male', label: 'Male' },
            { value: 'female', label: 'Female' },
            { value: 'other', label: 'Other' }
          ]}
          required
        />
        <FormField
          label="Phone Number"
          type="tel"
          value={formData.phone}
          onChange={(value) => onChange('phone', value)}
          required
        />
        <FormField
          label="Email"
          type="email"
          value={formData.email}
          onChange={(value) => onChange('email', value)}
          required
        />
        <FormField
          label="Address"
          type="text"
          value={formData.address}
          onChange={(value) => onChange('address', value)}
          required
        />
      </div>
    </div>
  );
}