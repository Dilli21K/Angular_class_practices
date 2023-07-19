import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css'],
})
export class LikeComponent {
  count: number = 200;

  isSelected: boolean = false;
  likeCount: number = 200;

  changeColor(icon: any) {
    if (icon.style.color == 'red') {
      icon.style.color = 'grey';
      this.count--;
    } else {
      icon.style.color = 'red';
      this.count++;
    }
  }

  handleLike() {
    this.isSelected = !this.isSelected;
    this.likeCount = this.isSelected ? this.likeCount + 1 : this.likeCount - 1;
  }
}
