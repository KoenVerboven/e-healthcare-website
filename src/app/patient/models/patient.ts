export interface Patient {
  id: number;
  name: string;
  dateOfBirth: Date;
  gender: string;
  address: string;
  phoneNumber: string;
  email: string;
  insuranceNumber: string;
  insuranceProvider: string;
  insuranceExpiryDate: Date;
  emergencyContactName: string;
  emergencyContactPhoneNumber: string;
  emergencyContactDescription: string;
}

