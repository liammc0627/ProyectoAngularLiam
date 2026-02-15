import { Pipe, PipeTransform } from '@angular/core';
import { IDish } from '../interfaces/i-dish';

@Pipe({
  name: 'dishFilter',
})
export class DishFilterPipe implements PipeTransform {
  transform(dishes: IDish[], category: string, sortBy: string): IDish[] {
    let filtered = [...dishes];

    if (category && category !== 'todas') {
      filtered = filtered.filter((dish) => dish.category === category);
    }

    if (sortBy === 'price-asc') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      filtered.sort((a, b) => b.price - a.price);
    }

    return filtered;
  }
}
