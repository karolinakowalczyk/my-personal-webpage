import { Component, Inject, inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ProjectInfoDialogComponent } from '../project-info-dialog/project-info-dialog.component';
import { Project } from 'src/app/interfaces/project';

@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.sass'],
})
export class ProjectInfoComponent {
  @Input() project: Project;

  constructor(private dialog: MatDialog) {}

  openProjectDialog() {
    this.dialog.open(ProjectInfoDialogComponent, {
      autoFocus: false,
      data: {
        project: this.project,
      },
    });
  }
}
