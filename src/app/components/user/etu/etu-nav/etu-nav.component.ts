import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface MenuItem {
  icon: string;
  label: string;
  route: string;
}

@Component({
  selector: 'app-etu-nav',
  imports: [CommonModule, RouterModule],
  templateUrl: './etu-nav.component.html',
  styleUrl: './etu-nav.component.css'
})
export class EtuNavComponent {


  menuItems: MenuItem[] = [
    { icon: 'grid_view', label: "Vue d'ensemble", route: '/overview' },
    { icon: 'description', label: 'Mes examens', route: '/exams' },
    { icon: 'school', label: 'Résultats', route: '/results' },
    { icon: 'person', label: 'Profil', route: '/profile' },
    { icon: 'settings', label: 'Paramètres', route: '/settings' },
  ];
}