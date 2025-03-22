import { bootstrapApplication } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app/app.routes'; 
import { authInterceptor } from './app/auth/interceptors/auth.service';
//import { AuthService } from './app/auth/interceptors/auth.service';


bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withInterceptors([authInterceptor])),
    provideHttpClient(withFetch()),
    importProvidersFrom(RouterModule.forRoot(routes)) // Ajoute forRoot(routes)
  ]
}).catch(err => console.error(err));
