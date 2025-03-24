import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './auth/connexion/connexion.component';
import { HomeComponent } from './components/home/home.component';
import { ProDashboardComponent } from './components/user/prof/pro-dashboard/pro-dashboard.component';
import { InscriptionComponent } from './auth/inscription/inscription.component';
import { EtuDashboardComponent } from './components/user/etu/etu-dashboard/etu-dashboard.component';
import { AuthGuard } from './auth/auth.guard';
import { NgModule } from '@angular/core';
import { EexamensComponent } from './components/user/etu/autres/eexamens/eexamens.component';
import { UpcomingExamsComponent } from './components/user/etu/autres/upcoming-exams/upcoming-exams.component';
import { DepotExamsComponent } from './components/user/etu/autres/depot-exams/depot-exams.component';
import { ResultatsComponent } from './components/user/etu/autres/resultats/resultats.component';
import { ProfEtudiantsComponent } from './components/user/prof/autres/prof-etudiants/prof-etudiants.component';
import { CreerExamenComponent } from './components/user/prof/autres/creer-examen/creer-examen.component';
import { RevoirCorrComponent } from './components/user/prof/autres/revoir-corr/revoir-corr.component';
import { ExamensCreerComponent } from './components/user/prof/autres/examens-creer/examens-creer.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'connexion',
        component: ConnexionComponent
    },
    {
        path: 'inscription',
        component: InscriptionComponent
    },
    {
        path: 'pdashboard/:id',  
        component: ProDashboardComponent,canActivate: [AuthGuard] 
    },
    {
        path: 'mesetudiant',  
        component: ProfEtudiantsComponent,canActivate: [AuthGuard] 
    },
    {
        path: 'creerexamen',
        component:CreerExamenComponent,canActivate: [AuthGuard]
    },
    {
        path: 'revoircorrect',
        component:RevoirCorrComponent,canActivate: [AuthGuard]
    },
    {
        path: 'examenscreer',
        component:ExamensCreerComponent,canActivate: [AuthGuard]
    },
    {
        path: 'edashboard',
        component: EtuDashboardComponent ,canActivate: [AuthGuard]
    }, 
    {
        path: 'eexamens',
        component: EexamensComponent ,canActivate: [AuthGuard]
    },
    {
        path: 'examsav',
        component: UpcomingExamsComponent,canActivate: [AuthGuard]
    },
    {
        path: 'depot-exams',
        component: DepotExamsComponent,canActivate: [AuthGuard]
    },
    {
        path: 'resultats',
        component: ResultatsComponent,canActivate: [AuthGuard]
    },
    {
        path: 'details/:id',
        component: EexamensComponent,canActivate: [AuthGuard]
    },
   // { path: '', redirectTo: '/connexion', pathMatch: 'full' },
     { path: '**', redirectTo: '/connexion' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}