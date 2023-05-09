import { Component, Input } from '@angular/core';
import { ProjectService } from 'src/app/Projects-Module/project-service/projects.service';
import { Data } from '../../Projects/projects.model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  
  dataSource: any = new MatTableDataSource<any>([]);
  displayedColumns: string[] = [
    `number`,
    `name`,
    `abbreviation`,
    `projectType`,
    `address`,
    `createdAt`,
    `startDate`,
    `endDate`,
    `edit`,
    `delete`,
    
  ];
  projectType: string = '';

  constructor(private projectService:ProjectService) {

  }

  ngOnInit() { 
    this.projectType = history.state.projectType;
    this.setDataSource();
  }
  deleteUser(id:string){

    // this.projectService.delete(id)(
    //   ()=>console.log("Project with id =" + id + " was deleted"),
    //   (err) => console.log(err)
    // );

    console.log("Id-ja===", id)
  }
  setDataSource(){
    if(this.projectType === 'Restoration'){
      this.projectService.getProjectByType('RESTORATION').subscribe(res => {
        this.dataSource = new MatTableDataSource(res);
        this.projectService.filterByName(this.dataSource);
      });
    }
    else if(this.projectType === 'Construction'){
      this.projectService.getProjectByType('CONSTRUCTION').subscribe(res => {
        this.dataSource = new MatTableDataSource(res);
        this.projectService.filterByName(this.dataSource);
      });
    }else if(this.projectType === 'Roofing'){
      this.projectService.getProjectByType('ROOFING').subscribe(res => {
        this.dataSource = new MatTableDataSource(res);
        this.projectService.filterByName(this.dataSource);
      });
    }
    else{
      this.projectService.getProjects().subscribe(res => {
        this.dataSource = new MatTableDataSource(res);
        this.projectService.filterByName(this.dataSource);
      });
    }
  }
}
