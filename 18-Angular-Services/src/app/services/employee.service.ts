import { Injectable } from '@angular/core';
import {Employee} from "../models/Employee"
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employee:Employee = {
    sno:"aa101",
    name:"Anamika",
    age:20,
    designation:"Software Engineer",
    doj:new Date(),
    salary:50000
  }
  constructor() { }
  public getEmployee():Employee{
    return this.employee;
  }
}
