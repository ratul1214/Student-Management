import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { ListComponent } from './omponents/list/list.component';
//import { CreateComponent } from './omponents/create/create.component';
//import { EditComponent } from './omponents/edit/edit.component';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CreateTaskService } from './omponents/Services/create-task.service';
import { HomeComponent } from './home/home.component';
import { StudentsComponent } from './students/students.component';
import { EventsComponent } from './events/events.component';
import { CreateComponent } from './create/create.component';
import { EventService} from './event.service';
import { CreateStudentComponent } from './create-student/create-student.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { EnrollStudentComponent } from './enroll-student/enroll-student.component';
import { SearchPageComponent } from './search-page/search-page.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'events', component: EventsComponent },
  { path: 'create', component: CreateComponent },
    { path: 'create-student', component: CreateStudentComponent },
    { path: 'add-course', component: AddCourseComponent },
    { path: 'update-student', component: UpdateStudentComponent },
    { path: 'enroll-student', component: EnrollStudentComponent },
    { path: 'search-page', component: SearchPageComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    HomeComponent,
    StudentsComponent,
    EventsComponent,
    CreateComponent,
    CreateStudentComponent,
    AddCourseComponent,
    UpdateStudentComponent,
    EnrollStudentComponent,
    SearchPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
