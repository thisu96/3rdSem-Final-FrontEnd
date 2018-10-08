import { Injectable } from '@angular/core';
import {Observable} from "rxjs/index";
import { Ordersdetails } from '../dtos/ordersdetails';
import { HttpClient } from '@angular/common/http';
import { MAIN_URL } from './categories.service';
import { Item } from '../dtos/item';

const URL="/api/v1/orderdetail";

@Injectable({
  providedIn: 'root'
})
export class OrdersdetailsService {

  orderDetail: Array<Ordersdetails> = [];
  item: Item = new Item();

  constructor(private http: HttpClient) {}

  getAllOrderDetails(): Observable<Array<Ordersdetails>>{
    return this.http.get<Array<Ordersdetails>>(MAIN_URL + URL);
  }

  deleteOrderDetail(orderId: string): Observable<boolean>{
    return this.http.delete<boolean>(MAIN_URL+ URL + "/" + orderId);
  }

  saveOrderDetail(orderdetail: Ordersdetails): Observable<boolean>{
    return this.http.post<boolean>(MAIN_URL + URL,orderdetail);
  }
}
