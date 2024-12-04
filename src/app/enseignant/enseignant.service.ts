import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EnseignantService {
  private apiUrl = 'http://localhost:8000/api';
  
  constructor(private http: HttpClient) { }

  getSessionsByTeacherId(teacherId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/sessions/teacher/${teacherId}`);
  }

  getSessionCountByTeacher(teacherId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/sessions/teacher/${teacherId}/count`);
  }
}
