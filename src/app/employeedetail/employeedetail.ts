import { Component, OnInit } from '@angular/core';
import { Myservice } from '../myservice';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employeedetail',
  imports: [CommonModule],
  providers: [Myservice],
  templateUrl: './employeedetail.html',
  styleUrl: './employeedetail.css'
})
export class Employeedetail implements OnInit {
  employees: any[] = [];
  constructor(private myservice: Myservice) {
    // this.employees = this.myservice.getEmployees();
  }
  ngOnInit() {
    this.employees = this.myservice.getEmployees();
  }
}
