import { Component } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent {
  courses: any[] = [];
  courseName: string = '';
  handleCourse(event: any) {
    // destrucring let value = event.target.value;
    let { value } = event.target;
    let { which } = event;
    this.courseName = value;
    if (which == 13) {
      this.courses.push(this.courseName);
      this.courseName = '';
    }
    console.log(this.courses);
  }
}
