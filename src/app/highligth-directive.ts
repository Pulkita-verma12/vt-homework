import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighligthDirective]'
})
export class HighligthDirective {

  constructor(el : ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
   }
}
