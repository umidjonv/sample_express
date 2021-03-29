export class Employee {
    public id:number = 0;
    public name:string = "default";
    public surname:string = "default";
    public age:number = 0;
    public department:string = "default";

    constructor(init?:Employee)
    {
        Object.assign(this, init);
    }

}