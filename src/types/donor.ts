export interface Donor {
  fullName: string;
  dateOfBirth: string;
  gender: string;
  phone: string;
  email: string;
  address: string;
  bloodType: string;
  lastDonation: string;
  emergencyContact: {
    name: string;
    phone: string;
    relationship: string;
  };
  healthScreening: {
    lastDonation: string;
    recentIllness: boolean;
    medications: boolean;
    recentTravel: boolean;
    chronicConditions: boolean;
  };
}