import { Component, OnInit } from '@angular/core';
import {StudentService} from "../student.service";
import {Router} from "@angular/router";
import {Student} from "../model/student";

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

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
