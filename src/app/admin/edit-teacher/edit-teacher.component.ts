import { Component ,OnInit} from '@angular/core';
import { AdminService } from '../admin.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-edit-teacher',
  templateUrl: './edit-teacher.component.html',
  styleUrls: ['./edit-teacher.component.css']
})
export class EditTeacherComponent {

  teacher = {
    id: 0,
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    department: ''
  };
  constructor(private adminService: AdminService,private route: ActivatedRoute,private router: Router) {}

ngOnInit(): void {
    // Récupérer l'ID de l'enseignant depuis l'URL
    const id = +this.route.snapshot.paramMap.get('id')!;
    // Charger les données de l'enseignant
    this.adminService.getTeacher(id).subscribe(
      (data) => {
        this.teacher = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération de l\'enseignant:', error);
      }
    );
  }

  onSubmit(): void {
    // Appeler le service pour mettre à jour l'enseignant
    this.adminService.updateTeacher(this.teacher.id, this.teacher).subscribe(
      () => {
        // Rediriger vers la page de la liste des enseignants
        this.router.navigate(['/listteacher']);
      },
      (error) => {
        alert('Erreur lors de la mise à jour de l\'enseignant');
        console.error(error);
      }
    );
  }
}
