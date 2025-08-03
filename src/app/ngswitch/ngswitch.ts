import { CommonModule } from '@angular/common';
import { Component, OnChanges, SimpleChanges, DoCheck } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OnInit } from '@angular/core';
import { ReversePipe } from '../reverse.pipe';

@Component({
  selector: 'app-ngswitch',
  imports: [CommonModule, FormsModule, ReversePipe],
  templateUrl: './ngswitch.html',
  styleUrl: './ngswitch.css'
})
export class Ngswitch implements OnChanges, OnInit, DoCheck {
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }
  selectedColor = "red" ;

  users : any[] = [];
  msg:any;

  ngDoCheck() {
    console.log("do check change detected");
  }
  ngOnInit() {
    console.log('ngOnInit - component initialized');
    this.loadData();
  }
  loadData(): void {
    this.users = [
      {
        id : 1,name: 'Priyal Verma',email: 'priyal@example'
      },
      {
        id : 2,name: 'Shreyansh Golchha',email: 'shreyansh@example.com'
      },
      {
        id : 3,name: 'Garv Choure',email: 'garv@example.com'
      }
    ];
    console.log('Data loaded: ', this.users);
  }
}

