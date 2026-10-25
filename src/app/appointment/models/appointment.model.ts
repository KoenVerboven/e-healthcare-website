export interface Appointment {
  id:number;
  patientid : number;
  startdate: Date;
  status:number;
  cancellationReason:string;
  notes:string;
}