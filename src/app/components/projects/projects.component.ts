import { Component, inject } from '@angular/core';
import { Project } from 'src/app/interfaces/project';
import { projectsData } from '../../data/projects-data';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass'],
})
export class ProjectsComponent {
  startAnimation = '';
  projects: Project[];

  ngOnInit() {
    this.startAnimation = 'start-animation';

    this.projects = projectsData;
  }
}
