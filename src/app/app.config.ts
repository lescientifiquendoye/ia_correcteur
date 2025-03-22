import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
 
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), // Déclaration correcte des routes
    provideClientHydration(withEventReplay()), // Hydratation côté client avec event replay
    provideHttpClient() // Service HTTP
  ]
};
