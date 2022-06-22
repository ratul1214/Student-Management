import { Component, OnInit } from '@angular/core';
import {Student} from "../model/student";
import {StudentService} from "../student.service";

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  studentt:Student;
  constructor(private studentService: StudentService) {
    this.studentt = new Student();
   }

  ngOnInit() {
  }
  save(studentt:Student){
    console.log(studentt);
    this.studentService.save(this.studentt);

  }

}
