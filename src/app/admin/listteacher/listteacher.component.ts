import { Component,OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listteacher',
  templateUrl: './listteacher.component.html',
  styleUrls: ['./listteacher.component.css']
})
export class ListteacherComponent {
  showAddForm = false;
  teachers: any[] = []; // Liste des enseignants

  constructor(private adminService: AdminService, private router: Router) {}

  ngOnInit(): void {
    this.getTeachers(); // Charger les enseignants au démarrage
  }
  toggleAddForm() {
    this.showAddForm = !this.showAddForm;
  }
  logout(): void {
    // Supprimez toutes les données de session si nécessaire
    sessionStorage.clear(); // ou localStorage.clear() si vous utilisez le stockage local
    this.router.navigate(['/login']); // Redirigez vers la page de connexion
  }

  getTeachers(): void {
    this.adminService.getAllTeachers().subscribe((data) => {
      this.teachers = data; // Récupérer les enseignants depuis l'API
    });
  }
  // Méthode pour supprimer un enseignant
  deleteTeacher(id: number): void {
      this.adminService.deleteTeacher(id).subscribe(() => {
        this.teachers = this.teachers.filter(teacher => teacher.id !== id);  // Supprime l'enseignant de la liste
      });
  }

}
