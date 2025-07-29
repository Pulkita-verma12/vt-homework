import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ngif-else',
  imports: [CommonModule],
  templateUrl: './ngif-else.html',
  styleUrl: './ngif-else.css'
})
export class NgifElse {
    isLoggedIn = true;
}
