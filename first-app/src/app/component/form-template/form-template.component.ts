import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.css'],
})
export class FormTemplateComponent {
  userDetails: FormGroup;

  constructor() {
    this.userDetails = new FormGroup({
      uname: new FormControl('Surender', Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      readTerms: new FormControl(false),
    });
  }
  onSubmit() {
    console.log(this.userDetails.value);
    // this.userDetails.reset();
  }

  accept() {
    // this.userDetails.get('readTerms')?.setValue(true);
    this.userDetails.patchValue({
      readTerms: true,
      uname: 'Dilli',
    });
  }
}
