import { Component,Injectable } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProfNavComponent } from '../prof-nav/prof-nav.component';


@Component({
  selector: 'app-pro-dashboard',
  standalone: true,
  imports: [RouterModule, ProfNavComponent,CommonModule],
  templateUrl: './pro-dashboard.component.html',
  styleUrl: './pro-dashboard.component.css'
})

@Injectable({
  providedIn: 'root' // Permet d'accéder au service partout
})

export class ProDashboardComponent {
  exams = [
    { id: 1, title: "Examen de mathématiques - Algèbre linéaire", date: "15/03/2024", submissions: 24, total: 30 },
    { id: 2, title: "Examen d'informatique - Programmation orientée objet", date: "10/03/2024", submissions: 28, total: 30 },
    { id: 3, title: "Examen de physique - Mécanique quantique", date: "05/03/2024", submissions: 27, total: 30 }
  ];
   
  id='';
  exams1 = [];



  constructor(private route: ActivatedRoute,private http: HttpClient) { } // ✅ Injecte correctement HttpClient

  data = {};
  reponses=[];
  etudisnt_reponses=[];
  moyenne=0;
  exams_creers: { id: number; title: string; date: string; time: string; nsoumits: string }[] = [];
  recentResults: { id: String; title: string; date: string; grade: string; feedback: string }[] = [];
  classes:[{
		"id": number,
		"nom": String,
		"niveau": String
	}]= [{
    "id": 0, 
    "nom": "",
    "niveau": ""   
  }];

  etudiants : [{
    id: String,
    id_etu: String,
    nom:String ,
    prenom: String,
    classe: {
      id:String ,
      nom: String,
      niveau: String,
    },
  }] = [{
    id: '',
    id_etu: '',
    nom: '',
    prenom: '',
    classe: {
      id: '',
      nom: '',
      niveau: ''
    }
  }];

 
  ngOnInit() {
    
    this.id = this.route.snapshot.paramMap.get('id')??'';
    this.http.get('http://localhost:8000/api/matieres/').subscribe({
      next: (response: any) => {     
        response.forEach((matiere: any) => {
          if(matiere.professeur.id == this.id)
            this.classes.push(matiere.classe)    
        })

        this.http.get('http://localhost:8000/api/etudiants/').subscribe({
          next: (response: any) => {
            let id=[];
            for (let i = 0; i < this.classes.length; i++) {
              id.push(this.classes[i]['id']);
            }
           this.etudisnt_reponses=response.filter((e: any) =>id.includes(e['classe']['id']));
            for (let i = 0; i < this.etudisnt_reponses.length; i++) {
              this.etudiants.push( { id: this.etudisnt_reponses[i]['id'] , id_etu: this.etudisnt_reponses[i]['id_etu'], nom: this.etudisnt_reponses[i]['nom'], prenom: this.etudisnt_reponses[i]['prenom'], classe: { id: this.etudisnt_reponses[i]['classe']['id'] , nom: this.etudisnt_reponses[i]['classe']['nom'], niveau: this.etudisnt_reponses[i]['classe']['niveau'] } } );
            }
            this.etudiants.splice(0,1);
          },
          error: (error) => { console.error('Erreur lors de la récupération des évaluations', error); },
        
        });     
    
      },
      error: (error) => { console.error('Erreur lors de la récupération des évaluations', error); },

    });

  
    
    this.http.get('http://localhost:8000/api/evaluations/').subscribe({
      next: (response: any) => {
        this.exams1=response;
        for (let i = 0; i < this.exams1.length; i++) {
          if (new Date(this.exams1[i]['date']) , new Date()) {
            let examDate = new Date(this.exams1[i]['date_evaluation']);
             // Format dd-mm-yyyy
            this.exams_creers.push( { id:this.exams1[i]['id'] , title: this.exams1[i]['titre'], date: `${examDate.getDate()}-${examDate.getMonth() + 1}-${examDate.getFullYear()}`, time: `${examDate.getHours()}: ${examDate.getMinutes()}`, nsoumits: `Dr. ${this.exams1[i]['matiere']['professeur']['nom']}` } );}
        }
        
      },
     error: (error) => {
        console.error('Erreur lors de la récupération des évaluations', error);
      },

   } );

   this.http.get('http://localhost:8000/api/reponses/').subscribe({
    next: (response: any) => {
      if(response.length>0){
      this.reponses=response;
      for (let i = 0; i < this.reponses.length; i++) {
        this.moyenne += parseFloat(this.reponses[i]['note']);
      }
       this.moyenne=this.moyenne/this.reponses.length;
      
       for (let i = 0; i < this.reponses.length; i++) {
        if (new Date(this.reponses[i]['date']) , new Date()) {
        //  this.mult =20/this.reponses[i]['evaluation']['bareme_total'];
          let examDate = new Date(this.reponses[i]['date_soumission']);
          this.recentResults.push( { id:this.reponses[i]['id'] , title: this.reponses[i]['evaluation']['titre'], date: `${examDate.getDate()}-${examDate.getMonth() + 1}-${examDate.getFullYear()} à ${examDate.getHours()}: ${examDate.getMinutes()}`, grade: `${this.reponses[i]['note']}/20`, feedback: `${this.reponses[i]['commentaire']}` } );}
    }}
  },
   error: (error) => {
      console.error('Erreur lors de la récupération des évaluations', error);
    },
 }
 );

  }
  getId():String  {
  return '2';
  }
   
  getAllExams(): Observable<Object> {
    return this.http.get('http://localhost:8000/api/evaluations/');
  }
  getThisReponse(): Observable<Object> {
    return this.http.get("http://localhost:8000/api/reponses/");
  }



}