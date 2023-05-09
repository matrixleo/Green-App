import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { MenuDetails } from '../sidenav-models/sidenav.model';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  private dataUrl = 'api/projects/data1.json'


  constructor(private http: HttpClient) {}

  getMenuDetails(): Observable<any>{
    return this.http.get<any>(this.dataUrl);
  }  
}
