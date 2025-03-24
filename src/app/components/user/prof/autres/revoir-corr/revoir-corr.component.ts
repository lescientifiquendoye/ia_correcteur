import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProDashboardComponent } from '../../pro-dashboard/pro-dashboard.component';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-revoir-corr',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './revoir-corr.component.html',
  styleUrl: './revoir-corr.component.css'
})
export class RevoirCorrComponent {
  modifiRepForm: FormGroup;
  constructor(private dboardService: ProDashboardComponent,private fb: FormBuilder,private http: HttpClient) {
    this.modifiRepForm = this.fb.group({
      newNote: ['', Validators.required],
    });
  }
  
  thisResult: any = null;

  reponses : [{
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
        note: String,
        newNote:number
      },
    ]
  }]=[{classe:'',nom:'',prenom:'',matiere:'',titre:'',bareme:'',note:'',date_soumission:'',reponses_questions:[{id:'',question:'',reponse:'',bareme:'',note:'',newNote:-1}]}];
  reponses_questions: [{id:String,question:String,reponse:String,bareme:String,note:String,newNote:number}] = [{id:'',question:'',reponse:'',bareme:'',note:'',newNote:-1}];
  id='';

  
  onSubmit(r: any,id:String) {
    let rmap:any =[];;
    if (this.modifiRepForm.valid) {
      for(let i=0;i<r.length;i++){
        alert();
        if(r[i].id==id){
        rmap.push({
          id: r[i].id,
          note:  this.modifiRepForm.value.newNote,
        });}else{
          rmap.push({
            id: r[i].id,
            note:  r[i].note,
        });}
      
     let req={
      "reponses_questions": rmap,
        "recalculate_note":true
      };
    this.http.patch(`http://localhost:8000/api/reponses/${this.dboardService.getId()}/`, req).subscribe({
      next: (response: any) => {console.log(response);},
      error: (error) => { console.error('Erreur lors de la récupération des évaluations', error); },
    });}
    
     
    }else{
      alert("Veuillez remplir tous les champs correctement !");
    }
  }
 
  ngOnInit() {

     this.dboardService.getThisReponse().subscribe({
      next: (response: any) => {
        if(response){
          this.thisResult = response;
          for(let j=0;j<response.length;j++){
          let note1=0;
          this.reponses_questions=[{id:'',question:'',reponse:'',bareme:'',note:'',newNote:-1}];
          for (let i = 0; i <response[j].reponses_questions.length; i++) {
            this.reponses_questions.push({
              id: response[j]['reponses_questions'][i]['id'],
              question: response[j]['reponses_questions'][i]['question']['contenu'],
              reponse: response[j]['reponses_questions'][i]['contenu'],
              bareme: response[j]['reponses_questions'][i]['question']['bareme'],
              note: response[j]['reponses_questions'][i]['note'],
              newNote:-1
            });
            note1= note1+parseFloat(response[j]['reponses_questions'][i]['note']);
          }
         

        this.reponses_questions.splice(0, 1);
          this.reponses.push({
            classe: this.thisResult[j]['etudiant']['classe']['nom'],
            nom: this.thisResult[j]['etudiant']['nom'],
            prenom: this.thisResult[j]['etudiant']['prenom'],
            matiere: this.thisResult[j]['evaluation']['matiere']['intitule'],
            titre: this.thisResult[j]['titre'],
            bareme: this.thisResult[j]['evaluation']['bareme_total'],
            note: this.thisResult[j]['note'],
            date_soumission: this.thisResult[j]['date_soumission'],
            reponses_questions: this.reponses_questions
          }); 
          
        }
        this.reponses.splice(0, 1);
       
        }
      }
    });
    console.log(this.thisResult);
  }
  updateNote(newNote: number,id:String){
    alert(newNote);
    alert(id.toString());
  }
  


}