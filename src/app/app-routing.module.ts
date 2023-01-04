import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScreenComponent } from './Screens/screen/screen.component';
import { HomeScreenComponent } from './Screens/home-screen/home-screen.component';
import { ProjectsScreenComponent } from './Screens/projects-screen/projects-screen.component';
import { RoofingScreenComponent } from './Screens/projects-screen/roofing-screen/roofing-screen.component';
import { RestorationScreenComponent } from './Screens/projects-screen/restoration-screen/restoration-screen.component';
import { ConstructionScreenComponent } from './Screens/projects-screen/construction-screen/construction-screen.component';
import {ProjectDetailGuard} from "./Screens/projects-screen/project-detail.guard";
import {DetailsScreenComponent} from "./Screens/projects-screen/details-screen/details-screen.component";
const routes: Routes = [
  {path:'', component: ScreenComponent,
  children : [
    {path: 'home', component:HomeScreenComponent},
    {path:'projects', component: ProjectsScreenComponent},
    {path:'projects/restoration', component:RestorationScreenComponent},
    {path:'projects/construction', component:ConstructionScreenComponent},
    {path:'projects/roofing', component:RoofingScreenComponent},
    {path: 'projects/:id',
      canActivate:[ProjectDetailGuard],
      component:DetailsScreenComponent
    }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
