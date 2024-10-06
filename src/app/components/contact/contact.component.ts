import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';
import emailjs from '@emailjs/browser';
import { emailJsData } from 'src/app/data/emailjsdata';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass'],
})
export class ContactComponent implements OnInit {
  @ViewChild('emailFormDirective') emailFormDirective: FormGroupDirective;

  startAnimation = '';

  myEmail = 'karolinakowalczyk1999@gmail.com';

  myName = 'Karolina';

  protected isSending: boolean = false;

  emailForm: FormGroup = this.fb.group({
    fromName: new FormControl('', [Validators.required]),
    fromEmail: new FormControl('', [Validators.required, Validators.email]),
    subject: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required]),
  });

  private templateParams = {
    to_name: this.myName,
    from_name: this.emailForm.value.fromName,
    from_email: this.emailForm.value.fromEmail,
    subject: this.emailForm.value.subject,
    message: this.emailForm.value.message,
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.startAnimation = 'start-animation';
  }

  assignCurrentFormValuesToTemplateParams() {
    this.templateParams = {
      to_name: this.myName,
      from_name: this.emailForm.value.fromName,
      from_email: this.emailForm.value.fromEmail,
      subject: this.emailForm.value.subject,
      message: this.emailForm.value.message,
    };
  }

  sendEmail() {
    if (this.emailForm.valid) {
      this.assignCurrentFormValuesToTemplateParams();
      this.isSending = true;
      emailjs
        .send(
          emailJsData.serviceId,
          emailJsData.templateId,
          this.templateParams,
          {
            publicKey: emailJsData.publicKey,
          }
        )
        .then(
          (response) => {
            //show success toast
            console.log('SUCCESS!', response.status, response.text);
            this.emailFormDirective.resetForm();
            this.emailForm.reset();
            this.isSending = false;
          },
          (err) => {
            //show error toast
            console.log('FAILED...', err);
            this.isSending = false;
          }
        );
    }
  }
}
