import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass'],
})
export class ProjectsComponent {
  startAnimation = '';

  ngOnInit() {
    this.startAnimation = 'start-animation';
  }
}
