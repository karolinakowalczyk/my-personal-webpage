import { animate, style, transition, trigger } from '@angular/animations';
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatTabHeaderPosition } from '@angular/material/tabs';
import { MatDialog } from '@angular/material/dialog';
import { MenuDialogComponent } from './components/menu-dialog/menu-dialog.component';

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
  encapsulation: ViewEncapsulation.None,
  animations: [fadeIn],
})
export class AppComponent {
  @ViewChild('appContainer') appContainer: HTMLElement;
  currentTabIndex = 0;
  position = 'below' as MatTabHeaderPosition;
  fullName = 'Name surname';

  constructor(public dialog: MatDialog) {}

  tabChanged($event: number): void {
    this.currentTabIndex = $event;
    this.currentTabIndex === 0
      ? (this.position = 'below')
      : (this.position = 'above');
  }

  openMenuDialog() {
    const mobileMenuDialog = this.dialog.open(MenuDialogComponent, {
      height: '100%',
      width: '100%',
      autoFocus: false,
      data: {
        activeTab: this.currentTabIndex,
      },
    });

    const sub = mobileMenuDialog.componentInstance.indexChanged.subscribe(
      (index) => {
        this.currentTabIndex = index;
      }
    );
    mobileMenuDialog.afterClosed().subscribe(() => {
      sub.unsubscribe();
    });
  }
}
