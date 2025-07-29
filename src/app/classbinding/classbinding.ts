import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-classbinding',
  imports: [CommonModule],
  templateUrl: './classbinding.html',
  styleUrl: './classbinding.css'
})
export class Classbinding {
     title='helloworld';
    currentClass= 'text-blue';
    isActive = true;
    isHighlighted = false;
    isError = true;
    isHidden = true;
}
