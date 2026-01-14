import { Component } from '@angular/core';
import { FormGroup,FormControl,ReactiveFormsModule, Validators } from '@angular/forms'
import { ThankYou } from '../thank-you/thank-you';

@Component({
  selector: 'app-form-interview',
  imports: [ReactiveFormsModule, ThankYou],
  templateUrl: './form-interview.html',
  styleUrl: './form-interview.scss',
})
export class FormInterview {
  isModalOpen = false;

  interviewForm = new FormGroup({
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    company: new FormControl('', Validators.required),
    job: new FormControl('', Validators.required)
  })

  // Add this method to handle the button click
  onSubmit() {
    if (this.interviewForm.valid) {
      this.isModalOpen = true;
      console.log('Form Data:', this.interviewForm.value);
      this.interviewForm.reset();
    }
  }
}
