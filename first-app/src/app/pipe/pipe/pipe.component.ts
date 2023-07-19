import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css'],
})
export class PipeComponent {
  //transform the data
  // ->in-build pipe -> lowerCasea, upperCase, titleCase, number, dateFormat,currency
  // ->custom pipe -> own logic data transform

  company = {
    name: 'tata consultancy service',
    place: 'chennai',
    branch: '57 overall india',
    rating: 4.899,
    turnAround: 5768798,
    startedBy: new Date(23, 1, 1978),
  };
}
