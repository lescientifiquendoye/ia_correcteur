import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-creer-examen',
  imports: [CommonModule,RouterModule,ReactiveFormsModule],
  standalone: true,
  templateUrl: './creer-examen.component.html',
  styleUrl: './creer-examen.component.css'
})
export class CreerExamenComponent {

  examenForm: FormGroup;

  matieres : [
    { id: String, nom: String },
  ]=[
    { id: '1', nom: 'Mathématiques' },];

  selectedFile: File | null = null;

  constructor(private http: HttpClient,private fb: FormBuilder,) {
    this.examenForm = this.fb.group({
      titre: ['', Validators.required],
      matiere_id: ['', Validators.required],
      date_evaluation: ['', Validators.required],
      format: ['pdf', Validators.required]
    });
  }
  formatDate(event: any) {
    const date = new Date(event.target.value);
    const formattedDate = date.toISOString().slice(0, 19).replace("T", " ");
    this.examenForm.patchValue({ date_evaluation: formattedDate });
  }

ngOnInit() {
  
  this.http.get('http://localhost:8000/api/matieres/').subscribe({
    next: (response: any) => {
      console.log(response);
     for (let i = 0; i < response.length; i++) {
       this.matieres.push({ id: response[i]['id'].toString(), nom: response[i]['intitule'] });
    } 
  this.matieres.splice(0,1);
  },
    error: (error) => { console.error('Erreur lors de la récupération des évaluations', error); },
 
  });  
}


  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onSubmit() {
    if (this.examenForm.valid) {
      const formData = new FormData();
      formData.append('titre', this.examenForm.value.titre);
      formData.append('matiere_id', this.examenForm.value.matiere_id);
      formData.append('date_evaluation', this.examenForm.value.date_evaluation);
      formData.append('format', this.examenForm.value.format);

      if (this.selectedFile) {
        formData.append('fichier', this.selectedFile,);
        console.log("Fichier à soumettre :", formData);
        fetch("http://localhost:8000/api/evaluations/", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${localStorage.getItem('auth_token')}`, // Remplacez par votre token réel
            "Accept": "application/json" // Indique que vous attendez du JSON en réponse
          },
          body: formData
        })
        .then(response => {
          if (!response.ok) {
            return response.json().then(err => { throw err; });
          }
          return response.json();
        })
        .then(data => {
          console.log("Fichier soumis :", data);
        })
        .catch(error => {
          alert("Erreur: " + (error.error || "Erreur inconnue"));
          console.error("Erreur lors de la soumission du fichier :", error);
        }); }
      }


    }
  }
