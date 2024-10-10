import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-success-message',
  templateUrl: './success-message.component.html',
  styleUrls: ['./success-message.component.sass'],
})
export class SuccessMessageComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public message: string) {}
}
