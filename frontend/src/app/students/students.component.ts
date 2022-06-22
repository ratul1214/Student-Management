import { Component, OnInit } from '@angular/core';

import {StudentService} from '../student.service';
import {Student} from '../model/student';
import {Router} from "@angular/router";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  studentslist: Object[];
  display: Boolean = true;
  constructor(private studentService: StudentService, private router: Router) {
    this.studentslist = [];
  }

  ngOnInit() {
    this.studentService.get().subscribe(data => {
      for (const key in data) {
        const evt = new Student();
        console.log(data[key]);

        this.studentslist.push(data[key]);
      }
   });
    if (this.studentslist.length == 0) {
      this.display = false;
    } else {
      this.display = true;
    }
  }

  showDetails(student)  {
    this.router.navigateByUrl('/add-course', { state: student });
}

updateStudent(student)  {
    this.router.navigateByUrl('/update-student', { state: student });
}
enrollStudent(student)  {
    this.router.navigateByUrl('/enroll-student', { state: student });
}

}
