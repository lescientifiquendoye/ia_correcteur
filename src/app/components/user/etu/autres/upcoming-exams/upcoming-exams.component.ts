import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { EtuDashboardComponent } from '../../etu-dashboard/etu-dashboard.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upcoming-exams',
  imports: [CommonModule,],
  templateUrl: './upcoming-exams.component.html',
  styleUrl: './upcoming-exams.component.css'
})
export class UpcomingExamsComponent implements OnInit {
  allexams: { id: number; title: string; date: string; time: string; professor: string }[] = [];


  constructor(private examService: EtuDashboardComponent,private router: Router) {}

  ngOnInit() {
   this.examService.getAllExams().subscribe({
     next: (response: any) => {
      for (let i = 0; i < response.length; i++) {
        if (new Date(response[i]['date']) , new Date()) {
          let examDate = new Date(response[i]['date_evaluation']);
           // Format dd-mm-yyyy
          this.allexams.push( { id:response[i]['id'] , title: response[i]['titre'], date: `${examDate.getDate()}-${examDate.getMonth() + 1}-${examDate.getFullYear()}`, time: `${examDate.getHours()}: ${examDate.getMinutes()}`, professor: `Dr. ${response[i]['matiere']['professeur']['nom']}` } );}
      }
      
     }
    }
    )
      ;
   console.log(this.allexams);
  }
  navigateToDepotExams() {
    this.router.navigate(['/depot-exams']);
  }

}
