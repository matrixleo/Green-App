import { Component } from '@angular/core';
import { Subject, debounceTime, interval, takeUntil } from 'rxjs';
import { ProjectService } from '../Projects-Module/project-service/projects.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent{

  dateTime = new Date();
  private $isActive = new Subject<boolean>();
  searchProject = '';
  searchTermChanged = new Subject<string>();

  constructor(private ProjectService: ProjectService) {}

  ngOnInit(){
    this.startClock();
    this.searchTermChanged.pipe(
      debounceTime(400)
    ).subscribe(searchProject => {
        this.ProjectService.setSearchProject(searchProject);
    });
  }

/*onSearch method triggers the next() method on the searchTermChanged variable and sets the searchProject 
  variable to the current value of the input field. Then, it also calls the setSearchProject
  method in the ProjectService and passes the current value of the searchProject variable*/
  onSearch(){
    this.searchTermChanged.next(this.searchProject);
    this.ProjectService.setSearchProject(this.searchProject);
  }

  startClock(){
    interval(1).pipe(takeUntil(this.$isActive)).subscribe(data=>{
      this.dateTime = new Date();
    })
  }

  ngOnDestroy(): void{
    this.$isActive.next(true);
    this.$isActive.unsubscribe();
  }
}
