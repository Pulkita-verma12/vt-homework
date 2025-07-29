import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  imports: [],
  templateUrl: './event-binding.html',
  styleUrl: './event-binding.css'
})
export class EventBinding {
  click : any;
  clickButton() {
    this.click = "Button was clicked!";
  }
  onInput(event:Event){
    const input = event.target as HTMLInputElement;
    console.log(input.value);
  }
  addToCart(product:any){
    console.log('added to cart:',product)
  }
}
