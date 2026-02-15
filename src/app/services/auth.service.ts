import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IUser } from '../interfaces/i-user';

@Injectable({
  providedIn: 'root',
})
export class DiseñoLiamAuthService {
  private usersEndpoint = 'http://localhost:3000/users';
  private currentUser: IUser | null = null;

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<IUser[]> {
    return this.http
      .get<IUser[]>(`${this.usersEndpoint}?username=${username}&password=${password}`)
      .pipe(
        catchError((resp: HttpErrorResponse) =>
          throwError(
            () =>
              new Error(
                `Error en login. Código: ${resp.status}. Mensaje: ${resp.message}`
              )
          )
        )
      );
  }

  setCurrentUser(user: IUser) {
    this.currentUser = user;
  }

  getCurrentUser(): IUser | null {
    return this.currentUser;
  }

  logout() {
    this.currentUser = null;
  }

  isLoggedIn(): boolean {
    return this.currentUser !== null;
  }

  isChef(): boolean {
    return this.currentUser?.role === 'chef';
  }
}
