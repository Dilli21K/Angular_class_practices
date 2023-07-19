import { Component } from '@angular/core';

@Component({
  selector: 'app-collage',
  templateUrl: './collage.component.html',
  styleUrls: ['./collage.component.css'],
})
export class CollageComponent {
  collegeInfo: any[] = [
    { id: 1, collegeName: 'Satyabama', autonmous: 'Y' },
    { id: 2, collegeName: 'Jeppiyar', autonmous: 'Y' },
    { id: 3, collegeName: 'Pachayappa', autonmous: 'N' },
    { id: 4, collegeName: 'Adhiyamaan' },
  ];
}
