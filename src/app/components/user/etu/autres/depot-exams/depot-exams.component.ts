import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-depot-exams',
  imports: [CommonModule],
  templateUrl: './depot-exams.component.html',
  styleUrl: './depot-exams.component.css'
})
export class DepotExamsComponent {

  selectedFile: File | null = null;
  fileContent: string | null = null;
constructor(private http: HttpClient) {
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;

      // Lire le contenu si c'est un fichier .txt
      if (file.type === 'text/plain') {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.fileContent = e.target?.result as string;
        };
        reader.readAsText(file);
      } else {
        this.fileContent = null;
      }
    }

    const formData = new FormData();
    if (this.selectedFile) {
      formData.append("fichier", this.selectedFile,'fichier.pdf');  // "fichier" est le nom du champ attendu par l'API
      formData.append("evaluation_id", "2");
    formData.append("format", this.selectedFile.type === "text/plain" ? "text" : "pdf");
  
   
    for (let pair of formData.entries()) {
      console.log(pair[0] + ', ' + pair[1]);
    }

    fetch("http://localhost:8000/api/reponses/", {
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




      
  submitExam(id: number) {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append("fichier", this.selectedFile);  // "fichier" est le nom du champ attendu par l'API
      formData.append("evaluation_id", '2');
      formData.append("format",this.selectedFile.type === 'text'? 'text/plain' : 'pdf');


      this.http.post('http://localhost:8000/api/reponses/', formData).subscribe({
        next: (response: any) => {
          console.log('Fichier soumis:', response);
        },
        error: (error) => { console.error('Erreur lors de la soumission du fichier:', error); }
      });
       fetch("http://localhost:8000/api/reponses/", {
        method: "POST",
        body: formData,
       
      }).then(response => {
          if (response.ok) {
            console.log('Fichier soumis:', response);
          }else{
            console.error('Erreur lors de la soumission du fichier:', response);
          }});

      alert(`Examen "${this.selectedFile.name}" soumis avec succès !`);
      console.log('Fichier soumis:', this.selectedFile);
    }
  }
}