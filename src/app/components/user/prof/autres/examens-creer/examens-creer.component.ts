import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProDashboardComponent } from '../../pro-dashboard/pro-dashboard.component';

@Component({
  selector: 'app-examens-creer',
  imports: [CommonModule],
  templateUrl: './examens-creer.component.html',
  styleUrl: './examens-creer.component.css'
})
export class ExamensCreerComponent {

constructor(private dboardService:ProDashboardComponent ,private route:ActivatedRoute) { }

  isSubmitting = false;

  thisResult: any = null;
note=0;
  reponses : {
    classe:String,
    matiere: String,
    titre:String ,
    bareme:String ,
    date_creation:String ,
    date_limite:String ,
    reponses_questions: [
      {
        id: String,
        question:String,
        reponse_ia:String,
        bareme:String,
      },
    ]
  }={classe:'',matiere:'',titre:'',bareme:'',date_creation:'',date_limite:'',reponses_questions:[{id:'',question:'',reponse_ia:'',bareme:''}]};
  reponses_questions: [{id:String,question:String,reponse_ia:String,bareme:String}] = [{id:'',question:'',reponse_ia:'',bareme:''}];
  id='';

 
  ngOnInit() {

     this.dboardService.getAllExams().subscribe({
      next: (response: any) => {
        console.log(response);
        this.thisResult = response;
        if(response){
          this.thisResult = response;
          for (let j=0;j<response.length;j++){
          for (let i = 0; i <response[j]['questions'].length; i++) {
            this.reponses_questions.push({
              id: response[j]['questions'][i]['id'],
              question: response[j]['questions'][i]['contenu'],
              reponse_ia: response[j]['questions'][i]['reponse_ia'],
              bareme: response[j]['questions'][i]['bareme'],

            });
          }
          this.reponses_questions.splice(0, 1);

        
          this.reponses={
            classe: this.thisResult[j]['matiere']['classe']['nom'],
            matiere: this.thisResult[j]['matiere']['intitule'],
            titre: this.thisResult[j]['titre'],
            bareme: this.thisResult[j]['bareme_total'],
            date_creation: this.thisResult[j]['date_creation'],
            date_limite:this.thisResult[j]['date_evaluation'],
            reponses_questions: this.reponses_questions
          };
        }
      }
  }});
  //  console.log(this.thisResult);
  }
}
