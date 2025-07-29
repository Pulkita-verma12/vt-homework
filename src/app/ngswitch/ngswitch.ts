import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ngswitch',
  imports: [CommonModule,FormsModule],
  templateUrl: './ngswitch.html',
  styleUrl: './ngswitch.css'
})
export class Ngswitch {
  selectedColor = "red" ;
}
