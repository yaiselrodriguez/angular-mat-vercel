import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from 'src/app/student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private httpClient: HttpClient) { }

  get(): Observable<Student[]> {
    return this.httpClient.get<Student[]>('https://jason-server01-o6kabsmbv-yaiselwong-gmailcom.vercel.app/students');
  }
  create(payload: Student) {
    return this.httpClient.post<Student>('https://jason-server01-o6kabsmbv-yaiselwong-gmailcom.vercel.app/students',
      payload);
  }
  getById(id: number): Observable<Student> {
    return this.httpClient.get<Student>(`https://jason-server01-o6kabsmbv-yaiselwong-gmailcom.vercel.app/students/${id}`);
  }
  update(payload: Student): Observable<Student> {
    return this.httpClient.put<Student>(
     `https://jason-server01-o6kabsmbv-yaiselwong-gmailcom.vercel.app/students/${payload.id}`,
     payload
    );
   }
   delete(id: number) {
    return this.httpClient.delete(`https://jason-server01-o6kabsmbv-yaiselwong-gmailcom.vercel.app/students/${id}`);
   }
}
