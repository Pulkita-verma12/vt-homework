import { CommonModule } from '@angular/common';
import { Component, OnChanges, SimpleChanges, DoCheck, ViewChild, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OnInit } from '@angular/core';
import { ReversePipe } from '../reverse.pipe';
import { CapitalizePipe } from '../capitalise-pipe-pipe';
import { Myservice, Product } from '../myservice';

@Component({
  selector: 'app-ngswitch',
  imports: [CommonModule, FormsModule, ReversePipe,CapitalizePipe],
  providers: [Myservice],
  templateUrl: './ngswitch.html',
  styleUrl: './ngswitch.css'
})
export class Ngswitch implements OnChanges, OnInit, DoCheck {
  // myservice: any;
  constructor(private myservice: Myservice){

}
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }
  selectedColor = "red" ;

  users : any[] = [];
  msg:any;
  product: Product[] =[];

  ngDoCheck() {
    console.log("do check change detected");
  }
  ngOnInit() {
    console.log('ngOnInit - component initialized');
    this.loadData();
    this.msg = this.myservice.getMessage();
    // console.log('Message from Myservice:', this.msg);
    this.myservice.getData().subscribe(data=>{
      console.log('Data from Myservice:', data);
      this.product = data;
    })
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
  @ViewChild('inputRef') inputElement!: ElementRef;
  ngAfterViewInit(): void{
    console.log('ngAfterViewInit called');
    this.inputElement.nativeElement.focus();
  }
}

