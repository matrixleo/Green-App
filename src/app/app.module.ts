import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidemenuComponent } from './SideNav/sidemenu.component';
import { HomeScreenComponent } from './Home/home-screen.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from 'src/material/material.module';
import { FooterComponent } from './Footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TeamProjectComponent } from './team-project/team-project.component';
import { ProjectsScreenComponent } from './Projects-Module/Projects/projects-screen.component';
import { MoreComponent } from './Projects-Module/Details/more.component';
import { SettingsComponent } from './Projects-Module/Projects-Submenu/settings/settings.component';
import { DashboardComponent } from './Projects-Module/Projects-Submenu/dashboard/dashboard.component';
import { ListComponent } from './Projects-Module/Projects-Submenu/list/list.component';
import { PrintButtonComponent } from './Components/print-button/print-button.component';
import { ListTemplateComponent } from './Components/list-template/list-template.component';
import { ProjectsFormComponent } from './Projects-Module/projects-form/projects-form.component'
import { ModalDialogComponent } from'./Components/hehe'

@NgModule({
  declarations: [
    AppComponent,
    SidemenuComponent,
    HomeScreenComponent,
    FooterComponent,
    ProjectsScreenComponent,
    TeamProjectComponent,
    MoreComponent,
    SettingsComponent,
    DashboardComponent,
    ListComponent,
    PrintButtonComponent,
    ListTemplateComponent,
    ProjectsFormComponent,
    ModalDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
