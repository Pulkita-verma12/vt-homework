import { Component, OnInit } from '@angular/core';
import { Myservice } from '../myservice';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employeelist',
  imports: [CommonModule],
  providers: [Myservice],
  templateUrl: './employeelist.html',
  styleUrl: './employeelist.css'
})
export class Employeelist implements OnInit {
  employees: any[] = [];
  constructor(private myservice: Myservice) {
  }
  ngOnInit() {
    this.employees = this.myservice.getEmployees();
  }
}
