import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../dtos/employee';
import { MAIN_URL } from './categories.service';

const URL="/api/v1/employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<Array<Employee>>{
    return this.http.get<Array<Employee>>(MAIN_URL + URL);
  }

  deleteEmployee(userName: string): Observable<boolean>{
    return this.http.delete<boolean>(MAIN_URL+ URL + "/" + userName);
  }

  saveEmployee(employee: Employee): Observable<boolean>{
    return this.http.post<boolean>(MAIN_URL + URL,employee);
  }

  getAllEmployeesCount(): Observable<number>{
    return this.http.get<number>(MAIN_URL + URL + "/count");
  }
}
