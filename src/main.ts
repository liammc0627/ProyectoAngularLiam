import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { DiseñoLiamAppComponent } from './app/app.component';

bootstrapApplication(DiseñoLiamAppComponent, appConfig).catch((err) =>
  console.error(err)
);
