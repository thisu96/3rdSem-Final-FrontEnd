import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Item } from '../dtos/item';

export const MAIN_URL= "http://localhost:8080";
const URL="/api/v1/item";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  getAllItems(): Observable<Array<Item>>{
    return this.http.get<Array<Item>>(MAIN_URL + URL);
  }

  deleteItem(id: string): Observable<boolean>{
    return this.http.delete<boolean>(MAIN_URL+ URL + "/" + id);
  }

  saveItem(item: Item): Observable<boolean>{
    console.log("itemService");
    return this.http.post<boolean>(MAIN_URL + URL,item);
  }

  getTotalItems(): Observable<number>{
    return this.http.get<number>(MAIN_URL + URL + "/count");
  }

  getImage(path: string): string {
    return (MAIN_URL + URL + "/file?path=" + path + "");
  }
}
