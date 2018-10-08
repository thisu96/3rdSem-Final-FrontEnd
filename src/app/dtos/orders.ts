import { Customer } from "./customer";
import { Ordersdetails } from "./ordersdetails";

export class Orders {
  orderId: number;
  orderDate: string;
  priority: string;
  customer: Customer;
  orderDetailDTOs:Array<Ordersdetails>;
}
