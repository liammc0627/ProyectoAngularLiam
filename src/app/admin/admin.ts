import { Component } from '@angular/core';
import { DiseñoLiamDishService } from '../services/dish.service';
import { IDish } from '../interfaces/i-dish';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe, AsyncPipe, NgClass } from '@angular/common';

@Component({
  selector: 'app-admin',
  imports: [FormsModule, CurrencyPipe, AsyncPipe, NgClass],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class DiseñoLiamAdmin {
  dishes$!: Observable<IDish[]>;
  
  editingDish: IDish | null = null;
  formDish: IDish = this.getEmptyDish();

  constructor(private dishService: DiseñoLiamDishService) {
    this.loadDishes();
  }

  loadDishes() {
    this.dishes$ = this.dishService.getDishes();
  }

  getEmptyDish(): IDish {
    return {
      id: '',
      name: '',
      description: '',
      price: 0,
      category: 'entrantes',
      enabled: true,
      image: '',
    };
  }

  validateForm(): string {
    if (!this.formDish.name || this.formDish.name.length > 50) {
      return 'El nombre es obligatorio y no puede tener más de 50 caracteres';
    }
    if (!this.formDish.description || this.formDish.description.length > 200) {
      return 'La descripción es obligatoria y no puede tener más de 200 caracteres';
    }
    if (this.formDish.price <= 0) {
      return 'El precio debe ser mayor a 0';
    }
    return '';
  }

  onSubmit() {
    const error = this.validateForm();
    if (error) {
      alert(error);
      return;
    }

    if (this.editingDish) {
      this.dishService.updateDish(this.formDish).subscribe({
        next: () => {
          this.loadDishes();
          this.resetForm();
        },
        error: (err) => alert('Error al actualizar: ' + err.message),
      });
    } else {
      this.dishService.addDish(this.formDish).subscribe({
        next: () => {
          this.loadDishes();
          this.resetForm();
        },
        error: (err) => alert('Error al crear: ' + err.message),
      });
    }
  }

  editDish(dish: IDish) {
    this.editingDish = dish;
    this.formDish = { ...dish };
  }

  deleteDish(id: string) {
    if (confirm('¿Estás seguro de eliminar este plato?')) {
      this.dishService.deleteDish(id).subscribe({
        next: () => this.loadDishes(),
        error: (err) => alert('Error al eliminar: ' + err.message),
      });
    }
  }

  toggleEnabled(dish: IDish) {
    this.dishService.toggleEnabled(dish.id, !dish.enabled).subscribe({
      next: () => this.loadDishes(),
      error: (err) => alert('Error al cambiar estado: ' + err.message),
    });
  }

  resetForm() {
    this.editingDish = null;
    this.formDish = this.getEmptyDish();
  }
}
