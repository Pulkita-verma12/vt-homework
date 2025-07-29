import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-stylebinding',
  imports: [CommonModule],
  templateUrl: './stylebinding.html',
  styleUrl: './stylebinding.css'
})
export class Stylebinding {
    fontsize = 5;
    hasError= false;
}
