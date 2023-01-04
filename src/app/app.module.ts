import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidemenuComponent } from './sideMenu/sidemenu/sidemenu.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon'; 
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';
import { ScreenComponent } from './Screens/screen/screen.component';
import { HomeScreenComponent } from './Screens/home-screen/home-screen.component';
import { ProjectsScreenComponent } from './Screens/projects-screen/projects-screen.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './modules/material/material.module';
import { RoofingScreenComponent } from './Screens/projects-screen/roofing-screen/roofing-screen.component';
import { ConstructionScreenComponent } from './Screens/projects-screen/construction-screen/construction-screen.component';
import { RestorationScreenComponent } from './Screens/projects-screen/restoration-screen/restoration-screen.component';
import { DetailsScreenComponent } from './Screens/projects-screen/details-screen/details-screen.component';

const Ux_Modules = [
  MatIconModule,
  MatSidenavModule,
  MatMenuModule,
  MatToolbarModule,
  MatButtonModule,
  MatListModule,
  MatExpansionModule,
  MatTableModule
]



@NgModule({
  declarations: [
    AppComponent,
    SidemenuComponent,
    ScreenComponent,
    HomeScreenComponent,
    ProjectsScreenComponent,
    RoofingScreenComponent,
    ConstructionScreenComponent,
    RestorationScreenComponent,
    DetailsScreenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    Ux_Modules,
    HttpClientModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
