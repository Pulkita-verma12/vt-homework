import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-submit',
  imports: [FormsModule, CommonModule],
  templateUrl: './submit.html',
  styleUrl: './submit.css'
})
export class Submit {
  message = 'Submit your data!';
  name = '';
  email = '';
  submitted = false;

  onSubmit() {
    this.submitted = true;
    this.message = 'Data submitted successfully!';
    console.log('Form submitted');
    console.log('Name:', this.name);
    console.log('Email:', this.email);
  }

  onReset() {
    this.message = 'Form reset!';
    this.name = '';
    this.email = '';
    this.submitted = false;
    console.log('Form reset');
  }
}
