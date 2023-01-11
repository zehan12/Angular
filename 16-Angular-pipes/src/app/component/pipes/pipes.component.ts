import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/Employee';
@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  public employee:Employee = {
    sno:"aa101",
    name:"Anamika",
    age:20,
    designation:"Software Engineer",
    doj:new Date(),
    salary:50000
  }
  constructor() { }

  ngOnInit(): void {
  }

}
