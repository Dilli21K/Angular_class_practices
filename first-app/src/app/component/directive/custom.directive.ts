import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Directive({
  selector: '[appCustom]',
})
export class CustomDirective {
  constructor(private ele: ElementRef, private sanitizer: DomSanitizer) {}
  @HostBinding('style')
  // get myStyle(): SafeStyle {
  //   return this.sanitizer.bypassSecurityTrustStyle(
  //     'background: red; display: block;'
  //   );
  // }
  get myStyle() {
    return {
      background: 'blue',
      color: 'white',
    };
  }
  @HostListener('focus') handleFocus() {
    console.log('focus', this.ele.nativeElement.value);
  }
  @HostListener('blur') handleBlur() {
    console.log('blur');
    this.ele.nativeElement.value = this.ele.nativeElement.value.toLowerCase();
    console.log('blur', this.ele.nativeElement.value);
  }
}
