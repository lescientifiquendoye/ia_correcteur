import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface MenuItem {
  icon: string;
  label: string;
  route: string;
}

@Component({
  selector: 'app-prof-nav',
  imports: [CommonModule, RouterModule],
  templateUrl: './prof-nav.component.html',
  styleUrl: './prof-nav.component.css'
})
export class ProfNavComponent {

  menuItems: MenuItem[] = [
    { icon: 'grid_view', label: "Vue d'ensemble", route: '/overview' },
    { icon: 'description', label: 'Mes examens', route: '/exams' },
    { icon: 'school', label: 'Résultats', route: '/results' },
    { icon: 'person', label: 'Profil', route: '/profile' },
    { icon: 'settings', label: 'Paramètres', route: '/settings' },
  ];
}