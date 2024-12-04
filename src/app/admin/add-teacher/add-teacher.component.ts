import { Component } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent {
  teacher = {
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    department: ''
  };
  constructor(private adminService: AdminService, private router: Router) {}
  onSubmit(): void {
    // Appeler le service pour ajouter un enseignant
    this.adminService.addTeacher(this.teacher).subscribe(
      () => {
        // Une fois l'enseignant ajouté, rediriger vers la liste des enseignants
        this.router.navigate(['/listteacher']);
      },
      (error) => {
        // Gérer l'erreur si l'ajout échoue
        alert('Erreur lors de l\'ajout de l\'enseignant');
        console.error(error);
      }
    );
  }
  goBack(): void {
    this.router.navigate(['/admin-dashboard']);
  }
 
  
}
