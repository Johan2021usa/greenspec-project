import { CommonModule } from '@angular/common';
import { Component, ErrorHandler } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { environment } from '../../../environments/environment.development';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./form-styles/form-styles.css', './contact.component.css']
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
       if(!environment.SERVICE_KEY || !environment.TEMPLATE_KEY || !environment.PUBLIC_KEY){
        throw new Error("Not env variables");
       }

      emailjs
        .send(
          environment.SERVICE_KEY,
          environment.TEMPLATE_KEY,
          templateParams,
          {
            publicKey: environment.PUBLIC_KEY,
          }
        )
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
