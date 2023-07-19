import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent {
  title: string = 'Click';
  showBody1 = false;
  showBody2 = false;
  showBody3 = false;
  isActive1 = false;
  isActive2 = false;
  isActive3 = false;
  toggle1() {
    
      this.showBody1 = !this.showBody1;
      this.isActive1 = !this.isActive1;
     
  }
  toggle2(){
    
      this.showBody2 = !this.showBody2;
      this.isActive2 = !this.isActive2;
    
  }
  toggle3(){
   
      this.showBody3 = !this.showBody3;
      this.isActive3 = !this.isActive3;
    
  }
}
