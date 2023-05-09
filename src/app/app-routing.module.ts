import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent } from './Home/home-screen.component';
import { ProjectsScreenComponent } from './Projects-Module/Projects/projects-screen.component';
import { ProjectDetailGuard } from "./Projects-Module/Projects/project-detail.guard";
import { MoreComponent } from './Projects-Module/Details/more.component';
import { SettingsComponent } from './Projects-Module/Projects-Submenu/settings/settings.component';
import { DashboardComponent } from './Projects-Module/Projects-Submenu/dashboard/dashboard.component';
import { ListComponent } from './Projects-Module/Projects-Submenu/list/list.component';
import { ProjectsFormComponent } from './Projects-Module/projects-form/projects-form.component';
import { ModalDialogComponent } from './Components/hehe';

const routes: Routes = 
[
  
  { path: 'home', component: HomeScreenComponent },
  { path: '', redirectTo:'home',  pathMatch: 'full'},
  { path: 'hehe',component: ModalDialogComponent},
  { path: 'projects/form',component: ProjectsFormComponent},
  { path: 'projects/:id',canActivate: [ProjectDetailGuard],component: MoreComponent},
  { path: 'projects/:type', canActivate: [ProjectDetailGuard], component: ProjectsScreenComponent,
    children: [
      { path: 'settings', component: SettingsComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'list', component: ListComponent },
    ]
  },
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
