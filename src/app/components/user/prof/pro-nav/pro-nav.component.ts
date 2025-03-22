import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


interface MenuItem {
  icon: string;
  label: string;
  route: string;
}

@Component({
  selector: 'app-pro-nav',
  imports: [CommonModule, RouterModule],
  templateUrl: './pro-nav.component.html',
  styleUrl: './pro-nav.component.css'
})


export class ProNavComponent {

  menuItems: MenuItem[] = [
    { icon: 'grid_view', label: "Vue d'ensemble", route: '/overview' },
    { icon: 'description', label: 'Mes examens', route: '/exams' },
    { icon: 'school', label: 'Résultats', route: '/results' },
    { icon: 'person', label: 'Profil', route: '/profile' },
    { icon: 'settings', label: 'Paramètres', route: '/settings' },
  ];
}