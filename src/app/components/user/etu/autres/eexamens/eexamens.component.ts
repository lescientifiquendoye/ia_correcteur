import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Router } from '@angular/router';
import { EtuDashboardComponent } from '../../etu-dashboard/etu-dashboard.component';

@Component({
  selector: 'app-eexamens',
  imports: [CommonModule, MatButtonToggleModule, MatCardModule,MatIconModule],
  templateUrl: './eexamens.component.html',
  styleUrl: './eexamens.component.css'
})

export class EexamensComponent implements OnInit {
 constructor(private dboardService: EtuDashboardComponent  ,private route: ActivatedRoute, private router: Router) {}

  isSubmitting = false;

  thisResult: any = null;
note=0;
  reponses : {
    classe:String ,
    nom: String,
    prenom: String,
    matiere: String,
    titre:String ,
    bareme:String ,
    note: String,
    date_soumission:String ,
    reponses_questions: [
      {
        id: String,
        question:String ,
        reponse:String ,
        bareme:String,
        note: String
      },
    ]
  }={classe:'',nom:'',prenom:'',matiere:'',titre:'',bareme:'',note:'',date_soumission:'',reponses_questions:[{id:'',question:'',reponse:'',bareme:'',note:''}]};
  reponses_questions: [{id:String,question:String,reponse:String,bareme:String,note:String}] = [{id:'',question:'',reponse:'',bareme:'',note:''}];
  id='';

 
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')??'';
     this.dboardService.getThisReponse(this.id).subscribe({
      next: (response: any) => {
        console.log(response);
        this.thisResult = response;
        if(response){
          this.thisResult = response;
          
          for (let i = 0; i <response.reponses_questions.length; i++) {
            this.reponses_questions.push({
              id: response['reponses_questions'][i]['id'],
              question: response['reponses_questions'][i]['question']['contenu'],
              reponse: response['reponses_questions'][i]['contenu'],
              bareme: response['reponses_questions'][i]['question']['bareme'],
              note: response['reponses_questions'][i]['note']

            });
            this.note= this.note+parseFloat(response['reponses_questions'][i]['note']);
          }
          this.reponses_questions.splice(0, 1);

        
          this.reponses={
            classe: this.thisResult['etudiant']['classe']['nom'],
            nom: this.thisResult['etudiant']['nom'],
            prenom: this.thisResult['etudiant']['prenom'],
            matiere: this.thisResult['evaluation']['matiere']['intitule'],
            titre: this.thisResult['titre'],
            bareme: this.thisResult['evaluation']['bareme_total'],
            note: this.thisResult['note'],
            date_soumission: this.thisResult['date_soumission'],
            reponses_questions: this.reponses_questions
          };
        }
      }
    });
    console.log(this.thisResult);
  }
 

  


  
  //  reponses = {
  //   classe: "SGBD 2024",
  //   nom: "bi",
  //   prenom: "segn",
  //   matiere: "SGBD",
  //   titre: "Évaluation No1 de SGBD",
  //   bareme: "2.5",
  //   note: "4.29",
  //   date_soumission: "2025-03-21T14:49:13.992351Z",
  //   reponses_questions: [
  //     {
  //       id: 1,
  //       question: "Qu'est-ce que le machine learning ?",
  //       reponse: "Le machine learning est un sous-domaine de l'IA basé sur les modèles d'apprentissage.",
  //       bareme: "2.5",
  //       note: "2"
  //     },
  //     {
  //       id: 2,
  //       question: "Différence entre IA faible et IA forte ?",
  //       reponse: "L'IA faible est spécialisée, tandis que l'IA forte peut raisonner comme un humain.",
  //       bareme: "2.5",
  //       note: "2.29"
  //     }
  //   ]
  // };
  


  handleSubmit() {
    this.isSubmitting = true;
    setTimeout(() => {
      this.isSubmitting = false;
      this.router.navigate(['/edashboard']);
    }, 1500);
  }
}


