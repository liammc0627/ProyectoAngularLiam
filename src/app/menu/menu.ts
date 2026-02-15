import { Component } from '@angular/core';
import { DiseñoLiamDishService } from '../services/dish.service';
import { IDish } from '../interfaces/i-dish';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe, AsyncPipe } from '@angular/common';
import { DiseñoLiamDishFilterPipe } from '../pipes/dish-filter.pipe';

@Component({
  selector: 'app-menu',
  imports: [FormsModule, CurrencyPipe, AsyncPipe, DiseñoLiamDishFilterPipe],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class DiseñoLiamMenu {
  dishes$!: Observable<IDish[]>;
  selectedCategory: string = 'todas';
  sortBy: string = '';

  showWidget = false;
  largeText = false;
  lineHeight = false;
  highContrast = false;
  grayscale = false;
  highlightLinks = false;
  showStructure = false;

  constructor(private dishService: DiseñoLiamDishService) {
    this.dishes$ = this.dishService.getEnabledDishes();
  }

  toggleWidget() {
    this.showWidget = !this.showWidget;
  }

  toggleLargeText() {
    this.largeText = !this.largeText;
    document.body.classList.toggle('large-text', this.largeText);
  }

  toggleLineHeight() {
    this.lineHeight = !this.lineHeight;
    document.body.classList.toggle('large-line-height', this.lineHeight);
  }

  toggleHighContrast() {
    this.highContrast = !this.highContrast;
    document.body.classList.toggle('high-contrast', this.highContrast);
  }

  toggleGrayscale() {
    this.grayscale = !this.grayscale;
    document.body.classList.toggle('grayscale', this.grayscale);
  }

  toggleHighlightLinks() {
    this.highlightLinks = !this.highlightLinks;
    document.body.classList.toggle('highlight-links', this.highlightLinks);
  }

  toggleStructure() {
    this.showStructure = !this.showStructure;
    document.body.classList.toggle('show-structure', this.showStructure);
  }
}
