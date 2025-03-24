import { Component } from '@angular/core';
import { ProfNavComponent } from '../../prof-nav/prof-nav.component';
import { CommonModule } from '@angular/common';
import { ProDashboardComponent } from '../../pro-dashboard/pro-dashboard.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-prof-etudiants',
  imports: [CommonModule],
  templateUrl: './prof-etudiants.component.html',
  styleUrl: './prof-etudiants.component.css'
})
export class ProfEtudiantsComponent {
  constructor(private etuService:ProDashboardComponent,private http:HttpClient) { }
  data = {};
  reponses=[];
  etudisnt_reponses=[];
  moyenne=0;

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
    note: String
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
    note: '',
    classe: {
      id: '',
      nom: '',
      niveau: ''
    }
  }];

  ngOnInit() {


  this.http.get('http://localhost:8000/api/matieres/').subscribe({
    next: (response: any) => {     
      response.forEach((matiere: any) => {
        if(matiere.professeur.id == this.etuService.getId())
          this.classes.push(matiere.classe)    
      })

      this.http.get('http://localhost:8000/api/etudiants/').subscribe({
        next: (response: any) => {
          let id=[];
          console.log(response);
          for (let i = 0; i < this.classes.length; i++) {
            id.push(this.classes[i]['id']);
          }
         this.etudisnt_reponses=response.filter((e: any) =>id.includes(e['classe']['id']));
          for (let i = 0; i < this.etudisnt_reponses.length; i++) {
            this.etudiants.push( { id: this.etudisnt_reponses[i]['id'] , id_etu: this.etudisnt_reponses[i]['id_etu'], nom: this.etudisnt_reponses[i]['nom'], prenom: this.etudisnt_reponses[i]['prenom'],note:'' ,classe: { id: this.etudisnt_reponses[i]['classe']['id'] , nom: this.etudisnt_reponses[i]['classe']['nom'], niveau: this.etudisnt_reponses[i]['classe']['niveau'] } } );
          }
          this.etudiants.splice(0,1);
        },
        error: (error) => { console.error('Erreur lors de la récupération des évaluations', error); },
      
      });     
  
    },
    error: (error) => { console.error('Erreur lors de la récupération des évaluations', error); },

  });
  }
}