import { CommonModule } from '@angular/common';
import { Component,  } from '@angular/core';
import {ReactiveFormsModule,FormBuilder,FormGroup,Validators, FormsModule, ValidatorFn, AbstractControl, ValidationErrors} from '@angular/forms';
import {Router, RouterLink} from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// const passwordMatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
//   const password = control.get('password')?.value;
//   const confirmPassword = control.get('confirmPassword')?.value;
//   return password && confirmPassword && password !== confirmPassword ? { mismatch: true } : null;
// };

@Component({
  selector: 'app-connexion',
  imports: [ReactiveFormsModule,CommonModule,RouterLink],
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.css'
})


export class ConnexionComponent {
  activeTab: 'student' | 'professor' = 'student';
  isLoading = false;
  studentForm: FormGroup;
 // professorForm: FormGroup;

  constructor(private http: HttpClient, private fb: FormBuilder, private router: Router) {
    this.studentForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    }, );

    // this.professorForm = this.fb.group({
    //   email: ['', [Validators.required, Validators.email]],
    //   password: ['', Validators.required]
    // },);
  }

  // switchTab(tab: 'student' | 'professor') {
  //   this.activeTab = tab;
  // }

  login() {
    const activeForm = this.studentForm ;

    if (activeForm.invalid) {
      alert("Veuillez remplir tous les champs correctement !");
      return;
    }

    const userData = activeForm.value;
    console.log("Données envoyées :", userData);

    this.isLoading = true;

    this.http.post('http://localhost:8000/api/auth/login/', userData, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }).subscribe({
      next: (response: any) => {
        localStorage.setItem('auth_token', response.tokens.access);
        alert("Connexion réussie !");
        if(response['user']['role'] == "PROFESSEUR") {
        this.router.navigate([`/pdashboard/${response['user']['profile']['id'].toString()}`]);///${response.user.id.toString()}
        }else {
        this.router.navigate([`/edashboard`]);///${response.user.id.toString()}
        }
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Erreur de connexion', error);
        alert("Erreur: " + error.error.error);
        this.isLoading = false;
      },
    });
  }}