import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../dtos/category';

export const MAIN_URL= "http://localhost:8080";
const URL="/api/v1/category";

@Injectable({
  providedIn: 'root'
})

export class CategoriesService {

  constructor(private http: HttpClient) { }

  getAllCategories(): Observable<Array<Category>>{
    return this.http.get<Array<Category>>(MAIN_URL + URL);
  }

  deleteCategory(categoryName: string): Observable<boolean>{
    return this.http.delete<boolean>(MAIN_URL+ URL + "/" + categoryName);
  }

  saveCategory(category: Category): Observable<boolean>{
    return this.http.post<boolean>(MAIN_URL + URL,category);
  }

  getAllCategoriesCount(): Observable<number>{
    return this.http.get<number>(MAIN_URL + URL + "/count");
  }
}
