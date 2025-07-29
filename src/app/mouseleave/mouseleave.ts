import { Component } from '@angular/core';


@Component({
  selector: 'app-mouseleave',
  imports: [],
  templateUrl: './mouseleave.html',
  styleUrl: './mouseleave.css'
})
export class Mouseleave {
  message = 'Mouse is outside the box!';

  onMouseLeave() {
    this.message = 'Mouse left the box!';
  }
}
