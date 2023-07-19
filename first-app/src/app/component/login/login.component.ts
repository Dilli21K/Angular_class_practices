import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private router: Router) {}

  userName: any = '';
  password: any = '';

  userInfo: any[] = [
    { UserName: 'Dilli', Password: 'D1234' },
    { UserName: 'Karthik', Password: 'K1234' },
    { UserName: 'Suresh', Password: 'S1234' },
    { UserName: 'Arun', Password: 'A1234' },
  ];

  handleLogout() {
    alert('logged in succesfully');
    // this.router.navigate(['/']);
    this.router.navigateByUrl('/customer-dashboard');
  }

  handleVal(user: any) {
    this.userName = user.value;
  }

  handlePwd(pwd: any) {
    this.password = pwd.value;
  }

  handleLogin() {
    this.userInfo.forEach((x) => {
      if (this.userName == x.UserName && this.password == x.Password) {
        this.router.navigateByUrl('/customer-dashboard');
      }
    });
  }
}
resizeBy;
