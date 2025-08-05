import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Myservice } from '../myservice';

@Component({
  selector: 'app-ngif-else',
  imports: [CommonModule],
  templateUrl: './ngif-else.html',
  providers: [Myservice],
  styleUrl: './ngif-else.css'
})
export class NgifElse {
    isLoggedIn = true;
    msg: any;
    constructor(private myservice: Myservice){
    this.msg = this.myservice.getMessage();
  }
}

