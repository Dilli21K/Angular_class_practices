import { Injectable } from '@angular/core';
import { TimerComponentComponent } from '../component/timer-component/timer-component.component';

@Injectable()
//   {
//   providedIn: 'root',
// }
export class TimerServiceService {
  constructor() {}
  sec: any = '0' + 0;
  min: any = '0' + 0;

  startTimer: any;
  running = false;

  start(num: any): void {
    console.log(num);
    console.log(this.min);
    if (!this.running) {
      this.running = true;
      this.startTimer = setInterval(() => {
        this.sec++;
        this.sec = this.sec < 10 ? '0' + this.sec : this.sec;
        if (num == this.min) {
          clearInterval(this.startTimer);
          this.running = false;
          this.sec = '0' + 0;
        }
        if (this.sec == 60) {
          this.min++;
          this.min = this.min < 10 ? '0' + this.min : this.min;
          this.sec = '0' + 0;
        }
      }, 1000);
    }
  }
  pause(): void {
    clearInterval(this.startTimer);
    this.running = false;
    console.log(this.min);
  }
  reset(): void {
    clearInterval(this.startTimer);
    this.running = false;
    this.min = this.sec = '0' + 0;
  }
}
