import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-keydown',
  imports: [FormsModule],
  templateUrl: './keydown.html',
  styleUrl: './keydown.css'
})
export class Keydown {
  typedValue = 'keydown';

  onKeyDown(event: KeyboardEvent) {
    this.typedValue = (event.target as HTMLInputElement).value;
    console.log('User typed:', this.typedValue);
  }
}

