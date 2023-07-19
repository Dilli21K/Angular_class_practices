import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PersonDetails } from 'src/app/KeyVariable/PersonDetails';

@Component({
  selector: 'app-data-parent',
  templateUrl: './data-parent.component.html',
  styleUrls: ['./data-parent.component.css'],
})
export class DataParentComponent {
  isContact: boolean = false;
  isWork: boolean = false;
  requestBody: any = {};

  @Input() personArr: PersonDetails[] = [];
  //event emit(transfer)
  @Output() sendIndex = new EventEmitter<number>();
  //lifecycle
  //ngOnChanges -> whenever @Input() value get change this method wil get trigger
  ngOnChanges() {
    console.log(this.personArr);
  }

  // (2)
  handleDelete(i: number) {
    // (3)
    this.sendIndex.emit(i);
    // child -> parent - event binding
  }
  // (2)
  handledelete(i: number) {
    // (3)
    this.sendIndex.emit(i);
    // child -> parent - event binding
  }

  getPersonInfo(value: any) {
    this.requestBody = {
      ...this.requestBody,
      personInfo: { ...value },
    };
    console.log(this.requestBody);
    this.isContact = true;
  }

  getContactInfo(value: any) {
    this.requestBody = {
      ...this.requestBody,
      contactInfo: { ...value },
    };
    console.log(this.requestBody);
    this.isWork = true;
  }
}
