import { Customer } from "./customer";
import { Ordersdetails } from "./ordersdetails";

export class Orders {
  orderId: number;
  orderDate: string;
  priority: string;
  email: string;
  deliveryAddress: string;
  deliveryFee: string;
  deliveryTime: string;
  customer: Customer;
  orderDetailDTOs:Array<Ordersdetails>;
}
