import { HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export const authInterceptor: HttpInterceptorFn = (req, next) => {
 // const authService = inject(AuthService); // Injection du service AuthService
  const token = localStorage.getItem("auth_token"); // Récupère le token

  if (token) {
    const clonedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
    return next(clonedReq);
  }

  return next(req);
};
// export class AuthService implements HttpInterceptor  {

//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     const token = localStorage.getItem('token'); // Récupération du token

//     if (token) {
//       const clonedReq = req.clone({
//         setHeaders: {
//           Authorization: `Bearer ${token}` // Ajout du token au header
//         }
//       });
//       return next.handle(clonedReq);
//     }
//     return next.handle(req); 
//   }
// }