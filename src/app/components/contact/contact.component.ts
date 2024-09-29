import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass'],
})
export class ContactComponent implements OnInit {
  startAnimation = '';

  myEmail = 'karolinakowalczyk1999@gmail.com';

  form: FormGroup = this.fb.group({
    from_name: new FormControl('', [Validators.required]),
    // to_name: 'Me',
    from_email: new FormControl('', [Validators.required, Validators.email]),
    subject: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required]),
  });

  private readonly templateParams = {
    to_name: 'Karolina',
    from_name: 'Test Person',
    from_email: 'test@gmail.com',
    subject: 'Test Subject',
    message: 'This is test message',
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.startAnimation = 'start-animation';
  }

  sendEmail() {
    // emailjs.send('service_b7cmyym', 'template_i8dud5l', {
    //   to_name: 'Karolina',
    //   from_name: 'Test Person',
    //   from_email: 'test@gmail.com',
    //   subject: 'Test Subject',
    //   message: 'This is test message',
    // });

    emailjs
      .send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this.templateParams, {
        publicKey: 'YOUR_PUBLIC_KEY',
      })
      .then(
        (response) => {
          //show success toast
          console.log('SUCCESS!', response.status, response.text);
        },
        (err) => {
          //show error toast
          console.log('FAILED...', err);
        }
      );
  }
}
