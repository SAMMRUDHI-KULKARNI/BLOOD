import React from 'react';

interface FormFieldProps {
  label: string;
  type: 'text' | 'email' | 'tel' | 'date' | 'select' | 'radio';
  value: string;
  onChange: (value: string) => void;
  options?: Array<{ value: string; label: string }>;
  required?: boolean;
}

export function FormField({ label, type, value, onChange, options, required }: FormFieldProps) {
  const baseInputClasses = "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500";

  const renderInput = () => {
    switch (type) {
      case 'select':
        return (
          <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={baseInputClasses}
            required={required}
          >
            <option value="">Select...</option>
            {options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );
      case 'radio':
        return (
          <div className="mt-2 space-y-2">
            {options?.map((option) => (
              <label key={option.value} className="inline-flex items-center mr-4">
                <input
                  type="radio"
                  value={option.value}
                  checked={value === option.value}
                  onChange={(e) => onChange(e.target.value)}
                  className="text-red-600 focus:ring-red-500"
                  required={required}
                />
                <span className="ml-2">{option.label}</span>
              </label>
            ))}
          </div>
        );
      default:
        return (
          <input
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={baseInputClasses}
            required={required}
          />
        );
    }
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {renderInput()}
    </div>
  );
}