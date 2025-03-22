import { CommonModule } from '@angular/common';
import { Component,Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule,CommonModule],
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  @Input() userRole?: 'student' | 'professor' | null;
  isOpen = false;

  constructor(private router: Router) {}

  routes = [
    { href: '/', label: 'Accueil', icon: 'home', roles: ['student', 'professor', null] },
    { href: '/dashboard', label: 'Tableau de bord', icon: 'book', roles: ['student', 'professor'] },
    { href: '/examens', label: 'Examens', icon: 'graduation-cap', roles: ['student', 'professor'] }
  ];

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  isActive(route: string): boolean {
    return this.router.url === route || this.router.url.startsWith(route);
  }

  get filteredRoutes() {
    return this.userRole ? 
      this.routes.filter(route => route.roles.includes(this.userRole??null)) :
      this.routes.filter(route => route.roles.includes(null));
  }
}