import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Customer } from '../dtos/customer';
import { Observable } from 'rxjs';
import {map} from "rxjs/internal/operators";

const URL= "/api/v1/login";
export const MAIN_URL= "http://localhost:8080";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) {
  }

  login(customer: Customer): Observable<boolean> {
    return this.http.post<boolean>(MAIN_URL + URL, customer)
      .pipe(
        map((result)=>{
          sessionStorage.setItem("token", result + "");
          if (result){
            this.router.navigate(['/item-list']);
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
