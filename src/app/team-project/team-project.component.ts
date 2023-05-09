import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-team-project',
  templateUrl: './team-project.component.html',
  styleUrls: ['./team-project.component.css']
})
export class TeamProjectComponent {
  @Input()
    project:any;

}
