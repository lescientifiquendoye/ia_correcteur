import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eexamens',
  imports: [CommonModule, MatButtonToggleModule, MatCardModule,MatIconModule],
  templateUrl: './eexamens.component.html',
  styleUrl: './eexamens.component.css'
})
export class EexamensComponent {

  userRole: 'professor' | 'student' = 'student';
  isSubmitting = false;
  
  exam = {
    id: '1',
    title: 'Examen de mathématiques - Algèbre linéaire',
    description: 'Cet examen porte sur les concepts fondamentaux de l\'algèbre linéaire...',
    date: '25/03/2024',
    time: '14:00 - 16:00',
    duration: '120 minutes',
    professor: 'Dr. Martin',
    class: 'Master 1',
    content: `# Examen d'Algèbre Linéaire

## Partie 1: Espaces Vectoriels (8 points)
1. Démontrez que l'ensemble des matrices symétriques 2×2 forme un sous-espace vectoriel de l'espace des matrices 2×2.
2. Soit V un espace vectoriel de dimension finie. Montrez que toute famille de vecteurs contenant strictement plus de dim(V) vecteurs est linéairement dépendante.

## Partie 2: Transformations Linéaires (6 points)
1. Soit T: R³ → R² une transformation linéaire définie par T(x,y,z) = (x+y, y+z). Déterminez le noyau et l'image de T.
2. Démontrez que si T est une transformation linéaire inversible, alors T⁻¹ est aussi une transformation linéaire.`,
  };

  constructor(private router: Router) {}

  handleSubmit() {
    this.isSubmitting = true;
    setTimeout(() => {
      this.isSubmitting = false;
      this.router.navigate(['/edashboard']);
    }, 1500);
  }
}