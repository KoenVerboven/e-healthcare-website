export interface AppointmentSpecParams{
    patientId?:number;
    doctorId?:number;
    startDate?: Date;
    endDate?: Date;
    sort: string;
    pageSize: number;
    pageNumber: number;
}