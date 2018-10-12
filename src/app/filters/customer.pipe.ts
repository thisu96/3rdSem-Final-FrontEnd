import { Pipe, PipeTransform } from '@angular/core';
import { OrderList } from '../dtos/order-list';

@Pipe({
  name: 'customerFilter'
})
export class CustomerPipe implements PipeTransform {

  transform(orderLists: OrderList[], searchTerm: string): OrderList[] {
    if(!orderLists || !searchTerm){
      return orderLists;
    }
    return orderLists.filter(orderLists =>
      orderLists.userName.toLowerCase().indexOf(searchTerm.toLowerCase()) !==-1);
  }

}
