import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Student } from './student';
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient: HttpClient) { }
  baseUrl: string = 'http://localhost:3000/students';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getStudents() : Observable<Student[]> {

    return this.httpClient.get<Student[]>(this.baseUrl);
  }

  getStudentById(id: number): Observable<Student> {
    console.log(id);
    return this.httpClient.get<Student>(this.baseUrl+'/'+ id);
  }

  createStudent(student: Student): Observable<Student> {
    console.log('create');
    return this.httpClient.post<Student>(this.baseUrl, student);
  }

  updateStudent(student: Student): Observable<Student> {
    return this.httpClient.put<Student>(this.baseUrl+'/'+ student.id, student);
  }

  deleteStudent(id: number): Observable<Student> {
    return this.httpClient.delete<Student>(this.baseUrl+'/'+ id);
  }
}
