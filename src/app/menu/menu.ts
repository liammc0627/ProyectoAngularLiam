import { Component } from '@angular/core';
import { DishService } from '../services/dish.service';
import { IDish } from '../interfaces/i-dish';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe, AsyncPipe } from '@angular/common';
import { DishFilterPipe } from '../pipes/dish-filter.pipe';

@Component({
  selector: 'app-menu',
  imports: [FormsModule, CurrencyPipe, AsyncPipe, DishFilterPipe],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
  dishes$!: Observable<IDish[]>;
  selectedCategory: string = 'todas';
  sortBy: string = '';

  constructor(private dishService: DishService) {
    this.dishes$ = this.dishService.getEnabledDishes();
  }
}
