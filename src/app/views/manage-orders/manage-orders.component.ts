import { Component, OnInit } from '@angular/core';
import { OrdersdetailsService } from '../../services/ordersdetails.service';
import { OrdersService } from '../../services/orders.service';
import { Orders } from '../../dtos/orders';
import { Ordersdetails } from '../../dtos/ordersdetails';
import { OrderList } from '../../dtos/order-list';
import { OrderListService } from '../../services/order-list.service';

@Component({
  selector: 'app-manage-orders',
  templateUrl: './manage-orders.component.html',
  styleUrls: ['./manage-orders.component.css']
})
export class ManageOrdersComponent implements OnInit {

  orderDetails: Array<Ordersdetails> = [];
  orderDetail: Ordersdetails;
  total_amount: number = 0;
  order = new Orders();
  orderLists: Array<OrderList> = [];
  searchTerm: string;

  constructor(private orderdetailService: OrdersdetailsService, private orderService: OrdersService, private orderListService: OrderListService) { }

  ngOnInit() {
    this.loadAllOrderLists();
  }

  loadAllOrderLists(): void {
    this.orderListService.getAllOrderList().subscribe(
      (result) => {
        this.orderLists = result;
      });
  }

}
