import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  @ViewChild('myForm', { static: true }) myForm: any;

  handleSubmit() {
    console.log(
      this.myForm,
      this.myForm.controls,
      this.myForm.controls['uname']
    );
    // this.myForm.reset();
  }

  ngOnInit() {
    setTimeout(() => {
      this.myForm.controls['uname'].setValue('Mr.John');
    }, 100);
  }
}
