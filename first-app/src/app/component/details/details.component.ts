import { Component } from '@angular/core';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  // template: `<h1>My First Page: {{ title }}</h1>
  //   <p>{{ getContent() }}</p>`,
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  title: string = 'Display Details!!';
  isActive: boolean = true;
  imagePath: string = 'assets/icon.png';
  details: any = {
    firstName: 'Dilli',
    age: '',
    email: '',
  };
  phoneNum: string = '+123 456 7890';

  constructor(private commonService: CommonService) {}

  getContent(): string {
    return `Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ea facilisaliquam, praesentium eaque adipisci. Iste quo earum illum cumque, ipsum
      quam ducimus rerum impedit alias voluptatum? Eveniet, molestiae. Laborum?`;
  }

  handleInput(fname: any) {
    fname.style.color = 'purple';
    console.log(fname.value);
  }

  handleValue(e: any, fieldName: string) {
    console.log(e, e.target, e.target.value);
    this.details[fieldName] = e.target.value;
  }

  //event filtering
  handleKey(e: any) {
    console.log(e, e.which, e.keyCode);
    if (e.which == 13) {
      //service -> sharing the functionality(piece of code) throughout the component
      this.commonService.greetingMsg('Enter key pressed');
      // alert('Enter key pressed');
    }
  }
}

//template :'<element>'
//multiline statement -> backticks symbol ``
//{{}} -> interplation ts variable -> html bind
