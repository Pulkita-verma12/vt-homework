import { Component } from '@angular/core';


@Component({
  selector: 'app-mouseover',
  standalone: true,
  templateUrl: './mouseover.html',
  styleUrls: ['./mouseover.css']
})
export class Mouseover {
  message = 'Hover over the box!';


  onMouseOver() {
    this.message = 'Mouse is over!';
    // this.msg = this.myservice.getMessage();
  }

  onMouseOut() {
    this.message = 'Mouse left!';
  }
}

