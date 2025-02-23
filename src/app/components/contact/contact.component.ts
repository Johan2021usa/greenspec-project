import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  contactForm!: FormGroup;


  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {

    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contactReason: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

 
  onSubmit(): void {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        contact_reason: formData.contactReason,
        message: formData.message
      };

      emailjs
        .send('service_c2wa1bs', 'template_p9l4wdg', templateParams, {
          publicKey: 'E_YIPa7pHxNqXZHEf',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          
          },
          (error:any) => {
            console.log('FAILED...', (error as EmailJSResponseStatus).text);
           
          }
        );
    } else {
      console.log('Form is not valid');
     
    }
  }
}
