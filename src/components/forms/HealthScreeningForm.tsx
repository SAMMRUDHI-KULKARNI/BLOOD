import React from 'react';
import { FormField } from './FormField';

interface HealthScreeningFormProps {
  formData: any;
  onChange: (field: string, value: boolean) => void;
}

export function HealthScreeningForm({ formData, onChange }: HealthScreeningFormProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Health Screening</h2>
      <div className="space-y-4">
        <FormField
          label="Have you donated blood in the last 3 months?"
          type="radio"
          value={formData.healthScreening?.recentDonation}
          onChange={(value) => onChange('healthScreening.recentDonation', value === 'true')}
          options={[
            { value: 'true', label: 'Yes' },
            { value: 'false', label: 'No' }
          ]}
          required
        />
        <FormField
          label="Have you had any recent illnesses or infections?"
          type="radio"
          value={formData.healthScreening?.recentIllness}
          onChange={(value) => onChange('healthScreening.recentIllness', value === 'true')}
          options={[
            { value: 'true', label: 'Yes' },
            { value: 'false', label: 'No' }
          ]}
          required
        />
        <FormField
          label="Are you currently taking any medications?"
          type="radio"
          value={formData.healthScreening?.medications}
          onChange={(value) => onChange('healthScreening.medications', value === 'true')}
          options={[
            { value: 'true', label: 'Yes' },
            { value: 'false', label: 'No' }
          ]}
          required
        />
      </div>
    </div>
  );
}