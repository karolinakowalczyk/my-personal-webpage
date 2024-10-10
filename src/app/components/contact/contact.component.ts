import { Component, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import emailjs from '@emailjs/browser';
import { emailJsData } from 'src/app/data/emailjsdata';
import { SuccessMessageComponent } from '../common/success-message/success-message.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass'],
})
export class ContactComponent {
  @ViewChild('emailFormDirective') emailFormDirective: FormGroupDirective;

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

  private snackBarConfig: MatSnackBarConfig = {
    duration: 3000,
    horizontalPosition: 'end',
    verticalPosition: 'top',
  };

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) {}

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
            this.snackBar.openFromComponent(SuccessMessageComponent, {
              data: 'Your message was sent successfully!',
              ...this.snackBarConfig,
            });
            this.emailFormDirective.resetForm();
            this.emailForm.reset();
            this.isSending = false;
          },
          (err) => {
            this.snackBar.openFromComponent(SuccessMessageComponent, {
              data: 'An error occured. Please try again later.',
              ...this.snackBarConfig,
            });
            this.isSending = false;
          }
        );
    }
  }
}
