import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onLogin() {
    if (!this.username || !this.password) {
      this.errorMessage = 'Por favor, completa todos los campos';
      return;
    }

    if (this.username.length > 50 || this.password.length > 50) {
      this.errorMessage = 'Los campos no pueden tener más de 50 caracteres';
      return;
    }

    this.authService.login(this.username, this.password).subscribe({
      next: (users) => {
        if (users.length > 0) {
          this.authService.setCurrentUser(users[0]);
          
          if (users[0].role === 'chef') {
            this.router.navigate(['/admin']);
          } else {
            this.router.navigate(['/menu']);
          }
        } else {
          this.errorMessage = 'Usuario o contraseña incorrectos';
        }
      },
      error: (error) => {
        this.errorMessage = 'Error al conectar con el servidor';
        console.error(error);
      },
    });
  }
}
