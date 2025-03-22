import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProNavComponent } from "../pro-nav/pro-nav.component";


@Component({
  selector: 'app-pro-dashboard',
  imports: [RouterModule, ProNavComponent,CommonModule],
  templateUrl: './pro-dashboard.component.html',
  styleUrl: './pro-dashboard.component.css'
})
export class ProDashboardComponent {
  exams = [
    { id: 1, title: "Examen de mathématiques - Algèbre linéaire", date: "15/03/2024", submissions: 24, total: 30 },
    { id: 2, title: "Examen d'informatique - Programmation orientée objet", date: "10/03/2024", submissions: 28, total: 30 },
    { id: 3, title: "Examen de physique - Mécanique quantique", date: "05/03/2024", submissions: 27, total: 30 }
  ];
}