import React from 'react';
import { FormField } from './FormField';

interface EmergencyContactFormProps {
  formData: any;
  onChange: (field: string, value: string) => void;
}

export function EmergencyContactForm({ formData, onChange }: EmergencyContactFormProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Emergency Contact</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <FormField
          label="Contact Name"
          type="text"
          value={formData.emergencyContact?.name || ''}
          onChange={(value) => onChange('emergencyContact.name', value)}
          required
        />
        <FormField
          label="Contact Phone"
          type="tel"
          value={formData.emergencyContact?.phone || ''}
          onChange={(value) => onChange('emergencyContact.phone', value)}
          required
        />
        <FormField
          label="Relationship"
          type="text"
          value={formData.emergencyContact?.relationship || ''}
          onChange={(value) => onChange('emergencyContact.relationship', value)}
          required
        />
      </div>
    </div>
  );
}