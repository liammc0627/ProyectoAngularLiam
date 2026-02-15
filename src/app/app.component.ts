import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DiseñoLiamNavbar } from './navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DiseñoLiamNavbar],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class DiseñoLiamAppComponent {}
