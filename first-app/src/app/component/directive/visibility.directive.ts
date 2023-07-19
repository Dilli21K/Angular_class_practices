import { Directive, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[appVisibility]',
})
export class VisibilityDirective {
  constructor(private router: Router) {}
  @HostListener('document:visibilitychange', ['$event'])
  visibilitychange() {
    if (document.hidden) {
      // window.alert('session timeout');
      // this.router.navigateByUrl('/');
    } else {
      console.log('Page is visible');
    }
  }
}
