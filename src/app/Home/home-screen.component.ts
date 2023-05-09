import { Component } from '@angular/core';
import { Menu, MenuDetails } from '../SideNav/sidenav-models/sidenav.model';
import { SidenavService } from '../SideNav/sidenav-service/sidenav.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent {
  roofing: string = 'Roofing is the process of constructing or repairing the roof of a building. It involves installing materials such as shingles, tiles, or metal panels to protect the building from the elements, such as rain, snow, and wind. Roofing work can be physically demanding, as it often involves working at heights and in all weather conditions.';
  construction: string = '';
  restoration: string = '';

  details: MenuDetails[] = [];
  projects:any;

  constructor(private sidenavService: SidenavService, private router:Router){}


  ngOnInit(){
    this.sidenavService.getMenuDetails().subscribe(res => {
      this.details = res;
      this.projects = res.menuDetails
    });
  }

  navigo(submen:any){
    if(submen.name ==="All"){
      this.router.navigate(['projects/All/list'])
    }
    else if(submen.name ==="Restoration"){
      this.router.navigate(['projects/form'])
    }
    else if(submen.name ==="Construction"){
      this.router.navigate(['projects/form'])
    }
    else if(submen.name ==="Roofing"){
      this.router.navigate(['projects/form'])
    }
  }



}