import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenKey= "auth_token";

  constructor() { }

  logout() {
    localStorage.removeItem(this.tokenKey);
  }

  isAuthenticated(): boolean {
    if (typeof localStorage === 'undefined') {
      return false; // Ou toute autre logique si localStorage n'est pas disponible
    }
    return !!localStorage.getItem(this.tokenKey);
  }
  
}
