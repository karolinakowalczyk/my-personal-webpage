import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Project } from 'src/app/interfaces/project';

@Component({
  selector: 'app-project-info-dialog',
  templateUrl: './project-info-dialog.component.html',
  styleUrls: ['./project-info-dialog.component.sass'],
})
export class ProjectInfoDialogComponent {
  currentSlide = 0;
  constructor(@Inject(MAT_DIALOG_DATA) public data: { project: Project }) {}

  nextSlide() {
    this.currentSlide =
      (this.currentSlide + 1) % this.data.project.slides.length;
  }

  previousSlide() {
    this.currentSlide =
      (this.currentSlide - 1 + this.data.project.slides.length) %
      this.data.project.slides.length;
  }

  selectSlide(index: number) {
    this.currentSlide = index;
  }
}
