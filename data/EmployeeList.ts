import { Employee } from './Employee';

export class EmployeeList{

    public Employees:Array<Employee> = [];

    constructor()
    {
        this.Employees = [
            new Employee({
                id: 1,
                name : "Tom",
                surname : "Holland",
                age : 28,
                department : "Artists"
            }),

            new Employee({
                id: 2,
                name : "Elisabeth",
                surname : "Tailor",
                age : 35,
                department : "Artists"
            }),

            new Employee({
                id: 3,
                name : "Gary",
                surname : "Oldman",
                age : 40,
                department : "Artists"
            }),

            new Employee({
                id: 4,
                name : "Robert",
                surname : "Downey Jr.",
                age : 28,
                department : "Artists"
            }),
        ];
    }

}

