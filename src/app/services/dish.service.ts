import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IDish } from '../interfaces/i-dish';

@Injectable({
  providedIn: 'root',
})
export class DiseñoLiamDishService {
  private dishesEndpoint = 'http://localhost:3000/dishes';

  constructor(private http: HttpClient) {}

  getDishes(): Observable<IDish[]> {
    return this.http.get<IDish[]>(this.dishesEndpoint).pipe(
      catchError((resp: HttpErrorResponse) =>
        throwError(
          () =>
            new Error(
              `Error obteniendo platos. Código: ${resp.status}. Mensaje: ${resp.message}`
            )
        )
      )
    );
  }

  getEnabledDishes(): Observable<IDish[]> {
    return this.http.get<IDish[]>(`${this.dishesEndpoint}?enabled=true`).pipe(
      catchError((resp: HttpErrorResponse) =>
        throwError(
          () =>
            new Error(
              `Error obteniendo platos. Código: ${resp.status}. Mensaje: ${resp.message}`
            )
        )
      )
    );
  }

  addDish(dish: IDish): Observable<IDish> {
    return this.http.post<IDish>(this.dishesEndpoint, dish).pipe(
      catchError((resp: HttpErrorResponse) =>
        throwError(
          () =>
            new Error(
              `Error creando plato. Código: ${resp.status}. Mensaje: ${resp.message}`
            )
        )
      )
    );
  }

  updateDish(dish: IDish): Observable<IDish> {
    return this.http.put<IDish>(`${this.dishesEndpoint}/${dish.id}`, dish).pipe(
      catchError((resp: HttpErrorResponse) =>
        throwError(
          () =>
            new Error(
              `Error actualizando plato. Código: ${resp.status}. Mensaje: ${resp.message}`
            )
        )
      )
    );
  }

  deleteDish(id: string): Observable<void> {
    return this.http.delete<void>(`${this.dishesEndpoint}/${id}`).pipe(
      catchError((resp: HttpErrorResponse) =>
        throwError(
          () =>
            new Error(
              `Error eliminando plato. Código: ${resp.status}. Mensaje: ${resp.message}`
            )
        )
      )
    );
  }

  toggleEnabled(id: string, enabled: boolean): Observable<IDish> {
    return this.http.patch<IDish>(`${this.dishesEndpoint}/${id}`, { enabled }).pipe(
      catchError((resp: HttpErrorResponse) =>
        throwError(
          () =>
            new Error(
              `Error cambiando estado. Código: ${resp.status}. Mensaje: ${resp.message}`
            )
        )
      )
    );
  }
}
