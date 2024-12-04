import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiUrl = 'http://localhost:8000/api'; 
  constructor(private http: HttpClient) { }
  
  
  getStatistics(): Observable<any> {
    return this.http.get(`${this.apiUrl}/admin/statistics`);
  }

  
  getSessions(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/admin/listSessions`);
  }

  addSession(session: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/admin/addSession`, session);
  }

  getSession(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/admin/session/${id}`);
  }

  updateSession(id: number, session: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/admin/updateSession/${id}`, session, {
    });
  }
  
  deleteSession(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/admin/deleteSession/${id}`);
  }

  filterSessions(startDate: string, endDate: string): Observable<any[]> {
    const params = new HttpParams()
      .set('startDate', startDate)
      .set('endDate', endDate);

    return this.http.get<any[]>(`${this.apiUrl}/admin/filterSessions`, { params });
  }
  

  
  getAllTeachers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/listteachers`);
  }
  deleteTeacher(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/admin/deleteTeacher/${id}`);
  }
  addTeacher(teacher: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/admin/addTeacher`, teacher);
  }
  
  updateTeacher(id: number, teacher: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/admin/updateTeacher/${id}`, teacher);
  } 

  getTeacher(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/admin/teacher/${id}`);
  }





















  getTeachers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/admin/teachers`);
  }

  getRooms(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/admin/rooms`);
  }

  getClasses(): Observable<{ id: number, classname: string }[]> {
    return this.http.get<{ id: number, classname: string }[]>('/api/classes');
}

}
