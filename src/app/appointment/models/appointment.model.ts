export interface Appointment {
  id:number;
  patientid : number;
  patientLastName: string;
  patientFirstName: string;
  patientDateOfBirth: Date;
  doctorLastName: string;
  doctorFirstName: string;
  appointmentDate: Date;
  status:number;
}