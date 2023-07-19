import { Component } from '@angular/core';
import { CommonService } from './service/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'first-app';
  // angular  will create instance for service
  constructor(private commonService: CommonService) {}
  handleLogout() {
    // let service = new CommonService(); // tighly coupled, -new instance every time -
    // service.greetingMsg('Logout successfully');
    this.commonService.greetingMsg('Logout successfully');
  }
}
