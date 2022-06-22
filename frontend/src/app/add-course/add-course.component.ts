import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  student : any;
  constructor(private route: ActivatedRoute) {}

ngOnInit(): void {
   this.route.queryParams.subscribe(params => {
      this.student = history.state;
      console.log(this.student);
   });
}


}
