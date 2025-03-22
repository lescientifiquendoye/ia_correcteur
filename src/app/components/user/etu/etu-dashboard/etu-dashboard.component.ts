import { CommonModule } from '@angular/common';
import { Component, Injectable } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EtuNavComponent } from '../etu-nav/etu-nav.component';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';


@Component({
  selector: 'app-etu-dashboard',
  imports: [CommonModule,RouterModule,EtuNavComponent],
  standalone: true,
  templateUrl: './etu-dashboard.component.html',
  styleUrl: './etu-dashboard.component.css'
})

@Injectable({
  providedIn: 'root' // Permet d'accéder au service partout
})

export class EtuDashboardComponent {
  

  constructor(private http: HttpClient) { } // ✅ Injecte correctement HttpClient

  data = {};
  exams = [];
  reponses=[];
  moyenne=-1;
  mult=1;
  upcomingExams: { id: number; title: string; date: string; time: string; professor: string }[] = [];
  recentResults: { id: number; title: string; date: string; grade: string; feedback: string }[] = [];
 
  ngOnInit() {
    
    this.http.get('http://localhost:8000/api/evaluations/').subscribe({
      next: (response: any) => {
        console.log(response);
        this.exams=response;
        for (let i = 0; i < this.exams.length; i++) {
          if (new Date(this.exams[i]['date']) , new Date()) {
            let examDate = new Date(this.exams[i]['date_evaluation']);
             // Format dd-mm-yyyy
            this.upcomingExams.push( { id:this.exams[i]['id'] , title: this.exams[i]['titre'], date: `${examDate.getDate()}-${examDate.getMonth() + 1}-${examDate.getFullYear()}`, time: `${examDate.getHours()}: ${examDate.getMinutes()}`, professor: `Dr. ${this.exams[i]['matiere']['professeur']['nom']}` } );}
        }
        
      },
     error: (error) => {
        console.error('Erreur lors de la récupération des évaluations', error);
      },

   } );

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

  }
   
  getAllExams(): Observable<Object> {
    return this.http.get('http://localhost:8000/api/evaluations/');
  }

}