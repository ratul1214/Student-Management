import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Student} from './model/student';
import {Eventt} from "./model/event-modal";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  studentsList: Student[] =[];
  endpoint = 'http://localhost:5000/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  constructor(private _http: HttpClient, private router: Router) { }
 
  save(student: Student) {
    console.log("inside save service");
    console.log(student);
  this.studentsList.push(student);
  this._http.post<any>(this.endpoint+'createstudent', JSON.stringify(student),this.httpOptions)
          .subscribe(data => {
            console.log("POST Request is successful ", data);
           });
  this.router.navigate(['/students'])
}

addCourse(student: Student ) {
    console.log("inside save service");
    console.log(student);
  this._http.post<any>(this.endpoint+'addcourse', JSON.stringify(student),this.httpOptions)
          .subscribe(data => {
            console.log("POST Request is successful ", data);
           });
  this.router.navigate(['/students'])
}
updateStudent(student: Student ) {
    console.log("inside save service");
    console.log(student);
  this._http.post<any>(this.endpoint+'updatestudent', JSON.stringify(student),this.httpOptions)
          .subscribe(data => {
            console.log("POST Request is successful ", data);
           });
  this.router.navigate(['/students'])
}
get(): any{
  return this._http.get<any>(this.endpoint+'studentslist', this.httpOptions);
  
}

}
