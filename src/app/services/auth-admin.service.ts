import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Employee } from '../dtos/employee';
import { Observable } from 'rxjs';
import {map} from "rxjs/internal/operators";

const URL= "/api/v1/admin";
export const MAIN_URL= "http://localhost:8080";

@Injectable({
  providedIn: 'root'
})
export class AuthAdminService {

  constructor(private http: HttpClient, private router: Router) { }

  admin(employee: Employee): Observable<boolean> {
    return this.http.post<boolean>(MAIN_URL + URL, employee)
      .pipe(
        map((result)=>{
          sessionStorage.setItem("token", result + "");
          if (result){
            this.router.navigate(['/main/dashboard']);
          }
          return result;
        })
      )
  }

  isAuthenticated(): boolean{
    if (sessionStorage.getItem("token")){
      return sessionStorage.getItem("token") == 'false' ? false: true;
    }
  }

  logout(): void{
    sessionStorage.removeItem("token");
    this.router.navigate(['/login']);
  }
}
