import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BookDetails } from 'src/app/KeyVariable/BookDetails';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent {
  @Input() bookArr: BookDetails[] = [];
  //event emit(transfer)
  @Output() sendIndex = new EventEmitter<number>();
  //lifecycle
  //ngOnChanges -> whenever @Input() value get change this method wil get trigger
  ngOnChanges() {
    console.log(this.bookArr);
  }

  // (2)
  handleDelete(i: number) {
    // (3)
    this.sendIndex.emit(i);
    // child -> parent - event binding
  }
}
