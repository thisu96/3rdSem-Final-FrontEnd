import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../dtos/item';

@Pipe({
  name: 'categoryFilter'
})
export class CategoryFilterPipe implements PipeTransform {

  transform(items: Item[], searchTerm: string): Item[] {
    if(!items || !searchTerm){
      return items;
    }
    return items.filter(items =>
      items.category.toLowerCase().indexOf(searchTerm.toLowerCase()) !==-1);
  }

}
