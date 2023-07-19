import { Component, EventEmitter, Output } from '@angular/core';
import { PersonDetails } from 'src/app/KeyVariable/PersonDetails';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css'],
})
export class PersonalInfoComponent {
  @Output() sendValue = new EventEmitter<any>();
  personForm: PersonDetails = {
    firstName: '',
    lastName: '',
    gender: '',
  };

  personDetails: PersonDetails[] = [
    { id: 1, firstName: 'Arun', lastName: 'Arumugam', gender: 'male' },
  ];

  handleSubmit(e: any) {
    // e.preventDefault();
    // preventing browser reload
    console.log(this.personForm);
    let data = {
      id: this.personDetails.length + 1,
      ...this.personForm,
    };
    this.personDetails.push(data);
    console.log(this.personDetails);
    this.sendValue.emit(this.personForm);
    // document.getElementById('reset')?.click();
  }

  getDeleteByIndex(i: number) {
    this.personDetails.splice(i, 1);
    alert('delete succesfully');
  }
}
