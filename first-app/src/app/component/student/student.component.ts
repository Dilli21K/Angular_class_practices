import { Component } from '@angular/core';
import { Student } from 'src/app/KeyVariable/Student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent {
  studentInfo: Student[] = [];
  handleLoad() {
    this.studentInfo = [
      { id: 1, studentName: 'Sooraj', age: 24 },
      { id: 2, studentName: 'Dilli', age: 23 },
      { id: 3, studentName: 'Gayathiri', age: 24 },
      { id: 4, studentName: 'Mythili', age: 23 },
    ];
  }

  //performance better
  trackStudent(student: any) {
    return student ? student.id : undefined;
  }
}
