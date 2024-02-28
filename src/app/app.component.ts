import { animate, style, transition, trigger } from '@angular/animations';
import { Component, ViewChild } from '@angular/core';
import { MatTabHeaderPosition } from '@angular/material/tabs';

const enterTransition = transition(':enter', [
  style({
    opacity: 0,
  }),
  animate('0.6s ease-in', style({ opacity: 1 })),
]);
const fadeIn = trigger('fadeIn', [enterTransition]);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  animations: [fadeIn],
})
export class AppComponent {
  @ViewChild('appContainer') appContainer: HTMLElement;
  currentTabIndex = 0;
  position = 'below' as MatTabHeaderPosition;

  tabChanged($event: number): void {
    this.currentTabIndex = $event;
    this.currentTabIndex === 0
      ? (this.position = 'below')
      : (this.position = 'above');
  }
}
