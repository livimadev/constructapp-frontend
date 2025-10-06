import { Customer } from "./customer";

export class Project{
    idProject: number;
    name: string;
    location: string;
    startDate: Date;
    estimatedEndDate: Date;
    status: string;
    customer: Customer;
}