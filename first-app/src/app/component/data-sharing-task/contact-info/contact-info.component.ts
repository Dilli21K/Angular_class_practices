import { Component, EventEmitter, Output } from '@angular/core';
import { PersonDetails } from 'src/app/KeyVariable/PersonDetails';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css'],
})
export class ContactInfoComponent {
  @Output() sendValue = new EventEmitter<any>();
  contactForm: PersonDetails = {
    mobileNo: '',
  };
  contactDetails: PersonDetails[] = [];
  handleadd(e: any) {
    // e.preventDefault();
    // preventing browser reload
    console.log(this.contactForm);
    let data = {
      ...this.contactForm,
    };
    this.contactDetails.push(data);
    console.log(this.contactDetails);
    this.sendValue.emit(this.contactForm);
    // document.getElementById('reset')?.click();
  }
  getDeleteByIndex(i: number) {
    this.contactDetails.splice(i, 1);
    alert('delete succesfully');
  }
}
