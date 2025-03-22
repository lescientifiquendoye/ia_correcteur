import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

interface RouteItem {
  href: string;
  label: string;
  active: boolean;
  icon: string;
  roles: ("student" | "professor" | null)[];
}

@Component({
  selector: 'app-nav',
  imports: [RouterModule,CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

  @Input() userRole?: 'student' | 'professor' | null;
  isOpen = false;

  routes: RouteItem[] = [
    { href: '/', label: 'Accueil', active: false, icon: 'home', roles: ['student', 'professor', null] },
    { href: '/dashboard', label: 'Tableau de bord', active: false, icon: 'book', roles: ['student', 'professor'] },
    { href: '/examens', label: 'Examens', active: false, icon: 'graduation-cap', roles: ['student', 'professor'] }
  ];

  constructor(private router: Router) {
    this.updateActiveRoutes();
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  updateActiveRoutes() {
    const currentPath = this.router.url;
    this.routes.forEach(route => route.active = currentPath.startsWith(route.href));
  }

  get filteredRoutes() {
    return this.userRole 
      ? this.routes.filter(route => route.roles.includes(this.userRole??null))
      : this.routes.filter(route => route.roles.includes(null));
  }
}
