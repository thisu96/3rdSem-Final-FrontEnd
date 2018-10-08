import { Component, OnInit } from '@angular/core';
import { OrdersdetailsService } from '../../services/ordersdetails.service';
import { OrdersService } from '../../services/orders.service';
import { Orders } from '../../dtos/orders';
import { Ordersdetails } from '../../dtos/ordersdetails';

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

  constructor(private orderdetailService: OrdersdetailsService, private orderService: OrdersService) { }

  ngOnInit() {
    this.loadAllOrderDetails();
  }

  loadAllOrderDetails(): void {
    this.orderdetailService.getAllOrderDetails().subscribe(
      (result) => {
        this.orderDetails = result;
      });
  }

}
