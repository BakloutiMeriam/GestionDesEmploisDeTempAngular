import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  statistics: any = { rooms: 0, teachers: 0, sessions: 0 };
  sessions: any[] = [];
  newSession: any = { sessiondate: '', starttime: '', endtime: '', teacher: '', room: '' };
  showAddForm = false;
  filter = {
    startDate: '',
    endDate: ''
  };

  constructor(private adminService: AdminService, private router: Router) {}

  ngOnInit(): void {
    this.fetchStatistics();
    this.fetchSessions();
  }

  fetchStatistics(): void {
    this.adminService.getStatistics().subscribe(
      (data) => {
        this.statistics = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des statistiques :', error);
      }
    );
  }

  fetchSessions(): void {
    this.adminService.getSessions().subscribe(
      (data) => {
        this.sessions = data;
      },
      (error) => {
        console.error('Erreur lors du chargement des sessions :', error);
      }
    );
  }



  deleteSession(id: number) {
    this.adminService.deleteSession(id).subscribe(response => {
      this.fetchSessions();
    });
  }

  logout(): void {
    sessionStorage.clear(); 
    this.router.navigate(['/login']); 
  }

  filterSessions(): void {
    if (!this.filter.startDate || !this.filter.endDate) {
      alert('Veuillez remplir les deux dates pour filtrer.');
      return;
    }

    this.adminService.filterSessions(this.filter.startDate, this.filter.endDate).subscribe(
      (data) => {
        this.sessions = data;
      },
      (error) => {
        console.error('Erreur lors du filtrage des sessions :', error);
      }
    );
  }
  

}
