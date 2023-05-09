import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap, map, ReplaySubject, Subject, BehaviorSubject, catchError } from "rxjs";
import { Data} from "../Projects/projects.model.js";
import { MatTableDataSource } from "@angular/material/table/index.js";


@Injectable({
    providedIn: 'root'
  })

export class ProjectService {
  private projectsURL =  "api/projects/data.json";
  
  searchProject = new BehaviorSubject<string>('');

  constructor(private http: HttpClient){}
  


  //Returns an observable which fetches all the projects data when subscribed to it, by making a GET request to the specified projectsURL.
  getProjects(): Observable<any> {
    return this.http.get<any>(this.projectsURL).pipe(map(res => res.teDhenat));
  }
  
  postProject(data:any){
    return this.http.post<any>("http://localhost:3000/teDhenat",data);
  }
  delete(id:string){
    console.log("Hello from service")
  }
  


  //Takes a project id as an input, and returns an observable that emits a project that matches the passed id.
  getProjectById(id: string): Observable<Data | undefined> {
    return this.getProjects()
    .pipe(
      map((projects: Data[]) => projects.find(project => project['id'] === id))
      );
    }
  //Takes a string value as input and returns an observable that emits an array of projects that match the passed type.
  getProjectByType(type: string) {
    return this.getProjects().pipe(
      map((projects: Data[]) => projects.filter(project => project['projectType'] === type)),
      //tap(data => console.log( 'Specified', JSON.stringify(data)))
      );
    }
  //Takes the name of the client as input, and returns an observable that emits an array of projects that match the passed name.
  getProjectsByName(name:string) {
    return this.getProjects().pipe(
      map((projects: Data[])=> projects.filter(project => project['clientInfo'].name === name))
      //tap(data => console.log( 'Specified', JSON.stringify(data)))
    )
  }
  //Takes an input value as a string and sets it as the next value of the searchProject BehaviorSubject.
  setSearchProject(value:string){
    this.searchProject.next(value)
  }

  /*Filters the data passed to it based on the name of the client in the data,
  by subscribing to the searchProject and applying the filterPredicate on the dataSource passed to it.*/
  filterByName(dataSource: MatTableDataSource<Data>) {
    this.searchProject.subscribe(searchProject => {
        dataSource.filterPredicate = (data: Data, filter: string) => data['clientInfo'].name.toLowerCase().includes(filter.trim().toLowerCase());
        dataSource.filter = searchProject;
    });
  }
}
