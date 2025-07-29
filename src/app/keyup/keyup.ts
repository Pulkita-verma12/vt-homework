import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-keyup',
  imports: [FormsModule],
  templateUrl: './keyup.html',
  styleUrl: './keyup.css'
})
export class Keyup {
    typedValue = 'keyup';

  onKeyUp() {
    console.log('User typed:', this.typedValue);
}
}
