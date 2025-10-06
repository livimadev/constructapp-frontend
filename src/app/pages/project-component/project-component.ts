import { Component } from '@angular/core';
import { Project } from '../../model/project';
import { ProjectService } from '../../services/project-service';

@Component({
  selector: 'app-project',
  imports: [],
  templateUrl: './project-component.html',
  styleUrl: './project-component.css'
})
export class ProjectComponent {
  projects: Project[];
  
    constructor(private projectService: ProjectService){}
  
    ngOnInit(): void{
      this.projectService.findAll().subscribe(data => this.projects = data);
    }
}
