import { Injectable } from '@angular/core';
import { OrderList } from '../dtos/order-list';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MAIN_URL } from './categories.service';

const URL="/api/v1/orderList";

@Injectable({
  providedIn: 'root'
})
export class OrderListService {

  constructor(private http: HttpClient) { }

  getAllOrderList(): Observable<Array<OrderList>>{
    return this.http.get<Array<OrderList>>(MAIN_URL + URL+ "/loadData");
  }

}
