import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.sass'],
})
export class ProjectInfoComponent {
  @Input() text: string;
  openProjectDialog() {
    console.log('open dialog');
  }
}
