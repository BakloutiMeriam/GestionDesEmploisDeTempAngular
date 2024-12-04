import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { AdminService } from '../admin.service';
@Component({
  selector: 'app-edit-session',
  templateUrl: './edit-session.component.html',
  styleUrls: ['./edit-session.component.css']
})
export class EditSessionComponent {
  session: any = {};  
  sessionId: number = 0;
  constructor(
    private route: ActivatedRoute,
    private adminService: AdminService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.sessionId = +this.route.snapshot.paramMap.get('id')!;
    this.getSessionDetails(this.sessionId);
  }

  getSessionDetails(id: number): void {
    this.adminService.getSession(id).subscribe(
      (data) => {
        this.session = data;
      },
      (error) => {
        console.error('Erreur lors du chargement des données de la session', error);
      }
    );
  }

  updateSession(): void {
    this.adminService.updateSession(this.sessionId, this.session).subscribe(
      () => {
        alert('Session mise à jour avec succès !');
        this.router.navigate(['/admin-dashboard']);
      },
      (error) => {
        console.error('Erreur lors de la mise à jour de la session', error);
      }
    );
  }

  goBack(): void {
    this.router.navigate(['/admin-dashboard']);
  }

}
