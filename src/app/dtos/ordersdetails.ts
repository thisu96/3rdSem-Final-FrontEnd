import { Item } from "./item";

export class Ordersdetails {
    order_qty: number;
    total_amount: number;
    item: Item;
  
    constructor(order_qty: number, total_amount: number, item: Item) {
      this.order_qty = order_qty;
      this.total_amount = total_amount;
      this.item = item;
    }
}
