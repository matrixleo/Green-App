import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Menu } from 'src/app/SideNav/sidenav-models/sidenav.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) {}

  getTypes()

}
