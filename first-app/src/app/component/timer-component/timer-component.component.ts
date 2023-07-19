import { Component } from '@angular/core';
import { TimerServiceService } from 'src/app/service/timer-service.service';

@Component({
  selector: 'app-timer-component',
  templateUrl: './timer-component.component.html',
  styleUrls: ['./timer-component.component.css'],
})
export class TimerComponentComponent {
  
  title = 'task-app';
  val:any = 0;
  constructor(public timerService: TimerServiceService) {}
  handleVal(e: any, numb: any) {
    if(numb.value < 10)
      this.val = '0' + numb.value;
    else  
      this.val = numb.value;
    console.log(this.val);
    //console.log(numb);
  }

  handleStart() {
    this.timerService.start(this.val);
  }
  handleReset() {
    this.timerService.reset();
  }
  handlePause() {
    this.timerService.pause();
  }
}
