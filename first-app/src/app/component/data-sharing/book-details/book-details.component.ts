import { Component } from '@angular/core';
import { BookDetails } from 'src/app/KeyVariable/BookDetails';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
})
export class BookDetailsComponent {
  bookForm: BookDetails = {
    bookName: '',
    year: '',
  };
  bookDetails: BookDetails[] = [
    { id: 1, bookName: 'Data Struture', year: '2022' },
    { id: 2, bookName: 'Cloud Computer', year: '2023' },
  ];

  // (5)
  getDeleteByIndex(i: number) {
    this.bookDetails.splice(i, 1);
    alert('delete succesfully');
  }

  handleAdd(e: any) {
    // e.preventDefault();
    // preventing browser reload
    console.log(this.bookForm);
    let data = {
      id: this.bookDetails.length + 1,
      ...this.bookForm,
    };
    this.bookDetails.push(data);
    console.log(this.bookDetails);
    document.getElementById('reset')?.click();
  }
  //parent -> child -> property binding
}
