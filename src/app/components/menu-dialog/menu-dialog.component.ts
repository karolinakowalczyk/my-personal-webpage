import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MobileDialogNav } from 'src/app/interfaces/mobile-dialog-nav';

@Component({
  selector: 'app-menu-dialog',
  templateUrl: './menu-dialog.component.html',
  styleUrls: ['./menu-dialog.component.sass'],
})
export class MenuDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: MobileDialogNav) {}

  @Output()
  indexChanged: EventEmitter<number> = new EventEmitter<number>();

  mobileTabChanged($event: number): void {
    this.indexChanged.emit($event);
  }
}
