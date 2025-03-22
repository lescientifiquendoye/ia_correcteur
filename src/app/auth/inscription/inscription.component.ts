import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const passwordMatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get('password')?.value;
  const confirmPassword = control.get('confirmPassword')?.value;
  return password && confirmPassword && password !== confirmPassword ? { mismatch: true } : null;
};

@Component({
  selector: 'app-inscription',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
  activeTab: 'student' | 'professor' = 'student';
  isLoading = false;
  studentForm: FormGroup;
  professorForm: FormGroup;

  constructor(private http: HttpClient, private fb: FormBuilder, private router: Router) {
    this.studentForm = this.fb.group({
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, { validators: passwordMatchValidator });

    this.professorForm = this.fb.group({
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, { validators: passwordMatchValidator });
  }

  switchTab(tab: 'student' | 'professor') {
    this.activeTab = tab;
  }

  login() {
    const activeForm = this.activeTab === 'student' ? this.studentForm : this.professorForm;

    if (activeForm.invalid) {
      alert("Veuillez remplir tous les champs correctement !");
      return;
    }

    const userData = activeForm.value;
    console.log("Données envoyées :", userData);

    this.isLoading = true;

    this.http.post('http://localhost:8000/api/auth/register/', userData, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }).subscribe({
      next: (response: any) => {
        console.log('Inscription réussie', response);
        localStorage.setItem('auth_token', response.response.tokens.access);
        alert("Inscription réussie !");
        this.router.navigate(['/edashboard']);
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Erreur d\'inscription', error);
        alert("Erreur:" + error.error.email[0]);
        this.isLoading = false;
      }
      },
    );
  }
}
