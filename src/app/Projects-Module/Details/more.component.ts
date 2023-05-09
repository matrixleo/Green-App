import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Data } from '@angular/router';
import {ProjectService} from "../project-service/projects.service";

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.css']
})
export class MoreComponent {
  project: Data | undefined;

  componentName = 'details';

  setComponent(name: string) {
    this.componentName = name;
  }
  constructor(private route:ActivatedRoute, private router:Router, private ProjectService:ProjectService) {}


  ngOnInit():void{
    const id = String(this.route.snapshot.paramMap.get('id'));
    if(id){
      this.getProject(id);
    }
  }
  getProject(id:string):void{
   this.ProjectService.getProjectById(id).subscribe({
      next: project => this.project = project
    })
  }
}
