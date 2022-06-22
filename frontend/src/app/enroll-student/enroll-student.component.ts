import { Component, OnInit } from '@angular/core';
import {EventService} from "../event.service";
import {Eventt} from "../model/event-modal";
import {ActivatedRoute} from "@angular/router";
import {StudentService} from "../student.service";

@Component({
  selector: 'app-enroll-student',
  templateUrl: './enroll-student.component.html',
  styleUrls: ['./enroll-student.component.css']
})
export class EnrollStudentComponent implements OnInit {

  eventslist: any[];
  display:Boolean = true;
  selectedCourse: any;
  student: any ;
  constructor(private eventService: EventService ,private route: ActivatedRoute , private studentService :StudentService) {
    this.eventslist = []
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.student = history.state;
      console.log(this.student);
    });
    this.eventService.get().subscribe(data =>{
      for(let key in data) {
        var evt = new Eventt();
        evt.date = data[key].date;
        evt.description = data[key].description;
        evt.title = data[key].title;
        evt.id = data[key].id;
        this.eventslist.push(evt);
      }
      console.log(this.eventslist);
   });
    if(this.eventslist.length == 0){
      this.display = false;
    }else{
      this.display = true;
    }
  }

  addCourse() {
    this.student.courses.push(this.eventslist.find(evt => evt.id === this.selectedCourse));
    console.log(this.student.courses);
  }

  selectOption(value: any) {
    this.selectedCourse = value;
  }

  enroll() {
    this.studentService.addCourse(this.student);
  }
}
