import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { EtuNavComponent } from '../../etu-nav/etu-nav.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-resultats',
  imports: [EtuNavComponent,CommonModule,RouterLink],
  templateUrl: './resultats.component.html',
  styleUrl: './resultats.component.css'
})
export class ResultatsComponent {
  reponses: any = [];
  recentResults: { id: number; title: string; date: string; grade: string; feedback: string }[] = [];
  moyenne = 0;
  mult = 1;
  constructor(private http: HttpClient) {

this.http.get('http://localhost:8000/api/reponses/').subscribe({
  next: (response: any) => {
    console.log(response);
    this.reponses=response;
    for (let i = 0; i < this.reponses.length; i++) {
      this.moyenne += parseFloat(this.reponses[i]['note']);
    }
     this.moyenne=this.moyenne/this.reponses.length;
    
     for (let i = 0; i < this.reponses.length; i++) {
      if (new Date(this.reponses[i]['date']) , new Date()) {
        this.mult =20/this.reponses[i]['evaluation']['bareme_total'];
        let examDate = new Date(this.reponses[i]['date_soumission']);
        this.recentResults.push( { id:this.reponses[i]['id'] , title: this.reponses[i]['evaluation']['titre'], date: `${examDate.getDate()}-${examDate.getMonth() + 1}-${examDate.getFullYear()} à ${examDate.getHours()}: ${examDate.getMinutes()}`, grade: `${(parseFloat(this.reponses[i]['note'])*this.mult).toFixed(2)}/20`, feedback: `${this.reponses[i]['commentaire']}` } );}
  }
},
 error: (error) => {
    console.error('Erreur lors de la récupération des évaluations', error);
  },
}
);
}}