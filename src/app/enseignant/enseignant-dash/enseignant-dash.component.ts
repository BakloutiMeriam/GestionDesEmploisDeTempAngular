import { Component ,OnInit} from '@angular/core';
import { AdminService } from 'src/app/admin/admin.service';
import { Router } from '@angular/router';
import { EnseignantService } from '../enseignant.service';
@Component({
  selector: 'app-enseignant-dash',
  templateUrl: './enseignant-dash.component.html',
  styleUrls: ['./enseignant-dash.component.css']
})
export class EnseignantDashComponent {
  statistics: any = { rooms: 0, teachers: 0, classes: 0 };
  sessions: any[] = [];
  filteredSessions: any[] = [];
  teacherName: string = ''; // Variable pour stocker le nom de l'enseignant
  newSession: any = { sessiondate: '', starttime: '', endtime: '', teacher: '', room: '' };
  showAddForm = false;
  teacherId: string = '';

  //pour la fonction getsessioncount
  teacherid: number = 0;
  sessionCount: number = 0;

  constructor(private adminService: AdminService, private router: Router,private enseignantservice:EnseignantService) {}

  ngOnInit(): void {
    this.fetchStatistics();
    this.fetchSessions();
  
   
  }

 

  filterSessions(): void {
    const teacherId = parseInt(this.teacherName.trim(), 10); // Convertir en entier
    console.log('ID saisi par l’utilisateur:', teacherId); // Log de l'entrée utilisateur
  
    if (!isNaN(teacherId) && teacherId > 0) {
      this.enseignantservice.getSessionsByTeacherId(teacherId).subscribe(
        (data) => {
          console.log('Sessions filtrées:', data); // Log des sessions retournées par le backend
          this.sessions = data; // Assurez-vous que `sessions` est une variable dans votre composant
          this.getSessionCount(teacherId); // Optionnel : si vous avez une méthode pour compter les sessions
        },
        (error) => {
          console.error('Erreur lors du filtrage des sessions:', error);
        }
      );
    } else {
      console.warn('ID invalide détecté'); // Log pour cas d’ID invalide
      alert('Veuillez entrer un ID valide');
    }
  }
  


  getSessionCount(teacherId: number): void {
    if (teacherId > 0) {
      this.enseignantservice.getSessionCountByTeacher(teacherId).subscribe(
        (data) => {
          this.sessionCount = data.count; // Mettez à jour le nombre de sessions
        },
        (error) => {
          console.error('Erreur lors de la récupération du nombre de sessions:', error);
        }
      );
    } else {
      alert('Veuillez entrer un ID d\'enseignant valide');
    }
  }



  

  fetchStatistics(): void {
    this.adminService.getStatistics().subscribe(
      (data) => {
        this.statistics = data;
      },
      (error) => {
        console.error('Error fetching statistics:', error);
      }
    );
  }

  fetchSessions(): void {
    this.adminService.getSessions().subscribe(
      (data) => {
        console.log('Sessions récupérées :', data);
        this.sessions = data;
      },
      (error) => {
        console.error('Erreur lors du chargement des sessions :', error);
      }
    );
  }
  

  toggleAddForm() {
    this.showAddForm = !this.showAddForm;
  }
  logout(): void {
    // Supprimez toutes les données de session si nécessaire
    sessionStorage.clear(); // ou localStorage.clear() si vous utilisez le stockage local
    this.router.navigate(['/login']); // Redirigez vers la page de connexion
  }
  
}
