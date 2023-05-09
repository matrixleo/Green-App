import { Component } from '@angular/core';
import { SidenavService } from './sidenav-service/sidenav.service';
import { Menu, MenuDetails, SubMenu } from './sidenav-models/sidenav.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent {
  showFiller = false;
  selectedSubmenu: any;
  details: any[] = [];
  projects:any = [];
  
  constructor(private sidenavService: SidenavService, private router:Router) {}

  ngOnInit() {
    this.getmenu()
  }
  
  
  
  getmenu(){
    this.sidenavService.getMenuDetails().subscribe(res => {
      this.details = res;
      this.projects = res.menuDetails
    });
  }
  
 
  
  back(){
    this.showFiller = !this.showFiller;
    this.router.navigate(['/home']);
  }
  handleClick(submen:any) {
    this.selectedSubmenu= submen;
    this.showFiller = !this.showFiller;
  }

  navigoHome(item:any){
    switch(item.name){
      case "Home":
      this.router.navigate(['/home'])
      break;
      }
  }

  navigateChild(selectedSubmenu:any,about:any){
    switch(about.name) {
          case 'Settings':
            this.router.navigate(['/projects/' + selectedSubmenu.name + '/settings']);
            break;
          case 'Dashboard':
            this.router.navigate(['/projects/' + selectedSubmenu.name + '/dashboard']);
            break;
          case 'List':
            this.router.navigate(['/projects/'  + selectedSubmenu.name + '/list'], {state: {projectType: selectedSubmenu.name}});
            break;
        }
    }

    
}
