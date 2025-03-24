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
    { icon: 'grid_view', label: "Vue d'ensemble", route: '/edashboard' },
    { icon: 'description', label: 'Mes examens', route: '/examsav' },
    { icon: 'school', label: 'Résultats', route: '/resultats' },
    { icon: 'person', label: 'Profil', route: "/edashboard" },
    { icon: 'settings', label: 'Paramètres', route: "/edashboard" },
  ];
}