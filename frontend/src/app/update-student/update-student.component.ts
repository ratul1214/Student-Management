import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {EventService} from "../event.service";
import {StudentService} from "../student.service";

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  student: any;

  constructor(private eventService: EventService ,private route: ActivatedRoute , private studentService :StudentService) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.student = history.state;
      console.log(this.student);
    });

  }

  deleteCourse(courseP: any) {
    this.student.courses = this.student.courses.filter((course) => course.id !== courseP.id);
  }

  save(student: any) {
    this.studentService.updateStudent(student);
  }
}
