import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
@Component({
  selector: 'app-add-session',
  templateUrl: './add-session.component.html',
  styleUrls: ['./add-session.component.css']
})
export class AddSessionComponent {
  classes: any[] = [];

  newSession = {
    sessiondate: '',
    startime: '',
    endtime: '',
    teacherId: null,
    roomId: null,
    classId: null
  };
  teachers: any[] = [];
  rooms: any[] = [];
  constructor(
    private adminService: AdminService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.adminService.getTeachers().subscribe((data: { id: number, name: string }[]) => {
      this.teachers = data;
    });

    this.adminService.getRooms().subscribe((data: { id: number, name: string }[]) => {
      this.rooms = data;
    });

    this.adminService.getClasses().subscribe((data: { id: number, classname: string }[]) => {
      this.classes = data;
    });
  }

  addSession(): void {
    this.adminService.addSession(this.newSession).subscribe(response => {
      this.router.navigate(['/admin-dashboard']);
    }, error => {
      console.error('Erreur lors de l\'ajout de la session', error);
    });
  }
  goBack(): void {
    this.router.navigate(['/admin-dashboard']);
  }
}
